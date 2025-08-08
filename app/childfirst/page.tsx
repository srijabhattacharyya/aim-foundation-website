
import type { Metadata } from 'next';
import ChildFirstClientPage from './ChildFirstClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'ChildFirst - AIM Foundation',
  description: 'A compassionate healthcare initiative offering pediatric and general health camps for children of sex workers in Rambagan and Sonagachi.',
  alternates: {
    canonical: '/childfirst',
  },
};

export default function ChildFirstPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const from = typeof searchParams.from === 'string' ? searchParams.from : 'healthcare';
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <ChildFirstClientPage from={from} />
    </Suspense>
  );
}
