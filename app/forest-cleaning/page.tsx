
import type { Metadata } from 'next';
import ForestCleaningClientPage from './ForestCleaningClientPage';

export const metadata: Metadata = {
  title: 'Forest Cleaning - AIM Foundation',
  description: 'Join our hands-on initiative to restore natural habitats by organizing large-scale forest cleaning drives to preserve biodiversity.',
  alternates: {
    canonical: '/forest-cleaning',
  },
};

export default function ForestCleaningPage() {
  return <ForestCleaningClientPage />;
}
