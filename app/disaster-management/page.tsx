import type { Metadata } from 'next';
import DisasterManagementClientPage from './DisasterManagementClientPage';

export const metadata: Metadata = {
  title: 'Disaster Relief by AIM Foundation: Emergency Aid & Support',
  description: 'AIM Foundation’s Disaster Relief Program provides emergency food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and crises.',
  keywords: [
    'AIM Foundation',
    'disaster relief India',
    'emergency aid NGO',
    'flood relief Kolkata',
    'cyclone relief West Bengal',
    'earthquake relief support',
    'humanitarian aid NGO India',
    'disaster management AIM Foundation',
    'emergency food and shelter NGO',
    'medical relief camps disaster',
    'community resilience programs India'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/disaster-management',
    title: 'Disaster Relief by AIM Foundation: Emergency Aid & Support',
    description: 'AIM Foundation’s Disaster Relief Program provides emergency food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and crises.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Disaster Relief by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Disaster Relief by AIM Foundation: Emergency Aid & Support',
    description: 'AIM Foundation’s Disaster Relief Program provides emergency food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and crises.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/disaster-management',
  },
};

export default function DisasterManagementPage() {
  const donateSchema = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "recipient": {
      "@type": "NGO",
      "name": "AIM Foundation",
      "url": "https://aimindia.org.in",
      "logo": "https://aimindia.org.in/logo.png"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.aimindia.org.in/disaster-management#webpage",
    "url": "https://www.aimindia.org.in/disaster-management",
    "name": "Disaster Relief by AIM Foundation: Emergency Aid & Support",
    "description": "AIM Foundation delivers rapid disaster relief including emergency food, shelter, mobile medical units, and psychosocial support to communities hit by floods and cyclones in India.",
    "isPartOf": { "@id": "https://www.aimindia.org.in/#organization" },
    "knowsAbout": [
       "flood relief India",
    "disaster relief NGO India",
    "natural disaster relief NGO India",
    "donate for flood relief India",
    "flood relief NGO West Bengal",
    "cyclone relief West Bengal",
    "cyclone Amphan relief West Bengal",
    "disaster relief Sundarbans",
    "Sundarbans flood relief"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateSchema) }}
        key="org-schema-disaster-donate"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        key="org-schema-disaster-webpage"
      />
      <DisasterManagementClientPage />
    </>
  );
}
