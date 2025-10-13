import type { Metadata } from 'next';
import MilieuClientPage from './MilieuClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'AIM Foundation | Milieu Child Development & Inclusion',
  description:
    'AIM Foundation’s Milieu fosters empathy and inclusion by uniting children from diverse backgrounds, shaping conscious citizens for a compassionate future.',
  keywords: [
    'AIM Foundation Milieu',
    'child development programs',
    'inclusive education NGO',
    'social harmony for children',
    'empathy building workshops',
    'Kolkata child NGO',
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/milieu',
    title: 'AIM Foundation | Milieu Child Development & Inclusion',
    description:
      'AIM Foundation’s Milieu fosters empathy and inclusion by uniting children from diverse backgrounds, shaping conscious citizens for a compassionate future.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Milieu Program',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation | Milieu Child Development & Inclusion',
    description:
      'AIM Foundation’s Milieu fosters empathy and inclusion by uniting children from diverse backgrounds, shaping conscious citizens for a compassionate future.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/milieu',
  },
};

export default function MilieuPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIM Foundation',
    url: 'https://www.aimindia.org.in/',
    logo: 'https://www.aimindia.org.in/logo.png',
    sameAs: [
      'https://www.facebook.com/aimindiango/',
      'https://x.com/aimindiango',
      'https://www.instagram.com/aimfoundation_ngo/',
      'https://www.linkedin.com/in/aim-foundation-ngo/',
      'https://www.youtube.com/@aimfoundation2604',
    ],
    description:
      'AIM Foundation’s Milieu fosters empathy and inclusion by uniting children from diverse backgrounds, shaping conscious citizens for a compassionate future.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-milieu"
      />
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <MilieuClientPage />
      </Suspense>
    </>
  );
}
