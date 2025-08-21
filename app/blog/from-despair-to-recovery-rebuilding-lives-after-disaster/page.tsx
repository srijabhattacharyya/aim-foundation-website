
import type { Metadata } from 'next';
import DisasterReliefBlogPage from './DisasterReliefBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation Disaster Relief: Swift Aid in Crises',
  description: 'AIM Foundation’s Disaster Relief Program delivers food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and emergencies.',
  keywords: ['AIM Foundation disaster relief', 'emergency relief NGO India', 'disaster management program NGO', 'flood and cyclone relief India', 'AIM Foundation crisis response', 'humanitarian aid NGO India', 'emergency food and shelter support', 'NGO disaster preparedness India', 'AIM Foundation relief and recovery', 'donate for disaster relief India'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/from-despair-to-recovery-rebuilding-lives-after-disaster',
    title: 'AIM Foundation Disaster Relief: Swift Aid in Crises',
    description: 'AIM Foundation’s Disaster Relief Program delivers food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and emergencies.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Disaster Relief',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/from-despair-to-recovery-rebuilding-lives-after-disaster',
    title: 'AIM Foundation Disaster Relief: Swift Aid in Crises',
    description: 'AIM Foundation’s Disaster Relief Program delivers food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and emergencies.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/from-despair-to-recovery-rebuilding-lives-after-disaster',
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
    "description": "AIM Foundation’s Disaster Relief Program delivers food, shelter, medical aid, and recovery support to communities hit by floods, cyclones, and emergencies."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-disaster-relief-blog"
      />
      <DisasterReliefBlogPage />
    </>
  );
}
