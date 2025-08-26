
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { format } from 'date-fns';

const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string(),
  otherAmount: z.string().optional(),
  fullName: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().min(10),
  dob: z.date().optional(),
  pan: z.string().optional(),
  aadhar: z.string().optional(),
  passport: z.string().optional(),
  country: z.string(),
  state: z.string().optional(),
  city: z.string(),
  address: z.string(),
  pincode: z.string().min(6),
  cause: z.string(),
  initiative: z.string().optional(),
});

export async function addDonation(data: unknown) {
  try {
    const validatedData = donationSchema.parse(data);
    
    const donationData = {
      ...validatedData,
      dob: validatedData.dob ? format(validatedData.dob, 'yyyy-MM-dd') : null,
      createdAt: serverTimestamp()
    };
    
    await addDoc(collection(db, "donations"), donationData);

    return { success: true };
  } catch (error) {
    console.error("Error adding donation: ", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed.", details: error.errors };
    }
    return { success: false, error: "An unexpected server error occurred." };
  }
}
