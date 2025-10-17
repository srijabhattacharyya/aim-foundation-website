import type { Metadata } from 'next';
import InnocentSmilesBlogPage from './InnocentSmilesBlogPage';

export const metadata: Metadata = {
  title: 'Innocent Smiles: Nurturing Dreams, Inspiring Futures',
  description: 'Discover how AIM Foundation’s Innocent Smiles initiative is transforming lives through education, art, music, and mentorship for underprivileged children.',
  keywords: [
    'AIM Foundation',
    'Innocent Smiles',
    'child development',
    'underprivileged children',
    'creative education',
    'holistic learning',
    'art and music for kids',
    'child empowerment',
    'NGO for children India',
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'article',
    url: 'https://aimindia.org.in/blog/innocent-smiles-nurturing-dreams',
    title: 'Innocent Smiles: Nurturing Dreams, Inspiring Futures',
    description: 'Discover how AIM Foundation’s Innocent Smiles initiative is transforming lives through education, art, music, and mentorship for underprivileged children.',
    images: [
      {
        url: 'https://aimindia.org.in/images/banner/innocent-smiles.avif',
        width: 1200,
        height: 630,
        alt: 'Children in an Innocent Smiles program',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Innocent Smiles: Nurturing Dreams, Inspiring Futures',
    description: 'Discover how AIM Foundation’s Innocent Smiles initiative is transforming lives through education, art, music, and mentorship for underprivileged children.',
    images: ['https://aimindia.org.in/images/banner/innocent-smiles.avif'],
  },
  alternates: {
    canonical: '/blog/innocent-smiles-nurturing-dreams',
  },
};

export default function Page() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Innocent Smiles: Nurturing Dreams, Inspiring Futures',
    author: {
      '@type': 'Organization',
      name: 'AIM Foundation',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIM Foundation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aimindia.org.in/logo.png',
      },
    },
    description: 'Discover how AIM Foundation’s Innocent Smiles initiative is transforming lives through education, art, music, and mentorship for underprivileged children.',
    image: 'https://aimindia.org.in/images/banner/innocent-smiles.avif',
    datePublished: new Date().toISOString(),
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://aimindia.org.in/blog/innocent-smiles-nurturing-dreams'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="blog-post-schema"
      />
      <InnocentSmilesBlogPage />
    </>
  );
}
