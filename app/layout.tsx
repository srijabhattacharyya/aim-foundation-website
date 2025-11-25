
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aimindia.org.in'),
  title: 'AIM Foundation | Leading NGO Uplifting the Underprivileged',
  description: 'AIM Foundation works across West Bengal, uplifting communities with education, healthcare, women empowerment, environment care, and sustainable development',
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
  icons: {
    icon: '/favicon.ico',
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

  const measurementId = "G-0Q40BRFCRS";
  const adwordsId = "AW-16896084763";

  return (
    <html lang="en" className={`${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${measurementId}');
            gtag('config', '${adwordsId}');
          `}
        </Script>
         {/* Meta Pixel Code */}
        <Script id="facebook-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1912559689679432');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=1912559689679432&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
