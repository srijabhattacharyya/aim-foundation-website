import type { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'CycleSafe by AIM Foundation: Menstrual Health Support',
  description: 'AIM Foundation’s CycleSafe empowers girls with menstrual health education, sanitary pads, and awareness to keep them in school and build confidence.',
  keywords: [
    'CycleSafe AIM Foundation', 'menstrual health education', 'period hygiene NGO',
    'girls education India', 'women empowerment NGO', 'sanitary pads distribution',
    'health awareness India', 'AIM Foundation women health project'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/cyclesafe',
    title: 'CycleSafe by AIM Foundation: Menstrual Health Support',
    description: 'AIM Foundation’s CycleSafe empowers girls with menstrual health education, sanitary pads, and awareness to keep them in school and build confidence.',
    images: [
      { url: 'https://aimindia.org.in/home.avif', width: 1200, height: 630, alt: 'CycleSafe by AIM Foundation' }
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'CycleSafe by AIM Foundation: Menstrual Health Support',
    description: 'AIM Foundation’s CycleSafe empowers girls with menstrual health education, sanitary pads, and awareness to keep them in school and build confidence.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/cyclesafe',
  },
};

const CycleSafeClientPage = dynamic(
  () => import('./CycleSafeClientPage'),
  { ssr: false }
);

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
      <Suspense fallback={<div>Loading...</div>}>
        <CycleSafeClientPage />
      </Suspense>
    </>
  );
}
