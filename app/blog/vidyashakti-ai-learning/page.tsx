import type { Metadata } from 'next';
import VidyaShaktiBlogPage from './VidyaShaktiBlogPage';

export const metadata: Metadata = {
  title: 'VidyaShakti by AIM Foundation | AI Learning for Rural India',
  description: "Discover VidyaShakti by AIM Foundation—an AI-powered learning app transforming rural education with multilingual support, equity, and 24/7 access.",
  keywords: [
    "AIM Foundation VidyaShakti",
    "AI learning app rural India",
    "AIM Foundation education initiative",
    "multilingual education app NGO",
    "rural students digital learning",
    "AI-powered education for villages",
    "mobile learning AIM Foundation",
    "teacher shortage solution India",
    "NGO tech in education",
    "equal access to education rural India"
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/vidyashakti-ai-learning',
    title: 'VidyaShakti by AIM Foundation | AI Learning for Rural India',
    description: 'Discover VidyaShakti by AIM Foundation—an AI-powered learning app transforming rural education with multilingual support, equity, and 24/7 access.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'VidyaShakti by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'VidyaShakti by AIM Foundation | AI Learning for Rural India',
    description: 'Discover VidyaShakti by AIM Foundation—an AI-powered learning app transforming rural education with multilingual support, equity, and 24/7 access.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/vidyashakti-ai-learning',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'VidyaShakti: Bringing AI-Powered Multilingual Learning to Rural Classrooms',
    'description': 'Discover VidyaShakti by AIM Foundation—an AI-powered learning app transforming rural education with multilingual support, equity, and 24/7 access.',
    'image': 'https://aimindia.org.in/images/banner/vidyashakti.avif',
    'author': {
      '@type': 'Organization',
      'name': 'AIM Foundation',
      'url': 'https://aimindia.org.in/'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'AIM Foundation',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://aimindia.org.in/logo.png'
      }
    },
    'datePublished': '2025-02-02T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/vidyashakti-ai-learning'
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
      <VidyaShaktiBlogPage />
    </>
  );
}
