
import type { Metadata } from 'next';
import InnocentSmilesClientPage from './InnocentSmilesClientPage';

export const metadata: Metadata = {
  title: 'Innocent Smiles - AIM Foundation',
  description: 'Bright Futures Begin with Innocent Smiles. Nurturing creative and academic potential.',
  alternates: {
    canonical: '/innocent-smiles',
  },
};

export default function InnocentSmilesPage() {
  return <InnocentSmilesClientPage />;
}
