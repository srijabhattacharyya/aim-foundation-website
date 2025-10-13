import type { Metadata } from 'next';
import OralScanBlogPage from './OralScanBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation OralScan: Free Oral Cancer Screenings',
  description: 'AIM Foundation’s OralScan fights oral cancer in India with free screenings, awareness, and counseling, bringing early detection and care to underserved communities.',
  keywords: [
    "AIM Foundation OralScan",
    "free oral cancer screening India",
    "AIM Foundation oral health program",
    "early detection oral cancer NGO",
    "oral cancer awareness India",
    "rural oral cancer screening camps",
    "tobacco risk awareness AIM Foundation",
    "community cancer detection India",
    "oral cancer counseling support NGO",
    "AIM Foundation healthcare initiative"
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/screening-today-for-a-healthier-tomorrow',
    title: 'AIM Foundation OralScan: Free Oral Cancer Screenings',
    description: 'AIM Foundation’s OralScan fights oral cancer in India with free screenings, awareness, and counseling, bringing early detection and care to underserved communities.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation OralScan Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation OralScan: Free Oral Cancer Screenings',
    description: 'AIM Foundation’s OralScan fights oral cancer in India with free screenings, awareness, and counseling, bringing early detection and care to underserved communities.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/screening-today-for-a-healthier-tomorrow',
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
    "description": "AIM Foundation’s OralScan fights oral cancer in India with free screenings, awareness, and counseling, bringing early detection and care to underserved communities."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-oralscan-blog"
      />
      <OralScanBlogPage />
    </>
  );
}
