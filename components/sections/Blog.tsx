
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'the-quiet-revolution-in-womens-health',
    title: 'The Quiet Revolution in Women’s Health',
    image: 'https://placehold.co/600x400.png',
    hint: 'women health rural',
    excerpt: 'Discover how Project Detect is bringing life-saving cervical cancer screenings to rural women.',
  },
  {
    slug: 'nurturing-a-kinder-tomorrow-the-story-of-milieu',
    title: 'Nurturing a Kinder Tomorrow: The Story of Milieu',
    image: 'https://placehold.co/600x400.png',
    hint: 'children collaboration',
    excerpt: 'Discover how Milieu helps shape conscious citizens who learn to see beyond economic, cultural, and social differences.',
  },
  {
    slug: 'threading-changes-the-suidhaga-story',
    title: 'Threading Changes: The SuiDhaga Story',
    image: 'https://placehold.co/600x400.png',
    hint: 'women tailoring',
    excerpt: 'Discover how AIM Foundation\'s SuiDhaga initiative is empowering women, stitching dignity into livelihoods...',
  },
];

const Blog = () => {
  return (
    <section id="resources" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Hope Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay close to the change you’re helping spark. Discover stories, reflections, and milestones from our journey of hope.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    data-ai-hint={post.hint}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-headline">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-4 text-justify">{post.excerpt}</p>
                <Button asChild variant="link" className="p-0 transition-transform transform hover:scale-105">
                  <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="transition-transform transform hover:scale-105" asChild>
            <Link href="/blog">More Hope Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
