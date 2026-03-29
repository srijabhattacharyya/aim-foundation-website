import type { Metadata } from 'next';
import IgniteChangeInitiativeClientPage from './IgniteChangeInitiativeClientPage';

export const metadata: Metadata = {
  title: 'Ignite Change by AIM Foundation: Empower Local Heroes',
  description:
    "AIM Foundation's Ignite Change Initiative mobilizes communities through grassroots social projects, volunteer-driven campaigns, seed funding, and project management training to empower local changemakers across India.",
  keywords: [
    'AIM Foundation',
    'Ignite Change initiative',
    'grassroots empowerment India',
    'community projects NGO',
    'social change programs',
    'volunteer-driven initiatives India',
    'seed funding NGO projects',
    'social responsibility AIM Foundation',
    'changemakers India',
    'local heroes empowerment NGO',
    'community outreach programs India'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/ignite-change-initiative',
    title: 'Ignite Change by AIM Foundation: Empower Local Heroes',
    description: "AIM Foundation's Ignite Change Initiative mobilizes communities through grassroots social projects, volunteer-driven campaigns, seed funding, and project management training to empower local changemakers across India.",
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Ignite Change by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Ignite Change by AIM Foundation: Empower Local Heroes',
    description: "AIM Foundation's Ignite Change Initiative mobilizes communities through grassroots social projects, volunteer-driven campaigns, seed funding, and project management training to empower local changemakers across India.",
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/ignite-change-initiative',
  },
};

export default function IgniteChangeInitiativePage() {
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
    "@id": "https://www.aimindia.org.in/ignite-change-initiative#webpage",
    "url": "https://www.aimindia.org.in/ignite-change-initiative",
    "name": "Ignite Change by AIM Foundation: Empower Local Heroes",
    "description": "AIM Foundation's Ignite Change Initiative mobilizes communities through grassroots social projects, volunteer-driven campaigns, seed funding, and project management training to empower local changemakers across India.",
    "isPartOf": { "@id": "https://www.aimindia.org.in/#organization" },
    "knowsAbout": [
      "grassroots NGO India",
      "social change NGO India",
      "community empowerment India",
      "community engagement NGO India",
      "social awareness campaign India",
      "community mobilization NGO India",
      "youth volunteer NGO India",
      "NGO volunteer program Kolkata",
      "NGO for local community development Kolkata",
      "donate for social change India"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateSchema) }}
        key="org-schema-ignite-change-donate"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        key="org-schema-ignite-change-webpage"
      />
      <IgniteChangeInitiativeClientPage />
    </>
  );
}
