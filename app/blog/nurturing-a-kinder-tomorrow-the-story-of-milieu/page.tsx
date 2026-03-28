import type { Metadata } from 'next';
import MilieuBlogPage from './MilieuBlogPage';

export const metadata: Metadata = {
  title: 'Milieu by AIM Foundation | Building Empathy & Inclusion',
  description:
    'Milieu by AIM Foundation unites children from diverse backgrounds, fostering empathy, respect, and social harmony through shared learning and connection.',
  keywords: [
    'AIM Foundation Milieu',
    'social inclusion NGO',
    'empathy education India',
    'diversity awareness programs',
    'child development NGO Kolkata',
    'youth empathy building workshops',
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu',
    title: 'Milieu by AIM Foundation | Building Empathy & Inclusion',
    description:
      'Milieu by AIM Foundation unites children from diverse backgrounds, fostering empathy, respect, and social harmony through shared learning and connection.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Milieu by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Milieu by AIM Foundation | Building Empathy & Inclusion',
    description:
      'Milieu by AIM Foundation unites children from diverse backgrounds, fostering empathy, respect, and social harmony through shared learning and connection.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'Nurturing a Kinder Tomorrow: The Story of Milieu',
    'description': 'Milieu by AIM Foundation unites children from diverse backgrounds, fostering empathy, respect, and social harmony through shared learning and connection.',
    'image': 'https://aimindia.org.in/images/banner/milieu.avif',
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
    'datePublished': '2019-11-05T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu'
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
      <MilieuBlogPage />
    </>
  );
}
