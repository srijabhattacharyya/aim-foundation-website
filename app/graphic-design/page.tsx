
import type { Metadata } from 'next';
import GraphicDesignClientPage from './GraphicDesignClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Learn Graphic Design Free with Canva | AIM Foundation',
  description: 'Boost your creative skills with AIM Foundation’s free Graphic Design course using Canva. Perfect for students, job-seekers, homemakers, and small businesses.',
  keywords: [
    'Free graphic design course',
    'Learn graphic design with Canva',
    'Canva training',
    'Graphic design for beginners',
    'No-code design course',
    'Graphic design certification free',
    'Graphic design for students',
    'Canva for social media',
    'Graphic design for small business',
    'Freelance graphic design course',
    'Skill development NGO',
    'Free creative skills training',
    'AIM Foundation skill development'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/graphic-design',
    title: 'Learn Graphic Design Free with Canva | AIM Foundation',
    description: 'Boost your creative skills with AIM Foundation’s free Graphic Design course using Canva. Perfect for students, job-seekers, homemakers, and small businesses.',
    images: [
      {
        url: 'https://aimindia.org.in/images/banner/skill-development.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Graphic Design Program',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Learn Graphic Design Free with Canva | AIM Foundation',
    description: 'Boost your creative skills with AIM Foundation’s free Graphic Design course using Canva. Perfect for students, job-seekers, homemakers, and small businesses.',
    images: ['https://aimindia.org.in/images/banner/skill-development.avif'],
  },
  alternates: {
    canonical: '/graphic-design',
  },
};

export default function GraphicDesignPage() {
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
    "description": "AIM Foundation’s free Graphic Design program empowers youth with essential skills in visual communication using Canva."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-graphic-design"
      />
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <GraphicDesignClientPage />
      </Suspense>
    </>
  );
}
