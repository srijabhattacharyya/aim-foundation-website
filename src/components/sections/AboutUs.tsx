
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
                    Mahatma Gandhi once said, “The best way to find yourself is to lose yourself in the service of others.” This timeless wisdom reminds us that true fulfillment often lies not in chasing personal success, but in giving ourselves to something greater.
                </p>
                <p>
                    In today’s fast-paced, hyper-connected world, we’re constantly running — juggling responsibilities, chasing deadlines, and meeting our own expectations. While ambition and self-care are important, they can sometimes trap us in a cycle of self-focus, leaving little room for reflection, empathy, or meaningful connection.
                </p>
                <p>
                    Community service, especially on weekends, offers a beautiful way to pause and realign. When we step out of our routines and give our time to others — to comfort, to support, to uplift — we begin to see the world through a broader, more compassionate lens. We discover the quiet, transformative power of helping someone without expecting anything in return.
                </p>
                <p>
                    Through acts of service — whether it's teaching a child, organizing a health camp, planting a tree, or simply listening to someone in need — we begin to uncover parts of ourselves we didn’t know existed. We find purpose, peace, and a deeper sense of humanity.
                </p>
                <div className="pt-4 italic">
                    <p>In lifting others, we rise too.</p>
                    <p>In healing others, we heal ourselves.</p>
                    <p>And in serving others, we truly find ourselves.</p>
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
