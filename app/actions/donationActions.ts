
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export interface Donation {
    id: string;
    createdAt: string;
    fullName: string;
    email: string;
    amount: string;
    otherAmount?: string;
    cause: string;
}

export async function addDonation(data: any) {
  console.log("addDonation server action started.");

  if (!adminDb || !adminDb.collection) {
    console.error("Firebase Admin SDK is not initialized correctly. adminDb or adminDb.collection is not available.");
    return { success: false, error: "Server configuration error." };
  }
  console.log("Firebase Admin SDK seems to be initialized for addDonation.");
    
  try {
    const { recaptcha, ...donationData } = data;
    console.log("Attempting to add document to 'donations' collection with data:", donationData);
    
    const docRef = await adminDb.collection("donations").add({
      ...donationData,
      createdAt: FieldValue.serverTimestamp(),
    });

    console.log("Document successfully written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e: any) {
    console.error("Error adding document to Firestore: ", e.message);
    // Return a generic error to the client for security
    return { success: false, error: "Could not record donation. Please try again." };
  }
}
