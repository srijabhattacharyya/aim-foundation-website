
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { format } from 'date-fns';

const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string(),
  otherAmount: z.string().optional(),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
  dob: z.date().optional(),
  pan: z.string().optional(),
  aadhar: z.string().optional(),
  passport: z.string().optional(),
  country: z.string().nonempty('Country is required'),
  state: z.string().optional(),
  city: z.string().nonempty('City is required'),
  address: z.string().nonempty('Address is required'),
  pincode: z.string().min(6, 'Pincode must be 6 digits'),
  cause: z.string(),
  initiative: z.string().optional(),
  agree: z.literal('on', { errorMap: () => ({ message: "You must agree to the terms." }) })
}).superRefine((data, ctx) => {
    if (data.nationality === 'Indian') {
      if (!data.pan && !data.aadhar) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "PAN or Aadhar is required for Indian nationals.",
          path: ["pan"],
        });
      }
      if (data.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.pan)) {
        ctx.addIssue({ path: ["pan"], message: "Invalid PAN format." });
      }
      if (data.aadhar && !/^[0-9]{12}$/.test(data.aadhar)) {
        ctx.addIssue({ path: ["aadhar"], message: "Aadhar must be 12 digits." });
      }
      if (!data.state) {
        ctx.addIssue({ path: ["state"], message: "State is required for Indian nationals." });
      }
    }
    if (data.nationality === 'Non-Indian' && !data.passport) {
        ctx.addIssue({ path: ["passport"], message: "Passport is required for Non-Indian nationals." });
    }
});


export async function addDonation(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  // Manually handle date because FormData sends it as a string
  let dobDate: Date | undefined = undefined;
  if (data.dob && typeof data.dob === 'string') {
    const parsedDate = new Date(data.dob);
    if (!isNaN(parsedDate.getTime())) {
      dobDate = parsedDate;
    }
  }

  const validatedFields = donationSchema.safeParse({
    ...data,
    dob: dobDate,
  });

  if (!validatedFields.success) {
    return {
        success: false,
        message: 'Validation failed.',
        errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const donationData = {
      ...validatedFields.data,
      dob: validatedFields.data.dob ? format(validatedFields.data.dob, 'yyyy-MM-dd') : null,
      createdAt: serverTimestamp()
    };
    
    // remove agree and recaptcha before saving
    const { agree, ...restOfData } = donationData;
    
    await addDoc(collection(db, "donations"), restOfData);

    return { success: true, message: "Donation submitted successfully!" };
  } catch (error) {
    console.error("Error adding donation: ", error);
    return { success: false, message: "An unexpected server error occurred." };
  }
}
