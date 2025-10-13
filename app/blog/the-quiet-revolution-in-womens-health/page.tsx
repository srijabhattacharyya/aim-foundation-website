import type { Metadata } from 'next';
import DetectBlogPage from './DetectBlogPage';

export const metadata: Metadata = {
  title: 'Project Detect by AIM Foundation | Cervical Cancer Care',
  description: 'Project Detect by AIM Foundation brings cervical cancer screening, awareness, and health education to rural India, empowering women with early detection and care.',
  keywords: [
    "Project Detect AIM Foundation",
    "AIM Foundation health",
    "cervical cancer screening India",
    "rural women healthcare",
    "cervical cancer awareness West Bengal",
    "ASHA training cervical health",
    "CNCI partnership AIM Foundation",
    "women’s reproductive health India",
    "cancer early detection",
    "rural health empowerment"
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/the-quiet-revolution-in-womens-health',
    title: 'Project Detect by AIM Foundation | Cervical Cancer Care',
    description: 'Project Detect by AIM Foundation brings cervical cancer screening, awareness, and health education to rural India, empowering women with early detection and care.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Project Detect by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Project Detect by AIM Foundation | Cervical Cancer Care',
    description: 'Project Detect by AIM Foundation brings cervical cancer screening, awareness, and health education to rural India, empowering women with early detection and care.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/the-quiet-revolution-in-womens-health',
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
    "description": "Project Detect by AIM Foundation brings cervical cancer screening, awareness, and health education to rural India, empowering women with early detection and care."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-detect-blog"
      />
      <DetectBlogPage />
    </>
  );
}
