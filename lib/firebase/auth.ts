
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
    
    if (user) {
      // This is a temporary workaround.
      // We will default to the 'User' role if adminDb is not initialized.
      if (!adminDb.collection) {
        console.warn("Firebase Admin SDK not initialized. Defaulting to 'User' role.");
        return { user, role: 'User' };
      }

      const userDocRef = doc(adminDb, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const role = userDoc.data().role;
        return { user, role };
      } else {
        // If the user is authenticated but has no role in Firestore, sign them out.
        await auth.signOut();
        throw new Error('User role not found in the database. Please contact an administrator.');
      }
    }
    // This should not be reached, but as a fallback:
    return { user: null, role: null };
  } catch (error: any) {
    if (error.code) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          throw new Error('Invalid email or password.');
        default:
          // Use the original error message for other auth errors
          throw new Error(error.message || 'An unexpected error occurred during login. Please try again.');
      }
    }
    // Re-throw any other errors (like the Firestore role error from above)
    throw error;
  }
}
