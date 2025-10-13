import type { Metadata } from 'next';
import EduAccessClientPage from './EduAccessClientPage';

export const metadata: Metadata = {
  title: 'AIM Foundation | EduAccess, Rural Online Learning Program',
  description: 'AIM Foundation EduAccess, rural education West Bengal, online learning NGO, digital classrooms for villages, AIM Foundation online education, bridging education gap',
  keywords: ['AIM Foundation EduAccess', 'rural education West Bengal', 'online learning NGO', 'digital classrooms for villages', 'AIM Foundation online education', 'bridging education gap'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/eduaccess',
    title: 'AIM Foundation | EduAccess, Rural Online Learning Program',
    description: 'AIM Foundation EduAccess, rural education West Bengal, online learning NGO, digital classrooms for villages, AIM Foundation online education, bridging education gap',
    images: [
        {
            url: 'https://aimindia.org.in/home.avif',
            width: 1200,
            height: 630,
            alt: 'AIM Foundation EduAccess Program',
        },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation | EduAccess, Rural Online Learning Program',
    description: 'AIM Foundation EduAccess, rural education West Bengal, online learning NGO, digital classrooms for villages, AIM Foundation online education, bridging education gap.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/eduaccess',
  },
};

export default function EduAccessPage() {
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
    "description": "AIM Foundation EduAccess, rural education West Bengal, online learning NGO, digital classrooms for villages, AIM Foundation online education, bridging education gap."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-eduaccess"
      />
      <EduAccessClientPage />
    </>
  );
}
