
'use server';

import { adminDb, adminStorage } from '../firebase-admin';
import { revalidatePath } from 'next/cache';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, Timestamp } from 'firebase/firestore';

export interface Patron {
  id: string;
  name: string;
  logoUrl: string;
  logoPath: string;
  createdAt: FirebaseFirestore.Timestamp;
}

// This function is for adding the metadata to Firestore after upload
export async function addPatron(name: string, logoUrl: string, logoPath: string): Promise<{ success: boolean, error?: string, newPatron?: Patron }> {
  if (!name || !logoUrl || !logoPath) {
    return { success: false, error: 'Patron name, logo URL, and logo path are required.' };
  }
  if (!adminDb || !adminDb.collection) {
      const errorMsg = 'Firebase Admin SDK not initialized. Cannot add patron.';
      console.error(errorMsg);
      return { success: false, error: errorMsg };
  }

  try {
    const docRef = await addDoc(collection(adminDb, 'patrons'), {
      name,
      logoUrl,
      logoPath,
      createdAt: Timestamp.now(),
    });

    revalidatePath('/');
    revalidatePath('/admin/patrons');
    
    const newPatron: Patron = {
      id: docRef.id,
      name,
      logoUrl,
      logoPath,
      createdAt: Timestamp.now() as any, // Type assertion for consistency
    };

    return { success: true, newPatron };
  } catch (error: any) {
    console.error('Error adding patron to Firestore:', error);
    return { success: false, error: error.message };
  }
}

// Get all patrons (uses admin SDK for server-side rendering)
export async function getPatrons(): Promise<Patron[]> {
   if (!adminDb || !adminDb.collection) {
    console.error('Firebase Admin SDK not initialized. Cannot get patrons.');
    return [];
  }
  try {
    const patronsQuery = query(collection(adminDb, 'patrons'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(patronsQuery);
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
    await deleteDoc(doc(adminDb, 'patrons', patronId));

    // Delete from Storage
    const bucket = adminStorage.bucket();
    await bucket.file(logoPath).delete();

    revalidatePath('/');
    revalidatePath('/admin/patrons');

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting patron:', error);
    if (error.code === 404) {
        console.warn(`File not found in storage: ${logoPath}. Deleting Firestore record anyway.`);
        revalidatePath('/');
        revalidatePath('/admin/patrons');
        return { success: true }; // Treat as success if file is already gone
    }
    return { success: false, error: error.message };
  }
}
