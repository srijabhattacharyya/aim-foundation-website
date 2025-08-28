
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!admin.apps.length) {
  if (!serviceAccountKey) {
    // This will only happen in a local environment if the key is not set.
    // In Cloud Run, the variable is guaranteed to be there.
    console.warn("FIREBASE_SERVICE_ACCOUNT_KEY not found. Firestore Admin SDK will not be initialized. This is expected for local development without the key.");
  } else {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
        });
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
         // Avoid re-throwing during build time to allow for builds without env vars
        if (process.env.NODE_ENV === 'production') {
            throw error;
        }
    }
  }
}

// Conditionally export adminDb to handle environments where the SDK might not be initialized.
let adminDb;
try {
  adminDb = getFirestore();
} catch (e) {
  console.error("Could not get Firestore instance. This may be due to missing Firebase Admin credentials.");
  // In a production environment, you might want to handle this more gracefully
  // or ensure the app doesn't start. For now, we'll let it proceed
  // and subsequent calls will fail, which will be caught in server actions.
}

export { adminDb };
