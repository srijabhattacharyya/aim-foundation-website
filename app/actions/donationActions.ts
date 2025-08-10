
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function addDonation(data: any) {
  if (!adminDb.collection) {
    console.error("Firebase Admin SDK is not initialized. Please ensure the service account key is set in your environment variables.");
    return { success: false, error: "Server configuration error." };
  }
    
  try {
    const { recaptcha, ...donationData } = data;
    const docRef = await adminDb.collection("donations").add({
      ...donationData,
      createdAt: FieldValue.serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    // Return a generic error to the client for security
    return { success: false, error: "Could not record donation. Please try again." };
  }
}
