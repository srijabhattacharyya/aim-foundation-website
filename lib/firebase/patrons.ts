
'use server';

import { adminDb, adminStorage } from '../firebase-admin';
import { revalidatePath } from 'next/cache';
import { Timestamp } from 'firebase-admin/firestore';

export interface Patron {
  id: string;
  name: string;
  logoUrl: string;
  logoPath: string;
  createdAt: Timestamp;
}

// Get all patrons (uses admin SDK for server-side rendering)
export async function getPatrons(): Promise<Patron[]> {
   if (!adminDb || !adminDb.collection) {
    console.error('Firebase Admin SDK not initialized. Cannot get patrons.');
    return [];
  }
  try {
    const patronsQuery = adminDb.collection('patrons').orderBy('createdAt', 'desc');
    const snapshot = await patronsQuery.get();
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Patron));
  } catch (error) {
    console.error('Error getting patrons:', error);
    return [];
  }
}

// Delete a patron (uses admin SDK for security)
export async function deletePatron(patronId: string, logoPath: string): Promise<{ success: boolean; error?: string }> {
   if (!adminDb || !adminStorage || !adminDb.collection) {
     const errorMsg = 'Firebase Admin SDK not initialized. Cannot delete patron.';
    console.error(errorMsg);
    return { success: false, error: errorMsg };
  }
  try {
    // Delete from Firestore
    await adminDb.collection('patrons').doc(patronId).delete();

    // Delete from Storage
    const bucket = adminStorage.bucket();
    if (logoPath) { // Check if logoPath exists before trying to delete
        await bucket.file(logoPath).delete();
    }

    revalidatePath('/');
    revalidatePath('/admin/patrons');

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting patron:', error);
    if (error.code === 404) {
        console.warn(`File not found in storage: ${logoPath}. Deleting Firestore record anyway.`);
        // Ensure Firestore record is deleted even if file is missing
        await adminDb.collection('patrons').doc(patronId).delete().catch(err => console.error("Secondary delete error:", err));
        revalidatePath('/');
        revalidatePath('/admin/patrons');
        return { success: true }; // Treat as success if file is already gone
    }
    return { success: false, error: error.message };
  }
}
