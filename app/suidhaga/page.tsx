
import type { Metadata } from 'next';
import SuiDhagaClientPage from './SuiDhagaClientPage';

export const metadata: Metadata = {
  title: 'SuiDhaga by AIM Foundation: Women’s Skill Development',
  description: 'AIM Foundation’s SuiDhaga trains women in tailoring and embroidery, empowering them with skills to earn income, build confidence, and support families.',
  keywords: "AIM Foundation, SuiDhaga, women skill development India, tailoring training Kolkata, embroidery training NGO, livelihood programs for women, financial independence women, women empowerment Kolkata, sewing and stitching training, NGO women skills initiative, women dignity and empowerment",
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/suidhaga',
    title: 'SuiDhaga by AIM Foundation: Women’s Skill Development',
    description: 'AIM Foundation’s SuiDhaga trains women in tailoring and embroidery, empowering them with skills to earn income, build confidence, and support families.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'SuiDhaga by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/suidhaga',
    title: 'SuiDhaga by AIM Foundation: Women’s Skill Development',
    description: 'AIM Foundation’s SuiDhaga trains women in tailoring and embroidery, empowering them with skills to earn income, build confidence, and support families.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/suidhaga',
  },
};

export default function SuiDhagaPage() {
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
    "description": "AIM Foundation’s SuiDhaga trains women in tailoring and embroidery, empowering them with skills to earn income, build confidence, and support families."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-suidhaga"
      />
      <SuiDhagaClientPage />
    </>
    );
}
