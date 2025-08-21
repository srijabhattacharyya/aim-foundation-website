
import type { Metadata } from 'next';
import NoChildLeftOfflineBlogPage from './NoChildLeftOfflineBlogPage';

export const metadata: Metadata = {
  title: 'DigiEmpower by AIM Foundation: Bridging Digital Divide',
  description: 'DigiEmpower by AIM Foundation equips underprivileged children with vital digital skills, bridging the digital divide through training, access, and mentorship.',
  keywords: ["AIM Foundation digital literacy", "DigiEmpower project India", "NGO computer training for children", "bridge digital divide West Bengal", "digital skills rural India", "underprivileged children technology", "Dhriti Abilizing Centres AIM Foundation", "digital empowerment India NGO"],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/no-child-left-offline',
    title: 'DigiEmpower by AIM Foundation: Bridging Digital Divide',
    description: 'DigiEmpower by AIM Foundation equips underprivileged children with vital digital skills, bridging the digital divide through training, access, and mentorship.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'DigiEmpower by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/no-child-left-offline',
    title: 'DigiEmpower by AIM Foundation: Bridging Digital Divide',
    description: 'DigiEmpower by AIM Foundation equips underprivileged children with vital digital skills, bridging the digital divide through training, access, and mentorship.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/no-child-left-offline',
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
    "description": "DigiEmpower by AIM Foundation equips underprivileged children with vital digital skills, bridging the digital divide through training, access, and mentorship."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-digiempower-blog"
      />
      <NoChildLeftOfflineBlogPage />
    </>
  );
}

