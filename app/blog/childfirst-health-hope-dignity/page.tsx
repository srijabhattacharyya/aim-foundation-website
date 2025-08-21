
import type { Metadata } from 'next';
import ChildFirstBlogPage from './ChildFirstBlogPage';

export const metadata: Metadata = {
  title: 'ChildFirst by AIM Foundation | Healthcare for Vulnerable Kids',
  description: 'ChildFirst by AIM Foundation provides free health camps, medicines, and nutrition to children in Kolkata’s red-light areas, restoring hope and dignity.',
  keywords: ['AIM Foundation ChildFirst', 'free healthcare for children Kolkata', 'NGO child health camps', 'AIM Foundation paediatric care', 'child nutrition support Kolkata', 'healthcare for red-light district children', 'NGO medical camps for kids', 'free medicines for children Kolkata', 'AIM Foundation children’s initiative', 'child healthcare NGO India'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/childfirst-health-hope-dignity',
    title: 'ChildFirst by AIM Foundation | Healthcare for Vulnerable Kids',
    description: 'ChildFirst by AIM Foundation provides free health camps, medicines, and nutrition to children in Kolkata’s red-light areas, restoring hope and dignity.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'ChildFirst by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/childfirst-health-hope-dignity',
    title: 'ChildFirst by AIM Foundation | Healthcare for Vulnerable Kids',
    description: 'ChildFirst by AIM Foundation provides free health camps, medicines, and nutrition to children in Kolkata’s red-light areas, restoring hope and dignity.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/childfirst-health-hope-dignity',
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
    "description": "ChildFirst by AIM Foundation provides free health camps, medicines, and nutrition to children in Kolkata’s red-light areas, restoring hope and dignity."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-childfirst-blog"
      />
      <ChildFirstBlogPage />
    </>
    );
}
