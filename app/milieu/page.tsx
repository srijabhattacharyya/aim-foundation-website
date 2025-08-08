
import type { Metadata } from 'next';
import MilieuClientPage from './MilieuClientPage';

export const metadata: Metadata = {
  title: 'Milieu - AIM Foundation',
  description: 'Bridging Backgrounds, Building Bonds. Shaping Conscious Citizens of Tomorrow.',
  alternates: {
    canonical: '/milieu',
  },
};

export default function MilieuPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const from = typeof searchParams.from === 'string' ? searchParams.from : 'educational';
  return <MilieuClientPage from={from} />;
}
