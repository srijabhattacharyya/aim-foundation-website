// src/app/lib/firebase-admin-config.ts
// IMPORTANT: This file should be in your .gitignore file to prevent leaking secrets.

export const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};
