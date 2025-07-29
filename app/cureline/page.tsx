
import type { Metadata } from 'next';
import CureLineClientPage from './CureLineClientPage';

export const metadata: Metadata = {
  title: 'CureLine - AIM Foundation',
  description: 'Bringing essential medical services to remote and underserved communities through frontline healthcare camps.',
  alternates: {
    canonical: '/cureline',
  },
};

export default function CureLinePage() {
  return <CureLineClientPage />;
}
