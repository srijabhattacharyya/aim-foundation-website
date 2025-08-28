
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

function initializeAdmin() {
    if (admin.apps.length > 0) {
        return admin.app();
    }

    if (!serviceAccountKey) {
        // This will only happen in a local environment if the key is not set.
        // In Cloud Run, the variable is guaranteed to be there.
        console.warn("FIREBASE_SERVICE_ACCOUNT_KEY not found. Firestore Admin SDK will not be initialized. This is expected for local development without the key.");
        // Return null or a mock/dummy object if you want to avoid errors in local dev without credentials
        return null; 
    }

    try {
        return admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
        });
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        if (process.env.NODE_ENV === 'production') {
            throw error;
        }
        return null;
    }
}

function getAdminDb() {
    const app = initializeAdmin();
    if (!app) {
        // Handle the case where initialization failed, e.g., in local dev without keys
        // This prevents crashes when trying to get Firestore from a null app.
        throw new Error("Firebase Admin SDK not initialized. Check your service account credentials.");
    }
    return getFirestore(app);
}

export { getAdminDb };
