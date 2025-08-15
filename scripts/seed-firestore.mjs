
import { glob } from 'glob';
import { promises as fs } from 'fs';
import path from 'path';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getVectorStore } from '../lib/vector-store.js'; // Adjust path as needed
import { Document } from 'genkit/document';

// This script can be run locally to populate Firestore with website content.
// You need to set up Google Application Credentials for this to work.
// See: https://cloud.google.com/docs/authentication/provide-credentials-adc#local-dev

async function main() {
  console.log('Starting Firestore data seeding...');

  // Initialize Firebase Admin
  initializeApp();
  const db = getFirestore();
  const vectorStore = getVectorStore();
  const collectionRef = db.collection('siteContent');

  // Paths to your page files
  const pagePaths = await glob('app/**/page.tsx');
  const componentPaths = await glob('app/**/(*ClientPage|*BlogPage).tsx');
  const allPaths = [...pagePaths, ...componentPaths];

  console.log(`Found ${allPaths.length} files to process.`);

  const documents = [];

  for (const filePath of allPaths) {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // A simple way to extract text content, can be improved.
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    
    const url = path.relative('app', filePath)
        .replace(/\\/g, '/')
        .replace(/\/page\.tsx$/, '')
        .replace(/\(.*\)\//, '') // remove route groups
        .replace(/(\w+)(ClientPage|BlogPage)\.tsx$/, '$1')
        .toLowerCase() || '/';

    const docId = url.replace(/\//g, '_') || 'home';
    const title = path.basename(filePath, '.tsx');

    if (textContent.length < 100) {
        console.log(`Skipping ${filePath} due to short content.`);
        continue;
    }

    console.log(`Processing: ${filePath} -> URL: /${url}`);

    const docData = {
        title: title,
        url: `/${url}`,
        content: textContent,
        filePath: filePath,
        lastUpdated: new Date(),
    };
    
    // Add to Firestore collection
    await collectionRef.doc(docId).set(docData);

    // Prepare for vector store
    documents.push(Document.fromText(textContent, { title, url: `/${url}` }));
  }

  // Index documents in the vector store
  if (documents.length > 0) {
    console.log(`Indexing ${documents.length} documents in the vector store...`);
    await vectorStore.add(documents);
    console.log('Vector store indexing complete.');
  }

  console.log('Firestore seeding completed successfully.');
}

main().catch(console.error);

