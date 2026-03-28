import type { Metadata } from 'next';
import OralScanBlogPage from './OralScanBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation OralScan: Free Oral Cancer Screenings',
  description: 'AIM Foundation’s OralScan fights oral cancer in India with free screenings, awareness, and counseling, bringing early detection and care to underserved communities.',
  keywords: [
    "AIM Foundation OralScan",
    "free oral cancer screening India",
    "AIM Foundation oral health program",
    "early detection oral cancer NGO",
    "oral cancer awareness India",
    "rural oral cancer screening camps",
    "tobacco risk awareness AIM Foundation",
    "community cancer detection India",
    "oral cancer counseling support NGO",
    "AIM Foundation healthcare initiative"
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/screening-today-for-a-healthier-tomorrow',
    title: 'AIM Foundation OralScan: Free Oral Cancer Screenings',
    description: 'AIM Foundation’s OralScan fights oral cancer in India with free screenings, awareness, and counseling, bringing early detection and care to underserved communities.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation OralScan Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation OralScan: Free Oral Cancer Screenings',
    description: 'AIM Foundation’s OralScan fights oral cancer in India with free screenings, awareness, and counseling, bringing early detection and care to underserved communities.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/screening-today-for-a-healthier-tomorrow',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'Screening Today for a Healthier Tomorrow: The OralScan Story',
    'description': 'AIM Foundation’s OralScan fights oral cancer in India with free screenings, awareness, and counseling, bringing early detection and care to underserved communities.',
    'image': 'https://aimindia.org.in/images/banner/oralscan.avif',
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
    'datePublished': '2021-08-19T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/screening-today-for-a-healthier-tomorrow'
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
      <OralScanBlogPage />
    </>
  );
}
