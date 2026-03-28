import type { Metadata } from 'next';
import ChildFirstBlogPage from './ChildFirstBlogPage';

export const metadata: Metadata = {
  metadataBase: new URL('https://aimindia.org.in'),
  title: 'ChildFirst by AIM Foundation | Healthcare for Vulnerable Kids',
  description:
    'ChildFirst by AIM Foundation provides free health camps, medicines, and nutrition to children in Kolkata’s red-light areas, restoring hope and dignity.',
  keywords: [
    'AIM Foundation ChildFirst',
    'free healthcare for children Kolkata',
    'NGO child health camps',
    'AIM Foundation paediatric care',
    'child nutrition support Kolkata',
    'healthcare for red-light district children',
    'NGO medical camps for kids',
    'free medicines for children Kolkata',
    'AIM Foundation children’s initiative',
    'child healthcare NGO India',
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/childfirst-health-hope-dignity',
    title: 'ChildFirst by AIM Foundation | Healthcare for Vulnerable Kids',
    description:
      'ChildFirst by AIM Foundation provides free health camps, medicines, and nutrition to children in Kolkata’s red-light areas, restoring hope and dignity.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'ChildFirst by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'ChildFirst by AIM Foundation | Healthcare for Vulnerable Kids',
    description:
      'ChildFirst by AIM Foundation provides free health camps, medicines, and nutrition to children in Kolkata’s red-light areas, restoring hope and dignity.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/childfirst-health-hope-dignity',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'ChildFirst: Bringing Health, Hope, and Dignity to Children of Rambagan and Sonagachi',
    'description': 'ChildFirst by AIM Foundation provides free health camps, medicines, and nutrition to children in Kolkata’s red-light areas, restoring hope and dignity.',
    'image': 'https://aimindia.org.in/images/banner/childfirst.avif',
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
    'datePublished': '2024-08-12T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/childfirst-health-hope-dignity'
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
      <ChildFirstBlogPage />
    </>
  );
}
