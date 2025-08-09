
import type { Metadata } from 'next';
import CureLineBlogPage from './CureLineBlogPage';

export const metadata: Metadata = {
  title: 'CureLine: Bringing Healthcare to the Last Mile - AIM Foundation',
  description: "Learn how AIM Foundation's CureLine initiative is delivering essential medical services to underserved communities, bridging critical care gaps, and ensuring health access for all.",
  alternates: {
    canonical: '/blog/cureline-bringing-healthcare-to-the-last-mile',
  },
};

export default function Page() {
  return <CureLineBlogPage />;
}

