import type { Metadata } from 'next';
import GreenRootsClientPage from './GreenRootsClientPage';

export const metadata: Metadata = {
  title: 'GreenRoots - AIM Foundation',
  description: 'Sow today, breathe tomorrow. Promoting reforestation and expanding green cover through community participation.',
  keywords: ['GreenRoots', 'AIM Foundation reforestation', 'community tree planting', 'environment NGO India', 'green cover initiative'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/green-roots',
    title: 'GreenRoots - AIM Foundation',
    description: 'Sow today, breathe tomorrow. Promoting reforestation and expanding green cover through community participation.',
    images: [
      {
        url: 'https://aimindia.org.in/images/projects/greenroots/greenroots-banner.avif',
        width: 1200,
        height: 630,
        alt: 'GreenRoots Reforestation Program',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/green-roots',
    title: 'GreenRoots - AIM Foundation',
    description: 'Sow today, breathe tomorrow. Promoting reforestation and expanding green cover through community participation.',
    images: ['https://aimindia.org.in/images/projects/greenroots/greenroots-banner.avif'],
  },
  alternates: {
    canonical: '/green-roots',
  },
};

export default function GreenRootsPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIM Foundation",
    url: "https://www.aimindia.org.in/",
    logo: "https://www.aimindia.org.in/logo.png",
    sameAs: [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    description: "Sow today, breathe tomorrow. Promoting reforestation and expanding green cover through community participation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-greenroots"
      />
      <GreenRootsClientPage />
    </>
  );
}
