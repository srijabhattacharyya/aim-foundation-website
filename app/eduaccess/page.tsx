import type { Metadata } from 'next';
import EduAccessClientPage from './EduAccessClientPage';

export const metadata: Metadata = {
  title: 'AIM Foundation | EduAccess, Rural Online Learning Program',
  description: 'AIM Foundation EduAccess, rural education West Bengal, online learning NGO, digital classrooms for villages, AIM Foundation online education, bridging education gap',
  keywords: ['AIM Foundation EduAccess', 'rural education West Bengal', 'online learning NGO', 'digital classrooms for villages', 'AIM Foundation online education', 'bridging education gap'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/eduaccess',
    title: 'AIM Foundation | EduAccess, Rural Online Learning Program',
    description: 'AIM Foundation EduAccess, rural education West Bengal, online learning NGO, digital classrooms for villages, AIM Foundation online education, bridging education gap',
    images: [
        {
            url: 'https://aimindia.org.in/home.avif',
            width: 1200,
            height: 630,
            alt: 'AIM Foundation EduAccess Program',
        },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation | EduAccess, Rural Online Learning Program',
    description: 'AIM Foundation EduAccess, rural education West Bengal, online learning NGO, digital classrooms for villages, AIM Foundation online education, bridging education gap.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/eduaccess',
  },
};

export default function EduAccessPage() {
  const orgSchema = {
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
    "description": "AIM Foundation EduAccess, rural education West Bengal, online learning NGO, digital classrooms for villages, AIM Foundation online education, bridging education gap."
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.aimindia.org.in/eduaccess#webpage",
    "url": "https://www.aimindia.org.in/eduaccess",
    "name": "EduAccess — AIM Foundation Rural Online Learning Program",
    "description": "EduAccess by AIM Foundation delivers expert-led live online classes in English, Math, and Science to underprivileged students in rural West Bengal — bridging the rural-urban education divide through technology.",
    "inLanguage": "en-IN",
    "isPartOf": { "@id": "https://www.aimindia.org.in/#organization" },
    "about": {
      "@type": "Thing",
      "name": "Online Education Access for Rural and Underprivileged Children in India"
    },
    "mentions": [
      {
        "@type": "Thing",
        "name": "SDG 4 — Quality Education",
        "sameAs": "https://sdgs.un.org/goals/goal4"
      },
      {
        "@type": "Thing",
        "name": "Digital Divide in Indian Education",
        "sameAs": "https://en.wikipedia.org/wiki/Digital_divide"
      },
      {
        "@type": "Thing",
        "name": "National Education Policy 2020",
        "sameAs": "https://en.wikipedia.org/wiki/National_Education_Policy_2020"
      }
    ],
    "knowsAbout": [
      "rural education NGO India",
      "online education rural India",
      "rural-urban education divide India",
      "digital classroom rural India",
      "bridge education gap India",
      "quality education underprivileged children India",
      "e-learning for rural students India",
      "West Bengal education NGO",
      "NGO for education in rural West Bengal",
      "online classes underprivileged children",
      "interactive online learning rural India",
      "donate for education West Bengal",
      "education CSR West Bengal",
      "SDG4 quality education India"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgSchema, webPageSchema]),
        }}
        key="org-schema-eduaccess"
      />
      <EduAccessClientPage />
    </>
  );
}
