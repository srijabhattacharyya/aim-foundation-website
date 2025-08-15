
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Chatbot from '@/components/chatbot/Chatbot';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aimindia.org.in'),
  title: 'AIM Foundation | Leading NGO Uplifting the Underprivileged',
  description: 'AIM Foundation is a leading NGO in Kolkata dedicated to education, healthcare, women empowerment, environment, and community development for underprivileged communities across India.',
  keywords: ['ngo in kolkata', 'best ngo in kolkata', 'top ngo in kolkata', 'ngo in india', 'top ngo in india', 'charity in kolkata', 'education ngo', 'healthcare ngo', 'women empowerment ngo', 'environment ngo', 'plantation drives', 'skill development ngo', 'community development', 'hygiene awareness', 'rural development', 'child welfare ngo', 'free health camps', 'vocational training', 'ngo volunteer kolkata', 'donate to ngo'],
  openGraph: {
    title: 'AIM Foundation | Leading NGO Uplifting the Underprivileged',
    description: 'Join AIM Foundation in transforming lives through education, healthcare, environmental action, and women’s empowerment in Kolkata and beyond.',
    type: 'website',
    url: 'https://www.aimindia.org.in/',
    images: [
      {
        url: 'https://www.aimindia.org.in/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'AIM Foundation initiatives',
      },
    ],
    locale: 'en_IN',
    siteName: 'AIM Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIM Foundation | Leading NGO Uplifting the Underprivileged',
    description: 'Transforming lives through education, healthcare, environmental action, and women’s empowerment in Kolkata and beyond.',
    images: ['https://www.aimindia.org.in/og-image.jpg'], // Replace with your actual Twitter image URL
    site: '@aimindiango',
    creator: '@aimindiango',
  },
  other: {
    'geo.region': 'IN-WB',
    'geo.placename': 'Kolkata',
    'geo.position': '22.5726;88.3639',
    'ICBM': '22.5726, 88.3639',
  },
  alternates: {
    canonical: '/',
  },
};


const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "AIM Foundation",
    "alternateName": "Associated Initiative for Mankind Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://www.aimindia.org.in/logo.png",
    "description":
      "AIM Foundation is a leading NGO in Kolkata dedicated to education, healthcare, women empowerment, environment, and community development for underprivileged communities across India.",
    "foundingDate": "2016",
    "foundingLocation": {
      "@type": "Place",
      "name": "Kolkata, West Bengal, India"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "41, Ballygaunge Terrace, Kolkata 700029",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700029",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-6290022813",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Bengali", "Hindi"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/"
    ],
    "knowsAbout": [
      "Education",
      "Healthcare",
      "Women Empowerment",
      "Environmental Conservation",
      "Community Development",
      "Child Welfare",
      "Skill Development",
      "Plantation Drives",
      "Hygiene Awareness",
      "Rural Development"
    ]
  };

  return (
    <html lang="en" className={`${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
