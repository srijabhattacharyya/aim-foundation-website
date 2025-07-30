
'use server';

import { adminDb } from '../firebase-admin';

export async function getCollectionCount(collectionName: string): Promise<number> {
  try {
    const snapshot = await adminDb.collection(collectionName).count().get();
    return snapshot.data().count;
  } catch (error) {
    console.error(`Error getting count for collection ${collectionName}:`, error);
    return 0;
  }
}
