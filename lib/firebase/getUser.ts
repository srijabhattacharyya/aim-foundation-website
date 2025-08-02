
'use server';

import { adminDb } from '../firebase-admin';

export async function getUserRole(uid: string): Promise<string | null> {
  if (!adminDb || typeof adminDb.collection !== 'function') {
    const errorMessage = "Firebase Admin SDK not initialized. Cannot fetch user role. Please check your FIREBASE_SERVICE_ACCOUNT_KEY environment variable.";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  
  try {
    const userDocRef = adminDb.collection('users').doc(uid);
    const userDoc = await userDocRef.get();

    if (userDoc.exists) {
      return userDoc.data()?.role || null;
    }
    
    console.warn(`User document not found in 'users' collection for UID: ${uid}`);
    return null;
  } catch (error) {
    console.error("Error fetching user role from Firestore:", error);
    throw new Error("Failed to fetch user role from database.");
  }
}
