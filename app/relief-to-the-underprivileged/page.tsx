import type { Metadata } from 'next';
import ReliefClientPage from './ReliefClientPage';

export const metadata: Metadata = {
  title: 'Relief to Underprivileged by AIM Foundation: Support & Aid',
  description:
    'AIM Foundation’s Relief to the Underprivileged program provides food, water, clothing, and essentials to marginalized families, restoring hope and dignity.',
  keywords: [
    'AIM Foundation',
    'relief to underprivileged',
    'NGO food distribution India',
    'ration kits NGO Kolkata',
    'clean water and sanitation support',
    'clothing distribution NGO',
    'support for slum families',
    'immediate relief aid India',
    'blankets and essentials for poor',
    'humanitarian relief',
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/relief-to-the-underprivileged',
    title: 'Relief to Underprivileged by AIM Foundation: Support & Aid',
    description:
      'AIM Foundation’s Relief to the Underprivileged program provides food, water, clothing, and essentials to marginalized families, restoring hope and dignity.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Relief to Underprivileged by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Relief to Underprivileged by AIM Foundation: Support & Aid',
    description:
      'AIM Foundation’s Relief to the Underprivileged program provides food, water, clothing, and essentials to marginalized families, restoring hope and dignity.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/relief-to-the-underprivileged',
  },
};

export default function ReliefPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "recipient": {
      "@type": "NGO",
      "name": "AIM Foundation",
      "url": "https://aimindia.org.in",
      "logo": "https://aimindia.org.in/logo.png"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-relief"
      />
      <ReliefClientPage />
    </>
  );
}
