
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const announcements = [
  {
    title: 'ProHealth: A $70,000 Strategic Investment in the Future of Kolkata',
    date: '',
    image: '/images/projects/carecircle/carecircle2.avif',
    hint: 'health camp',
    description: (
      <>
        In Partnership with <strong>Children International, USA</strong>
      </>
    ),
    link: '/prohealth'
  },
  {
    title: 'Threads of Hope: How SuiDhaga and Krishti Are Stitching a Future of Women’s Empowerment',
    date: '',
    image: '/images/projects/suidhaga/suidhaga1.avif',
    hint: 'women tailoring',
    description: 'Discover how our women-centric skill initiatives are transforming lives through vocational training, entrepreneurship, and sustainable livelihoods.',
    link: '/blog/threading-changes-the-suidhaga-story'
  },
  {
    title: 'Environmental Awareness Drive',
    date: 'September 25, 2025',
    image: '/images/projects/sustainability/sustainablity6.avif',
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
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Flagship Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our flagship work
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
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                {item.date && <p className="text-sm text-muted-foreground mb-2">{item.date}</p>}
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
