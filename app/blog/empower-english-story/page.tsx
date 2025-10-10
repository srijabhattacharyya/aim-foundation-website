import type { Metadata } from 'next';
import EmpowerEnglishBlogPage from './EmpowerEnglishBlogPage';

export const metadata: Metadata = {
  title: 'Empower English by AIM Foundation | Building Confidence',
  description:
    'Empower English helps students in West Bengal gain spoken English skills, confidence, and opportunities for education, jobs, and a brighter future.',
  keywords: [
    'Empower English',
    'AIM Foundation',
    'spoken English training',
    'English confidence',
    'rural education West Bengal',
    'Kolkata',
    'Purba Bardhaman',
    'Jalpaiguri',
    'youth empowerment',
    'language skills',
    'education initiative',
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/empower-english-story',
    title: 'Empower English by AIM Foundation | Building Confidence',
    description:
      'Empower English helps students in West Bengal gain spoken English skills, confidence, and opportunities for education, jobs, and a brighter future.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Empower English by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Empower English by AIM Foundation | Building Confidence',
    description:
      'Empower English helps students in West Bengal gain spoken English skills, confidence, and opportunities for education, jobs, and a brighter future.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/empower-english-story',
  },
};

export default function Page() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIM Foundation',
    url: 'https://aimindia.org.in/',
    logo: 'https://aimindia.org.in/logo.png',
    sameAs: [
      'https://www.facebook.com/aimindiango/',
      'https://x.com/aimindiango',
      'https://www.instagram.com/aimfoundation_ngo/',
      'https://www.linkedin.com/in/aim-foundation-ngo/',
      'https://www.youtube.com/@aimfoundation2604',
    ],
    description:
      'Empower English helps students in West Bengal gain spoken English skills, confidence, and opportunities for education, jobs, and a brighter future.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-empower-english-blog"
      />
      <EmpowerEnglishBlogPage />
    </>
  );
}
