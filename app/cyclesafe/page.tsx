
import type { Metadata } from 'next';
import CycleSafeClientPage from './CycleSafeClientPage';

export const metadata: Metadata = {
  title: 'CycleSafe - AIM Foundation',
  description: 'Dignity, Health, and Confidence for Every Girl. Supporting menstrual and reproductive health of underprivileged adolescent girls.',
  alternates: {
    canonical: '/cyclesafe',
  },
};

export default function CycleSafePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const from = typeof searchParams.from === 'string' ? searchParams.from : 'healthcare';
  return <CycleSafeClientPage from={from} />;
}
