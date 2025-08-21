
import type { Metadata } from 'next';
import EduAccessBlogPage from './EduAccessBlogPage';

export const metadata: Metadata = {
  title: 'EduAccess by AIM Foundation | Bridging Rural Education',
  description: 'EduAccess by AIM Foundation connects rural West Bengal students with expert teachers through online classes, ensuring quality English, Math, and Science learning.',
  keywords: ['EduAccess AIM Foundation', 'AIM Foundation education', 'rural education West Bengal', 'online learning India', 'digital classes for rural schools', 'Kolkata studio teaching', 'spoken English rural students', 'Math Science online teaching', 'education access India', 'bridging learning gap'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/teaching-beyond-boundaries',
    title: 'EduAccess by AIM Foundation | Bridging Rural Education',
    description: 'EduAccess by AIM Foundation connects rural West Bengal students with expert teachers through online classes, ensuring quality English, Math, and Science learning.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'EduAccess by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/teaching-beyond-boundaries',
    title: 'EduAccess by AIM Foundation | Bridging Rural Education',
    description: 'EduAccess by AIM Foundation connects rural West Bengal students with expert teachers through online classes, ensuring quality English, Math, and Science learning.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/teaching-beyond-boundaries',
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
    "description": "EduAccess by AIM Foundation connects rural West Bengal students with expert teachers through online classes, ensuring quality English, Math, and Science learning."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-eduaccess-blog"
      />
      <EduAccessBlogPage />
    </>
  );
}
