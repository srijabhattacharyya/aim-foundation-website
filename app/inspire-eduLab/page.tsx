
import type { Metadata } from 'next';
import InspireEduLabClientPage from './InspireEduLabClientPage';

export const metadata: Metadata = {
  title: 'AIM Foundation | Inspire EduLab - Digital Learning Program',
  description: 'AIM Foundation’s Inspire EduLab equips classrooms with smartboards, internet, and interactive tools to spark curiosity and bridge the digital divide in education.',
  keywords: ['AIM Foundation Inspire EduLab', 'AIM Foundation digital learning', 'smart classrooms NGO', 'digital education Kolkata', 'technology in education NGO', 'e-learning for children'],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/inspire-eduLab',
    title: 'AIM Foundation | Inspire EduLab - Digital Learning Program',
    description: 'AIM Foundation’s Inspire EduLab equips classrooms with smartboards, internet, and interactive tools to spark curiosity and bridge the digital divide in education.',
    images: [
        {
            url: 'https://aimindia.org.in/home.avif',
            width: 1200,
            height: 630,
            alt: 'AIM Foundation Inspire EduLab Program',
        },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/inspire-eduLab',
    title: 'AIM Foundation | Inspire EduLab - Digital Learning Program',
    description: 'AIM Foundation’s Inspire EduLab equips classrooms with smartboards, internet, and interactive tools to spark curiosity and bridge the digital divide in education.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/inspire-eduLab',
  },
};

export default function InspireEduLabPage() {
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
    "description": "AIM Foundation’s Inspire EduLab equips classrooms with smartboards, internet, and interactive tools to spark curiosity and bridge the digital divide in education."
    };
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schemaMarkup),
            }}
            key="org-schema-inspire-edulab"
        />
        <InspireEduLabClientPage />
    </>
  );
}
