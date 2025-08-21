
import type { Metadata } from 'next';
import MilieuBlogPage from './MilieuBlogPage';

export const metadata: Metadata = {
  title: 'Milieu by AIM Foundation | Building Empathy & Inclusion',
  description: 'Milieu by AIM Foundation unites children from diverse backgrounds, fostering empathy, respect, and social harmony through shared learning and connection.',
  keywords: ['Milieu AIM Foundation', 'AIM Foundation inclusion', 'empathy education India', 'social harmony program', 'children bridging divide', 'inclusive learning spaces', 'cultural respect education', 'privileged and underserved students', 'emotional intelligence in schools', 'equality through education'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu',
    title: 'Milieu by AIM Foundation | Building Empathy & Inclusion',
    description: 'Milieu by AIM Foundation unites children from diverse backgrounds, fostering empathy, respect, and social harmony through shared learning and connection.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Milieu by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu',
    title: 'Milieu by AIM Foundation | Building Empathy & Inclusion',
    description: 'Milieu by AIM Foundation unites children from diverse backgrounds, fostering empathy, respect, and social harmony through shared learning and connection.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu',
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
    "description": "Milieu by AIM Foundation unites children from diverse backgrounds, fostering empathy, respect, and social harmony through shared learning and connection."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-milieu-blog"
      />
      <MilieuBlogPage />
    </>
  );
}
