
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

export default function DetectPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const from = typeof searchParams.from === 'string' ? searchParams.from : 'healthcare';

  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <DetectClientPage from={from} />
    </Suspense>
  );
}
