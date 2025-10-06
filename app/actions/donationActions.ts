'use server';

import { z } from 'zod';
import { donationSchema } from '@/components/sections/donation-forms/schemas';
import { getAdminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

// ------------------------------
// Add Donation (Form Submission)
// ------------------------------
export async function addDonation(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const refinedData = {
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

  const validatedFields = donationSchema.safeParse({
    ...refinedData,
    agree: refinedData.agree,
  });

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
    createdAt: FieldValue.serverTimestamp(),
  };

  delete (dataToSave as any).agree;
  delete (dataToSave as any).otherAmount;

  try {
    const adminDb = getAdminDb();
    await adminDb.collection('donations').add(dataToSave);
    return {
      success: true,
      message: 'Donation recorded successfully.',
      data: dataToSave,
      errors: {},
    };
  } catch (e) {
    console.error('Error recording donation:', e);
    return {
      success: false,
      message: 'Could not record donation. Please try again later.',
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
  const adminDb = getAdminDb();
  const snapshot = await adminDb
    .collection('donations')
    .orderBy('createdAt', 'desc')
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      fullName: data.fullName || 'Anonymous',
      email: data.email || 'N/A',
      amount: Number(data.amount) || 0,
      cause: data.cause || 'General',
      createdAt: data.createdAt
        ? data.createdAt.toDate().toISOString()
        : new Date().toISOString(),
    };
  });
}
