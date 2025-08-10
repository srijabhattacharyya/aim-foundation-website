
import admin from 'firebase-admin';
import { getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// When running in a Google Cloud environment like Firebase App Hosting,
// the Admin SDK can automatically detect the service account credentials.
// We don't need to manually provide the service account key.
if (!getApps().length) {
  try {
    initializeApp();
    console.log("Firebase Admin SDK initialized successfully.");
  } catch (e) {
    console.error('CRITICAL: Firebase Admin SDK initialization failed.', e);
  }
} else {
    // console.log("Firebase Admin SDK already initialized.");
}

let adminDb: admin.firestore.Firestore;

try {
    adminDb = getFirestore();
} catch (e) {
    console.error("Failed to get Firestore instance from Admin SDK.", e);
    // Provide a mock object in case of failure to prevent the app from crashing during build
    adminDb = {} as admin.firestore.Firestore;
}


export { adminDb };
