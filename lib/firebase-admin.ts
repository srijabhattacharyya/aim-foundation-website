
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

let adminDb: admin.firestore.Firestore;

function initializeAdminApp() {
    if (!admin.apps.length) {
        if (serviceAccountKey) {
            try {
                admin.initializeApp({
                    credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
                });
            } catch (error: any) {
                console.error('Firebase Admin Initialization Error:', error.message);
                throw new Error("Failed to initialize Firebase Admin SDK. Please check your service account credentials.");
            }
        } else {
            console.warn("FIREBASE_SERVICE_ACCOUNT_KEY not found. Firestore Admin SDK will not be initialized.");
            throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not set.");
        }
    }
    adminDb = getFirestore();
}

export function getAdminDb() {
    if (!adminDb) {
        initializeAdminApp();
    }
    return adminDb;
}
