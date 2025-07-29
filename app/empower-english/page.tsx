
import type { Metadata } from 'next';
import EmpowerEnglishClientPage from './EmpowerEnglishClientPage';

export const metadata: Metadata = {
  title: 'Empower English - AIM Foundation',
  description: 'From silence to self-expression. Spoken English training for students from underserved communities.',
  alternates: {
    canonical: '/empower-english',
  },
};

export default function EmpowerEnglishPage() {
  return <EmpowerEnglishClientPage />;
}
