
import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

// Cached instances
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    // Prevent re-initialization
    if (admin.apps.length > 0) {
        return;
    }

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // Replace literal \n with actual newlines
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
        console.error('Firebase Admin SDK environment variables are not set correctly.');
        throw new Error("Missing Firebase Admin credentials in environment variables.");
    }
    
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId,
                clientEmail,
                privateKey,
            }),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com',
        });
        console.log('Firebase Admin SDK initialized successfully.');
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
    }
}

export function getAdminDb(): Firestore {
    // Initialize if not already done
    if (admin.apps.length === 0) {
       initializeAdminApp();
    }
    // Return cached instance or create new one
    if (!db) {
        db = getFirestore();
    }
    return db;
}

export function getAdminStorage(): Storage {
     // Initialize if not already done
    if (admin.apps.length === 0) {
       initializeAdminApp();
    }
    // Return cached instance or create new one
    if (!storage) {
        storage = getStorage();
    }
    return storage;
}
