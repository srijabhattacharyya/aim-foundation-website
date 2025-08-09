
import type { Metadata } from 'next';
import OralScanBlogPage from './OralScanBlogPage';

export const metadata: Metadata = {
  title: 'Screening Today for a Healthier Tomorrow: The OralScan Story',
  description: "Learn how AIM Foundation's OralScan initiative is fighting oral cancer in India through early detection and awareness.",
  alternates: {
    canonical: '/blog/screening-today-for-a-healthier-tomorrow',
  },
};

export default function Page() {
  return <OralScanBlogPage />;
}
