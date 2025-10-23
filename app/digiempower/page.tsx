
import type { Metadata } from 'next';
import DigiEmpowerClientPage from './DigiEmpowerClientPage';

export const metadata: Metadata = {
  title: 'DigiEmpower – Digital Literacy for Children | AIM Foundation',
  description: 'DigiEmpower by AIM Foundation, a top NGO in Kolkata, empowers underprivileged children with digital literacy, computer skills, and hands-on learning.',
  keywords: [
    'DigiEmpower', 'AIM Foundation', 'Digital literacy for children', 'Child computer training', 'Digital skills program', 'Digital education NGO', 'Top NGO in Kolkata', 'Underprivileged children digital learning', 'Adivasi children computer training', 'Bridge the digital divide India'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/digiempower',
    title: 'DigiEmpower – Digital Literacy for Children | AIM Foundation',
    description: 'DigiEmpower by AIM Foundation, a top NGO in Kolkata, empowers underprivileged children with digital literacy, computer skills, and hands-on learning.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation DigiEmpower Program',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'DigiEmpower – Digital Literacy for Children | AIM Foundation',
    description: 'DigiEmpower by AIM Foundation, a top NGO in Kolkata, empowers underprivileged children with digital literacy, computer skills, and hands-on learning.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/digiempower',
  },
};

export default function DigiEmpowerPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://www.aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "AIM Foundation’s DigiEmpower bridges the digital divide by training underprivileged and Adivasi children in West Bengal with essential computer and internet skills."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-digiempower"
      />
      <DigiEmpowerClientPage />
    </>
  );
}
