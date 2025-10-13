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
    "description": "AIM Foundation’s Disaster Relief Program provides emergency food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and crises."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-disaster"
      />
      <DisasterManagementClientPage />
    </>
  );
}
