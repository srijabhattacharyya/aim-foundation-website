
import type { Metadata } from 'next';
import ForestCleaningBlogPage from './ForestCleaningBlogPage';

export const metadata: Metadata = {
  title: 'Forest Cleaning by AIM Foundation | Restore Our Forests',
  description: 'Join AIM Foundation’s Forest Cleaning initiative—volunteer-driven cleanups to remove waste, protect wildlife, and restore India’s forests sustainably.',
  keywords: ["AIM Foundation forest cleaning", "NGO forest cleanup India", "forest pollution solution NGO", "volunteer forest cleaning drives", "AIM Foundation environment initiatives", "plastic waste in forests India", "community forest restoration NGO", "forest conservation AIM Foundation", "NGO biodiversity protection", "sustainable forest cleanup India"],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/blog/forest-cleaning-restoring-natural-habitats',
    title: 'Forest Cleaning by AIM Foundation | Restore Our Forests',
    description: 'Join AIM Foundation’s Forest Cleaning initiative—volunteer-driven cleanups to remove waste, protect wildlife, and restore India’s forests sustainably.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Forest Cleaning by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/blog/forest-cleaning-restoring-natural-habitats',
    title: 'Forest Cleaning by AIM Foundation | Restore Our Forests',
    description: 'Join AIM Foundation’s Forest Cleaning initiative—volunteer-driven cleanups to remove waste, protect wildlife, and restore India’s forests sustainably.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/forest-cleaning-restoring-natural-habitats',
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
    "description": "Join AIM Foundation’s Forest Cleaning initiative—volunteer-driven cleanups to remove waste, protect wildlife, and restore India’s forests sustainably."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-forest-cleaning-blog"
      />
      <ForestCleaningBlogPage />
    </>
  );
}
