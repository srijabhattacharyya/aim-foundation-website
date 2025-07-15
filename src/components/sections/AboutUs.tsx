
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">BE A PART OF OUR ACTIVITIES</h2>
            <div className="text-lg text-muted-foreground text-justify space-y-4">
                <p>
                    Mahatma Gandhi once said, “The best way to find yourself is to lose yourself in the service of others.” In our fast-paced world, it's easy to become consumed by routines, goals, and personal demands. While ambition drives us forward, it can also leave us feeling disconnected — from others and from our deeper selves.
                </p>
                <p>
                    Weekend community service offers a powerful way to break that cycle. By stepping outside of our daily lives and offering our time to those in need, we not only uplift others — we reconnect with meaning, compassion, and purpose.
                </p>
                <div className="pt-4 italic">
                    <p>In giving, we grow.</p>
                    <p>In serving, we discover who we truly are.</p>
                </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Our team working with the community"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint="community work"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
