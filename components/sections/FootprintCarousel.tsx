
'use client';

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay";

const footprintImages = [
    {
        src: "https://placehold.co/800x500.png",
        alt: "Community engagement event",
        hint: "community event"
    },
    {
        src: "https://placehold.co/800x500.png",
        alt: "Healthcare camp for children",
        hint: "children healthcare"
    },
    {
        src: "https://placehold.co/800x500.png",
        alt: "Women's skill development workshop",
        hint: "women empowerment"
    },
    {
        src: "https://placehold.co/800x500.png",
        alt: "Tree plantation drive",
        hint: "environmental conservation"
    },
    {
        src: "https://placehold.co/800x500.png",
        alt: "Educational support for students",
        hint: "children education"
    }
];

export default function FootprintCarousel() {
    return (
        <div className="animate-fade-in-down">
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
                className="w-full max-w-lg mx-auto"
            >
                <CarouselContent>
                {footprintImages.map((image, index) => (
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
    )
}
