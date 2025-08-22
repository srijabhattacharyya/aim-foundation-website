
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
  keywords: ["AIM Foundation Voices of Change", "AIM Foundation impact stories", "NGO success stories India", "social change stories AIM Foundation", "AIM Foundation real impact", "NGO community transformation India", "education healthcare empowerment AIM Foundation", "women empowerment stories NGO", "environmental change AIM Foundation", "grassroots stories of hope India"],
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
    url: 'https://aimindia.org.in/voices',
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
    image: 'https://placehold.co/600x400.png',
    hint: 'learning app student',
    excerpt: 'Discover how our VidyaShakti app provides AI-powered, multilingual academic support to rural and first-generation learners.',
    date: 'February 2, 2025',
  },
  {
    slug: 'forest-cleaning-restoring-natural-habitats',
    title: 'Restoring Natural Habitats: The Forest Cleaning Initiative',
    image: '/images/projects/forest-cleaning/forest-cleaning2.avif',
    hint: 'forest cleanup',
    excerpt: "Learn how AIM Foundation's Forest Cleaning initiative mobilizes volunteers to remove waste and restore the health of our forests.",
    date: 'January 15, 2025',
  },
  {
    slug: 'carecircle-bringing-healing-to-the-city',
    title: 'CareCircle: Bringing Healing to the Heart of the City',
    image: '/images/projects/carecircle/carecircle2.avif',
    hint: 'urban health camp',
    excerpt: 'Learn how CareCircle delivers compassionate, affordable, and inclusive medical care to underserved urban communities in Kolkata.',
    date: 'November 19, 2024',
  },
  {
    slug: 'childfirst-health-hope-dignity',
    title: 'ChildFirst: Bringing Health, Hope, and Dignity',
    image: '/images/projects/childfirst/childfirst1.avif',
    hint: 'child healthcare',
    excerpt: 'Learn how ChildFirst provides free pediatric and general healthcare to children in Kolkata\'s red-light districts.',
    date: 'May 5, 2024',
  },
  {
    slug: 'tideshield-restoring-mangroves',
    title: 'TideShield: Restoring the Mangrove Heartbeat of the Sundarbans',
    image: '/images/projects/sustainability/sustainability1.avif',
    hint: 'mangrove restoration',
    excerpt: 'Learn how TideShield is restoring the vital mangrove ecosystem of the Sundarbans, protecting communities and biodiversity from the impacts of climate change.',
    date: 'August 12, 2024',
  },
  {
    slug: 'cureline-bringing-healthcare-to-the-last-mile',
    title: 'CureLine: Bringing Healthcare to the Last Mile',
    image: '/images/projects/cureline/cureline1.avif',
    hint: 'rural healthcare camp',
    excerpt: 'Learn how AIM Foundation\'s CureLine initiative is delivering essential medical services to underserved communities, bridging critical care gaps, and ensuring health access for all.',
    date: 'February 27, 2024',
  },
  {
    slug: 'no-child-left-offline',
    title: 'No Child Left Offline: How DigiEmpower is Bridging the Digital Divide',
    image: '/images/projects/digiempower/digiempower1.avif',
    hint: 'digital literacy children',
    excerpt: 'Discover how DigiEmpower is bridging the digital divide for underprivileged and Adivasi children in West Bengal.',
    date: 'November 20, 2023',
  },
  {
    slug: 'igniting-change-transforming-communities',
    title: 'Igniting Change: How Grassroots Action Transforms Communities',
    image: '/images/projects/forest-cleaning/forest-cleaning1.avif',
    hint: 'community action group',
    excerpt: 'Discover how our Ignite Change Initiative empowers local communities to create sustainable solutions and drive their own transformation.',
    date: 'August 13, 2023',
  },
  {
    slug: 'from-despair-to-recovery-rebuilding-lives-after-disaster',
    title: 'From Despair to Recovery: Rebuilding Lives After Disaster',
    image: '/images/projects/relief/relief1.avif',
    hint: 'fire relief by aim foundation',
    excerpt: 'Learn how AIM Foundation’s Disaster Relief Program provides swift, compassionate, and effective assistance to communities affected by natural calamities.',
    date: 'May 6, 2023',
  },
  {
    slug: 'from-stigma-to-strength',
    title: 'From Stigma to Strength: The CycleSafe Story',
    image: '/images/projects/cyclesafe/cyclesafe1.avif',
    hint: 'menstrual health awareness',
    excerpt: 'Learn how CycleSafe is breaking the silence around menstrual health and empowering adolescent girls with dignity and education.',
    date: 'February 28, 2023',
  },
  {
    slug: 'project-sheconnects',
    title: 'Project SheConnects: Empowering Women Through Technology',
    image: 'https://placehold.co/600x400.png',
    hint: 'women technology',
    excerpt: 'Discover how SheConnects is bridging the digital gender gap and empowering women to build sustainable livelihoods online.',
    date: 'November 23, 2022',
  },
  {
    slug: 'roots-of-change',
    title: 'Roots of Change: Planting Awareness, Growing a Greener Tomorrow',
    image: '/images/projects/sustainability/sustainability3.avif',
    hint: 'environmental awarenes and tree plantation',
    excerpt: 'Discover how the Roots of Change initiative is cultivating environmental awareness and inspiring sustainable action from the ground up.',
    date: 'August 16, 2022',
  },
  {
    slug: 'relief-to-the-underprivileged',
    title: 'Relief to the Underprivileged – AIM Foundation’s Lifeline of Hope',
    image: '/images/projects/relief/relief2.avif',
    hint: 'community relief support',
    excerpt: "Learn how AIM Foundation provides a lifeline of hope, delivering immediate and compassionate aid to those facing extreme hardship.",
    date: 'May 9, 2022',
  },
  {
    slug: 'restoring-sight-rekindling-dreams',
    title: 'Restoring Sight, Rekindling Dreams: The Journey of SightHope',
    image: '/images/projects/sighthope/spectacles-distribution.avif',
    hint: 'Spectacles Distribution after Eye Checkup',
    excerpt: "Learn how AIM Foundation's SightHope initiative provides free, life-changing eye care and surgeries to underserved communities.",
    date: 'February 2, 2022',
  },
  {
    slug: 'planting-hope-growing-futures',
    title: 'Planting Hope, Growing Futures: The GreenRoots Journey',
    image: '/images/projects/sustainability/sustainability2.avif',
    hint: 'community planting trees',
    excerpt: 'Discover how GreenRoots is empowering communities to plant trees and restore green cover in their own backyards.',
    date: 'November 26, 2021',
  },
  {
    slug: 'screening-today-for-a-healthier-tomorrow',
    title: 'Screening Today for a Healthier Tomorrow: The OralScan Story',
    image: '/images/projects/oralscan/oralscan1.avif',
    hint: 'oral cancer screening',
    excerpt: 'Learn how OralScan is fighting oral cancer in India through early detection and awareness.',
    date: 'August 19, 2021',
  },
  {
    slug: 'crafting-futures-the-krishti-story',
    title: 'Crafted by Her. Backed by Krishti.',
    image: 'https://placehold.co/600x400.png',
    hint: 'women entrepreneurship',
    excerpt: 'Discover how Krishti bridges the gap between learning and earning, transforming skilled women into thriving entrepreneurs.',
    date: 'February 5, 2021',
  },
   {
    slug: 'empower-english-story',
    title: 'Confidence Begins with Conversation: The Empower English Story',
    image: '/images/projects/empower-english/empower-english2.avif',
    hint: 'english speaking class',
    excerpt: "Discover how AIM Foundation's Empower English initiative is helping students in West Bengal find their voice, confidence, and a world of new opportunities.",
    date: 'November 1, 2020',
  },
  {
    slug: 'teaching-beyond-boundaries',
    title: 'Teaching Beyond Boundaries: How EduAccess is Bringing Quality Education to Rural West Bengal',
    image: '/images/projects/eduaccess/eduaccess1.avif',
    hint: 'online learning rural',
    excerpt: "Discover how AIM Foundation's EduAccess initiative is delivering quality education to rural West Bengal through expert-led online classes.",
    date: 'August 28, 2020',
  },
  {
    slug: 'redefining-classrooms-for-a-digital-tomorrow',
    title: 'Redefining Classrooms for a Digital Tomorrow: The Story of Inspire EduLab',
    image: '/images/projects/edulab/edulab1.avif',
    hint: 'smart classroom children',
    excerpt: "Discover how AIM Foundation's Inspire EduLab is transforming learning with smart, internet-enabled classrooms, bridging the digital divide for children across India.",
    date: 'May 20, 2020',
  },
  {
    slug: 'the-quiet-revolution-in-womens-health',
    title: 'The Quiet Revolution in Women’s Health: The Story of Project Detect',
    image: '/images/projects/detect/detect1.avif',
    hint: 'Cervical Cancer Screening',
    excerpt: 'Discover how Project Detect is bringing life-saving cervical cancer screenings and health education to rural women in India.',
    date: 'February 12, 2020',
  },
   {
    slug: 'nurturing-a-kinder-tomorrow-the-story-of-milieu',
    title: 'Nurturing a Kinder Tomorrow: The Story of Milieu',
    image: '/images/projects/milieu/milieu1.avif',
    hint: 'children collaboration',
    excerpt: 'Discover how Milieu helps shape conscious citizens who learn to see beyond economic, cultural, and social differences.',
    date: 'November 5, 2019',
  },
  {
    slug: 'threading-changes-the-suidhaga-story',
    title: 'Threading Changes: The SuiDhaga Story by AIM Foundation',
    image: '/images/projects/suidhaga/suidhaga1.avif',
    hint: 'women sewing',
    excerpt: 'Discover how AIM Foundation\'s SuiDhaga initiative is empowering women, stitching dignity into livelihoods, and creating new patterns of possibility through tailoring and embroidery skills.',
    date: 'August 28, 2019',
  },
];

export default function VoicesPage() {
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
    "description": "Explore Voices of Change by AIM Foundation—real stories of hope, resilience, and impact in education, healthcare, women empowerment, and environment."
    };
  return (
    <div className="flex flex-col min-h-screen">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
        }}
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
