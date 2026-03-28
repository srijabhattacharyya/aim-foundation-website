import type { Metadata } from 'next';
import CareCircleBlogPage from './CareCircleBlogPage';

export const metadata: Metadata = {
  metadataBase: new URL('https://aimindia.org.in'),
  title: 'CareCircle by AIM Foundation | Healthcare for Kolkata',
  description:
    'CareCircle by AIM Foundation delivers free check-ups, medicines, and screenings to underserved communities in Kolkata, ensuring healthcare for all.',
  keywords: [
    'AIM Foundation CareCircle',
    'free healthcare Kolkata',
    'NGO medical camps Kolkata',
    'AIM Foundation health initiative',
    'affordable healthcare India',
    'mobile health camps Kolkata',
    'community healthcare NGO',
    'free medicines for poor Kolkata',
    'healthcare access AIM Foundation',
    'NGO chronic disease screening',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/carecircle-bringing-healing-to-the-city',
    title: 'CareCircle by AIM Foundation | Healthcare for Kolkata',
    description:
      'CareCircle by AIM Foundation delivers free check-ups, medicines, and screenings to underserved communities in Kolkata, ensuring healthcare for all.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'CareCircle by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'CareCircle by AIM Foundation | Healthcare for Kolkata',
    description:
      'CareCircle by AIM Foundation delivers free check-ups, medicines, and screenings to underserved communities in Kolkata, ensuring healthcare for all.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: 'https://aimindia.org.in/blog/carecircle-bringing-healing-to-the-city',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'CareCircle: Bringing Healing to the Heart of the City',
    'description': 'CareCircle by AIM Foundation delivers free check-ups, medicines, and screenings to underserved communities in Kolkata, ensuring healthcare for all.',
    'image': 'https://aimindia.org.in/images/banner/carecircle.avif',
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
    'datePublished': '2024-11-19T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/carecircle-bringing-healing-to-the-city'
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
      <CareCircleBlogPage />
    </>
  );
}
