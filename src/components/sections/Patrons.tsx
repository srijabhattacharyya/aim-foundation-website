import Image from 'next/image';
import { Button } from '@/components/ui/button';

const patrons = [
  { name: 'Patron 1', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 2', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 3', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 4', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 5', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 6', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 7', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 8', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 9', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 10', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 11', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
  { name: 'Patron 12', logo: 'https://placehold.co/150x80.png', data_ai_hint: 'company logo' },
];

const Patrons = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Patrons & Supporters</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are grateful for the generous support from our partners, patrons, and individual supporters who make our work possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div
            className="relative h-96 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-col animate-scroll-y-seamless">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-4">
                {patrons.map((patron, index) => (
                    <div key={index} className="flex justify-center items-center h-24">
                    <Image
                        src={patron.logo}
                        alt={patron.name}
                        width={150}
                        height={80}
                        className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                        data-ai-hint={patron.data_ai_hint}
                    />
                    </div>
                ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-4" aria-hidden="true">
                {patrons.map((patron, index) => (
                    <div key={index + patrons.length} className="flex justify-center items-center h-24">
                    <Image
                        src={patron.logo}
                        alt={patron.name}
                        width={150}
                        height={80}
                        className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                        data-ai-hint={patron.data_ai_hint}
                    />
                    </div>
                ))}
                </div>
            </div>
            </div>
             <div className="space-y-4">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Group of supporters"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
                    data-ai-hint="diverse group supporters"
                />
                <h3 className="text-2xl md:text-3xl font-bold font-headline">About our Supporters</h3>
                <p className="text-muted-foreground">
                    Our journey is fueled by the unwavering support of corporations, foundations, and individuals who share our vision for a better world. Their contributions, both financial and in-kind, are the lifeblood of our initiatives, enabling us to reach more communities and create a lasting impact.
                </p>
                 <p className="text-muted-foreground">
                    Together, we are building a powerful coalition for change.
                </p>
                <Button size="lg" className="transition-transform transform hover:scale-105">Partner With Us</Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Patrons;
