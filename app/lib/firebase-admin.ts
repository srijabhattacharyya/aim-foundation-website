
'use server';

import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

// Cached instances
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    if (admin.apps.length > 0) {
        return;
    }

    try {
        // When deployed in a Google Cloud environment (like Vercel or App Hosting),
        // the SDK will automatically use the runtime's service account credentials.
        // No key file is needed.
        admin.initializeApp({
             storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com'
        });
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        // Add a more descriptive error for local development if credentials are not found.
        if (error.code === 'GOOGLE_APPLICATION_CREDENTIALS_NOT_FOUND') {
            console.error(
                'Could not find Application Default Credentials. ' +
                'If you are running locally, you need to set up local authentication. ' +
                'See https://cloud.google.com/docs/authentication/provide-credentials-adc#local-dev'
            );
        }
        throw new Error("Failed to initialize Firebase Admin SDK. Check server logs for details.");
    }
}

// Call initialization once
initializeAdminApp();

export function getAdminDb(): Firestore {
    if (!db) {
        db = getFirestore();
    }
    return db;
}

export function getAdminStorage(): Storage {
    if (!storage) {
        storage = getStorage();
    }
    return storage;
}
