
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'Successfully connected to database' }, { status: 200 });
  } catch (error: any) {
    console.error("Database connection test failed:", error);
    return NextResponse.json({ message: 'Failed to connect to database', error: error.message }, { status: 500 });
  }
}
