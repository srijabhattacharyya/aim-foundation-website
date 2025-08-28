
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!admin.apps.length) {
    if (serviceAccountKey) {
        try {
            admin.initializeApp({
                credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
            });
        } catch (error: any) {
            console.error('Firebase Admin Initialization Error:', error.message);
        }
    } else {
        console.warn("FIREBASE_SERVICE_ACCOUNT_KEY not found. Firestore Admin SDK will not be initialized.");
    }
}

const adminDb = admin.apps.length > 0 ? getFirestore() : null;

export function getAdminDb() {
    if (!adminDb) {
        throw new Error("Firebase Admin SDK is not initialized. Check your service account credentials.");
    }
    return adminDb;
}
