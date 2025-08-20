
import type { Metadata } from 'next';
import DetectClientPage from './DetectClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Detect Cervical Health | AIM Foundation Women’s Care',
  description: 'Detect by AIM Foundation empowers rural women with cervical cancer screenings, awareness, and training for frontline workers to save lives through early detection.',
  keywords: ['AIM Foundation', 'Detect AIM Foundation', 'cervical cancer awareness', 'women’s healthcare NGO', 'rural women health India', 'cervical cancer screening camps', 'HPV awareness', 'women empowerment healthcare', 'gynecological health Kolkata', 'cancer prevention AIM Foundation'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/detect',
    title: 'Detect Cervical Health | AIM Foundation Women’s Care',
    description: 'Detect by AIM Foundation empowers rural women with cervical cancer screenings, awareness, and training for frontline workers to save lives through early detection.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Detect by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/detect',
    title: 'Detect Cervical Health | AIM Foundation Women’s Care',
    description: 'Detect by AIM Foundation empowers rural women with cervical cancer screenings, awareness, and training for frontline workers to save lives through early detection.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/detect',
  },
};

export default function DetectPage() {
    const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://www.aimindia.org.in/logo.png",
    "sameAs": [
        "https://www.facebook.com/aimindiango/",
        "https://x.com/aimindiango",
        "https://www.instagram.com/aimfoundation_ngo/",
        "https://www.linkedin.com/in/aim-foundation-ngo/",
        "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "Detect by AIM Foundation empowers rural women with cervical cancer screenings, awareness, and training for frontline workers to save lives through early detection."
  };
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
            }}
            key="org-schema-detect"
        />
        <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <DetectClientPage />
        </Suspense>
    </>
  );
}
