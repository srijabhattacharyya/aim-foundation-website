
import type { Metadata } from 'next';
import VidyaShaktiClientPage from './VidyaShaktiClientPage';

export const metadata: Metadata = {
  title: 'VidyaShakti - AIM Foundation',
  description: 'Empowering Rural Minds with Digital Wisdom. AI-powered academic support for rural learners.',
  alternates: {
    canonical: '/vidyashakti',
  },
};

export default function VidyaShaktiPage() {
  return <VidyaShaktiClientPage />;
}
