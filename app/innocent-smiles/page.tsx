
import type { Metadata } from 'next';
import InnocentSmilesClientPage from './InnocentSmilesClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Innocent Smiles - AIM Foundation',
  description: 'Bright Futures Begin with Innocent Smiles. Nurturing creative and academic potential.',
  alternates: {
    canonical: '/innocent-smiles',
  },
};

export default function InnocentSmilesPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const from = typeof searchParams.from === 'string' ? searchParams.from : 'educational';
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <InnocentSmilesClientPage from={from} />
    </Suspense>
  );
}
