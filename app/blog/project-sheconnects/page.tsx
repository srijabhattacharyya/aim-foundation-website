
import type { Metadata } from 'next';
import SheConnectsBlogPage from './SheConnectsBlogPage';

export const metadata: Metadata = {
  title: 'Project SheConnects: Empowering Women Through Technology',
  description: "Discover how AIM Foundation's SheConnects initiative is bridging the digital gender gap and empowering women to build sustainable livelihoods online.",
  alternates: {
    canonical: '/blog/project-sheconnects',
  },
};

export default function Page() {
  return <SheConnectsBlogPage />;
}

