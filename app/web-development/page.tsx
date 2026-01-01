
import type { Metadata } from 'next';
import WebDevelopmentClientPage from './WebDevelopmentClientPage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Learn WordPress Website Building Free – No Coding Needed',
  description: 'Learn to build professional WordPress websites without coding. Join AIM Foundation’s free no-code WordPress course and gain practical skills for jobs and entrepreneurship.',
  keywords: [
    'Free WordPress course',
    'No-code website building course',
    'Learn WordPress for free',
    'WordPress training for beginners',
    'Website development course without coding',
    'WordPress course with certificate',
    'Free WordPress training India',
    'WordPress for small business owners',
    'Website building for students',
    'WordPress course for homemakers',
    'Freelance web development course',
    'Skill development NGO India',
    'AIM Foundation web development',
    'WordPress development for students',
    'WordPress training for youth',
    'WordPress course for homemakers',
    'WordPress for small business owners',
    'Beginner WordPress tutorial',
    'Website creation training',
    'Learn to build websites without coding',
    'Basic web development skills',
    'Website design course India',
    'Free website design training',
    'Free WordPress website development course with certificate',
    'Best free WordPress course for beginners',
    'No-code website building course in India',
    'WordPress course for unemployed youth',
    'Website development training for small business owners',
    'WordPress course for women empowerment',
    'Step-by-step WordPress learning program',
    'Free WordPress website design course in Bengali',
    'Online free WordPress classes with practical training',
    'Free WordPress course in Kolkata',
    'WordPress training India',
    'NGO website building course Kolkata',
    'AIM Foundation skill development courses',
    'WordPress website development training West Bengal',
    'No-code development skills',
    'Website design basics',
    'Web hosting and domain training',
    'WordPress dashboard training',
    'Elementor tutorial for beginners',
    'Basic SEO for WordPress',
    'Website content management',
    'Skill development NGO India',
    'Digital empowerment training'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/web-development',
    title: 'Free No-Code Website Building Course | AIM Foundation',
    description: 'Learn to build professional WordPress websites with AIM Foundation\'s free no-code course. Ideal for students, entrepreneurs, and job-seekers. Enrol now.',
    images: [
      {
        url: 'https://aimindia.org.in/images/banner/skill-development.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Web Development Program',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Free No-Code Website Building Course | AIM Foundation',
    description: 'Learn to build professional WordPress websites with AIM Foundation\'s free no-code course. Ideal for students, entrepreneurs, and job-seekers. Enrol now.',
    images: ['https://aimindia.org.in/images/banner/skill-development.avif'],
  },
  alternates: {
    canonical: '/web-development',
  },
};

export default function WebDevelopmentPage() {
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
    "description": "AIM Foundation’s free Web Development program empowers youth with essential skills in no-code website building using WordPress."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-web-development"
      />
      <Suspense fallback={<Skeleton className="h-screen w-full" />}>
        <WebDevelopmentClientPage />
      </Suspense>
    </>
  );
}
