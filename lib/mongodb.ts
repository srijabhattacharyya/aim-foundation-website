import { MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("❌ Missing MONGODB_URI in environment variables.");
  }

  if (cachedClient) return cachedClient;

  try {
    const client = new MongoClient(uri as string);
    cachedClient = await client.connect();
    console.log("✅ Successfully connected to MongoDB");
    return cachedClient;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}
