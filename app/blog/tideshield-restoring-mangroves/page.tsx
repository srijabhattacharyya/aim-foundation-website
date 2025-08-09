
import type { Metadata } from 'next';
import TideShieldBlogPage from './TideShieldBlogPage';

export const metadata: Metadata = {
  title: 'TideShield: Restoring the Mangrove Heartbeat of the Sundarbans',
  description: "Learn how AIM Foundation's TideShield initiative is restoring the vital mangrove ecosystem of the Sundarbans, protecting communities and biodiversity.",
  alternates: {
    canonical: '/blog/tideshield-restoring-mangroves',
  },
};

export default function Page() {
  return <TideShieldBlogPage />;
}
