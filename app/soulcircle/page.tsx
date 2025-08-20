
import type { Metadata } from 'next';
import SoulCircleClientPage from './SoulCircleClientPage';

export const metadata: Metadata = {
  title: 'SoulCircle by AIM Foundation: 24/7 Mental Health Support',
  description: 'AIM Foundation’s SoulCircle offers 24/7 AI-powered emotional support, mood tracking, and mindfulness tools to make mental health care accessible to all.',
  keywords: ['AIM Foundation SoulCircle', '24/7 mental health support', 'AI mental health app', 'emotional support app', 'mindfulness tools', 'mood tracking app', 'accessible mental healthcare', 'mental wellness NGO'],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/soulcircle',
    title: 'SoulCircle by AIM Foundation: 24/7 Mental Health Support',
    description: 'AIM Foundation’s SoulCircle offers 24/7 AI-powered emotional support, mood tracking, and mindfulness tools to make mental health care accessible to all.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'SoulCircle by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/soulcircle',
    title: 'SoulCircle by AIM Foundation: 24/7 Mental Health Support',
    description: 'AIM Foundation’s SoulCircle offers 24/7 AI-powered emotional support, mood tracking, and mindfulness tools to make mental health care accessible to all.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/soulcircle',
  },
};

export default function SoulCirclePage() {
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
    "description": "AIM Foundation’s SoulCircle offers 24/7 AI-powered emotional support, mood tracking, and mindfulness tools to make mental health care accessible to all."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-soulcircle"
      />
      <SoulCircleClientPage />
    </>
  );
}
