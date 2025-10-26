// app/api/notes/route.ts
import { NextResponse } from 'next/server';
import { getAdminDb } from '@/app/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

// GET /api/notes
export async function GET() {
  try {
    const db = getAdminDb();
    const snapshot = await db.collection('notes').get();
    const notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json({ notes });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/notes
export async function POST(request: Request) {
  try {
    const db = getAdminDb();

    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    const result = await db.collection('notes').add({
      title,
      content,
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ message: 'Note created', noteId: result.id }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
