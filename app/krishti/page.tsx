
import type { Metadata } from 'next';
import KrishtiClientPage from './KrishtiClientPage';

export const metadata: Metadata = {
  title: 'Krishti by AIM Foundation: Women’s Entrepreneurship Program',
  description: 'AIM Foundation’s Krishti empowers skilled women to become entrepreneurs by providing workspaces, production support, and market access for independence.',
  keywords: ['AIM Foundation', 'Krishti', 'women entrepreneurship Kolkata', 'women empowerment NGO India', 'micro-enterprise support', 'tailoring business women', 'embroidery entrepreneurs', 'women skill to business', 'livelihood programs AIM Foundation', 'women self-reliance Kolkata', 'SuiDhaga to Krishti journey'],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/krishti',
    title: 'Krishti by AIM Foundation: Women’s Entrepreneurship Program',
    description: 'AIM Foundation’s Krishti empowers skilled women to become entrepreneurs by providing workspaces, production support, and market access for independence.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Krishti by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/krishti',
    title: 'Krishti by AIM Foundation: Women’s Entrepreneurship Program',
    description: 'AIM Foundation’s Krishti empowers skilled women to become entrepreneurs by providing workspaces, production support, and market access for independence.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/krishti',
  },
};

export default function KrishtiPage() {
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
    "description": "AIM Foundation’s Krishti empowers skilled women to become entrepreneurs by providing workspaces, production support, and market access for independence."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-krishti"
      />
      <KrishtiClientPage />
    </>
  );
}
