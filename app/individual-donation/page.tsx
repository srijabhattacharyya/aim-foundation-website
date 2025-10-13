import type { Metadata } from 'next';
import IndividualDonationClientPage from './IndividualDonationClientPage';

export const metadata: Metadata = {
  title: 'Donate to AIM Foundation | Support Lasting Change',
  description: 'Support AIM Foundation with your donation. Help provide education, healthcare, women empowerment, and sustainability for communities in need across India.',
  keywords: [
    'AIM Foundation donate',
    'donate to AIM Foundation India',
    'support AIM Foundation',
    'AIM Foundation charity donation',
    'NGO donation Kolkata',
    'AIM Foundation fundraising',
    'AIM Foundation contribution',
    'help AIM Foundation',
    'AIM Foundation healthcare support',
    'education donation India',
    'women empowerment NGO donation',
    'environment donation AIM Foundation',
    'NGO donations India'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/individual-donation',
    title: 'Donate to AIM Foundation | Support Lasting Change',
    description: 'Support AIM Foundation with your donation. Help provide education, healthcare, women empowerment, and sustainability for communities in need across India.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Donate to AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Donate to AIM Foundation | Support Lasting Change',
    description: 'Support AIM Foundation with your donation. Help provide education, healthcare, women empowerment, and sustainability for communities in need across India.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/individual-donation',
  },
};

export default function IndividualDonationPage() {
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
    description: "Support AIM Foundation with your donation. Help provide education, healthcare, women empowerment, and sustainability for communities in need across India."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-donation"
      />
      <IndividualDonationClientPage />
    </>
  );
}
