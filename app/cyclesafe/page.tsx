
import type { Metadata } from 'next';
import CycleSafeClientPage from './CycleSafeClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'CycleSafe - AIM Foundation',
  description: 'Dignity, Health, and Confidence for Every Girl. Supporting menstrual and reproductive health of underprivileged adolescent girls.',
  alternates: {
    canonical: '/cyclesafe',
  },
};

export default function CycleSafePage() {
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <CycleSafeClientPage />
    </Suspense>
  );
}
