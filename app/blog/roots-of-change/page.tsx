import type { Metadata } from 'next';
import RootsOfChangeBlogPage from './RootsOfChangeBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation Roots of Change: Environmental Education',
  description: 'AIM Foundation’s Roots of Change builds environmental awareness through education, workshops, and community action to fight climate change sustainably.',
  keywords: [
    'AIM Foundation Roots of Change',
    'AIM Foundation environmental education',
    'climate change awareness NGO India',
    'AIM Foundation sustainability initiative',
    'Roots of Change green education',
    'NGO environmental workshops Kolkata',
    'community climate action India',
    'AIM Foundation environmental awareness program',
    'NGO fighting plastic pollution India',
    'Roots of Change AIM Foundation projects'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/roots-of-change',
    title: 'AIM Foundation Roots of Change: Environmental Education',
    description: 'AIM Foundation’s Roots of Change builds environmental awareness through education, workshops, and community action to fight climate change sustainably.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Roots of Change Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation Roots of Change: Environmental Education',
    description: 'AIM Foundation’s Roots of Change builds environmental awareness through education, workshops, and community action to fight climate change sustainably.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/roots-of-change',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'Roots of Change: Planting Awareness, Growing a Greener Tomorrow',
    'description': 'AIM Foundation’s Roots of Change builds environmental awareness through education, workshops, and community action to fight climate change sustainably.',
    'image': 'https://aimindia.org.in/images/banner/roots-of-change1.avif',
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
    'datePublished': '2022-08-16T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/roots-of-change'
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
      <RootsOfChangeBlogPage />
    </>
  );
}
