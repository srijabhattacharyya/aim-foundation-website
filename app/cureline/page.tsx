import type { Metadata } from 'next';
import CureLineClientPage from './CureLineClientPage';

export const metadata: Metadata = {
  title: 'AIM Foundation | CureLine Frontline Healthcare Services',
  description: 'CureLine by AIM Foundation delivers essential healthcare to remote villages, forest areas, and disaster-hit regions with free camps, medicines, and doctors.',
  keywords: [
    'AIM Foundation CureLine', 'rural healthcare camps', 'frontline healthcare India', 
    'free medical services West Bengal', 'healthcare for remote villages', 
    'disaster relief medical aid', 'AIM Foundation health initiative', 
    'mobile health camps India', 'community healthcare support', 
    'free medicines and consultations'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/cureline',
    title: 'AIM Foundation | CureLine Frontline Healthcare Services',
    description: 'CureLine by AIM Foundation delivers essential healthcare to remote villages, forest areas, and disaster-hit regions with free camps, medicines, and doctors.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation CureLine Healthcare Services',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation | CureLine Frontline Healthcare Services',
    description: 'CureLine by AIM Foundation delivers essential healthcare to remote villages, forest areas, and disaster-hit regions with free camps, medicines, and doctors.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/cureline',
  },
};

export default function CureLinePage() {
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
    "description": "CureLine by AIM Foundation delivers essential healthcare to remote villages, forest areas, and disaster-hit regions with free camps, medicines, and doctors."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-cureline"
      />
      <CureLineClientPage />
    </>
  );
}
