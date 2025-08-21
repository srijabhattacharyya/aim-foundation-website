
import type { Metadata } from 'next';
import IgniteChangeBlogPage from './IgniteChangeBlogPage';

export const metadata: Metadata = {
  title: 'Ignite Change by AIM Foundation: Powering Grassroots Action',
  description: 'Ignite Change by AIM Foundation empowers communities with seed funding, training, and support to lead grassroots projects and create lasting local impact.',
  keywords: ["AIM Foundation Ignite Change", "grassroots action India NGO", "community empowerment projects", "seed funding for social change", "grassroots leadership programs India", "NGO supporting local initiatives", "AIM Foundation changemaker initiative", "small actions big impact NGO"],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/igniting-change-transforming-communities',
    title: 'Ignite Change by AIM Foundation: Powering Grassroots Action',
    description: 'Ignite Change by AIM Foundation empowers communities with seed funding, training, and support to lead grassroots projects and create lasting local impact.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Ignite Change by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/igniting-change-transforming-communities',
    title: 'Ignite Change by AIM Foundation: Powering Grassroots Action',
    description: 'Ignite Change by AIM Foundation empowers communities with seed funding, training, and support to lead grassroots projects and create lasting local impact.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/igniting-change-transforming-communities',
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
    "description": "Ignite Change by AIM Foundation empowers communities with seed funding, training, and support to lead grassroots projects and create lasting local impact."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-ignite-change-blog"
      />
      <IgniteChangeBlogPage />
    </>
  );
}
