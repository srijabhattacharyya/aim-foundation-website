
import type { Metadata } from 'next';
import ReliefBlogPage from './ReliefBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation Relief: Aid for the Underprivileged',
  description: "AIM Foundation provides food, water, clothing, and shelter to underprivileged families in crisis, delivering immediate relief with dignity and compassion.",
  keywords: ["AIM Foundation relief program", "AIM Foundation underprivileged support", "emergency relief NGO India", "food and ration kits AIM Foundation", "AIM Foundation disaster relief Kolkata", "AIM Foundation shelter and blankets aid", "clean water and hygiene kits NGO", "urgent relief for poor families India", "AIM Foundation immediate crisis response", "NGO providing relief in West Bengal"],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/relief-to-the-underprivileged',
    title: 'AIM Foundation Relief: Aid for the Underprivileged',
    description: 'AIM Foundation provides food, water, clothing, and shelter to underprivileged families in crisis, delivering immediate relief with dignity and compassion.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Relief Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/relief-to-the-underprivileged',
    title: 'AIM Foundation Relief: Aid for the Underprivileged',
    description: 'AIM Foundation provides food, water, clothing, and shelter to underprivileged families in crisis, delivering immediate relief with dignity and compassion.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/relief-to-the-underprivileged',
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
    "description": "AIM Foundation provides food, water, clothing, and shelter to underprivileged families in crisis, delivering immediate relief with dignity and compassion."
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-relief-blog"
      />
      <ReliefBlogPage />
    </>
  );
}
