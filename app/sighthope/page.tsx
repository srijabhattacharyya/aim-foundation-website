import type { Metadata } from 'next';
import SightHopeClientPage from './SightHopeClientPage';

export const metadata: Metadata = {
  title: 'SightHope Eye Care | AIM Foundation Vision Initiative',
  description:
    'SightHope by AIM Foundation restores vision through free eye camps, cataract surgeries, and spectacles, bringing dignity, mobility, and hope to underserved communities.',
  keywords: [
    'AIM Foundation',
    'SightHope AIM Foundation',
    'free eye camps Kolkata',
    'cataract surgery NGO India',
    'vision care for poor',
    'free spectacles distribution',
    'eye health initiative',
    'community eye care Kolkata',
    'restore sight AIM Foundation',
    'avoidable blindness prevention',
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/sighthope',
    title: 'SightHope Eye Care | AIM Foundation Vision Initiative',
    description:
      'SightHope by AIM Foundation restores vision through free eye camps, cataract surgeries, and spectacles, bringing dignity, mobility, and hope to underserved communities.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'SightHope Eye Care Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'SightHope Eye Care | AIM Foundation Vision Initiative',
    description:
      'SightHope by AIM Foundation restores vision through free eye camps, cataract surgeries, and spectacles, bringing dignity, mobility, and hope to underserved communities.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/sighthope',
  },
};

export default function SightHopePage() {
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
    description:
      "SightHope by AIM Foundation restores vision through free eye camps, cataract surgeries, and spectacles, bringing dignity, mobility, and hope to underserved communities."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-sighthope"
      />
      <SightHopeClientPage />
    </>
  );
}
