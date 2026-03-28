import type { Metadata } from 'next';
import TideShieldBlogPage from './TideShieldBlogPage';

export const metadata: Metadata = {
  title: 'TideShield Mangrove Restoration | AIM Foundation',
  description: 'AIM Foundation’s TideShield restores Sundarbans mangroves on Bali Island, protecting families from cyclones, erosion, and climate change impacts.',
  keywords: [
    'AIM Foundation',
    'TideShield initiative',
    'Sundarbans mangrove restoration',
    'Bali Island climate resilience',
    'Cyclone Amphan Yaas recovery',
    'mangrove plantation West Bengal',
    'coastal erosion protection India',
    'community-led mangrove project',
    'climate change adaptation NGO',
    'restore mangroves AIM Foundation'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/tideshield-restoring-mangroves',
    title: 'TideShield Mangrove Restoration | AIM Foundation',
    description: 'AIM Foundation’s TideShield restores Sundarbans mangroves on Bali Island, protecting families from cyclones, erosion, and climate change impacts.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'TideShield Mangrove Restoration by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'TideShield Mangrove Restoration | AIM Foundation',
    description: 'AIM Foundation’s TideShield restores Sundarbans mangroves on Bali Island, protecting families from cyclones, erosion, and climate change impacts.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/tideshield-restoring-mangroves',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'TideShield: Restoring the Mangrove Heartbeat of the Sundarbans',
    'description': 'AIM Foundation’s TideShield restores Sundarbans mangroves on Bali Island, protecting families from cyclones, erosion, and climate change impacts.',
    'image': 'https://aimindia.org.in/images/banner/tide-shield.avif',
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
    'datePublished': '2024-05-05T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/tideshield-restoring-mangroves'
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
      <TideShieldBlogPage />
    </>
  );
}
