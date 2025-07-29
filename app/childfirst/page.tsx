
import type { Metadata } from 'next';
import ChildFirstClientPage from './ChildFirstClientPage';

export const metadata: Metadata = {
  title: 'ChildFirst - AIM Foundation',
  description: 'A compassionate healthcare initiative offering pediatric and general health camps for children of sex workers in Rambagan and Sonagachi.',
  alternates: {
    canonical: '/childfirst',
  },
};

export default function ChildFirstPage() {
  return <ChildFirstClientPage />;
}
