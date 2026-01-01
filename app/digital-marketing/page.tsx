
import type { Metadata } from 'next';
import DigitalMarketingClientPage from './DigitalMarketingClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Digital Marketing Program | AIM Foundation',
  description: 'AIM Foundation’s Digital Marketing program empowers youth with essential skills in SEO, social media marketing, and content creation for a successful career in the digital economy.',
  keywords: [
    'Digital Marketing course', 'AIM Foundation skill development', 'SEO training', 
    'social media marketing program', 'content creation skills', 'youth empowerment India', 
    'digital economy jobs', 'vocational training NGO'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/digital-marketing',
    title: 'Digital Marketing Program | AIM Foundation',
    description: 'AIM Foundation’s Digital Marketing program empowers youth with essential skills in SEO, social media marketing, and content creation.',
    images: [
      {
        url: 'https://aimindia.org.in/images/banner/skill-development.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Digital Marketing Program',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Digital Marketing Program | AIM Foundation',
    description: 'AIM Foundation’s Digital Marketing program empowers youth with essential skills in SEO, social media marketing, and content creation.',
    images: ['https://aimindia.org.in/images/banner/skill-development.avif'],
  },
  alternates: {
    canonical: '/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
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
    "description": "AIM Foundation’s Digital Marketing program empowers youth with essential skills in SEO, social media marketing, and content creation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-digital-marketing"
      />
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <DigitalMarketingClientPage />
      </Suspense>
    </>
  );
}
