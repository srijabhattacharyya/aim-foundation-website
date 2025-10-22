
import type { Metadata } from 'next';
import ForestCleaningClientPage from './ForestCleaningClientPage';

export const metadata: Metadata = {
  title: 'Forest Cleaning Initiative | AIM Foundation Environmental Action',
  description: 'Join AIM Foundation’s Forest Cleaning initiative to restore natural habitats through volunteer-driven cleanup drives, protecting biodiversity and our environment.',
  keywords: [
    'AIM Foundation forest cleaning',
    'environmental cleanup NGO',
    'forest restoration India',
    'volunteer for environment',
    'plastic pollution cleanup',
    'biodiversity protection initiative',
    'nature conservation drives'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/forest-cleaning',
    title: 'Forest Cleaning Initiative | AIM Foundation Environmental Action',
    description: 'Join AIM Foundation’s Forest Cleaning initiative to restore natural habitats through volunteer-driven cleanup drives, protecting biodiversity and our environment.',
    images: [
      {
        url: 'https://aimindia.org.in/images/banner/roots-of-change1.avif',
        width: 1200,
        height: 630,
        alt: 'Forest Cleaning by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Forest Cleaning Initiative | AIM Foundation Environmental Action',
    description: 'Join AIM Foundation’s Forest Cleaning initiative to restore natural habitats and protect our environment.',
    images: ['https://aimindia.org.in/images/banner/roots-of-change1.avif'],
  },
  alternates: {
    canonical: '/forest-cleaning',
  },
};

export default function ForestCleaningPage() {
    const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://www.aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "Join AIM Foundation’s Forest Cleaning initiative to restore natural habitats through volunteer-driven cleanup drives."
  };

  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            key="org-schema-forest-cleaning"
        />
        <ForestCleaningClientPage />
    </>
  );
}
