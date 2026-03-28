import type { Metadata } from 'next';
import GreenRootsBlogPage from './GreenRootsBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation GreenRoots: Community Tree Planting',
  description: "AIM Foundation’s GreenRoots empowers families, schools, and villages to plant trees in courtyards, farms, and temples, building climate resilience at the grassroots.",
  keywords: [
    'AIM Foundation GreenRoots',
    'community tree planting',
    'reforestation India',
    'grassroots environmental initiative',
    'tree plantation drives',
    'climate resilience NGO',
    'sustainable environment AIM Foundation'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/planting-hope-growing-futures',
    title: 'AIM Foundation GreenRoots: Community Tree Planting',
    description: "AIM Foundation’s GreenRoots empowers families, schools, and villages to plant trees in courtyards, farms, and temples, building climate resilience at the grassroots.",
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation GreenRoots Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation GreenRoots: Community Tree Planting',
    description: "AIM Foundation’s GreenRoots empowers families, schools, and villages to plant trees in courtyards, farms, and temples, building climate resilience at the grassroots.",
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/planting-hope-growing-futures',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'Planting Hope, Growing Futures: The GreenRoots Journey',
    'description': "AIM Foundation’s GreenRoots empowers families, schools, and villages to plant trees in courtyards, farms, and temples, building climate resilience at the grassroots.",
    'image': 'https://aimindia.org.in/images/banner/green-root1.avif',
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
    'datePublished': '2021-11-26T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/planting-hope-growing-futures'
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
      <GreenRootsBlogPage />
    </>
  );
}
