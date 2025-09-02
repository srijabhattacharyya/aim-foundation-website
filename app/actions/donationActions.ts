
'use server';

import { z } from 'zod';
import { donationSchema } from '@/components/sections/donation-forms/schemas';
import { getAdminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function addDonation(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const refinedData = {
    ...data,
    agree: data.get('agree') === 'on',
    amount: data.get('otherAmount') && (data.get('otherAmount') as string).trim() !== '' ? data.get('otherAmount') : data.get('amount'),
  };

  const validatedFields = donationSchema.safeParse({
    ...refinedData,
    agree: refinedData.agree,
  });

  if (!validatedFields.success) {
    console.error("Validation Errors:", validatedFields.error.flatten().fieldErrors);
    return {
        success: false,
        message: 'Validation failed. Please check the fields.',
        errors: validatedFields.error.flatten().fieldErrors,
        data: null,
    };
  }
  
  const finalAmount = validatedFields.data.otherAmount && validatedFields.data.otherAmount.trim() !== '' 
    ? validatedFields.data.otherAmount 
    : validatedFields.data.amount;
  
  const dataToSave = {
    ...validatedFields.data,
    amount: finalAmount,
    createdAt: FieldValue.serverTimestamp()
  };

  delete (dataToSave as any).agree;
  delete (dataToSave as any).otherAmount;

  try {
    const adminDb = getAdminDb();
    await adminDb.collection('donations').add(dataToSave);
    return { success: true, message: "Donation recorded successfully.", data: dataToSave, errors: {} };
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
