
import type { Metadata } from 'next';
import GreenRootsBlogPage from './GreenRootsBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation GreenRoots: Community Tree Planting',
  description: "AIM Foundation’s GreenRoots empowers families, schools, and villages to plant trees in courtyards, farms, and temples, building climate resilience at the grassroots.",
  keywords: ['AIM Foundation GreenRoots', 'community tree planting', 'reforestation India', 'grassroots environmental initiative', 'tree plantation drives', 'climate resilience NGO', 'sustainable environment AIM Foundation'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/planting-hope-growing-futures',
    title: 'AIM Foundation GreenRoots: Community Tree Planting',
    description: "AIM Foundation’s GreenRoots empowers families, schools, and villages to plant trees in courtyards, farms, and temples, building climate resilience at the grassroots.",
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation GreenRoots Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/planting-hope-growing-futures',
    title: 'AIM Foundation GreenRoots: Community Tree Planting',
    description: "AIM Foundation’s GreenRoots empowers families, schools, and villages to plant trees in courtyards, farms, and temples, building climate resilience at the grassroots.",
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/planting-hope-growing-futures',
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
    "description": "AIM Foundation’s GreenRoots empowers families, schools, and villages to plant trees in courtyards, farms, and temples, building climate resilience at the grassroots."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-greenroots-blog"
      />
      <GreenRootsBlogPage />
    </>
  );
}
