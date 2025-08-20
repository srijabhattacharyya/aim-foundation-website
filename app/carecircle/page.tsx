
import type { Metadata } from 'next';
import CareCircleClientPage from './CareCircleClientPage';

export const metadata: Metadata = {
  title: 'AIM Foundation | CareCircle Urban Healthcare Initiative',
  description: 'CareCircle by AIM Foundation delivers free healthcare camps in Kolkata, offering check-ups, medicines, screenings, and awareness for underserved communities.',
  keywords: ['AIM Foundation CareCircle', 'urban healthcare Kolkata', 'free health camps Kolkata', 'healthcare for underserved communities', 'AIM Foundation urban health initiative', 'preventive healthcare India', 'free medicines and consultations', 'community health outreach Kolkata', 'affordable healthcare services', 'health equity in urban areas'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/carecircle',
    title: 'AIM Foundation | CareCircle Urban Healthcare Initiative',
    description: 'CareCircle by AIM Foundation delivers free healthcare camps in Kolkata, offering check-ups, medicines, screenings, and awareness for underserved communities.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation CareCircle Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/carecircle',
    title: 'AIM Foundation | CareCircle Urban Healthcare Initiative',
    description: 'CareCircle by AIM Foundation delivers free healthcare camps in Kolkata, offering check-ups, medicines, screenings, and awareness for underserved communities.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/carecircle',
  },
};

export default function CareCirclePage() {
    const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://aimindia.org.in/logo.png",
    "sameAs": [
        "https://www.facebook.com/aimindiango/",
        "https://x.com/aimindiango",
        "https://www.instagram.com/aimfoundation_ngo/",
        "https://www.linkedin.com/in/aim-foundation-ngo/",
        "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "CareCircle by AIM Foundation delivers free healthcare camps in Kolkata, offering check-ups, medicines, screenings, and awareness for underserved communities."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-carecircle"
      />
      <CareCircleClientPage />
    </>
  );
}
