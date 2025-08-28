
'use server';

import { z } from 'zod';
import { getAdminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { format } from 'date-fns';
import { donationSchema } from '@/components/sections/donation-forms/schemas';

export async function addDonation(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  // The 'agree' checkbox sends 'on' when checked, or is absent if not.
  // Zod expects a literal 'on' or will fail validation.
  const refinedData = {
    ...data,
    agree: data.get('agree') === 'on' ? 'on' : undefined,
  };

  const validatedFields = donationSchema.safeParse(refinedData);

  if (!validatedFields.success) {
    console.error("Validation Errors:", validatedFields.error.flatten().fieldErrors);
    return {
        success: false,
        message: 'Validation failed. Please check the fields.',
        errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const adminDb = getAdminDb();
    const { agree, ...donationData } = validatedFields.data;

    const finalAmount = donationData.otherAmount && donationData.otherAmount.trim() !== '' ? donationData.otherAmount : donationData.amount;
    
    // Convert dob string to Firestore Timestamp if it exists
    let dobTimestamp: FieldValue | null = null;
    if (donationData.dob && donationData.dob.length > 0) {
      const parsedDate = new Date(donationData.dob);
      if (!isNaN(parsedDate.getTime())) {
        dobTimestamp = FieldValue.serverTimestamp(); // Firestore handles conversion
      }
    }

    const finalData = {
        ...donationData,
        amount: finalAmount,
        dob: dobTimestamp, // Send Timestamp or null
        createdAt: FieldValue.serverTimestamp()
    };
    
    await adminDb.collection("donations").add(finalData);

    return { success: true, message: "Donation submitted successfully!" };
  } catch (error) {
    console.error("Error adding donation to Firestore: ", error);
    return { success: false, message: "An unexpected server error occurred." };
  }
}
