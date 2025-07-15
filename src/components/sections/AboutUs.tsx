
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
                    Mahatma Gandhi once said, <strong className="font-semibold">“The best way to find yourself is to lose yourself in the service of others.”</strong>
                </p>
                 <p>
                    In today’s fast-paced world, we often become wrapped up in routines, chasing goals, and focusing on our own needs. In doing so, we may overlook the deeper meaning that comes from helping others.
                </p>
                <p>
                    Engaging in weekend community service gives us the chance to pause, connect, and contribute. Whether it’s supporting a child, aiding a community, or simply offering time — these moments create real change, both around us and within us.
                </p>
                <div className="pt-4 italic">
                    <p>In serving others, we discover purpose.</p>
                    <p>In lifting others, we find ourselves.</p>
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
