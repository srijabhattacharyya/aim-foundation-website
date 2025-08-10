
import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

// IMPORTANT: The Firebase Admin SDK initialization requires a service account key.
// This key is a secret credential that allows server-side code to have full
// administrative access to your Firebase project.
//
// TO-DO: To enable server-side features, you must:
// 1. Obtain your service account key JSON file from the Firebase console.
// 2. Set its contents as the FIREBASE_SERVICE_ACCOUNT_KEY environment variable.

if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  // This error is expected if the key is not set.
  console.warn('CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. Admin SDK features (e.g., managing patrons, one-time setup) may be disabled or fail.');
} else {
  if (!getApps().length) {
    try {
      const serviceAccount = JSON.parse(
        process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
      );
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://aim-foundation-website-default-rtdb.firebaseio.com`,
      });
    } catch (e) {
      console.error('CRITICAL: Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Admin SDK will not be initialized.', e);
    }
  }
}

const adminDb = getApps().length ? admin.firestore() : ({} as admin.firestore.Firestore);

// This ensures we're connecting to the correct database instance.
const db = getApps().length ? admin.firestore().settings({
    databaseId: 'aim-foundation-website'
}) : ({} as admin.firestore.Firestore);


export { adminDb };
