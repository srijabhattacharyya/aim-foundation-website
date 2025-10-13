import type { Metadata } from 'next';
import RootsOfChangeBlogPage from './RootsOfChangeBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation Roots of Change: Environmental Education',
  description: 'AIM Foundation’s Roots of Change builds environmental awareness through education, workshops, and community action to fight climate change sustainably.',
  keywords: [
    'AIM Foundation Roots of Change',
    'AIM Foundation environmental education',
    'climate change awareness NGO India',
    'AIM Foundation sustainability initiative',
    'Roots of Change green education',
    'NGO environmental workshops Kolkata',
    'community climate action India',
    'AIM Foundation environmental awareness program',
    'NGO fighting plastic pollution India',
    'Roots of Change AIM Foundation projects'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/roots-of-change',
    title: 'AIM Foundation Roots of Change: Environmental Education',
    description: 'AIM Foundation’s Roots of Change builds environmental awareness through education, workshops, and community action to fight climate change sustainably.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Roots of Change Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation Roots of Change: Environmental Education',
    description: 'AIM Foundation’s Roots of Change builds environmental awareness through education, workshops, and community action to fight climate change sustainably.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/roots-of-change',
  },
};

export default function Page() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIM Foundation",
    url: "https://aimindia.org.in/",
    logo: "https://aimindia.org.in/logo.png",
    sameAs: [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    description: "AIM Foundation’s Roots of Change builds environmental awareness through education, workshops, and community action to fight climate change sustainably."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-roots-of-change-blog"
      />
      <RootsOfChangeBlogPage />
    </>
  );
}
