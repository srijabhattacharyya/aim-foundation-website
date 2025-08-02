
'use server';

import { adminDb, adminStorage } from '../firebase-admin';
import { revalidatePath } from 'next/cache';
import { collection, addDoc, getDocs, deleteDoc, doc, orderBy, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase'; // Using client SDK for this action

export interface Patron {
  id: string;
  name: string;
  logoUrl: string;
  logoPath: string;
  createdAt: FirebaseFirestore.Timestamp;
}

// This function is now for adding the metadata to Firestore after upload
export async function addPatron(name: string, logoUrl: string, logoPath: string): Promise<{ success: boolean, error?: string, newPatron?: Patron }> {
  if (!name || !logoUrl || !logoPath) {
    return { success: false, error: 'Patron name, logo URL, and logo path are required.' };
  }
  if (!adminDb) {
      const errorMsg = 'Firebase Admin SDK not initialized. Cannot add patron.';
      console.error(errorMsg);
      return { success: false, error: errorMsg };
  }

  try {
    const patronRef = await addDoc(collection(adminDb, 'patrons'), {
      name,
      logoUrl,
      logoPath,
      createdAt: Timestamp.now(),
    });

    revalidatePath('/');
    revalidatePath('/admin/patrons');
    
    const newPatron: Patron = {
      id: patronRef.id,
      name,
      logoUrl,
      logoPath,
      createdAt: Timestamp.now() as any,
    };

    return { success: true, newPatron };
  } catch (error: any) {
    console.error('Error adding patron to Firestore:', error);
    return { success: false, error: error.message };
  }
}

// Get all patrons (uses admin SDK for server-side rendering)
export async function getPatrons(): Promise<Patron[]> {
   if (!adminDb) {
    console.error('Firebase Admin SDK not initialized. Cannot get patrons.');
    return [];
  }
  try {
    const snapshot = await getDocs(query(collection(adminDb, 'patrons'), orderBy('createdAt', 'desc')));
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
   if (!adminDb || !adminStorage) {
     const errorMsg = 'Firebase Admin SDK not initialized. Cannot delete patron.';
    console.error(errorMsg);
    return { success: false, error: errorMsg };
  }
  try {
    // Delete from Firestore
    await deleteDoc(doc(adminDb, 'patrons', patronId));

    // Delete from Storage
    const storageRef = ref(storage, logoPath);
    await deleteObject(storageRef);

    revalidatePath('/');
    revalidatePath('/admin/patrons');

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting patron:', error);
    return { success: false, error: error.message };
  }
}
