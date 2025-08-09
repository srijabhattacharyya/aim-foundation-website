
import type { Metadata } from 'next';
import DetectClientPage from './DetectClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Detect - AIM Foundation',
  description: 'Detect Early. Live Fully. Empowering rural women through awareness and early detection of cervical cancer.',
  alternates: {
    canonical: '/detect',
  },
};

export default function DetectPage() {
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <DetectClientPage />
    </Suspense>
  );
}
