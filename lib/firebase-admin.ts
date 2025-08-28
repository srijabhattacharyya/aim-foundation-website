
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!serviceAccountKey) {
  throw new Error('The FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. Please add it to your environment variables.');
}

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
    });
  }
} catch (error: any) {
  console.error('Firebase Admin Initialization Error:', error.message);
  // Avoid re-throwing during build time to allow for builds without env vars
  if (process.env.NODE_ENV === 'production') {
      throw error;
  }
}

export const adminDb = getFirestore();
