
import { GoogleAIVectorStore } from '@genkit-ai/googleai';

let vectorStore: GoogleAIVectorStore | null = null;

export function getVectorStore(): GoogleAIVectorStore {
  if (!vectorStore) {
    vectorStore = new GoogleAIVectorStore({
      collection: 'siteContent',
    });
  }
  return vectorStore;
}
