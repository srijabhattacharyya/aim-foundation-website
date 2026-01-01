
import type { Metadata } from 'next';
import GraphicDesignClientPage from './GraphicDesignClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Beginner Graphic Design Course with Canva | Free & Online',
  description: 'Learn graphic design with Canva for free! Get practical skills, hands-on training, and a certificate to boost your career and grow your business.',
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
    'AIM Foundation skill development',
    'Graphic design course with Canva',
    'Canva graphic design certificate',
    'Graphic design certification online',
    'Canva design course for beginners',
    'Online graphic design course free',
    'Graphic design training with Canva',
    'Canva graphic design tutorial',
    'Graphic design skills course',
    'Canva design classes for beginners',
    'Certificate course in graphic design',
    'Canva online course with certificate',
    'Graphic design course for small business owners',
    'Graphic design course for students',
    'Best Canva graphic design course with certificate',
    'Free online graphic design certificate course',
    'Canva graphic design course in Bengali',
    'Beginner-friendly Canva design course',
    'How to learn graphic design using Canva',
    'Graphic design certificate course for entrepreneurs',
    'Practical graphic design course for social media',
    'Graphic design course Kolkata',
    'Canva graphic design course West Bengal',
    'Graphic design certificate course India',
    'Online graphic design course India',
    'Skill development graphic design Kolkata',
    'AIM Foundation graphic design training',
    'Visual design course',
    'Digital graphic design training',
    'Canva tutorials for beginners',
    'Learn design principles',
    'Social media design course',
    'Branding and logo design course',
    'Creative design skills training'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/graphic-design',
    title: 'Beginner Graphic Design Course with Canva | Free & Online',
    description: 'Learn graphic design with Canva for free! Get practical skills, hands-on training, and a certificate to boost your career and grow your business.',
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
    title: 'Beginner Graphic Design Course with Canva | Free & Online',
    description: 'Learn graphic design with Canva for free! Get practical skills, hands-on training, and a certificate to boost your career and grow your business.',
    images: ['https://aimindia.org.in/images/banner/skill-development.avif'],
  },
  alternates: {
    canonical: '/graphic-design',
  },
};

export default function GraphicDesignPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Free Graphic Design Certificate Course with Canva",
    "description": "A comprehensive, no-cost graphic design course using Canva, designed for students, unemployed youth, homemakers, and small business owners to build practical, job-oriented skills.",
    "provider": {
      "@type": "Organization",
      "name": "AIM Foundation",
      "url": "https://www.aimindia.org.in/"
    },
    "isAccessibleForFree": true,
    "educationalCredentialAwarded": {
      "@type": "EducationalOccupationalCredential",
      "name": "Certificate of Completion"
    },
    "audience": {
        "@type": "Audience",
        "audienceType": [
            "Students",
            "Unemployed youth",
            "Homemakers",
            "Small business owners",
            "Freelancers"
        ]
    }
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
