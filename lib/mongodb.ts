// app/lib/mongodb.ts
import { MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside Vercel or .env.local"
    );
  }

  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = new MongoClient(uri);
    cachedClient = await client.connect();
    console.log("Successfully connected to MongoDB.");
    return cachedClient;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
