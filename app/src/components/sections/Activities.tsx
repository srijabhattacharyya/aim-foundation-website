
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"

const activities = [
  {
    title: 'Community Health Camp',
    date: 'October 26, 2023',
    image: 'https://placehold.co/600x400.png',
    hint: 'health camp',
    description: 'A successful health camp providing free check-ups and medicines to over 500 people in rural areas.',
  },
  {
    title: 'Educational Material Distribution',
    date: 'October 15, 2023',
    image: 'https://placehold.co/600x400.png',
    hint: 'education charity',
    description: 'We distributed books, bags, and stationery to underprivileged students to support their education.',
  },
  {
    title: 'Environmental Awareness Drive',
    date: 'September 28, 2023',
    image: 'https://placehold.co/600x400.png',
    hint: 'environment cleanup',
    description: 'Planted over 1000 saplings and conducted workshops on waste management in local communities.',
  },
  {
    title: 'Women Empowerment Workshop',
    date: 'September 10, 2023',
    image: 'https://placehold.co/600x400.png',
    hint: 'women empowerment',
    description: 'Conducted a workshop on financial literacy and skill development for women in the community.',
  },
  {
    title: 'Clean Water Project',
    date: 'August 22, 2023',
    image: 'https://placehold.co/600x400.png',
    hint: 'clean water',
    description: 'Installed a new water purification system to provide clean drinking water to a village of 1,200 people.',
  },
  {
    title: 'Disaster Relief Mission',
    date: 'August 5, 2023',
    image: 'https://placehold.co/600x400.png',
    hint: 'disaster relief',
    description: 'Provided essential supplies, shelter, and medical aid to families affected by recent flooding.',
  },
];

const Activities = () => {
  return (
    <section id="events" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Recent Activities</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are constantly working to make a positive impact. Here's a glimpse of our latest initiatives and events.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {activities.map((activity, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <CardHeader className="p-0">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        width={600}
                        height={400}
                        data-ai-hint={activity.hint}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <p className="text-sm text-muted-foreground mb-2">{activity.date}</p>
                      <CardTitle className="mb-2 font-headline">{activity.title}</CardTitle>
                      <CardDescription className="flex-grow">{activity.description}</CardDescription>
                      <Button variant="link" className="p-0 mt-4 self-start transition-transform transform hover:scale-105">Read More &rarr;</Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
          <CarouselNext className="absolute right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Activities;
