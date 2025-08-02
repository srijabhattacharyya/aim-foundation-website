
'use client';

import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'; // Import client-side db

export async function getUserRole(uid: string): Promise<string | null> {
  if (!uid) {
    console.error("No UID provided to getUserRole.");
    return null;
  }

  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data()?.role || null;
    } else {
      console.warn(`User document not found in 'users' collection for UID: ${uid}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user role from Firestore:", error);
    // This could be due to permissions in Firestore rules.
    // Ensure that authenticated users can read their own document in the 'users' collection.
    return null;
  }
}
