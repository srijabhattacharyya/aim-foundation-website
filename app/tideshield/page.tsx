import type { Metadata } from 'next';
import TideShieldClientPage from './TideShieldClientPage';

export const metadata: Metadata = {
  title: 'TideShield - AIM Foundation',
  description: 'Plant today, protect tomorrow. A mangrove restoration initiative in the Sundarbans.',
  keywords: [
    'AIM Foundation',
    'TideShield',
    'mangrove restoration India',
    'Sundarbans conservation',
    'coastal ecosystem protection',
    'NGO environmental project',
    'climate resilience initiative',
    'community mangrove planting',
    'biodiversity restoration',
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/tideshield',
    title: 'TideShield - AIM Foundation',
    description: 'Plant today, protect tomorrow. A mangrove restoration initiative in the Sundarbans.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'TideShield Mangrove Restoration by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'TideShield - AIM Foundation',
    description: 'Plant today, protect tomorrow. A mangrove restoration initiative in the Sundarbans.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/tideshield',
  },
};

export default function TideShieldPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIM Foundation",
    url: "https://www.aimindia.org.in/",
    logo: "https://www.aimindia.org.in/logo.png",
    sameAs: [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    description: "Plant today, protect tomorrow. A mangrove restoration initiative in the Sundarbans by AIM Foundation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-tideshield"
      />
      <TideShieldClientPage />
    </>
  );
}
