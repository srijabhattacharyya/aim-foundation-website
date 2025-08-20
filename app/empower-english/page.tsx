
import type { Metadata } from 'next';
import EmpowerEnglishClientPage from './EmpowerEnglishClientPage';

export const metadata: Metadata = {
  title: 'AIM Foundation | Empower English for Student Growth',
  description: 'AIM Foundation’s Empower English trains underserved students in Kolkata, Bardhaman, and Jalpaiguri with spoken English skills for confidence and opportunity.',
  keywords: ['AIM Foundation Empower English', 'spoken English training Kolkata', 'NGO language program West Bengal', 'student confidence building', 'English skills for career', 'AIM Foundation education programs.'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    title: 'AIM Foundation | Empower English for Student Growth',
    description: 'AIM Foundation’s Empower English trains underserved students in Kolkata, Bardhaman, and Jalpaiguri with spoken English skills for confidence and opportunity.',
    type: 'website',
    url: 'https://aimindia.org.in/empower-english',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Empower English Program',
      },
    ],
    locale: 'en_IN',
    siteName: 'AIM Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIM Foundation | Empower English for Student Growth',
    description: 'AIM Foundation’s Empower English trains underserved students in Kolkata, Bardhaman, and Jalpaiguri with spoken English skills for confidence and opportunity.',
    images: ['https://aimindia.org.in/home.avif'],
    site: '@aimindiango',
  },
  alternates: {
    canonical: '/empower-english',
  },
};

export default function EmpowerEnglishPage() {
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
    "description": "AIM Foundation’s Empower English trains underserved students in Kolkata, Bardhaman, and Jalpaiguri with spoken English skills for confidence and opportunity."
    };
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
            }}
            key="org-schema-empower-english"
        />
        <EmpowerEnglishClientPage />
    </>
    );
}
