'use server';

import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

export async function signInUser(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    // Let the original Firebase error propagate
    // The client-side will catch this and display an appropriate message.
    console.error('Firebase SignIn Error:', error.code);
    throw error;
  }
}
