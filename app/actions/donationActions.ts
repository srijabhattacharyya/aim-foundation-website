
'use server';

import { z } from 'zod';
import { getAdminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { format } from 'date-fns';

const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string(),
  otherAmount: z.string().optional(),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
  dob: z.string().optional(),
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
         ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "PAN or Aadhar is required for Indian nationals.",
          path: ["aadhar"],
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

  let dobString: string | undefined = undefined;
  if (data.dob && typeof data.dob === 'string') {
    try {
        const parsedDate = new Date(data.dob);
        if (!isNaN(parsedDate.getTime())) {
            dobString = format(parsedDate, 'yyyy-MM-dd');
        }
    } catch(e) {
        // Ignore invalid date format, Zod will catch it
    }
  }

  const validatedFields = donationSchema.safeParse({
    ...data,
    dob: dobString,
  });

  if (!validatedFields.success) {
    return {
        success: false,
        message: 'Validation failed.',
        errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const adminDb = getAdminDb();
    const { agree, ...donationData } = validatedFields.data;

    const finalData = {
        ...donationData,
        createdAt: FieldValue.serverTimestamp()
    };
    
    await adminDb.collection("donations").add(finalData);

    return { success: true, message: "Donation submitted successfully!" };
  } catch (error) {
    console.error("Error adding donation: ", error);
    return { success: false, message: "An unexpected server error occurred." };
  }
}
