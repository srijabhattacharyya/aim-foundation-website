
import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

// When running in a Google Cloud environment like Firebase App Hosting,
// the Admin SDK can automatically detect the service account credentials.
// We don't need to manually provide the service account key.
if (!getApps().length) {
  try {
    admin.initializeApp();
    console.log("Firebase Admin SDK initialized successfully.");
  } catch (e) {
    console.error('CRITICAL: Firebase Admin SDK initialization failed.', e);
  }
}

const adminDb = getApps().length ? admin.firestore() : ({} as admin.firestore.Firestore);

// This ensures we're connecting to the correct database instance.
if (getApps().length) {
    admin.firestore().settings({
        databaseId: 'aim-foundation-website'
    });
}


export { adminDb };
