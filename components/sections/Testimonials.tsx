
"use client";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Image from "next/image";

const testimonials = [
    {
        quote: "This foundation changed my life. I am forever grateful for their support.",
        name: "Priya Sharma",
        role: "Beneficiary",
        image: "/images/testimonials/priya-sharma.avif",
        hint: "happy woman portrait"
    },
    {
        quote: "Volunteering here has been a transformative experience. The impact is real.",
        name: "Rohit Bannerjee",
        role: "Volunteer",
        image: "https://placehold.co/100x100.png",
        hint: "smiling man portrait"
    },
    {
        quote: "A truly dedicated team making a tangible difference in our community.",
        name: "Nilisha Chatterjee",
        role: "Community Leader",
        image: "/images/testimonials/nilisha-chatterjee.avif",
        hint: "professional woman portrait"
    },
     {
        quote: "The educational programs have given my children a future I could only dream of.",
        name: "Sunita Haldar",
        role: "Parent",
        image: "https://placehold.co/100x100.png",
        hint: "happy father portrait"
    }
];

const Testimonials = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">What People Say</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Stories of hope and transformation from the hearts of those we've touched.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-4 h-full">
                                    <Card className="h-full flex flex-col justify-center items-center text-center p-8 shadow-lg">
                                        <CardContent className="p-0 flex flex-col items-center">
                                            <div className="relative">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={100}
                                                    height={100}
                                                    data-ai-hint={testimonial.hint}
                                                    className="rounded-full mb-4 border-4 border-primary/20"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                                            <p className="font-bold text-lg font-headline">{testimonial.name}</p>
                                            <p className="text-sm text-primary">{testimonial.role}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;
