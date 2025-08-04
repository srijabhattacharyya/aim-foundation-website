
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay"

const programs = [
  {
    title: 'Educational Initiatives',
    description: 'Fostering learning and growth for all ages.',
    image: '/images/banner-card/education.png',
    link: '/educational-initiatives',
  },
  {
    title: 'Healthcare Initiatives',
    description: 'Ensuring access to quality medical care for communities.',
    image: '/images/banner-card/health.png',
    hint: 'healthcare',
    link: '/healthcare-initiatives',
  },
  {
    title: 'Sustainability Initiatives',
    description: 'Protecting and preserving our planet for future generations.',
    image: '/images/banner-card/sustainability.png',
    hint: 'environment',
    link: '/sustainability-initiatives',
  },
  {
    title: 'Gender Equality Initiatives',
    description: 'Empowering women and girls to achieve their full potential.',
    image: 'https://placehold.co/160x160.png',
    hint: 'women empowerment',
    link: '/gender-equality-initiative',
  },
  {
    title: 'Childcare Initiatives',
    description: 'Providing safe and nurturing environments for children.',
    image: 'https://placehold.co/160x160.png',
    hint: 'childcare',
    link: '/childcare-initiatives',
  },
  {
    title: 'Relief to the underprivileged',
    description: 'Offering support and resources to those in need.',
    image: 'https://placehold.co/160x160.png',
    hint: 'underprivileged support',
    link: '/relief-to-the-underprivileged',
  },
  {
    title: 'Disaster Management',
    description: 'Providing timely aid and support during crises.',
    image: 'https://placehold.co/160x160.png',
    hint: 'disaster relief',
    link: '/disaster-management',
  },
  {
    title: 'Ignite Change Initiatives',
    description: 'Inspiring and mobilizing communities for social good.',
    image: 'https://placehold.co/160x160.png',
    hint: 'community action',
    link: '/ignite-change-initiative',
  },
];

export default function HeroCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                    stopOnInteraction: true,
                }),
                ]}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
            <CarouselContent className="-ml-4">
            {programs.map((program, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1 h-full">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 flex-grow">
                        <Image src={program.image} alt={program.title} width={80} height={80} data-ai-hint={program.hint} className="rounded-full border-2 border-primary" />
                        <h3 className="font-bold text-lg font-headline text-center">{program.title}</h3>
                        <p className="text-sm text-center">{program.description}</p>
                        <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black mt-auto transition-transform transform hover:scale-105">
                            <Link href={program.link || '#'}>Learn More</Link>
                        </Button>
                    </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="text-white bg-black/20 hover:bg-black/40 border-white/30 hidden sm:flex" />
            <CarouselNext className="text-white bg-black/20 hover:bg-black/40 border-white/30 hidden sm:flex" />
        </Carousel>
    );
}
