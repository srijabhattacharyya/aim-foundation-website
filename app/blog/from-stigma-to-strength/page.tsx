import type { Metadata } from 'next';
import CycleSafeBlogPage from './CycleSafeBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation CycleSafe: Menstrual Health & Dignity',
  description: 'AIM Foundation’s CycleSafe provides pads, health education, and awareness to empower girls, ensuring dignity, confidence, and uninterrupted schooling.',
  keywords: [
    "AIM Foundation menstrual health",
    "NGO menstrual hygiene India",
    "CycleSafe AIM Foundation Kolkata",
    "menstrual hygiene awareness program",
    "sanitary pad distribution NGO",
    "support girls menstrual dignity India",
    "NGO keeping girls in school periods",
    "AIM Foundation reproductive health",
    "menstrual hygiene workshops NGO",
    "donate for menstrual health India"
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/from-stigma-to-strength',
    title: 'AIM Foundation CycleSafe: Menstrual Health & Dignity',
    description: 'AIM Foundation’s CycleSafe provides pads, health education, and awareness to empower girls, ensuring dignity, confidence, and uninterrupted schooling.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation CycleSafe Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation CycleSafe: Menstrual Health & Dignity',
    description: 'AIM Foundation’s CycleSafe provides pads, health education, and awareness to empower girls, ensuring dignity, confidence, and uninterrupted schooling.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/from-stigma-to-strength',
  },
};

export default function Page() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://aimindia.org.in/",
    "logo": "https://aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "AIM Foundation’s CycleSafe provides pads, health education, and awareness to empower girls, ensuring dignity, confidence, and uninterrupted schooling."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-cyclesafe-blog"
      />
      <CycleSafeBlogPage />
    </>
  );
}
