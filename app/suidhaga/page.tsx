
import type { Metadata } from 'next';
import SuiDhagaClientPage from './SuiDhagaClientPage';

export const metadata: Metadata = {
  title: 'SuiDhaga - AIM Foundation',
  description: 'Stitching Dreams, Weaving Futures. Skill development initiative for empowering women.',
  alternates: {
    canonical: '/suidhaga',
  },
};

export default function SuiDhagaPage() {
  return <SuiDhagaClientPage />;
}
