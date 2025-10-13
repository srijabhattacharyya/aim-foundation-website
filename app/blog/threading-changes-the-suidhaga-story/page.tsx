import type { Metadata } from 'next';
import SuiDhagaBlogPage from './SuiDhagaBlogPage';

export const metadata: Metadata = {
  title: 'SuiDhaga by AIM Foundation | Women’s Skill Empowerment',
  description: "SuiDhaga by AIM Foundation empowers women through tailoring and embroidery training, creating livelihoods, dignity, and sustainable income opportunities in communities.",
  keywords: [
    "SuiDhaga AIM Foundation",
    "AIM Foundation women empowerment",
    "tailoring training India",
    "embroidery skill development",
    "livelihood program women",
    "rural women income generation",
    "community stitching initiative",
    "gender empowerment through skills",
    "self-reliance women India",
    "sewing training NGO"
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/threading-changes-the-suidhaga-story',
    title: 'SuiDhaga by AIM Foundation | Women’s Skill Empowerment',
    description: 'SuiDhaga by AIM Foundation empowers women through tailoring and embroidery training, creating livelihoods, dignity, and sustainable income opportunities in communities.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'SuiDhaga by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'SuiDhaga by AIM Foundation | Women’s Skill Empowerment',
    description: 'SuiDhaga by AIM Foundation empowers women through tailoring and embroidery training, creating livelihoods, dignity, and sustainable income opportunities in communities.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/threading-changes-the-suidhaga-story',
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
    "description": "SuiDhaga by AIM Foundation empowers women through tailoring and embroidery training, creating livelihoods, dignity, and sustainable income opportunities in communities."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-suidhaga-blog"
      />
      <SuiDhagaBlogPage />
    </>
  );
}
