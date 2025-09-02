
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

function parseServiceAccount(key: string): admin.ServiceAccount {
    try {
        return JSON.parse(key);
    } catch (e) {
        try {
            const decodedKey = Buffer.from(key, 'base64').toString('utf-8');
            return JSON.parse(decodedKey);
        } catch (e2) {
             console.error('Failed to parse Firebase service account key from environment variable.');
             throw new Error('The FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not a valid JSON string or base64 encoded JSON.');
        }
    }
}

function initializeAdminApp() {
    if (admin.apps.length > 0) {
        return;
    }

    if (!serviceAccountKey) {
        throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not set.");
    }
    
    try {
        const credentials = parseServiceAccount(serviceAccountKey);
        admin.initializeApp({
            credential: admin.credential.cert(credentials),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com'
        });
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        throw new Error("Failed to initialize Firebase Admin SDK. Please check your service account credentials.");
    }
}

// Initialize the app once at the module level
initializeAdminApp();

export function getAdminDb() {
    return admin.firestore();
}
