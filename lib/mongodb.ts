// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

// Throw error if env variable is missing
if (!uri) {
  throw new Error('The MONGODB_URI environment variable is not defined. Please add your MongoDB connection string to your deployment environment (e.g., Vercel, Firebase) to connect to the database.');
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;

  // Type assertion to tell TypeScript uri is definitely a string
  const client = new MongoClient(uri as string); 
  cachedClient = await client.connect();
  return cachedClient;
}
