
'use server';

import { z } from 'zod';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string(),
  otherAmount: z.string().optional(),
  fullName: z.string(),
  email: z.string().email(),
  mobile: z.string(),
  dob: z.string().optional(),
  pan: z.string().optional(),
  aadhar: z.string().optional(),
  passport: z.string().optional(),
  country: z.string(),
  state: z.string().optional(),
  city: z.string(),
  address: z.string(),
  pincode: z.string(),
  agree: z.boolean(),
  cause: z.string(),
  initiative: z.string().optional(),
});

export async function addDonation(donationData: z.infer<typeof donationSchema>) {
  try {
    const validatedData = donationSchema.parse(donationData);
    
    const donationPayload: any = {
      ...validatedData,
      createdAt: FieldValue.serverTimestamp(),
    };

    const docRef = await adminDb.collection('donations').add(donationPayload);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding donation to Firestore from server action: ", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed on the server." };
    }
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
