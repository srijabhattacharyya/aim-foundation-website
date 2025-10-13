import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Voices of Change Stories | AIM Foundation India Impact',
  description: 'Explore Voices of Change by AIM Foundation—real stories of hope, resilience, and impact in education, healthcare, women empowerment, and environment.',
  keywords: [
    "AIM Foundation Voices of Change",
    "AIM Foundation impact stories",
    "NGO success stories India",
    "social change stories AIM Foundation",
    "AIM Foundation real impact",
    "NGO community transformation India",
    "education healthcare empowerment AIM Foundation",
    "women empowerment stories NGO",
    "environmental change AIM Foundation",
    "grassroots stories of hope India"
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/voices',
    title: 'Voices of Change Stories | AIM Foundation India Impact',
    description: 'Explore Voices of Change by AIM Foundation—real stories of hope, resilience, and impact in education, healthcare, women empowerment, and environment.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Voices of Change by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Voices of Change Stories | AIM Foundation India Impact',
    description: 'Explore Voices of Change by AIM Foundation—real stories of hope, resilience, and impact in education, healthcare, women empowerment, and environment.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/voices',
  },
};

const blogPosts = [
  {
    slug: 'soulcircle-24-7-mental-health-support',
    title: 'SoulCircle: 24/7 Compassionate Mental Health Support',
    image: '/images/projects/soulcircle/soulcircle1.avif',
    hint: 'mental health peace',
    excerpt: 'Learn how our SoulCircle app offers AI-powered, accessible, and compassionate mental health support.',
    date: 'April 9, 2025',
  },
  {
    slug: 'vidyashakti-ai-learning',
    title: 'VidyaShakti: AI-Powered Learning for Rural Classrooms',
    image: '/images/projects/vidyashakti/vidyashakti1.avif',
    hint: 'learning app student',
    excerpt: 'Discover how our VidyaShakti app provides AI-powered, multilingual academic support to rural and first-generation learners.',
    date: 'February 2, 2025',
  },
  // ...add all other blog posts here
];

export default function VoicesPage() {
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
    description: "Explore Voices of Change by AIM Foundation—real stories of hope, resilience, and impact in education, healthcare, women empowerment, and environment."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-voices"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Voices of Change</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Stay close to the change you’re helping spark. Discover stories, reflections, and milestones from our journey of hope.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      data-ai-hint={post.hint}
                      className="w-full h-56 object-cover"
                      loading={index > 2 ? 'lazy' : 'eager'}
                    />
                  </Link>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <CardTitle className="font-headline mb-2 text-xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="flex-grow text-justify">{post.excerpt}</CardDescription>
                    <Button asChild variant="link" className="p-0 mt-4 self-start transition-transform transform hover:scale-105">
                      <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
