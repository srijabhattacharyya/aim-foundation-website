
import type { Metadata } from 'next';
import VidyaShaktiBlogPage from './VidyaShaktiBlogPage';

export const metadata: Metadata = {
  title: 'VidyaShakti by AIM Foundation | AI Learning for Rural India',
  description: "Discover VidyaShakti by AIM Foundation—an AI-powered learning app transforming rural education with multilingual support, equity, and 24/7 access.",
  keywords: ["AIM Foundation VidyaShakti", "AI learning app rural India", "AIM Foundation education initiative", "multilingual education app NGO", "rural students digital learning", "AI-powered education for villages", "mobile learning AIM Foundation", "teacher shortage solution India", "NGO tech in education", "equal access to education rural India"],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/vidyashakti-ai-learning',
    title: 'VidyaShakti by AIM Foundation | AI Learning for Rural India',
    description: 'Discover VidyaShakti by AIM Foundation—an AI-powered learning app transforming rural education with multilingual support, equity, and 24/7 access.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'VidyaShakti by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/vidyashakti-ai-learning',
    title: 'VidyaShakti by AIM Foundation | AI Learning for Rural India',
    description: 'Discover VidyaShakti by AIM Foundation—an AI-powered learning app transforming rural education with multilingual support, equity, and 24/7 access.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/vidyashakti-ai-learning',
  },
};

export default function Page() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "Discover VidyaShakti by AIM Foundation—an AI-powered learning app transforming rural education with multilingual support, equity, and 24/7 access."
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-vidyashakti-blog"
      />
      <VidyaShaktiBlogPage />
    </>
  );
}
