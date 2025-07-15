import Image from 'next/image';

const patrons = [
  { name: 'Patron 1', logo: '/images/logo.png' },
  { name: 'Patron 2', logo: '/images/logo.png' },
  { name: 'Patron 3', logo: '/images/logo.png' },
  { name: 'Patron 4', logo: '/images/logo.png' },
  { name: 'Patron 5', logo: '/images/logo.png' },
  { name: 'Patron 6', logo: '/images/logo.png' },
  { name: 'Patron 7', logo: '/images/logo.png' },
  { name: 'Patron 8', logo: '/images/logo.png' },
  { name: 'Patron 9', logo: '/images/logo.png' },
  { name: 'Patron 10', logo: '/images/logo.png' },
  { name: 'Patron 11', logo: '/images/logo.png' },
  { name: 'Patron 12', logo: '/images/logo.png' },
];

const Patrons = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Patrons & Supporters</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are grateful for the generous support from our partners, patrons, and individual supporters who make our work possible.
          </p>
        </div>
        <div className="relative h-96 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <div className="flex flex-col animate-scroll-y-seamless">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 py-4">
              {patrons.map((patron, index) => (
                <div key={index} className="flex justify-center items-center h-24">
                  <Image
                    src={patron.logo}
                    alt={patron.name}
                    width={150}
                    height={80}
                    className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 py-4" aria-hidden="true">
              {patrons.map((patron, index) => (
                <div key={index + patrons.length} className="flex justify-center items-center h-24">
                  <Image
                    src={patron.logo}
                    alt={patron.name}
                    width={150}
                    height={80}
                    className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patrons;
