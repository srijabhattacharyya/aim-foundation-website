
import type { Metadata } from 'next';
import OralScanClientPage from './OralScanClientPage';

export const metadata: Metadata = {
  title: 'OralScan - AIM Foundation',
  description: 'Early Detection for a Healthy Smile, a Healthy Life. Providing free oral cancer screening camps.',
  alternates: {
    canonical: '/oralscan',
  },
};

export default function OralScanPage() {
  return <OralScanClientPage />;
}
