
'use server';
/**
 * @fileOverview A chatbot flow that answers questions based on website content.
 *
 * - chatFlow - A function that takes a user's question and website context to generate an answer.
 * - ChatFlowInput - The input type for the chatFlow function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import {
  AIMessage,
  HumanMessage,
} from 'genkit/message';

export const ChatFlowInputSchema = z.object({
  question: z.string(),
  context: z.string(),
  chatHistory: z.array(z.custom<HumanMessage | AIMessage>()),
});

export type ChatFlowInput = z.infer<typeof ChatFlowInputSchema>;

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: { schema: ChatFlowInputSchema },
  prompt: `You are a helpful assistant for the AIM Foundation. Your role is to answer visitor questions based ONLY on the provided website content.
If the answer is not available in the content you are given, you MUST say: "I’m sorry, I don’t have that information yet." Do not make up answers or use external knowledge.

## Website Content Context:
{{{context}}}
`,
});

export const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatFlowInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const llmResponse = await ai.generate({
      prompt: {
        text: await prompt.renderText(input),
      },
      history: [...input.chatHistory, new HumanMessage(input.question)],
      model: 'googleai/gemini-1.5-pro',
      config: {
        temperature: 0.3,
      },
    });

    return llmResponse.text;
  }
);
