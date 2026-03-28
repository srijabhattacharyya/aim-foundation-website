import type { Metadata } from 'next';
import NoChildLeftOfflineBlogPage from './NoChildLeftOfflineBlogPage';

export const metadata: Metadata = {
  title: 'DigiEmpower by AIM Foundation: Bridging Digital Divide',
  description:
    'DigiEmpower by AIM Foundation equips underprivileged children with vital digital skills, bridging the digital divide through training, access, and mentorship.',
  keywords: [
    'AIM Foundation digital literacy',
    'DigiEmpower project India',
    'NGO computer training for children',
    'bridge digital divide West Bengal',
    'digital skills rural India',
    'underprivileged children technology',
    'Dhriti Abilizing Centres AIM Foundation',
    'digital empowerment India NGO',
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/no-child-left-offline',
    title: 'DigiEmpower by AIM Foundation: Bridging Digital Divide',
    description:
      'DigiEmpower by AIM Foundation equips underprivileged children with vital digital skills, bridging the digital divide through training, access, and mentorship.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'DigiEmpower by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'DigiEmpower by AIM Foundation: Bridging Digital Divide',
    description:
      'DigiEmpower by AIM Foundation equips underprivileged children with vital digital skills, bridging the digital divide through training, access, and mentorship.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: 'https://aimindia.org.in/blog/no-child-left-offline',
  },
};

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': 'No Child Left Offline: How DigiEmpower is Bridging the Digital Divide',
    'description': 'DigiEmpower by AIM Foundation equips underprivileged children with vital digital skills, bridging the digital divide through training, access, and mentorship.',
    'image': 'https://aimindia.org.in/images/banner/digiempower.avif',
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
    'datePublished': '2023-11-20T00:00:00Z',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://aimindia.org.in/blog/no-child-left-offline'
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
      <NoChildLeftOfflineBlogPage />
    </>
  );
}
