
import type { Metadata } from 'next';
import EmpowerEnglishBlogPage from './EmpowerEnglishBlogPage';

export const metadata: Metadata = {
  title: 'Confidence Begins with Conversation: The Empower English Story',
  description: "Discover how AIM Foundation's Empower English initiative is helping students in West Bengal find their voice, confidence, and a world of new opportunities.",
  alternates: {
    canonical: '/blog/empower-english-story',
  },
};

export default function Page() {
  return <EmpowerEnglishBlogPage />;
}
