
import type { Metadata } from 'next';
import MilieuBlogPage from './MilieuBlogPage';

export const metadata: Metadata = {
  title: 'Nurturing a Kinder Tomorrow: The Story of Milieu',
  description: "Discover how AIM Foundation's Milieu initiative brings children from diverse backgrounds together to build empathy, respect, and social harmony.",
  alternates: {
    canonical: '/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu',
  },
};

export default function Page() {
  return <MilieuBlogPage />;
}

