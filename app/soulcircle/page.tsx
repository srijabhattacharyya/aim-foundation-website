
import type { Metadata } from 'next';
import SoulCircleClientPage from './SoulCircleClientPage';

export const metadata: Metadata = {
  title: 'SoulCircle - AIM Foundation',
  description: 'Safe Space to Talk and Heal. 24/7 AI-powered mental health support.',
  alternates: {
    canonical: '/soulcircle',
  },
};

export default function SoulCirclePage() {
  return <SoulCircleClientPage />;
}
