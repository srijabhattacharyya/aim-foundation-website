// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

// Throw error if env variable is missing
if (!uri) {
  throw new Error('The MONGODB_URI environment variable is not defined. Please add your MongoDB connection string to your Vercel project settings and redeploy.');
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = new MongoClient(uri);
    cachedClient = await client.connect();
    console.log("Successfully connected to MongoDB.");
    return cachedClient;
  } catch (error) {
    console.error("Failed to connect to MongoDB.", error);
    throw new Error("Could not connect to the database. Please check your MONGODB_URI and network settings.");
  }
}
