
'use client';

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay";

const footprintImages = [
    {
        src: "/images/projects/childfirst/childfirst2.avif",
        alt: "Medical Camp for Children",
        hint: "medical camp",
        description: "Medical Camp for Children"
    },
    {
        src: "/images/projects/digiempower/digiempower1.avif",
        alt: "Digital Literacy Class at Rangakhila village",
        hint: "digital literacy",
        description: "Digital Literacy Class"
    },
    {
        src: "/images/projects/digiempower/digiempower1.avif",
        alt: "Digital Literacy Class",
        hint: "digital literacy",
        description: "Digital Literacy Class"
    },
    {
        src: "/images/home-scrolling/hs4.jpg",
        alt: "Oral Cancer Detection Camp in Kolkata",
        hint: "cancer detection",
        description: "Oral Cancer Detection Camp in Kolkata"
    },
    {
        src: "/images/home-scrolling/hs5.jpg",
        alt: "Health Camp in Sundarbans",
        hint: "health camp",
        description: "Health Camp in Sundarbans"
    }
];

export default function FootprintCarousel() {
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
    )
}
