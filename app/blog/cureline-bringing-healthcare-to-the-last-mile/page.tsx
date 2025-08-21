
import type { Metadata } from 'next';
import CureLineBlogPage from './CureLineBlogPage';

export const metadata: Metadata = {
  title: 'CureLine Healthcare Initiative | AIM Foundation India',
  description: 'CureLine by AIM Foundation brings doctors, medicines, and health camps to remote villages, Sundarbans, and flood-hit areas where care is scarce.',
  keywords: ['AIM Foundation CureLine', 'rural healthcare India', 'mobile medical camps', 'NGO health services West Bengal', 'Sundarbans healthcare', 'free medical camps NGO', 'healthcare CSR India'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/cureline-bringing-healthcare-to-the-last-mile',
    title: 'CureLine Healthcare Initiative | AIM Foundation India',
    description: 'CureLine by AIM Foundation brings doctors, medicines, and health camps to remote villages, Sundarbans, and flood-hit areas where care is scarce.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'CureLine Healthcare Initiative by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/cureline-bringing-healthcare-to-the-last-mile',
    title: 'CureLine Healthcare Initiative | AIM Foundation India',
    description: 'CureLine by AIM Foundation brings doctors, medicines, and health camps to remote villages, Sundarbans, and flood-hit areas where care is scarce.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/cureline-bringing-healthcare-to-the-last-mile',
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
    "description": "CureLine by AIM Foundation brings doctors, medicines, and health camps to remote villages, Sundarbans, and flood-hit areas where care is scarce."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-cureline-blog"
      />
      <CureLineBlogPage />
    </>
  );
}
