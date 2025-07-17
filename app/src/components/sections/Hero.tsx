"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link';

const programs = [
  {
    title: 'Educational Initiatives',
    description: 'Fostering learning and growth for all ages.',
    image: 'https://placehold.co/80x80.png',
    hint: 'education',
  },
  {
    title: 'Healthcare Initiatives',
    description: 'Ensuring access to quality medical care for communities.',
    image: 'https://placehold.co/80x80.png',
    hint: 'healthcare',
  },
  {
    title: 'Environment Initiatives',
    description: 'Protecting and preserving our planet for future generations.',
    image: 'https://placehold.co/80x80.png',
    hint: 'environment',
  },
  {
    title: 'Gender Equality Initiative',
    description: 'Empowering women and girls to achieve their full potential.',
    image: 'https://placehold.co/80x80.png',
    hint: 'women empowerment',
  },
  {
    title: 'Childcare Initiatives',
    description: 'Providing safe and nurturing environments for children.',
    image: 'https://placehold.co/80x80.png',
    hint: 'childcare',
  },
  {
    title: 'Relief to the underprivileged',
    description: 'Offering support and resources to those in need.',
    image: 'https://placehold.co/80x80.png',
    hint: 'underprivileged support',
  },
  {
    title: 'Disaster Management',
    description: 'Providing timely aid and support during crises.',
    image: 'https://placehold.co/80x80.png',
    hint: 'disaster relief',
  },
  {
    title: 'Ignite Change Initiative',
    description: 'Inspiring and mobilizing communities for social good.',
    image: 'https://placehold.co/80x80.png',
    hint: 'community action',
  },
];

const Hero = () => {
  return (
    <section className="relative w-full h-auto py-20 md:h-[80vh] flex items-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A group of happy children"
        fill
        objectFit="cover"
        className="brightness-50"
        data-ai-hint="happy children"
      />
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col justify-center pt-24 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          Building a Brighter Future, Together
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          We are committed to empowering communities through education, healthcare, and sustainable development.
        </p>
        
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Our Current Programs</h2>
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
                className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto"
            >
                <CarouselContent className="-ml-4">
                {programs.map((program, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1 h-full">
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 flex-grow">
                            <Image src={program.image} alt={program.title} width={80} height={80} data-ai-hint={program.hint} className="rounded-full border-2 border-primary" />
                            <h3 className="font-bold text-lg font-headline">{program.title}</h3>
                            <p className="text-sm text-center">{program.description}</p>
                             <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black mt-auto transition-transform transform hover:scale-105">
                              <Link href="#initiatives">Learn More</Link>
                             </Button>
                        </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="text-white bg-black/20 hover:bg-black/40 border-white/30" />
                <CarouselNext className="text-white bg-black/20 hover:bg-black/40 border-white/30" />
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
