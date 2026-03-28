import type { Metadata } from 'next';
import DisasterReliefBlogPage from './DisasterReliefBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation Disaster Relief: Swift Aid in Crises',
  description:
    'AIM Foundation’s Disaster Relief Program delivers food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and emergencies.',
  keywords: [
    'AIM Foundation disaster relief',
    'emergency relief NGO India',
    'disaster management program NGO',
    'flood and cyclone relief India',
    'AIM Foundation crisis response',
    'humanitarian aid NGO India',
    'emergency food and shelter support',
    'NGO disaster preparedness India',
    'AIM Foundation relief and recovery',
    'donate for disaster relief India',
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/from-despair-to-recovery-rebuilding-lives-after-disaster',
    title: 'AIM Foundation Disaster Relief: Swift Aid in Crises',
    description:
      'AIM Foundation’s Disaster Relief Program delivers food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and emergencies.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Disaster Relief',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation Disaster Relief: Swift Aid in Crises',
    description:
      'AIM Foundation’s Disaster Relief Program delivers food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and emergencies.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/from-despair-to-recovery-rebuilding-lives-after-disaster',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'From Despair to Recovery: Rebuilding Lives After Disaster',
    'description': 'AIM Foundation’s Disaster Relief Program delivers food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and emergencies.',
    'image': 'https://aimindia.org.in/images/banner/disuster.avif',
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
    'datePublished': '2023-05-06T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/from-despair-to-recovery-rebuilding-lives-after-disaster'
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
      <DisasterReliefBlogPage />
    </>
  );
}
