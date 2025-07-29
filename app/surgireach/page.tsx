
import type { Metadata } from 'next';
import SurgiReachClientPage from './SurgiReachClientPage';

export const metadata: Metadata = {
  title: 'SurgiReach - AIM Foundation',
  description: 'Providing Life-Changing Surgeries, Restoring Hope. Ensuring critical medical care is available to all.',
  alternates: {
    canonical: '/surgireach',
  },
};

export default function SurgiReachPage() {
  return <SurgiReachClientPage />;
}
