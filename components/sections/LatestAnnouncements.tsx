
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const announcements = [
  {
    title: 'Community Health Camp',
    date: 'October 26, 2023',
    image: '/images/projects/carecircle/carecircle1.webp',
    hint: 'health camp',
    description: 'A successful health camp providing free check-ups and medicines to over 500 people in rural areas.',
    link: '#'
  },
  {
    title: 'Educational Material Distribution',
    date: 'October 15, 2023',
    image: 'https://placehold.co/600x400.png',
    hint: 'education charity',
    description: 'We distributed books, bags, and stationery to underprivileged students to support their education.',
    link: '#'
  },
  {
    title: 'Environmental Awareness Drive',
    date: 'September 28, 2023',
    image: 'https://placehold.co/600x400.png',
    hint: 'environment cleanup',
    description: 'Planted over 1000 saplings and conducted workshops on waste management in local communities.',
    link: '#'
  },
];

const LatestAnnouncements = () => {
  return (
    <section id="announcements" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Latest Announcements</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our current activities and upcoming events.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  data-ai-hint={item.hint}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <CardTitle className="mb-2 font-headline">{item.title}</CardTitle>
                <CardDescription className="flex-grow">{item.description}</CardDescription>
                <Button variant="link" asChild className="p-0 mt-4 self-start transition-transform transform hover:scale-105">
                  <Link href={item.link}>Read More &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestAnnouncements;
