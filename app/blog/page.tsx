
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
    slug: 'threading-changes-the-suidhaga-story',
    title: 'Threading Changes: The SuiDhaga Story by AIM Foundation',
    image: 'https://placehold.co/600x400.png',
    hint: 'women tailoring',
    excerpt: 'Discover how AIM Foundation\'s SuiDhaga initiative is empowering women, stitching dignity into livelihoods, and creating new patterns of possibility through tailoring and embroidery skills.',
    date: 'October 28, 2023',
  },
  {
    slug: '#',
    title: 'The Power of a Single Meal',
    image: 'https://placehold.co/600x400.png',
    hint: 'meal charity',
    excerpt: 'Discover how providing one meal can create a ripple effect of change in a community...',
    date: 'October 20, 2023',
  },
  {
    slug: '#',
    title: 'From Darkness to Light: A Story of Education',
    image: 'https://placehold.co/600x400.png',
    hint: 'education children',
    excerpt: 'Read the inspiring journey of a young girl who found her path through our educational programs...',
    date: 'October 12, 2023',
  },
  {
    slug: '#',
    title: 'Our Volunteers, Our Heroes',
    image: 'https://placehold.co/600x400.png',
    hint: 'volunteers group',
    excerpt: 'A tribute to the selfless individuals who dedicate their time and energy to our cause...',
    date: 'October 5, 2023',
  },
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
