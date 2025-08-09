
import type { Metadata } from 'next';
import CareCircleBlogPage from './CareCircleBlogPage';

export const metadata: Metadata = {
  title: 'CareCircle: Bringing Healing to the Heart of the City',
  description: "Learn how AIM Foundation's CareCircle initiative delivers compassionate, affordable, and inclusive medical care to underserved urban communities in Kolkata.",
  alternates: {
    canonical: '/blog/carecircle-bringing-healing-to-the-city',
  },
};

export default function Page() {
  return <CareCircleBlogPage />;
}
