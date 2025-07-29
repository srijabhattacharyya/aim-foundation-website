
import type { Metadata } from 'next';
import EduAccessClientPage from './EduAccessClientPage';

export const metadata: Metadata = {
  title: 'EduAccess - AIM Foundation',
  description: 'Bridging distances and building futures by delivering quality education to rural West Bengal through expert-led online classes.',
  alternates: {
    canonical: '/eduaccess',
  },
};

export default function EduAccessPage() {
  return <EduAccessClientPage />;
}
