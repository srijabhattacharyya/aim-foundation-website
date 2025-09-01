
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

let adminDb: admin.firestore.Firestore;

function initializeAdminApp() {
    if (!admin.apps.length) {
        if (!serviceAccountKey) {
            throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not set.");
        }
        try {
            admin.initializeApp({
                credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
            });
        } catch (error: any) {
            console.error('Firebase Admin Initialization Error:', error.message);
            throw new Error("Failed to initialize Firebase Admin SDK. Please check your service account credentials.");
        }
    }
    return admin.firestore();
}

export function getAdminDb() {
    if (!adminDb) {
        adminDb = initializeAdminApp();
    }
    return adminDb;
}
