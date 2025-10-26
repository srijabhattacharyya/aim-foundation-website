import { MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  // Force TypeScript to treat this as a definite string
  const uri = process.env.MONGODB_URI as string;

  if (!uri) {
    throw new Error("❌ Missing MONGODB_URI in environment variables.");
  }

  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = new MongoClient(uri);
    cachedClient = await client.connect();
    console.log("✅ Successfully connected to MongoDB.");
    return cachedClient;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}

