import type { Metadata } from 'next';
import RootsOfChangeClientPage from './RootsOfChangeClientPage';

export const metadata: Metadata = {
  title: 'Roots of Change - AIM Foundation',
  description:
    'Planting knowledge, growing change. Cultivating environmental awareness and sustainable habits.',
  keywords: [
    'AIM Foundation',
    'Roots of Change',
    'environmental awareness India',
    'sustainability programs NGO',
    'tree plantation initiatives',
    'eco-friendly education',
    'climate change awareness NGO',
    'environment education Kolkata',
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/roots-of-change',
    title: 'Roots of Change - AIM Foundation',
    description:
      'Planting knowledge, growing change. Cultivating environmental awareness and sustainable habits.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Roots of Change - AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/roots-of-change',
    title: 'Roots of Change - AIM Foundation',
    description:
      'Planting knowledge, growing change. Cultivating environmental awareness and sustainable habits.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/roots-of-change',
  },
};

export default function RootsOfChangePage() {
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
      'Planting knowledge, growing change. Cultivating environmental awareness and sustainable habits.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-roots-of-change"
      />
      <RootsOfChangeClientPage />
    </>
  );
}
