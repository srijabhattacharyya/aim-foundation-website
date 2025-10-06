'use server';

import { getAdminDb, getAdminStorage } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

// ------------------------------
// Donation Management
// ------------------------------
export interface Donation {
  id: string;
  fullName: string;
  email: string;
  amount: number;
  cause: string;
  createdAt: string;
}

export async function fetchDonations(): Promise<Donation[]> {
  const adminDb = getAdminDb();
  const snapshot = await adminDb
    .collection('donations')
    .orderBy('createdAt', 'desc')
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      fullName: data.fullName || 'Anonymous',
      email: data.email || 'N/A',
      amount: Number(data.amount) || 0,
      cause: data.cause || 'General',
      createdAt: data.createdAt
        ? data.createdAt.toDate().toISOString()
        : new Date().toISOString(),
    };
  });
}

export async function deleteDonation(id: string) {
  const adminDb = getAdminDb();
  await adminDb.collection('donations').doc(id).delete();
}

// ------------------------------
// Subscriber Management
// ------------------------------
export async function fetchSubscribers() {
  const adminDb = getAdminDb();
  const snapshot = await adminDb
    .collection('subscribers')
    .orderBy('createdAt', 'desc')
    .get();
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      email: data.email,
      createdAt: data.createdAt.toDate().toISOString(),
    };
  });
}

export async function deleteSubscriber(id: string) {
  const adminDb = getAdminDb();
  await adminDb.collection('subscribers').doc(id).delete();
}

// ------------------------------
// Gallery Management
// ------------------------------
export async function fetchGalleryImages() {
  const adminDb = getAdminDb();
  const snapshot = await adminDb
    .collection('gallery')
    .orderBy('sequence', 'asc')
    .get();
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt.toDate().toISOString(),
    };
  });
}

async function uploadImage(fileBase64: string, fileName: string): Promise<string> {
  const storage = getAdminStorage();
  const bucket = storage.bucket(
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com'
  );
  const file = bucket.file(`gallery/${Date.now()}-${fileName}`);

  const buffer = Buffer.from(fileBase64.split(',')[1], 'base64');

  await file.save(buffer, {
    metadata: {
      contentType: fileBase64.split(';')[0].split(':')[1],
    },
  });

  return file.publicUrl();
}

async function deleteImage(imageUrl: string) {
  try {
    const storage = getAdminStorage();
    const bucket = storage.bucket(
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com'
    );
    const url = new URL(imageUrl);
    const path = decodeURIComponent(url.pathname).substring(1);
    const fileName = path.split('/').slice(2).join('/');
    await bucket.file(fileName).delete();
  } catch (error: any) {
    if (error.code !== 404) {
      console.error('Failed to delete old gallery image:', error);
      throw error;
    }
  }
}

export async function addGalleryImage(data: {
  description: string;
  status: 'Active' | 'Inactive';
  sequence: number;
  imageFileBase64: string;
  imageFileName: string;
}) {
  const adminDb = getAdminDb();
  const imageUrl = await uploadImage(data.imageFileBase64, data.imageFileName);

  await adminDb.collection('gallery').add({
    description: data.description,
    status: data.status,
    sequence: data.sequence,
    imageUrl,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });
}

export async function updateGalleryImage(
  id: string,
  data: {
    description: string;
    status: 'Active' | 'Inactive';
    sequence: number;
    imageFileBase64?: string;
    imageFileName?: string;
    existingImageUrl: string;
  }
) {
  const adminDb = getAdminDb();
  let imageUrl = data.existingImageUrl;

  if (data.imageFileBase64 && data.imageFileName) {
    if (data.existingImageUrl) {
      await deleteImage(data.existingImageUrl);
    }
    imageUrl = await uploadImage(data.imageFileBase64, data.imageFileName);
  }

  await adminDb.collection('gallery').doc(id).update({
    description: data.description,
    status: data.status,
    sequence: data.sequence,
    imageUrl,
    updatedAt: FieldValue.serverTimestamp(),
  });
}

export async function deleteGalleryImage(id: string, imageUrl: string) {
  const adminDb = getAdminDb();
  await deleteImage(imageUrl);
  await adminDb.collection('gallery').doc(id).delete();
}
