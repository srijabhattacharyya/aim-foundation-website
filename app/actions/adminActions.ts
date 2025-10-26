'use server';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

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
  const client = await connectToDatabase();
  const db = client.db();
  const snapshot = await db
    .collection('donations')
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return snapshot.map((doc: any) => {
    return {
      id: doc._id.toString(),
      fullName: doc.fullName || 'Anonymous',
      email: doc.email || 'N/A',
      amount: Number(doc.amount) || 0,
      cause: doc.cause || 'General',
      createdAt: doc.createdAt
        ? new Date(doc.createdAt).toISOString()
        : new Date().toISOString(),
    };
  });
}

export async function deleteDonation(id: string) {
  const client = await connectToDatabase();
  const db = client.db();
  await db.collection('donations').deleteOne({ _id: new ObjectId(id) });
}

// ------------------------------
// Subscriber Management
// ------------------------------
export async function fetchSubscribers() {
  const client = await connectToDatabase();
  const db = client.db();
  const snapshot = await db
    .collection('subscribers')
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  return snapshot.map((doc: any) => ({
    id: doc._id.toString(),
    email: doc.email,
    createdAt: new Date(doc.createdAt).toISOString(),
  }));
}

export async function deleteSubscriber(id: string) {
  const client = await connectToDatabase();
  const db = client.db();
  // In newsletterActions, we use email as the ID. Let's be consistent.
  // If id is ObjectId, this will fail. Let's assume it's email.
  // The subscribers page seems to pass an ObjectId as `id`. Let's use ObjectId.
  try {
     await db.collection('subscribers').deleteOne({ _id: new ObjectId(id) });
  } catch (e) {
    // Fallback if the id is an email for some reason
     await db.collection('subscribers').deleteOne({ email: id });
  }
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
  const client = await connectToDatabase();
  const db = client.db();
  // const imageUrl = await uploadImage(data.imageFileBase64, data.imageFileName);
  const imageUrl = "https://placehold.co/600x400.png"; // Placeholder

  await db.collection('gallery').insertOne({
    description: data.description,
    status: data.status,
    sequence: data.sequence,
    imageUrl,
    createdAt: new Date(),
    updatedAt: new Date(),
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
  const client = await connectToDatabase();
  const db = client.db();
  let imageUrl = data.existingImageUrl;

  // if (data.imageFileBase64 && data.imageFileName) {
  //   if (data.existingImageUrl) {
  //     await deleteImage(data.existingImageUrl);
  //   }
  //   imageUrl = await uploadImage(data.imageFileBase64, data.imageFileName);
  // }

  await db.collection('gallery').updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        description: data.description,
        status: data.status,
        sequence: data.sequence,
        imageUrl,
        updatedAt: new Date(),
      },
    }
  );
}

export async function deleteGalleryImage(id: string, imageUrl: string) {
  const client = await connectToDatabase();
  const db = client.db();
  // await deleteImage(imageUrl);
  await db.collection('gallery').deleteOne({ _id: new ObjectId(id) });
}
