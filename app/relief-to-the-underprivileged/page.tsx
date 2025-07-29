
import type { Metadata } from 'next';
import ReliefClientPage from './ReliefClientPage';

export const metadata: Metadata = {
  title: 'Relief to the Underprivileged - AIM Foundation',
  description: 'Providing Hope and Support in Times of Need. Extending a helping hand and restoring dignity.',
  alternates: {
    canonical: '/relief-to-the-underprivileged',
  },
};

export default function ReliefPage() {
  return <ReliefClientPage />;
}
