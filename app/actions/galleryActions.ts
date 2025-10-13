'use server';

import { getAdminDb } from '@/lib/firebase-admin';

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
      description: data.description,
      status: data.status,
      sequence: data.sequence,
      imageUrl: data.imageUrl,
      // Convert timestamp to a serializable format (ISO string)
      createdAt: data.createdAt?.toDate?.().toISOString() || new Date().toISOString(),
    };
  });
}
