import type { Metadata } from 'next';
import CureLineBlogPage from './CureLineBlogPage';

export const metadata: Metadata = {
  title: 'CureLine Healthcare Initiative | AIM Foundation India',
  description:
    'CureLine by AIM Foundation brings doctors, medicines, and health camps to remote villages, Sundarbans, and flood-hit areas where care is scarce.',
  keywords: [
    'AIM Foundation CureLine',
    'rural healthcare India',
    'mobile medical camps',
    'NGO health services West Bengal',
    'Sundarbans healthcare',
    'free medical camps NGO',
    'healthcare CSR India',
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/cureline-bringing-healthcare-to-the-last-mile',
    title: 'CureLine Healthcare Initiative | AIM Foundation India',
    description:
      'CureLine by AIM Foundation brings doctors, medicines, and health camps to remote villages, Sundarbans, and flood-hit areas where care is scarce.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'CureLine Healthcare Initiative by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'CureLine Healthcare Initiative | AIM Foundation India',
    description:
      'CureLine by AIM Foundation brings doctors, medicines, and health camps to remote villages, Sundarbans, and flood-hit areas where care is scarce.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/cureline-bringing-healthcare-to-the-last-mile',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'CureLine: Bringing Healthcare to the Last Mile',
    'description': 'CureLine by AIM Foundation brings doctors, medicines, and health camps to remote villages, Sundarbans, and flood-hit areas where care is scarce.',
    'image': 'https://aimindia.org.in/images/banner/cureline.avif',
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
    'datePublished': '2024-02-27T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/cureline-bringing-healthcare-to-the-last-mile'
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
      <CureLineBlogPage />
    </>
  );
}
