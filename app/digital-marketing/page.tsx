
import type { Metadata } from 'next';
import DigitalMarketingClientPage from './DigitalMarketingClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Learn Digital Marketing Free with AIM Foundation',
  description: 'Boost your career with AIM Foundation’s free Digital Marketing course in Bengali. Ideal for students, job-seekers, homemakers, and small businesses. Enrol now.',
  keywords: [
    'Free digital marketing course',
    'Digital marketing training',
    'Learn digital marketing',
    'Digital marketing course online free',
    'Digital marketing skills training',
    'Digital marketing for beginners',
    'No-cost digital marketing course',
    'Digital marketing certification free',
    'Digital marketing classes for students',
    'Digital marketing course for youth',
    'Digital marketing course for housewives',
    'Digital marketing for small business owners',
    'Skill development courses',
    'Online skill development training',
    'Digital skills training India',
    'Free digital marketing course with certificate in India',
    'Best free digital marketing course for beginners',
    'Free digital marketing course in Bengali',
    'Digital marketing training for unemployed youth',
    'Digital marketing course for women empowerment',
    'Digital marketing skills for small business growth',
    'Free no-code digital marketing training program',
    'Free online digital marketing classes with practical learning',
    'Free digital marketing course in Kolkata',
    'Online digital marketing training India',
    'Digital marketing course for West Bengal students',
    'NGO skill development course Kolkata',
    'AIM Foundation skill development India',
    'SEO training basics',
    'Social media marketing course',
    'Content creation training',
    'Online marketing skills',
    'Digital literacy training',
    'Employment-oriented courses',
    'Skill development NGO',
    'Community empowerment through skills'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/digital-marketing',
    title: 'Learn Digital Marketing Free with AIM Foundation',
    description: 'Boost your career with AIM Foundation’s free Digital Marketing course in Bengali. Ideal for students, job-seekers, homemakers, and small businesses. Enrol now.',
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
    title: 'Learn Digital Marketing Free with AIM Foundation',
    description: 'Boost your career with AIM Foundation’s free Digital Marketing course in Bengali. Ideal for students, job-seekers, homemakers, and small businesses. Enrol now.',
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
