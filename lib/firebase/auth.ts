
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
      // WORKAROUND: If adminDb is not initialized, we cannot check roles.
      // Default to 'User' role for now to allow the app to function.
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
        await auth.signOut();
        throw new Error('User role not found in database.');
      }
    }
    return { user: null, role: null };
  } catch (error: any) {
    if (error.code) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          throw new Error('Invalid email or password.');
        default:
          throw new Error('An unexpected error occurred during login.');
      }
    }
    throw error;
  }
}
