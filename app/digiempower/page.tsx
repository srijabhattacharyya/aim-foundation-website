import type { Metadata } from 'next';
import DigiEmpowerClientPage from './DigiEmpowerClientPage';

export const metadata: Metadata = {
  title: 'AIM Foundation | DigiEmpower Digital Literacy Program',
  description: 'AIM Foundation’s DigiEmpower bridges the digital divide by training underprivileged and Adivasi children in West Bengal with essential computer and internet skills.',
  keywords: [
    'AIM Foundation DigiEmpower',
    'digital literacy NGO West Bengal',
    'computer training for children',
    'Adivasi education programs',
    'bridge digital divide India',
    'AIM Foundation education'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/digiempower',
    title: 'AIM Foundation | DigiEmpower Digital Literacy Program',
    description: 'AIM Foundation’s DigiEmpower bridges the digital divide by training underprivileged and Adivasi children in West Bengal with essential computer and internet skills.',
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
    title: 'AIM Foundation | DigiEmpower Digital Literacy Program',
    description: 'AIM Foundation’s DigiEmpower bridges the digital divide by training underprivileged and Adivasi children in West Bengal with essential computer and internet skills.',
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
