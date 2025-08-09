
import type { Metadata } from 'next';
import SoulCircleBlogPage from './SoulCircleBlogPage';

export const metadata: Metadata = {
  title: 'SoulCircle: 24/7 Compassionate Mental Health Support',
  description: "Learn how AIM Foundation's SoulCircle app offers AI-powered, accessible, and compassionate mental health support to everyone, everywhere.",
  alternates: {
    canonical: '/blog/soulcircle-24-7-mental-health-support',
  },
};

export default function Page() {
  return <SoulCircleBlogPage />;
}

    
