'use server';

import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

export async function signInUser(email: string, password: string): Promise<{user: User | null}> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error: any) {
    // Firebase Auth errors have a `code` property.
    // Let the client handle the error message based on the code.
    console.error('Firebase SignIn Error:', error.code);
    throw new Error(error.code);
  }
}
