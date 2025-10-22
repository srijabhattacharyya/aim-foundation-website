
import type { Metadata } from 'next';
import KrishtiBlogPage from './KrishtiBlogPage';

export const metadata: Metadata = {
  title: 'Krishti by AIM Foundation: Empowering Women Entrepreneurs',
  description: "Learn how AIM Foundation's Krishti initiative provides production and marketing support to transform skilled women into successful entrepreneurs.",
  keywords: [
    "AIM Foundation Krishti",
    "women entrepreneurs program",
    "women's livelihood NGO",
    "skill to business women India",
    "craftswomen empowerment",
    "rural women entrepreneurship",
    "SuiDhaga Krishti project"
  ],
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'article',
    url: 'https://aimindia.org.in/blog/crafting-futures-the-krishti-story',
    title: 'Krishti by AIM Foundation: Empowering Women Entrepreneurs',
    description: "Learn how AIM Foundation's Krishti initiative provides production and marketing support to transform skilled women into successful entrepreneurs.",
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Women entrepreneurs working with Krishti by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Krishti by AIM Foundation: Empowering Women Entrepreneurs',
    description: "Learn how AIM Foundation's Krishti initiative provides production and marketing support to transform skilled women into successful entrepreneurs.",
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/crafting-futures-the-krishti-story',
  },
};

export default function Page() {
    const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Crafted by Her. Backed by Krishti: The Story of Empowering Women Entrepreneurs",
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
    "description": "Learn how AIM Foundation's Krishti initiative provides production and marketing support to transform skilled women into successful entrepreneurs.",
    "image": "https://aimindia.org.in/images/banner/krishti1.avif",
    "datePublished": "2021-02-05T00:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aimindia.org.in/blog/crafting-futures-the-krishti-story"
    }
  };

  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <KrishtiBlogPage />
    </>
  );
}
