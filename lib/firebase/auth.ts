
'use server';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase';
import { adminDb } from '../firebase-admin';

const auth = getAuth(app);

export async function signInUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user) {
      // This case should ideally not be reached if signInWithEmailAndPassword succeeds
      throw new Error('Authentication failed, user not found.');
    }

    // Check for user role in Firestore
    if (!adminDb.collection) {
        console.warn("Firebase Admin SDK not initialized. Defaulting to 'User' role for login.");
        return { user, role: 'User' };
    }
    
    const userDocRef = doc(adminDb, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const role = userDoc.data().role;
      return { user, role };
    } else {
      // If user is auth'd but has no role document, deny access.
      await auth.signOut();
      throw new Error('Your account does not have a role assigned. Please contact an administrator.');
    }
  } catch (error: any) {
    // Firebase Auth errors have a `code` property.
    // We'll map common ones to a user-friendly message.
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        throw new Error('Invalid email or password.');
      default:
        // For other errors (network, unassigned role, etc.), use the specific message or a generic one.
        console.error('Login Error:', error);
        throw new Error(error.message || 'An unexpected error occurred during login.');
    }
  }
}
