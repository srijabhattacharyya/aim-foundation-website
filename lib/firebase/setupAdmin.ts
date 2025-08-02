
'use server';

import { adminAuth, adminDb } from '../firebase-admin';

export async function setupAdminUser(email: string): Promise<{ success: boolean; message: string }> {
  if (!adminAuth.getUserByEmail) {
    const errorMessage = 'Firebase Admin SDK is not initialized. Cannot set up admin user. Please ensure the FIREBASE_SERVICE_ACCOUNT_KEY is set correctly in your environment variables.';
    console.error(errorMessage);
    return { success: false, message: errorMessage };
  }

  try {
    console.log(`Attempting to find user with email: ${email}`);
    const userRecord = await adminAuth.getUserByEmail(email);
    const uid = userRecord.uid;
    console.log(`User found with UID: ${uid}. Setting 'Admin' role in Firestore.`);

    await adminDb.collection('users').doc(uid).set({
      email: email,
      role: 'Admin',
    }, { merge: true });

    console.log(`Successfully set 'Admin' role for ${email} in Firestore.`);
    return { success: true, message: `Admin role successfully assigned to ${email}. You can now log in.` };
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      console.error(`Error: User with email ${email} not found in Firebase Authentication.`);
      return { success: false, message: `User with email ${email} does not exist in Firebase Authentication. Please create the user first.` };
    }
    console.error('Error setting up admin user:', error);
    return { success: false, message: `An error occurred: ${error.message}` };
  }
}
