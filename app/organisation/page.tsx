
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from '@/components/ui/skeleton';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay";


const ImpactPriorities = dynamic(() => import('@/components/sections/ImpactPriorities'), {
  loading: () => <section className="py-12 md:py-20 lg:py-24 bg-muted"><Skeleton className="h-[500px] w-full" /></section>,
  ssr: false
});

const Ethos = dynamic(() => import('@/components/sections/Ethos'), {
  loading: () => <section className="py-12 md:py-20 lg:py-24 bg-card"><Skeleton className="h-[400px] w-full" /></section>,
  ssr: false
});

const LegalRecognitions = dynamic(() => import('@/components/sections/LegalRecognitions'), {
  loading: () => <section className="py-12 md:py-20 lg:py-24 bg-muted"><Skeleton className="h-[400px] w-full" /></section>,
  ssr: false
});

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


export default function OrganisationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/organisation.jpg"
              alt="Our Organisation Banner"
              width={1920}
              height={334}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="office team building"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                From Vision to Action
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Driven by purpose, creating impact through compassion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-card">
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
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Footprints</h2>
                <div className="mt-4 text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                    Since 2016, AIM Foundation has been a beacon of hope for underprivileged and marginalized families—walking beside them on their journey to dignity, self-reliance, and brighter possibilities. Rooted in compassion, our efforts span healthcare, education, environmental protection, and the growth of women and children.
                    </p>
                    <p>
                    At the heart of our mission is the unwavering belief that empowered women uplift entire communities. We strive to create a world where access to education, health, and a clean environment is not a privilege, but a right for all. With collaboration, care, and courage, AIM Foundation builds spaces where equality blossoms and futures are reshaped with hope.
                    </p>
                     <Button asChild className="mt-4">
                        <Link href="#legal-recognitions">Our Recognitions</Link>
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ImpactPriorities />
        <Ethos />
        <LegalRecognitions />
        
      </main>
      <Footer />
    </div>
  );
}
