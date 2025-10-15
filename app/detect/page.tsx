// /app/detect/page.tsx
import type { Metadata } from 'next';
import DetectClientPage from './DetectClientPage';

export const metadata: Metadata = {
  title: 'Detect Cervical Health | AIM Foundation Women’s Care',
  description: 'Detect by AIM Foundation empowers rural women with cervical cancer screenings, awareness, and training for frontline workers to save lives through early detection.',
  keywords: [
    'Detect AIM Foundation', 'cervical cancer screening', 'women health NGO',
    'rural women healthcare', 'women empowerment India', 'cancer awareness NGO',
    'frontline health workers', 'AIM Foundation health project'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/detect',
    title: 'Detect Cervical Health | AIM Foundation Women’s Care',
    description: 'Detect by AIM Foundation empowers rural women with cervical cancer screenings, awareness, and training for frontline workers to save lives through early detection.',
    images: [
      { url: 'https://aimindia.org.in/home.avif', width: 1200, height: 630, alt: 'Detect Cervical Health by AIM Foundation' }
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Detect Cervical Health | AIM Foundation Women’s Care',
    description: 'Detect by AIM Foundation empowers rural women with cervical cancer screenings, awareness, and training for frontline workers to save lives through early detection.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/detect',
  },
};

export default function DetectPage() {
  return <DetectClientPage />;
}
