
'use server';

import { z } from 'zod';
import { donationSchema } from '@/components/sections/donation-forms/schemas';
import { connectToDatabase } from '@/lib/mongodb';

// ------------------------------
// Add Donation (Form Submission)
// ------------------------------
export async function addDonation(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const refinedData = {
    ...data, // Pass all form data through
    agree: (formData.get('agree') as string | null) === 'on',
    amount: (() => {
      const otherAmount = formData.get('otherAmount') as string | null;
      const amount = formData.get('amount') as string | null;
      if (otherAmount && otherAmount.trim() !== '') {
        return otherAmount;
      }
      return amount;
    })(),
  };


  const validatedFields = donationSchema.safeParse(refinedData);

  if (!validatedFields.success) {
    console.error('Validation Errors:', validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      message: 'Validation failed. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  const finalAmount =
    validatedFields.data.otherAmount && validatedFields.data.otherAmount.trim() !== ''
      ? validatedFields.data.otherAmount
      : validatedFields.data.amount;

  const dataToSave = {
    ...validatedFields.data,
    amount: finalAmount,
    createdAt: new Date(),
  };

  delete (dataToSave as any).agree;
  delete (dataToSave as any).otherAmount;

  try {
    const client = await connectToDatabase();
    const db = client.db();
    await db.collection('donations').insertOne(dataToSave);
    return {
      success: true,
      message: 'Donation recorded successfully.',
      data: dataToSave,
      errors: {},
    };
  } catch (e: any) {
    console.error('Error recording donation to MongoDB:', e);
    // Return the specific error message from the catch block
    return {
      success: false,
      message: `Database Error: ${e.message || 'Could not record donation.'}`,
      errors: {},
      data: null,
    };
  }
}

// ------------------------------
// Fetch Donations (Admin Panel)
// ------------------------------
export interface Donation {
  id: string;
  fullName: string;
  email: string;
  amount: number;
  cause: string;
  createdAt: string;
}

export async function fetchDonations(): Promise<Donation[]> {
  const client = await connectToDatabase();
  const db = client.db();
  const snapshot = await db
    .collection('donations')
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return snapshot.map((doc: any) => {
    return {
      id: doc._id.toString(),
      fullName: doc.fullName || 'Anonymous',
      email: doc.email || 'N/A',
      amount: Number(doc.amount) || 0,
      cause: doc.cause || 'General',
      createdAt: doc.createdAt
        ? new Date(doc.createdAt).toISOString()
        : new Date().toISOString(),
    };
  });
}
