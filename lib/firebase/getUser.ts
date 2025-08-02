'use server';

import { adminDb } from '../firebase-admin';
import { doc, getDoc } from 'firebase/firestore';

export async function getUserRole(uid: string): Promise<string | null> {
  try {
     if (!adminDb.collection) {
        console.warn("Firebase Admin SDK not initialized. Defaulting to 'User' role for login.");
        return 'User';
    }
    
    const userDocRef = doc(adminDb, 'users', uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data().role;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
}
