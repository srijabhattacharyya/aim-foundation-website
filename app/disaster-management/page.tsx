
import type { Metadata } from 'next';
import DisasterManagementClientPage from './DisasterManagementClientPage';

export const metadata: Metadata = {
  title: 'Disaster Management - AIM Foundation',
  description: 'Rapid response and lasting recovery. Learn about our disaster relief efforts.',
  alternates: {
    canonical: '/disaster-management',
  },
};

export default function DisasterManagementPage() {
  return <DisasterManagementClientPage />;
}
