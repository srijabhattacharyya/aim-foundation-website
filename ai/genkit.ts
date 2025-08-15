
import { genkit, GenerationCommon, ModelArgument } from 'genkit';
import { googleAI, GoogleAIVectorStore } from '@genkit-ai/googleai';
import { configureGenkit } from 'genkit';

configureGenkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export const ai = genkit;
