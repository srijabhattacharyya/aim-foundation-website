import type { Metadata } from 'next';
import SheConnectsBlogPage from './SheConnectsBlogPage';

export const metadata: Metadata = {
  title: 'AIM Foundation SheConnects: Women’s Digital Empowerment',
  description: 'AIM Foundation’s SheConnects empowers women with digital skills, online safety, and entrepreneurship training, helping them thrive in the digital economy.',
  keywords: [
    'AIM Foundation SheConnects',
    'women digital empowerment India',
    'female entrepreneurship training',
    'online safety for women',
    'digital literacy NGO',
    'women skill development AIM Foundation'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/project-sheconnects',
    title: 'AIM Foundation SheConnects: Women’s Digital Empowerment',
    description: 'AIM Foundation’s SheConnects empowers women with digital skills, online safety, and entrepreneurship training, helping them thrive in the digital economy.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation SheConnects Initiative',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    // ✅ Remove url here
    title: 'AIM Foundation SheConnects: Women’s Digital Empowerment',
    description: 'AIM Foundation’s SheConnects empowers women with digital skills, online safety, and entrepreneurship training, helping them thrive in the digital economy.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/project-sheconnects',
  },
};

export default function Page() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIM Foundation",
    url: "https://aimindia.org.in/",
    logo: "https://aimindia.org.in/logo.png",
    sameAs: [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    description: 'AIM Foundation’s SheConnects empowers women with digital skills, online safety, and entrepreneurship training, helping them thrive in the digital economy.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-sheconnects-blog"
      />
      <SheConnectsBlogPage />
    </>
  );
}
