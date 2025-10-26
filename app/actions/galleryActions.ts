'use server';

import { connectToDatabase } from '@/lib/mongodb';

export async function fetchGalleryImages() {
  const client = await connectToDatabase();
  const db = client.db();
  const snapshot = await db
    .collection('gallery')
    .find()
    .sort({ sequence: 1 })
    .toArray();
    
  return snapshot.map((doc: any) => {
    return {
      id: doc._id.toString(),
      description: doc.description,
      status: doc.status,
      sequence: doc.sequence,
      imageUrl: doc.imageUrl,
      createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : new Date().toISOString(),
    };
  });
}
