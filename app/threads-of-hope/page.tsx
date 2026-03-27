import type { Metadata } from 'next';
import ThreadsOfHopeClientPage from './ThreadsOfHopeClientPage';

export const metadata: Metadata = {
  title: 'Threads of Hope: SuiDhaga & Krishti | AIM Foundation',
  description: 'Discover how SuiDhaga and Krishti initiatives by AIM Foundation empower underserved women with skills, resources, and opportunities for financial independence.',
  keywords: [
    'SuiDhaga', 'Krishti', 'women empowerment', 'skill development', 'livelihood generation', 
    'NGO India', 'women entrepreneurs', 'vocational training', 'tailoring skills', 'sustainable income'
  ],
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/threads-of-hope',
    title: 'Threads of Hope: SuiDhaga & Krishti | AIM Foundation',
    description: 'Empowering women through skill development and entrepreneurship.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Threads of Hope - Women Empowerment',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Threads of Hope: SuiDhaga & Krishti | AIM Foundation',
    description: 'Stitching a future of women’s empowerment through SuiDhaga and Krishti.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/threads-of-hope',
  },
};

export default function ThreadsOfHopePage() {
  return <ThreadsOfHopeClientPage />;
}
