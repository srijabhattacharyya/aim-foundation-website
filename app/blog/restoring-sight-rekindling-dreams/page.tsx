import type { Metadata } from 'next';
import SightHopeBlogPage from './SightHopeBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation SightHope: Free Eye Care for All',
  description: 'AIM Foundation’s SightHope restores vision through free cataract surgeries, eye camps, and screenings, bringing dignity and opportunity to underprivileged lives.',
  keywords: [
    "AIM Foundation SightHope",
    "free eye care Kolkata",
    "cataract surgery NGO India",
    "free vision screening",
    "AIM Foundation eye hospitals",
    "refractive error treatment",
    "AIM Foundation eye health program",
    "free glasses for children",
    "eye camp Kolkata",
    "AIM Foundation restore sight"
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/restoring-sight-rekindling-dreams',
    title: 'AIM Foundation SightHope: Free Eye Care for All',
    description: 'AIM Foundation’s SightHope restores vision through free cataract surgeries, eye camps, and screenings, bringing dignity and opportunity to underprivileged lives.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation SightHope Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation SightHope: Free Eye Care for All',
    description: 'AIM Foundation’s SightHope restores vision through free cataract surgeries, eye camps, and screenings, bringing dignity and opportunity to underprivileged lives.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/restoring-sight-rekindling-dreams',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'Restoring Sight, Rekindling Dreams: The Journey of SightHope',
    'description': 'AIM Foundation’s SightHope restores vision through free cataract surgeries, eye camps, and screenings, bringing dignity and opportunity to underprivileged lives.',
    'image': 'https://aimindia.org.in/images/banner/sighthope.avif',
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
    'datePublished': '2022-02-02T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/restoring-sight-rekindling-dreams'
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
      <SightHopeBlogPage />
    </>
  );
}
