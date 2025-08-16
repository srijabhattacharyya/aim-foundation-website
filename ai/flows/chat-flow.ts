
'use server';
/**
 * @fileOverview A chatbot flow that answers questions based on website content.
 *
 * - chatFlow - A function that takes a user's question and website context to generate an answer.
 * - ChatFlowInput - The input type for the chatFlow function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Message } from 'genkit';

export const ChatFlowInputSchema = z.object({
  question: z.string(),
  context: z.string(),
  chatHistory: z.array(z.custom<Message>()),
});

export type ChatFlowInput = z.infer<typeof ChatFlowInputSchema>;

const systemPrompt = `You are a helpful assistant for the AIM Foundation. Your role is to answer visitor questions based ONLY on the provided website content.
If the answer is not available in the content you are given, you MUST say: "I’m sorry, I don’t have that information yet." Do not make up answers or use external knowledge.

## Website Content Context:
{{{context}}}`;

export const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatFlowInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { question, context, chatHistory } = input;

    // If there's no context, return a default message without calling the AI
    if (!context.trim()) {
        return "I’m sorry, I don’t have that information yet.";
    }

    const llmResponse = await ai.generate({
      system: systemPrompt.replace('{{{context}}}', context),
      history: [
        ...chatHistory,
        { role: 'user', content: [{ text: question }] },
      ],
      model: 'googleai/gemini-1.5-pro',
      config: {
        temperature: 0.3,
      },
    });

    return llmResponse.text;
  }
);
