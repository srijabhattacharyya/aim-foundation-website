
import type { Metadata } from 'next';
import SheConnectsClientPage from './SheConnectsClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'SheConnects by AIM Foundation: Digital & Financial Literacy',
  description: 'AIM Foundation’s SheConnects empowers adolescent girls with digital and financial literacy, fostering independence, confidence, and leadership skills.',
  keywords: [
    'AIM Foundation SheConnects', 'digital literacy for girls', 'financial literacy for women',
    'women empowerment NGO India', 'adolescent girls empowerment', 'leadership skills for girls'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/sheconnects',
    title: 'SheConnects by AIM Foundation: Digital & Financial Literacy',
    description: 'AIM Foundation’s SheConnects empowers adolescent girls with digital and financial literacy, fostering independence, confidence, and leadership skills.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'SheConnects by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'SheConnects by AIM Foundation: Digital & Financial Literacy',
    description: 'AIM Foundation’s SheConnects empowers adolescent girls with digital and financial literacy, fostering independence, confidence, and leadership skills.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/sheconnects',
  },
};

export default function SheConnectsPage() {
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
    "description": "AIM Foundation’s SheConnects empowers adolescent girls with digital and financial literacy, fostering independence, confidence, and leadership skills."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-sheconnects"
      />
        <Suspense fallback={<Skeleton className="h-screen w-full" />}>
            <SheConnectsClientPage />
        </Suspense>
    </>
  );
}
