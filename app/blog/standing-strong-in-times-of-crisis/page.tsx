
import type { Metadata } from 'next';
import DisasterReliefBlogPage from './DisasterReliefBlogPage';

export const metadata: Metadata = {
  title: 'Rebuilding Lives After Disaster: AIM Foundation Relief Efforts',
  description: "Learn how AIM Foundation's Disaster Relief Program provides swift, compassionate, and effective assistance to communities affected by natural calamities.",
  keywords: [
    'disaster relief',
    'emergency response',
    'humanitarian aid',
    'community rebuilding',
    'crisis support',
    'AIM Foundation',
  ],
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'article',
    url: 'https://aimindia.org.in/blog/standing-strong-in-times-of-crisis',
    title: 'Rebuilding Lives After Disaster: AIM Foundation Relief Efforts',
    description: "Learn how AIM Foundation's Disaster Relief Program provides swift, compassionate, and effective assistance to communities affected by natural calamities.",
    images: [
      {
        url: 'https://aimindia.org.in/images/banner/disuster.avif',
        width: 1200,
        height: 630,
        alt: 'Disaster relief efforts by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Rebuilding Lives After Disaster: AIM Foundation Relief Efforts',
    description: "Learn how AIM Foundation's Disaster Relief Program provides swift assistance to communities affected by natural calamities.",
    images: ['https://aimindia.org.in/images/banner/disuster.avif'],
  },
  alternates: {
    canonical: '/blog/standing-strong-in-times-of-crisis',
  },
};

export default function Page() {
    const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "From Despair to Recovery: Rebuilding Lives After Disaster",
    "author": {
      "@type": "Organization",
      "name": "AIM Foundation"
    },
     "publisher": {
      "@type": "Organization",
      "name": "AIM Foundation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aimindia.org.in/logo.png"
      }
    },
    "description": "Learn how AIM Foundation’s Disaster Relief Program provides swift, compassionate, and effective assistance to communities affected by natural calamities.",
    "image": "https://aimindia.org.in/images/banner/disuster.avif",
    "datePublished": "2023-05-06T00:00:00Z",
     "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aimindia.org.in/blog/from-despair-to-recovery-rebuilding-lives-after-disaster"
    }
  };
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <DisasterReliefBlogPage />
    </>
  );
}
