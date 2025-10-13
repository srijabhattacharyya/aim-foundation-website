import type { Metadata } from 'next';
import CycleSafeClientPage from './CycleSafeClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'CycleSafe by AIM Foundation: Menstrual Health Support',
  description: 'AIM Foundation’s CycleSafe empowers girls with menstrual health education, sanitary pads, and awareness to keep them in school and build confidence.',
  keywords: [
    'AIM Foundation', 'CycleSafe', 'menstrual health Kolkata', 'adolescent girls hygiene',
    'free sanitary pads', 'menstrual health education', 'reproductive health awareness',
    'menstrual hygiene India', 'cervical health workshops', 'NGO menstrual support', 'breaking period stigma'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/cyclesafe',
    title: 'CycleSafe by AIM Foundation: Menstrual Health Support',
    description: 'AIM Foundation’s CycleSafe empowers girls with menstrual health education, sanitary pads, and awareness to keep them in school and build confidence.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'CycleSafe by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/cyclesafe',
    title: 'CycleSafe by AIM Foundation: Menstrual Health Support',
    description: 'AIM Foundation’s CycleSafe empowers girls with menstrual health education, sanitary pads, and awareness to keep them in school and build confidence.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/cyclesafe',
  },
};

export default function CycleSafePage() {
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
    "description": "AIM Foundation’s CycleSafe empowers girls with menstrual health education, sanitary pads, and awareness to keep them in school and build confidence."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-cyclesafe"
      />
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <CycleSafeClientPage />
      </Suspense>
    </>
  );
}
