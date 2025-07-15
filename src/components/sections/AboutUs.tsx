
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">BE A PART OF OUR ACTIVITIES</h2>
            <p className="text-lg text-muted-foreground text-justify">
              Mahatma Gandhi once said, “The best way to find yourself is to lose yourself in the service of others.” In today’s fast-paced world, it’s easy to get caught up in our daily routines—chasing personal goals, meeting deadlines, and tending to our own needs. In the process, we often overlook the deeper joy and meaning that comes from helping others.
            </p>
            <p className="text-lg text-muted-foreground text-justify">
              Weekend community service offers a powerful opportunity to step out of this cycle. By giving just a portion of our time to causes that matter, we not only uplift those in need but also reconnect with ourselves. In serving others, we find a deeper sense of purpose, fulfillment, and belonging.
            </p>
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
