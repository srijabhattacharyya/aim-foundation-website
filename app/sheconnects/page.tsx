import type { Metadata } from 'next';
import SheConnectsClientPage from './SheConnectsClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'AIM Foundation | SheConnects, Women Digital Empowerment',
  description: 'AIM Foundation’s SheConnects empowers women with digital literacy, cyber safety, and online business skills to achieve independence and financial growth.',
  keywords: [
    'AIM Foundation SheConnects',
    'women digital empowerment India',
    'digital literacy for women',
    'women entrepreneurship training',
    'cyber safety awareness',
    'AIM Foundation women programs',
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/sheconnects',
    title: 'AIM Foundation | SheConnects, Women Digital Empowerment',
    description: 'AIM Foundation’s SheConnects empowers women with digital literacy, cyber safety, and online business skills to achieve independence and financial growth.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation SheConnects Program',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/sheconnects',
    title: 'AIM Foundation | SheConnects, Women Digital Empowerment',
    description: 'AIM Foundation’s SheConnects empowers women with digital literacy, cyber safety, and online business skills to achieve independence and financial growth.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/sheconnects',
  },
};

export default function SheConnectsPage() {
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
    "description": "AIM Foundation’s SheConnects empowers women with digital literacy, cyber safety, and online business skills to achieve independence and financial growth."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-sheconnects"
      />
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <SheConnectsClientPage />
      </Suspense>
    </>
  );
}
