import type { Metadata } from 'next';
import RedefiningClassroomsBlogPage from './RedefiningClassroomsBlogPage';

export const metadata: Metadata = {
  title: 'Inspire EduLab by AIM Foundation | Digital Classrooms',
  description: 'Inspire EduLab by AIM Foundation transforms classrooms with smart tech, 3D lessons, and online sessions, bringing digital learning to underserved students.',
  keywords: [
    'AIM Foundation EduLab',
    'digital classrooms India',
    'smart learning initiatives',
    'online education for students',
    '3D lessons for schools',
    'digital learning NGO',
    'education technology AIM Foundation'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/redefining-classrooms-for-a-digital-tomorrow',
    title: 'Inspire EduLab by AIM Foundation | Digital Classrooms',
    description: 'Inspire EduLab by AIM Foundation transforms classrooms with smart tech, 3D lessons, and online sessions, bringing digital learning to underserved students.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Inspire EduLab by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Inspire EduLab by AIM Foundation | Digital Classrooms',
    description: 'Inspire EduLab by AIM Foundation transforms classrooms with smart tech, 3D lessons, and online sessions, bringing digital learning to underserved students.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/blog/redefining-classrooms-for-a-digital-tomorrow',
  },
};

export default function Page() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIM Foundation",
    url: "https://aimindia.org.in/",
    logo: "https://aimindia.org.in/logo.png",
    sameAs: [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    description: 'Inspire EduLab by AIM Foundation transforms classrooms with smart tech, 3D lessons, and online sessions, bringing digital learning to underserved students.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-redefining-classrooms-blog"
      />
      <RedefiningClassroomsBlogPage />
    </>
  );
}
