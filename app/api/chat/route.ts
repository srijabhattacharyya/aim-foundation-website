
'use server';

import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { getVectorStore } from '@/lib/vector-store';
import { chatFlow } from '@/ai/flows/chat-flow';
import { Document } from 'genkit/document';
import { Message, Part } from 'genkit';

export async function POST(req: NextRequest) {
  try {
    const { question, chatId } = await req.json();

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ error: 'Question is required.' }, { status: 400 });
    }
     if (!chatId || typeof chatId !== 'string') {
      return NextResponse.json({ error: 'Chat ID is required.' }, { status: 400 });
    }

    const vectorStore = getVectorStore();
    const searchResults = await vectorStore.retrieve(question, 3);
    const context = searchResults
      .map((r: Document) => r.content[0].text)
      .join('\n\n');

    // Fetch chat history
    const chatHistoryRef = adminDb.collection('chats').doc(chatId).collection('messages').orderBy('timestamp', 'asc');
    const historySnapshot = await chatHistoryRef.get();
    const chatHistory: Message[] = historySnapshot.docs.flatMap(doc => {
        const data = doc.data();
        // Recreate the message structure for Genkit
        const userMessage: Message = {
          role: 'user',
          content: [{ text: data.question }],
        };
        const modelMessage: Message = {
          role: 'model',
          content: [{ text: data.answer }],
        };
        return [userMessage, modelMessage];
    });


    const answer = await chatFlow({
        question: question,
        context: context,
        chatHistory: chatHistory,
    });
    
    // Log interaction to Firestore
    const chatRef = adminDb.collection('chats').doc(chatId);
    await chatRef.collection('messages').add({
        question,
        answer,
        context,
        timestamp: new Date(),
    });


    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
