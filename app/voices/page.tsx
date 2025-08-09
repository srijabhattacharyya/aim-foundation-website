
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Voices of Change - AIM Foundation',
  description: 'Read stories of change, impact reports, and updates from AIM Foundation.',
  alternates: {
    canonical: '/voices',
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
    date: 'October 21, 2023',
  },
];

export default function VoicesPage() {
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
              {blogPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
