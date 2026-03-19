'use server';
/**
 * @fileOverview AIM Foundation AI Ambassador Chat Flow.
 *
 * - chatWithAmbassador - A function that handles the conversational process.
 * - ChatInput - The input type containing the user message and history.
 * - ChatOutput - The return type containing the AI response.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fs from 'fs/promises';
import path from 'path';

const ChatInputSchema = z.object({
  message: z.string(),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).optional(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chatWithAmbassador(input: ChatInput): Promise<ChatOutput> {
  try {
    return await chatFlow(input);
  } catch (error) {
    console.error('chatWithAmbassador server action error:', error);
    return { response: "I'm having trouble connecting to my knowledge base right now. Please reach out to us at info@aimindia.org.in for direct assistance." };
  }
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    let knowledgeBase = '';
    const cwd = process.cwd();
    
    // Define potential paths for the knowledge base
    const paths = [
      path.join(cwd, 'public/.well-known/llms-full.txt'),
      path.join(cwd, '.well-known/llms-full.txt'),
      path.join(cwd, 'llms-full.txt')
    ];

    for (const kbPath of paths) {
      try {
        knowledgeBase = await fs.readFile(kbPath, 'utf-8');
        if (knowledgeBase) {
          console.log(`✅ Successfully loaded knowledge base from: ${kbPath}`);
          break;
        }
      } catch (e) {
        console.warn(`⚠️ Knowledge base not found at: ${kbPath}`);
      }
    }

    if (!knowledgeBase) {
      console.error('❌ Failed to load knowledge base from any expected path.');
    }

    const response = await ai.generate({
      system: `You are the "AIM Foundation AI Ambassador," a professional, empathetic, and knowledgeable assistant representing AIM Foundation (Kolkata, India). Your goal is to provide accurate information to donors, volunteers, corporate partners, and beneficiaries.

Your primary source of truth is the following Institutional Knowledge Base:
---
${knowledgeBase || "Information about AIM Foundation mission, healthcare, education, livelihood, environment and corporate services."}
---

INSTRUCTIONS:
1. If the answer is in the provided documentation, provide a clear and concise response.
2. If the answer is NOT in the documentation, do not guess. Instead, say: "I don't have specific details on that right now. Please reach out to our team directly at info@aimindia.org.in for more information."
3. Expert Areas: Healthcare (Project Detect, OralScan, SightHope, CycleSafe), Livelihood (SuiDhaga, Digital Skills), Environment (TideShield, GreenRoots), Corporate (CSR Impact, Reporting).
4. Tone: Authentic & Adaptive. Match user energy (Formal for Corporate, Encouraging for Students). Witty & Grounded.
5. NO MEDICAL ADVICE: If asked for medical diagnoses, say: "I am an AI assistant. While we provide screening services like Project Detect, please consult a qualified medical professional for health advice."
6. NO POLITICAL/RELIGIOUS DEBATE: Stay focused strictly on social impact.
7. CONTACT ROUTING: 
   - Jobs/Careers: hr@aimindia.org.in
   - General/Partnerships: info@aimindia.org.in
   - Location: 41, Ballygunge Terrace, Kolkata 700029.
8. Format: Use Markdown (bullet points, bold text).
9. Length: Keep responses under 150 words unless a deep dive is requested.
10. End with a helpful "Next Step" question.`,
      prompt: input.message,
      messages: input.history?.map(h => ({
        role: h.role,
        content: [{ text: h.content }]
      })),
      config: {
        temperature: 0.3,
        topP: 0.8,
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
        ],
      }
    });

    return { response: response.text || "I'm sorry, I'm having trouble connecting right now. Please try again or email us at info@aimindia.org.in." };
  }
);
