
import type { Metadata } from 'next';
import SheConnectsClientPage from './SheConnectsClientPage';

export const metadata: Metadata = {
  title: 'SheConnects - AIM Foundation',
  description: 'Bridging Women to the Digital World. Empowering women through technology and financial independence.',
  alternates: {
    canonical: '/sheconnects',
  },
};

export default function SheConnectsPage() {
  return <SheConnectsClientPage />;
}
