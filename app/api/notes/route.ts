import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

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
