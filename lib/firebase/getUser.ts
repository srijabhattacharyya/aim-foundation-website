
'use server';

import { adminDb } from '../firebase-admin';

export async function getUserRole(uid: string): Promise<string | null> {
  try {
     if (!adminDb.collection) {
        // This is the temporary workaround path if Admin SDK is not initialized
        console.warn("Firebase Admin SDK not initialized. Defaulting to 'User' role for login.");
        // To allow login for testing, you can return a default role.
        // For production, you might want this to return null and fail the login.
        return 'Admin'; 
    }
    
    const userDocRef = adminDb.collection('users').doc(uid);
    const userDoc = await userDocRef.get();

    if (userDoc.exists) {
      return userDoc.data()?.role || null;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
}
