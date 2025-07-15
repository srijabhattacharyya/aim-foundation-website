
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">BE A PART OF OUR ACTIVITIES</h2>
            <p className="text-lg text-muted-foreground text-justify">
              Mahatma Gandhi beautifully said, “The best way to lose yourself is to find yourself in the service of others.” In today’s fast-paced world, we often become consumed by daily routines, prioritizing our own needs and desires. This can cause us to overlook the profound joy and purpose derived from helping others.
            </p>
            <p className="text-muted-foreground text-justify">
              Engaging in community service, particularly on weekends, offers a powerful way to break free from this cycle. By dedicating time to meaningful causes, we not only uplift others but also discover deeper personal fulfillment and a stronger sense of purpose.
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
