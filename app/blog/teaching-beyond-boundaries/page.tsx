
import type { Metadata } from 'next';
import EduAccessBlogPage from './EduAccessBlogPage';

export const metadata: Metadata = {
  title: 'Teaching Beyond Boundaries: The Story of EduAccess',
  description: "Discover how AIM Foundation's EduAccess initiative is delivering quality education to rural West Bengal through expert-led online classes.",
  alternates: {
    canonical: '/blog/teaching-beyond-boundaries',
  },
};

export default function Page() {
  return <EduAccessBlogPage />;
}

