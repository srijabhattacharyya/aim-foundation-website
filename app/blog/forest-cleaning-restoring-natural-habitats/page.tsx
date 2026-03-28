import type { Metadata } from 'next';
import ForestCleaningBlogPage from './ForestCleaningBlogPage';

export const metadata: Metadata = {
  title: 'Forest Cleaning by AIM Foundation | Restore Our Forests',
  description:
    'Join AIM Foundation’s Forest Cleaning initiative—volunteer-driven cleanups to remove waste, protect wildlife, and restore India’s forests sustainably.',
  keywords: [
    'AIM Foundation forest cleaning',
    'NGO forest cleanup India',
    'forest pollution solution NGO',
    'volunteer forest cleaning drives',
    'AIM Foundation environment initiatives',
    'plastic waste in forests India',
    'community forest restoration NGO',
    'forest conservation AIM Foundation',
    'NGO biodiversity protection',
    'sustainable forest cleanup India',
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/forest-cleaning-restoring-natural-habitats',
    title: 'Forest Cleaning by AIM Foundation | Restore Our Forests',
    description:
      'Join AIM Foundation’s Forest Cleaning initiative—volunteer-driven cleanups to remove waste, protect wildlife, and restore India’s forests sustainably.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Forest Cleaning by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Forest Cleaning by AIM Foundation | Restore Our Forests',
    description:
      'Join AIM Foundation’s Forest Cleaning initiative—volunteer-driven cleanups to remove waste, protect wildlife, and restore India’s forests sustainably.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/forest-cleaning-restoring-natural-habitats',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'Restoring Natural Habitats: The Forest Cleaning Initiative',
    'description': 'Join AIM Foundation’s Forest Cleaning initiative—volunteer-driven cleanups to remove waste, protect wildlife, and restore India’s forests sustainably.',
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
      '@id': 'https://aimindia.org.in/blog/forest-cleaning-restoring-natural-habitats'
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
      <ForestCleaningBlogPage />
    </>
  );
}
