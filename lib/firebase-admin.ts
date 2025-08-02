
import admin from 'firebase-admin';

// IMPORTANT: The Firebase Admin SDK initialization is temporarily commented out.
// You are currently blocked by a Google Cloud organization policy that prevents
// the creation of service account keys.
//
// TO-DO: Once you have resolved the permission issue and obtained your
// service account key JSON, you must:
// 1. Set the FIREBASE_SERVICE_ACCOUNT_KEY environment variable.
// 2. Uncomment the code block below.

if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  // This error is expected if the key is not set.
  console.error('CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. Admin SDK features are disabled. User role checking will fail.');
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
