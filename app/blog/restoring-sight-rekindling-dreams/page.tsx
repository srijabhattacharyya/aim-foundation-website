
import type { Metadata } from 'next';
import SightHopeBlogPage from './SightHopeBlogPage';

export const metadata: Metadata = {
  title: 'Restoring Sight, Rekindling Dreams: The Journey of SightHope',
  description: "Learn how AIM Foundation's SightHope initiative provides free, life-changing eye care and surgeries to underserved communities.",
  alternates: {
    canonical: '/blog/restoring-sight-rekindling-dreams',
  },
};

export default function Page() {
  return <SightHopeBlogPage />;
}

