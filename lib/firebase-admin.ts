
import admin from 'firebase-admin';

// Check if the service account key is available
if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is not set in the environment variables.');
}

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
    throw new Error('Could not initialize Firebase Admin SDK. Service account key might be malformed.');
  }
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
