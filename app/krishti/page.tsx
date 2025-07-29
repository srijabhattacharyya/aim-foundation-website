
import type { Metadata } from 'next';
import KrishtiClientPage from './KrishtiClientPage';

export const metadata: Metadata = {
  title: 'Krishti - AIM Foundation',
  description: 'She Creates. Krishti Elevates. Guiding skilled women toward entrepreneurship.',
  alternates: {
    canonical: '/krishti',
  },
};

export default function KrishtiPage() {
  return <KrishtiClientPage />;
}
