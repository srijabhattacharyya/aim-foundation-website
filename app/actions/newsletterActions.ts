
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function addSubscriber(email: string) {
  if (!email) {
    return { success: false, error: 'Email is required.' };
  }

  if (!adminDb || !adminDb.collection) {
    console.error("Firebase Admin SDK is not initialized correctly for addSubscriber.");
    return { success: false, error: "Server configuration error." };
  }
  
  try {
    const subscriberRef = adminDb.collection('subscribers').doc(email);
    const doc = await subscriberRef.get();

    if (doc.exists) {
        return { success: false, error: "This email is already subscribed." };
    }

    await subscriberRef.set({
      email: email,
      createdAt: FieldValue.serverTimestamp(),
    });

    return { success: true };
  } catch (e: any) {
    console.error("Error adding subscriber to Firestore: ", e.message);
    let errorMessage = "Could not subscribe. Please try again.";
    if (e.code === 'permission-denied') {
        errorMessage = "Permission denied. Please check server permissions.";
    }
    return { success: false, error: errorMessage };
  }
}
