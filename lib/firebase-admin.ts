
import admin from 'firebase-admin';
import { getApps, initializeApp, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// This function ensures that the Firebase Admin SDK is initialized only once.
function initializeAdminApp(): App {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0] as App;
  }
  
  try {
    const app = initializeApp();
    console.log("Firebase Admin SDK initialized successfully.");
    return app;
  } catch (e) {
    console.error('CRITICAL: Firebase Admin SDK initialization failed.', e);
    // Re-throwing the error is important to prevent the app from running in a broken state.
    throw e;
  }
}

const adminApp = initializeAdminApp();
const adminDb = getFirestore(adminApp);

export { adminDb };
