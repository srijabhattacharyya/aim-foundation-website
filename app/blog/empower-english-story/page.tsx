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
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'Confidence Begins with Conversation: How Empower English Is Changing Lives',
    'description': 'Empower English helps students in West Bengal gain spoken English skills, confidence, and opportunities for education, jobs, and a brighter future.',
    'image': 'https://placehold.co/1920x580.png',
    'author': {
      '@type': 'Organization',
      'name': 'Team AIM Foundation',
      'url': 'https://aimindia.org.in/'
    },
    'editor': {
      '@type': 'Person',
      'name': 'Saibal Ganguly'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'AIM Foundation',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://aimindia.org.in/logo.png'
      }
    },
    'datePublished': '2020-11-01T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/empower-english-story'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
        key="blog-post-schema"
      />
      <EmpowerEnglishBlogPage />
    </>
  );
}
