
import type { Metadata } from 'next';
import VidyaShaktiBlogPage from './VidyaShaktiBlogPage';

export const metadata: Metadata = {
  title: 'VidyaShakti: Bringing AI-Powered Multilingual Learning to Rural Classrooms',
  description: "Discover how AIM Foundation's VidyaShakti app is using AI to provide on-demand, multilingual academic support to rural and first-generation learners.",
  alternates: {
    canonical: '/blog/vidyashakti-ai-learning',
  },
};

export default function Page() {
  return <VidyaShaktiBlogPage />;
}

