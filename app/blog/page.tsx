
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog - AIM Foundation',
  description: 'Read stories of change, impact reports, and updates from AIM Foundation.',
  alternates: {
    canonical: '/blog',
  },
};

const blogPosts = [
  {
    slug: 'the-quiet-revolution-in-womens-health',
    title: 'The Quiet Revolution in Women’s Health: The Story of Project Detect',
    image: 'https://placehold.co/600x400.png',
    hint: 'women health rural',
    excerpt: 'Discover how Project Detect is bringing life-saving cervical cancer screenings and health education to rural women in India.',
    date: 'November 12, 2023',
  },
  {
    slug: 'nurturing-a-kinder-tomorrow-the-story-of-milieu',
    title: 'Nurturing a Kinder Tomorrow: The Story of Milieu',
    image: 'https://placehold.co/600x400.png',
    hint: 'children collaboration',
    excerpt: 'Discover how Milieu helps shape conscious citizens who learn to see beyond economic, cultural, and social differences.',
    date: 'November 5, 2023',
  },
  {
    slug: 'threading-changes-the-suidhaga-story',
    title: 'Threading Changes: The SuiDhaga Story by AIM Foundation',
    image: 'https://placehold.co/600x400.png',
    hint: 'women tailoring',
    excerpt: 'Discover how AIM Foundation\'s SuiDhaga initiative is empowering women, stitching dignity into livelihoods, and creating new patterns of possibility through tailoring and embroidery skills.',
    date: 'October 28, 2023',
  },
  {
    slug: 'redefining-classrooms-for-a-digital-tomorrow',
    title: 'Redefining Classrooms for a Digital Tomorrow: The Story of Inspire EduLab',
    image: 'https://placehold.co/600x400.png',
    hint: 'smart classroom children',
    excerpt: "Discover how AIM Foundation's Inspire EduLab is transforming learning with smart, internet-enabled classrooms, bridging the digital divide for children across India.",
    date: 'November 20, 2023',
  },
  {
    slug: 'teaching-beyond-boundaries',
    title: 'Teaching Beyond Boundaries: How EduAccess is Bringing Quality Education to Rural West Bengal',
    image: 'https://placehold.co/600x400.png',
    hint: 'online learning rural',
    excerpt: "Discover how AIM Foundation's EduAccess initiative is delivering quality education to rural West Bengal through expert-led online classes.",
    date: 'November 28, 2023',
  },
   {
    slug: 'empower-english-story',
    title: 'Confidence Begins with Conversation: The Empower English Story',
    image: 'https://placehold.co/600x400.png',
    hint: 'english speaking class',
    excerpt: "Discover how AIM Foundation's Empower English initiative is helping students in West Bengal find their voice, confidence, and a world of new opportunities.",
    date: 'December 1, 2023',
  },
  {
    slug: 'crafting-futures-the-krishti-story',
    title: 'Crafted by Her. Backed by Krishti.',
    image: 'https://placehold.co/600x400.png',
    hint: 'women entrepreneurship',
    excerpt: 'Discover how Krishti bridges the gap between learning and earning, transforming skilled women into thriving entrepreneurs.',
    date: 'December 5, 2023',
  },
  {
    slug: 'surgery-shouldnt-be-a-luxury',
    title: 'Surgery Shouldn’t Be a Luxury: The SurgiReach Story',
    image: 'https://placehold.co/600x400.png',
    hint: 'operating room surgery',
    excerpt: 'Learn how SurgiReach provides free, life-saving surgeries to economically disadvantaged individuals, restoring health and hope.',
    date: 'December 12, 2023',
  },
  {
    slug: 'screening-today-for-a-healthier-tomorrow',
    title: 'Screening Today for a Healthier Tomorrow: The OralScan Story',
    image: 'https://placehold.co/600x400.png',
    hint: 'oral cancer screening',
    excerpt: 'Learn how OralScan is fighting oral cancer in India through early detection and awareness.',
    date: 'December 19, 2023',
  },
  {
    slug: 'planting-hope-growing-futures',
    title: 'Planting Hope, Growing Futures: The GreenRoots Journey',
    image: 'https://placehold.co/600x400.png',
    hint: 'community planting trees',
    excerpt: 'Discover how GreenRoots is empowering communities to plant trees and restore green cover in their own backyards.',
    date: 'December 26, 2023',
  },
  {
    slug: 'restoring-sight-rekindling-dreams',
    title: 'Restoring Sight, Rekindling Dreams: The Journey of SightHope',
    image: 'https://placehold.co/600x400.png',
    hint: 'vision eye exam',
    excerpt: "Learn how AIM Foundation's SightHope initiative provides free, life-changing eye care and surgeries to underserved communities.",
    date: 'January 2, 2024',
  },
  {
    slug: 'relief-to-the-underprivileged',
    title: 'Relief to the Underprivileged – AIM Foundation’s Lifeline of Hope',
    image: 'https://placehold.co/600x400.png',
    hint: 'community relief support',
    excerpt: "Learn how AIM Foundation provides a lifeline of hope, delivering immediate and compassionate aid to those facing extreme hardship.",
    date: 'January 9, 2024',
  },
  {
    slug: 'roots-of-change',
    title: 'Roots of Change: Planting Awareness, Growing a Greener Tomorrow',
    image: 'https://placehold.co/600x400.png',
    hint: 'environmental awareness education',
    excerpt: 'Discover how the Roots of Change initiative is cultivating environmental awareness and inspiring sustainable action from the ground up.',
    date: 'January 16, 2024',
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      data-ai-hint={post.hint}
                      className="w-full h-56 object-cover"
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
