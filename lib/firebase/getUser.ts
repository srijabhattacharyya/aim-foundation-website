
'use server';

import { adminDb } from '../firebase-admin';

export async function getUserRole(uid: string): Promise<string | null> {
  try {
     if (!adminDb || typeof adminDb.collection !== 'function') {
        console.error("Firebase Admin SDK not initialized. Cannot fetch user role. Please check your FIREBASE_SERVICE_ACCOUNT_KEY environment variable.");
        // This will prevent login if the admin SDK is not working.
        return null;
    }
    
    const userDocRef = adminDb.collection('users').doc(uid);
    const userDoc = await userDocRef.get();

    if (userDoc.exists) {
      return userDoc.data()?.role || null;
    }
    
    console.warn(`User document not found for UID: ${uid}`);
    return null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
}
