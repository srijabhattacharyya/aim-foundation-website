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
      ...data,
      createdAt: data.createdAt.toDate().toISOString(),
    };
  });
}
