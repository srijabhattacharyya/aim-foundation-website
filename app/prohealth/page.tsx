import type { Metadata } from 'next';
import ProHealthClientPage from './ProHealthClientPage';

export const metadata: Metadata = {
  title: 'Healthcare NGO Kolkata | Project ProHealth Impact',
  description: 'Healthcare NGO in Kolkata improving lives of 3,252 children through menstrual hygiene, mental health support, and holistic care.',
  keywords: [
    'ProHealth AIM Foundation',
    'Children International partnership',
    'healthcare investment Kolkata',
    'NGO healthcare project India',
    'strategic social investment',
    'Kolkata community health',
    'AIM Foundation flagship projects'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/prohealth',
    title: 'Healthcare NGO Kolkata | Project ProHealth Impact',
    description: 'Healthcare NGO in Kolkata improving lives of 3,252 children through menstrual hygiene, mental health support, and holistic care.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'ProHealth Initiative by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Healthcare NGO Kolkata | Project ProHealth Impact',
    description: 'Healthcare NGO in Kolkata improving lives of 3,252 children through menstrual hygiene, mental health support, and holistic care.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/prohealth',
  },
};

export default function ProHealthPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': 'ProHealth: A $70,000 Strategic Investment in the Future of Kolkata',
    'description': 'AIM Foundation, in partnership with Children International, USA, announces a major strategic investment in healthcare.',
    'author': {
      '@type': 'Organization',
      'name': 'Team AIM Foundation',
      'url': 'https://aimindia.org.in/'
    },
    'editor': {
      '@type': 'Person',
      'name': 'Saibal Ganguly'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'AIM Foundation',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://aimindia.org.in/logo.png'
      }
    },
    'datePublished': '2025-01-01T00:00:00Z',
    'image': 'https://aimindia.org.in/images/projects/carecircle/carecircle2.avif'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="prohealth-schema"
      />
      <ProHealthClientPage />
    </>
  );
}
