
import type { Metadata } from 'next';
import SightHopeBlogPage from './SightHopeBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation SightHope: Free Eye Care for All',
  description: 'AIM Foundation’s SightHope restores vision through free cataract surgeries, eye camps, and screenings, bringing dignity and opportunity to underprivileged lives.',
  keywords: ["AIM Foundation SightHope", "free eye care Kolkata", "cataract surgery NGO India", "free vision screening", "AIM Foundation eye hospitals", "refractive error treatment", "AIM Foundation eye health program", "free glasses for children", "eye camp Kolkata", "AIM Foundation restore sight"],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/restoring-sight-rekindling-dreams',
    title: 'AIM Foundation SightHope: Free Eye Care for All',
    description: 'AIM Foundation’s SightHope restores vision through free cataract surgeries, eye camps, and screenings, bringing dignity and opportunity to underprivileged lives.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation SightHope Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/restoring-sight-rekindling-dreams',
    title: 'AIM Foundation SightHope: Free Eye Care for All',
    description: 'AIM Foundation’s SightHope restores vision through free cataract surgeries, eye camps, and screenings, bringing dignity and opportunity to underprivileged lives.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/restoring-sight-rekindling-dreams',
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
    "description": "AIM Foundation’s SightHope restores vision through free cataract surgeries, eye camps, and screenings, bringing dignity and opportunity to underprivileged lives."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-sighthope-blog"
      />
      <SightHopeBlogPage />
    </>
  );
}
