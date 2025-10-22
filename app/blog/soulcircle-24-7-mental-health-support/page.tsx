
import type { Metadata } from 'next';
import SoulCircleBlogPage from './SoulCircleBlogPage';

export const metadata: Metadata = {
  title: 'SoulCircle by AIM Foundation: 24/7 AI Mental Health Support',
  description: "Learn how AIM Foundation's SoulCircle app offers AI-powered, accessible, and compassionate mental health support to everyone, everywhere.",
  keywords: [
    'SoulCircle AIM Foundation',
    'AI mental health app',
    '24/7 emotional support',
    'free mental health support India',
    'anonymous counseling app',
    'mental wellness chatbot',
    'stress relief app',
    'AIM Foundation technology'
  ],
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'article',
    url: 'https://aimindia.org.in/blog/soulcircle-24-7-mental-health-support',
    title: 'SoulCircle by AIM Foundation: 24/7 AI Mental Health Support',
    description: "Learn how AIM Foundation's SoulCircle app offers AI-powered, accessible, and compassionate mental health support to everyone, everywhere.",
    images: [
        {
            url: 'https://aimindia.org.in/images/banner/soulcircles.avif',
            width: 1200,
            height: 630,
            alt: 'Mental peace and support through SoulCircle',
        }
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'SoulCircle by AIM Foundation: 24/7 AI Mental Health Support',
    description: "Learn how AIM Foundation's SoulCircle app offers AI-powered, accessible, and compassionate mental health support.",
    images: ['https://aimindia.org.in/images/banner/soulcircles.avif']
  },
  alternates: {
    canonical: '/blog/soulcircle-24-7-mental-health-support',
  },
};

export default function Page() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SoulCircle: Bringing 24/7 Compassionate Mental Health Support to Everyone, Everywhere",
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
    "description": "Learn how AIM Foundation's SoulCircle app offers AI-powered, accessible, and compassionate mental health support to everyone, everywhere.",
    "image": "https://aimindia.org.in/images/banner/soulcircles.avif",
    "datePublished": "2025-04-09T00:00:00Z",
     "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aimindia.org.in/blog/soulcircle-24-7-mental-health-support"
    }
  };

  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <SoulCircleBlogPage />
    </>
  );
}
