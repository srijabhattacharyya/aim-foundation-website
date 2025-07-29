
import type { Metadata } from 'next';
import SightHopeClientPage from './SightHopeClientPage';

export const metadata: Metadata = {
  title: 'SightHope - AIM Foundation',
  description: 'Bringing Light to Lives. Providing free eye care to underserved communities.',
  alternates: {
    canonical: '/sighthope',
  },
};

export default function SightHopePage() {
  return <SightHopeClientPage />;
}
