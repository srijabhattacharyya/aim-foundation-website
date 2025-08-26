
'use server';

import { db, storage } from '@/lib/firebase-admin';
import { collection, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';

interface GalleryItemData {
    description: string;
    status: 'Active' | 'Inactive';
    sequence: number;
    imageUrl?: string; 
    imageFile?: string; 
}

export async function addGalleryItem(data: GalleryItemData, id: string | null) {
    try {
        let imageUrl = data.imageUrl;

        // If a new image file is provided, upload it
        if (data.imageFile) {
            const imageRef = ref(storage, `gallery/${Date.now()}-${Math.random().toString(36).substring(2)}`);
            await uploadString(imageRef, data.imageFile, 'data_url');
            imageUrl = await getDownloadURL(imageRef);

            // If updating, delete the old image if it exists and a new one is uploaded
            if (id && data.imageUrl) {
                try {
                    const oldImageRef = ref(storage, data.imageUrl);
                    await deleteObject(oldImageRef);
                } catch (storageError: any) {
                    // Log error if old image deletion fails, but don't block the main operation
                    if (storageError.code !== 'storage/object-not-found') {
                        console.error("Failed to delete old gallery image:", storageError);
                    }
                }
            }
        }
        
        if (!imageUrl) {
            return { success: false, error: 'Image URL is missing.' };
        }

        const docData = {
            description: data.description,
            status: data.status,
            sequence: data.sequence,
            imageUrl: imageUrl,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };
        
        const docDataUpdate = {
            description: data.description,
            status: data.status,
            sequence: data.sequence,
            imageUrl: imageUrl,
            updatedAt: serverTimestamp(),
        };

        if (id) {
            await updateDoc(doc(db, 'gallery', id), docDataUpdate);
        } else {
            await addDoc(collection(db, 'gallery'), docData);
        }

        return { success: true };
    } catch (e: any) {
        console.error("Error adding/updating gallery item: ", e);
        return { success: false, error: e.message || "An unexpected error occurred." };
    }
}


export async function deleteGalleryItem(id: string) {
    try {
        await deleteDoc(doc(db, 'gallery', id));
        return { success: true };
    } catch (e: any) {
        console.error("Error deleting gallery item: ", e);
        return { success: false, error: "Could not delete the gallery item." };
    }
}
