
import type { Metadata } from 'next';
import IgniteChangeInitiativeClientPage from './IgniteChangeInitiativeClientPage';

export const metadata: Metadata = {
  title: 'Ignite Change by AIM Foundation: Empower Local Heroes',
  description: 'AIM Foundation’s Ignite Change empowers communities with seed funding, training, and support to launch grassroots projects and drive social transformation.',
  keywords: ['AIM Foundation', 'Ignite Change initiative', 'grassroots empowerment India', 'community projects NGO', 'social change programs', 'volunteer-driven initiatives India', 'seed funding NGO projects', 'social responsibility AIM Foundation', 'changemakers India', 'local heroes empowerment NGO', 'community outreach programs India'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/ignite-change-initiative',
    title: 'Ignite Change by AIM Foundation: Empower Local Heroes',
    description: 'AIM Foundation’s Ignite Change empowers communities with seed funding, training, and support to launch grassroots projects and drive social transformation.',
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
    url: 'https://aimindia.org.in/ignite-change-initiative',
    title: 'Ignite Change by AIM Foundation: Empower Local Heroes',
    description: 'AIM Foundation’s Ignite Change empowers communities with seed funding, training, and support to launch grassroots projects and drive social transformation.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
      canonical: '/ignite-change-initiative',
  },
};

export default function IgniteChangeInitiativePage() {
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
    "description": "AIM Foundation’s Ignite Change empowers communities with seed funding, training, and support to launch grassroots projects and drive social transformation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-ignite-change"
      />
      <IgniteChangeInitiativeClientPage />
    </>
  );
}
