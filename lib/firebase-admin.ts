
import admin from 'firebase-admin';

// IMPORTANT: The Firebase Admin SDK initialization is temporarily commented out.
// You are currently blocked by a Google Cloud organization policy that prevents
// the creation of service account keys.
//
// TO-DO: Once you have resolved the permission issue and obtained your
// service account key JSON, you must:
// 1. Set the FIREBASE_SERVICE_ACCOUNT_KEY environment variable.
// 2. Uncomment the code block below.

/*
if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  // This error is expected if the key is not set.
  // console.warn('FIREBASE_SERVICE_ACCOUNT_KEY is not set. Admin SDK features will be disabled.');
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
      console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY:', e);
      // We don't throw an error here anymore to allow the app to run without full admin features.
    }
  }
}
*/

// We export null objects to prevent the app from crashing where these are imported.
// The code that uses these will need to handle the case where they are not available.
export const adminAuth = admin.apps.length ? admin.auth() : ({} as admin.auth.Auth);
export const adminDb = admin.apps.length ? admin.firestore() : ({} as admin.firestore.Firestore);
