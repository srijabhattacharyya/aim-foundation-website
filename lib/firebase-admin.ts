
import admin from 'firebase-admin';

// IMPORTANT: The Firebase Admin SDK initialization requires a service account key.
// This key is a secret credential that allows server-side code to have full
// administrative access to your Firebase project.
//
// TO-DO: To enable server-side features like the one-time admin setup, you must:
// 1. Obtain your service account key JSON file from the Firebase console.
// 2. Set its contents as the FIREBASE_SERVICE_ACCOUNT_KEY environment variable.

if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  // This error is expected if the key is not set.
  console.error('CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. Admin SDK features (like the one-time setup) are disabled.');
} else {
  if (!admin.apps.length) {
    try {
      const serviceAccount = JSON.parse(
        process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
      );
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    } catch (e) {
      console.error('CRITICAL: Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Admin SDK will not be initialized.', e);
    }
  }
}

// We export the initialized services or a placeholder that will cause a controlled failure.
// This prevents the entire application from crashing on import.
export const adminAuth = admin.apps.length ? admin.auth() : ({} as admin.auth.Auth);
export const adminDb = admin.apps.length ? admin.firestore() : ({} as admin.firestore.Firestore);
