
'use server';
import { getAdminDb } from '@/app/lib/firebase-admin';
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
  const db = getAdminDb();
  const snapshot = await db
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
      createdAt: data.createdAt?.toDate?.().toISOString() || new Date().toISOString(),
    };
  });
}

export async function deleteDonation(id: string) {
  const db = getAdminDb();
  await db.collection('donations').doc(id).delete();
}

// ------------------------------
// Subscriber Management
// ------------------------------
export async function fetchSubscribers() {
  const db = getAdminDb();
  const snapshot = await db.collection('subscribers').orderBy('createdAt', 'desc').get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt.toDate().toISOString(),
  }));
}

export async function deleteSubscriber(id: string) {
  const db = getAdminDb();
  await db.collection('subscribers').doc(id).delete();
}

// ------------------------------
// Gallery Management
// ------------------------------
// For now, we will comment out image upload/delete as it requires a storage solution.
// We'll focus on database operations.

// async function uploadImage(fileBase64: string, fileName: string): Promise<string> {
//   // This needs a storage solution like AWS S3, Cloudinary, or Vercel Blob.
//   // Returning a placeholder for now.
//   return "https://placehold.co/600x400.png";
// }

// async function deleteImage(imageUrl: string) {
//   // This needs to be implemented based on the chosen storage solution.
//   console.log("Deleting image:", imageUrl);
// }

export async function addGalleryImage(data: {
  description: string;
  status: 'Active' | 'Inactive';
  sequence: number;
  imageFileBase64: string;
  imageFileName: string;
}) {
  const db = getAdminDb();
  // const imageUrl = await uploadImage(data.imageFileBase64, data.imageFileName);
  const imageUrl = "https://placehold.co/600x400.png"; // Placeholder

  await db.collection('gallery').add({
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
  const db = getAdminDb();
  let imageUrl = data.existingImageUrl;

  // if (data.imageFileBase64 && data.imageFileName) {
  //   if (data.existingImageUrl) {
  //     await deleteImage(data.existingImageUrl);
  //   }
  //   imageUrl = await uploadImage(data.imageFileBase64, data.imageFileName);
  // }

  await db.collection('gallery').doc(id).update({
    description: data.description,
    status: data.status,
    sequence: data.sequence,
    imageUrl,
    updatedAt: FieldValue.serverTimestamp(),
  });
}

export async function deleteGalleryImage(id: string, imageUrl: string) {
  const db = getAdminDb();
  // await deleteImage(imageUrl);
  await db.collection('gallery').doc(id).delete();
}
