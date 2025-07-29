
import type { Metadata } from 'next';
import RootsOfChangeClientPage from './RootsOfChangeClientPage';

export const metadata: Metadata = {
  title: 'Roots of Change - AIM Foundation',
  description: 'Planting knowledge, growing change. Cultivating environmental awareness and sustainable habits.',
  alternates: {
    canonical: '/roots-of-change',
  },
};

export default function RootsOfChangePage() {
  return <RootsOfChangeClientPage />;
}
