
import type { Metadata } from 'next';
import GreenRootsClientPage from './GreenRootsClientPage';

export const metadata: Metadata = {
  title: 'GreenRoots - AIM Foundation',
  description: 'Sow today, breathe tomorrow. Promoting reforestation and expanding green cover through community participation.',
  alternates: {
    canonical: '/green-roots',
  },
};

export default function GreenRootsPage() {
  return <GreenRootsClientPage />;
}
