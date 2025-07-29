
import type { Metadata } from 'next';
import CareCircleClientPage from './CareCircleClientPage';

export const metadata: Metadata = {
  title: 'CareCircle - AIM Foundation',
  description: 'A collaborative urban health initiative by AIM Foundation, focused on delivering accessible and inclusive medical services to underserved communities across Kolkata.',
  alternates: {
    canonical: '/carecircle',
  },
};

export default function CareCirclePage() {
  return <CareCircleClientPage />;
}
