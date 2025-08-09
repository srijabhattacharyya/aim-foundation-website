
import type { Metadata } from 'next';
import ChildFirstBlogPage from './ChildFirstBlogPage';

export const metadata: Metadata = {
  title: 'ChildFirst: Bringing Health, Hope, and Dignity to Children of Rambagan and Sonagachi',
  description: "Learn how AIM Foundation's ChildFirst initiative provides free pediatric and general healthcare to children in Kolkata's red-light districts.",
  alternates: {
    canonical: '/blog/childfirst-health-hope-dignity',
  },
};

export default function Page() {
  return <ChildFirstBlogPage />;
}
