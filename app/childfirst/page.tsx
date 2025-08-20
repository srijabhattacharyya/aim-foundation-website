
import type { Metadata } from 'next';
import ChildFirstClientPage from './ChildFirstClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'ChildFirst Healthcare | AIM Foundation Child Support',
  description: 'ChildFirst by AIM Foundation provides healthcare, nutrition, and hope to children of sex workers in Rambagan and Sonagachi through free camps and medicines.',
  keywords: ['AIM Foundation', 'ChildFirst AIM Foundation', 'healthcare for children', 'child health camps Kolkata', 'Rambagan child healthcare', 'Sonagachi children support', 'NGO healthcare Kolkata', 'child medical camps', 'free medicines for children', 'pediatric healthcare AIM Foundation'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/childfirst',
    title: 'ChildFirst Healthcare | AIM Foundation Child Support',
    description: 'ChildFirst by AIM Foundation provides healthcare, nutrition, and hope to children of sex workers in Rambagan and Sonagachi through free camps and medicines.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'ChildFirst Healthcare Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/childfirst',
    title: 'ChildFirst Healthcare | AIM Foundation Child Support',
    description: 'ChildFirst by AIM Foundation provides healthcare, nutrition, and hope to children of sex workers in Rambagan and Sonagachi through free camps and medicines.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/childfirst',
  },
};

export default function ChildFirstPage() {
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
    "description": "ChildFirst by AIM Foundation provides healthcare, nutrition, and hope to children of sex workers in Rambagan and Sonagachi through free camps and medicines."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-childfirst"
      />
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <ChildFirstClientPage />
      </Suspense>
    </>
  );
}
