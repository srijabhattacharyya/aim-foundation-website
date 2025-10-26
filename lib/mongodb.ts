// app/lib/mongodb.ts
import { MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  // Use ! to assert non-undefined for TypeScript
  const uri = process.env.MONGODB_URI!;
  
  if (!uri) {
    // Runtime check for safety
    throw new Error(
      "MONGODB_URI environment variable is missing. Set it in Vercel or .env.local"
    );
  }

  if (cachedClient) return cachedClient;

  const client = new MongoClient(uri);
  cachedClient = await client.connect();
  console.log("Successfully connected to MongoDB.");
  return cachedClient;
}

