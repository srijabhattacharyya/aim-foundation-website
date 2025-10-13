
import type { Metadata } from 'next';
import OralScanClientPage from './OralScanClientPage';

export const metadata: Metadata = {
  title: 'OralScan by AIM Foundation: Early Oral Cancer Detection',
  description: 'Join AIM Foundation’s OralScan to fight oral cancer. Free screenings, awareness, and care in underserved communities. Support early detection today.',
  keywords: ['AIM Foundation', 'OralScan', 'oral cancer screening', 'free oral cancer checkup', 'early detection oral cancer India', 'oral health awareness', 'cancer prevention camps', 'community healthcare', 'oral hygiene education', 'oral cancer support'],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/oralscan',
    title: 'OralScan by AIM Foundation: Early Oral Cancer Detection',
    description: 'Join AIM Foundation’s OralScan to fight oral cancer. Free screenings, awareness, and care in underserved communities. Support early detection today.',
    images: [
        {
            url: 'https://aimindia.org.in/home.avif',
            width: 1200,
            height: 630,
            alt: 'OralScan Initiative by AIM Foundation',
        },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'OralScan by AIM Foundation: Early Oral Cancer Detection',
    description: 'Join AIM Foundation’s OralScan to fight oral cancer. Free screenings, awareness, and care in underserved communities. Support early detection today.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/oralscan',
  },
};

export default function OralScanPage() {
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
        "description": "Join AIM Foundation’s OralScan to fight oral cancer. Free screenings, awareness, and care in underserved communities. Support early detection today."
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
                key="org-schema-oralscan"
            />
            <OralScanClientPage />
        </>
    );
}
