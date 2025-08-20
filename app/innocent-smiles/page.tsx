
import type { Metadata } from 'next';
import InnocentSmilesClientPage from './InnocentSmilesClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'AIM Foundation | Innocent Smiles - Child Growth Program',
  description: 'AIM Foundation’s Innocent Smiles empowers underprivileged children with education, art, dance, and music—fostering creativity, confidence, and brighter futures.',
  keywords: ['AIM Foundation Innocent Smiles', 'AIM Foundation child growth', 'NGO for children Kolkata', 'holistic education NGO', 'child empowerment program'],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/innocent-smiles',
    title: 'AIM Foundation | Innocent Smiles - Child Growth Program',
    description: 'AIM Foundation’s Innocent Smiles empowers underprivileged children with education, art, dance, and music—fostering creativity, confidence, and brighter futures.',
    images: [
        {
            url: 'https://aimindia.org.in/home.avif',
            width: 1200,
            height: 630,
            alt: 'AIM Foundation Innocent Smiles Program',
        },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/innocent-smiles',
    title: 'AIM Foundation | Innocent Smiles - Child Growth Program',
    description: 'AIM Foundation’s Innocent Smiles empowers underprivileged children with education, art, dance, and music—fostering creativity, confidence, and brighter futures.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/innocent-smiles',
  },
};

export default function InnocentSmilesPage() {
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
    "description": "AIM Foundation’s Innocent Smiles empowers underprivileged children with education, art, dance, and music—fostering creativity, confidence, and brighter futures."
    };
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schemaMarkup),
            }}
            key="org-schema-innocent-smiles"
        />
        <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <InnocentSmilesClientPage />
        </Suspense>
    </>
  );
}

