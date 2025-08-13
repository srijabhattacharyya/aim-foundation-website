
'use server';

import { z } from 'zod';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { revalidatePath } from 'next/cache';
import { getStorage } from 'firebase-admin/storage';

// Schema now allows either imageUrl or file
const addGalleryItemSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['Active', 'Inactive']),
  sequence: z.coerce.number().min(0, 'Sequence must be a positive number'),
  imageFile: z.string().optional(), // base64 image from frontend
  imageUrl: z.string().url('A valid image URL is required').optional(),
});

async function uploadImage(base64Data: string, filename: string) {
  try {
    const bucket = getStorage().bucket();
    // Extract mime type from base64 string
    const mimeType = base64Data.match(/data:(.*);base64,/)?.[1] || 'image/webp';
    const buffer = Buffer.from(base64Data.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    
    const file = bucket.file(`gallery/${filename}`);
    await file.save(buffer, {
      metadata: { contentType: mimeType },
      public: true,
    });
    // Return the public URL
    return file.publicUrl();
  } catch (error) {
    console.error("Image upload failed:", error);
    throw new Error("Failed to upload image to Firebase Storage.");
  }
}


export async function addGalleryItem(
  itemData: z.infer<typeof addGalleryItemSchema>,
  id: string | null
) {
  try {
    const validatedData = addGalleryItemSchema.parse(itemData);
    let imageUrl = validatedData.imageUrl || null;

    // Upload image if provided in base64 format
    if (validatedData.imageFile) {
        const fileExtension = validatedData.imageFile.match(/data:image\/(.*?);/)?.[1] || 'webp';
        const filename = `${Date.now()}.${fileExtension}`;
        imageUrl = await uploadImage(validatedData.imageFile, filename);
    }


    if (!imageUrl) {
      throw new Error("Image is required but was not provided.");
    }

    const dataToSave = {
        description: validatedData.description,
        status: validatedData.status,
        sequence: validatedData.sequence,
        imageUrl,
        updatedAt: FieldValue.serverTimestamp(),
    };

    if (id) {
      // Update existing gallery item
      const docRef = adminDb.collection('gallery').doc(id);
      await docRef.update(dataToSave);
      revalidatePath('/gallery');
      revalidatePath('/admin/gallery');
      return { success: true, id: id };
    } else {
      // Add new gallery item
      const docRef = await adminDb.collection('gallery').add({
        ...dataToSave,
        createdAt: FieldValue.serverTimestamp(),
      });
      revalidatePath('/gallery');
      revalidatePath('/admin/gallery');
      return { success: true, id: docRef.id };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
      return { success: false, error: error.errors.map(e => e.message).join(', ') };
    }
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    console.error("Error adding/updating gallery item: ", errorMessage);
    return { success: false, error: errorMessage };
  }
}

export async function deleteGalleryItem(id: string) {
  try {
    const docSnap = await adminDb.collection('gallery').doc(id).get();
    const data = docSnap.data();
    if (data && data.imageUrl) {
      try {
        const storage = getStorage();
        // Extract the file path from the URL
        const filePath = new URL(data.imageUrl).pathname.split(storage.bucket().name + '/')[1];
        if (filePath) {
            const imageRef = storage.bucket().file(decodeURIComponent(filePath));
            await imageRef.delete();
        }
      } catch (storageError) {
        console.warn("Could not delete image from storage:", storageError);
      }
    }
    await adminDb.collection('gallery').doc(id).delete();
    revalidatePath('/gallery');
    revalidatePath('/admin/gallery');
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    console.error("Error deleting gallery item: ", errorMessage);
    return { success: false, error: "Failed to delete gallery item." };
  }
}
