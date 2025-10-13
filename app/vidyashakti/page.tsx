import type { Metadata } from 'next';
import VidyaShaktiClientPage from './VidyaShaktiClientPage';

export const metadata: Metadata = {
  title: 'AIM Foundation | VidyaShakti - Multilingual Learning App',
  description: 'AIM Foundation’s VidyaShakti app empowers rural students with AI-powered, multilingual learning support, bridging gaps in education for Classes 5–12.',
  keywords: [
    'AIM Foundation VidyaShakti',
    'multilingual learning app India',
    'rural education technology',
    'AI-powered study app',
    'first-generation learners support',
    'digital education for villages',
    'AIM Foundation education initiatives'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/vidyashakti',
    title: 'AIM Foundation | VidyaShakti - Multilingual Learning App',
    description: 'AIM Foundation’s VidyaShakti app empowers rural students with AI-powered, multilingual learning support, bridging gaps in education for Classes 5–12.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation VidyaShakti App',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation | VidyaShakti - Multilingual Learning App',
    description: 'AIM Foundation’s VidyaShakti app empowers rural students with AI-powered, multilingual learning support, bridging gaps in education for Classes 5–12.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/vidyashakti',
  },
};

export default function VidyaShaktiPage() {
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
    description: "AIM Foundation’s VidyaShakti app empowers rural students with AI-powered, multilingual learning support, bridging gaps in education for Classes 5–12."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-vidyashakti"
      />
      <VidyaShaktiClientPage />
    </>
  );
}
