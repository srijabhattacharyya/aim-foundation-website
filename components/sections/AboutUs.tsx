
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const aboutImages = [
  {
    src: '/images/home-scrolling/hs1.jpg',
    alt: 'Garments Distribution to Sabar Community',
    hint: 'garments distribution',
    description: 'Garments Distribution to Sabar Community'
  },
  {
    src: '/images/home-scrolling/hs3.jpg',
    alt: 'Award by Sundarbans Tiger Reserve',
    hint: 'award by str',
    description: 'Award by Sundarbans Tiger Reserve'
  },
  {
    src: '/images/home-scrolling/hs2.jpg',
    alt: 'Healthcare camp in a rural area',
    hint: 'rural healthcare',
    description: 'Healthcare camp in a rural area'
  },
  {
    src: '/images/home-scrolling/hs4.jpg',
    alt: 'Oral Cancer Detection Camp in Kolkata',
    hint: 'oral cancer detection',
    description: 'Oral Cancer Detection Camp in Kolkata'
  },
  {
    src: '/images/home-scrolling/hs5.jpg',
    alt: 'Health Camp in Sundarbans',
    hint: 'health camp',
    description: 'Health Camp in Sundarbans'
  },
];


const AboutUs = () => {
  return (
    <section id="organisation" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-down">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2500,
                        stopOnInteraction: true,
                    }),
                ]}
                className="w-full max-w-lg mx-auto"
            >
                <CarouselContent>
                {aboutImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0 relative">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={800}
                                height={500}
                                className="shadow-lg w-full h-auto object-cover"
                                data-ai-hint={image.hint}
                                loading="lazy"
                            />
                            {image.description && (
                              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center text-sm">
                                <p>{image.description}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel>
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Us</h2>
            <div className="mt-4 text-lg text-muted-foreground space-y-4 text-justify">
                <p>
                    Since 2016, AIM Foundation has stood for one unwavering belief — that every life deserves dignity, opportunity, and hope.
                </p>
                <p>
                    We partner with some of the most underserved communities in India, creating real impact through healthcare, education, environmental sustainability, and support for women and children. Our work goes beyond providing services — we work at the roots, empowering people to uplift themselves and those around them.
                </p>
                <p>
                    At the heart of our mission is the power of women as changemakers. When a woman is empowered, a family is strengthened, and a community begins to thrive.
                </p>
                <p>
                    We're not just delivering aid. We’re building futures — one life, one village, one step at a time.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
