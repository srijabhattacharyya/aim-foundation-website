
import type { Metadata } from 'next';
import TideShieldClientPage from './TideShieldClientPage';

export const metadata: Metadata = {
  title: 'TideShield - AIM Foundation',
  description: 'Plant today, protect tomorrow. A mangrove restoration initiative in the Sundarbans.',
  alternates: {
    canonical: '/tideshield',
  },
};

export default function TideShieldPage() {
  return <TideShieldClientPage />;
}
