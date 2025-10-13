import type { Metadata } from 'next';
import TideShieldBlogPage from './TideShieldBlogPage';

export const metadata: Metadata = {
  title: 'TideShield Mangrove Restoration | AIM Foundation',
  description: 'AIM Foundation’s TideShield restores Sundarbans mangroves on Bali Island, protecting families from cyclones, erosion, and climate change impacts.',
  keywords: [
    'AIM Foundation',
    'TideShield initiative',
    'Sundarbans mangrove restoration',
    'Bali Island climate resilience',
    'Cyclone Amphan Yaas recovery',
    'mangrove plantation West Bengal',
    'coastal erosion protection India',
    'community-led mangrove project',
    'climate change adaptation NGO',
    'restore mangroves AIM Foundation'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/tideshield-restoring-mangroves',
    title: 'TideShield Mangrove Restoration | AIM Foundation',
    description: 'AIM Foundation’s TideShield restores Sundarbans mangroves on Bali Island, protecting families from cyclones, erosion, and climate change impacts.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'TideShield Mangrove Restoration by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'TideShield Mangrove Restoration | AIM Foundation',
    description: 'AIM Foundation’s TideShield restores Sundarbans mangroves on Bali Island, protecting families from cyclones, erosion, and climate change impacts.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/tideshield-restoring-mangroves',
  },
};

export default function Page() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://aimindia.org.in/",
    "logo": "https://aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "AIM Foundation’s TideShield restores Sundarbans mangroves on Bali Island, protecting families from cyclones, erosion, and climate change impacts."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-tideshield-blog"
      />
      <TideShieldBlogPage />
    </>
  );
}
