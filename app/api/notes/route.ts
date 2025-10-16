import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

// Ensure MONGODB_URI exists
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// This tells TypeScript that uri is definitely a string
const uri: string = MONGODB_URI;

// Cached client to prevent multiple connections in dev/hot reload
let cachedClient: MongoClient | null = null;

async function connectToDatabase(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(uri); // ✅ now type-safe
  cachedClient = await client.connect();
  return cachedClient;
}

// GET /api/notes
export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db(); // Optional: specify DB name like db('mydatabase')
    const notes = await db.collection('notes').find({}).toArray();
    return NextResponse.json({ notes });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/notes
export async function POST(request: Request) {
  try {
    const client = await connectToDatabase();
    const db = client.db();

    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    const result = await db.collection('notes').insertOne({
      title,
      content,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Note created', noteId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
