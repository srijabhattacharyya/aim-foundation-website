import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const programs = [
  {
    title: 'Education for All',
    description: 'Providing quality education and resources to underprivileged children.',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'children studying',
  },
  {
    title: 'Healthcare Outreach',
    description: 'Delivering essential medical services to remote communities.',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'medical camp',
  },
  {
    title: 'Women Empowerment',
    description: 'Skill development programs to help women achieve financial independence.',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'women working',
  },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A group of happy children"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint="happy children charity"
      />
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline animate-fade-in-down">
          Building a Brighter Future, Together
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
          We are committed to empowering communities through education, healthcare, and sustainable development.
        </p>
        
        <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-6">Our Current Programs</h3>
            <Carousel
                opts={{
                align: "start",
                loop: true,
                }}
                className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto"
            >
                <CarouselContent className="-ml-4">
                {programs.map((program, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1 h-full">
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 flex-grow">
                            <Image src={program.image} alt={program.title} width={80} height={80} className="rounded-full border-2 border-primary" data-ai-hint={program.data_ai_hint}/>
                            <h4 className="font-bold text-lg font-headline">{program.title}</h4>
                            <p className="text-sm text-center">{program.description}</p>
                             <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black mt-auto">Learn More</Button>
                        </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="text-white hover:bg-white/20" />
                <CarouselNext className="text-white hover:bg-white/20" />
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
