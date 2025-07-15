import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Power of a Single Meal',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'food charity',
    excerpt: 'Discover how providing one meal can create a ripple effect of change in a community...',
  },
  {
    title: 'From Darkness to Light: A Story of Education',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'student learning',
    excerpt: 'Read the inspiring journey of a young girl who found her path through our educational programs...',
  },
  {
    title: 'Our Volunteers, Our Heroes',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'charity volunteers',
    excerpt: 'A tribute to the selfless individuals who dedicate their time and energy to our cause...',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Latest Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our stories, insights, and the impact we're making together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={post.data_ai_hint}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-headline">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button asChild variant="link" className="p-0 transition-transform transform hover:scale-105">
                  <Link href="#">Read More &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
