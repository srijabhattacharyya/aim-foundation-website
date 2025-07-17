import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="organisation" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-down">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Volunteers helping the community"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
              data-ai-hint="community volunteers"
            />
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">OUR HISTORY</h2>
            <h3 className="mt-4 text-xl font-semibold text-primary">AIM Foundation: Transforming Lives, Building Futures</h3>
            <div className="mt-4 text-lg text-muted-foreground space-y-4 text-justify">
                <p>
                    Founded in 2016, AIM Foundation is driven by a deep commitment to uplift underprivileged and marginalized families—guiding them toward dignity, self-reliance, and lasting change. Rooted in compassion and purpose, we focus on healthcare, education, environmental conservation, and the empowerment of women and children to build a more just and inclusive society.
                </p>
                <p>
                    At the heart of our mission lies the belief that true transformation begins with empowering women—creating opportunities for leadership and economic independence. We envision a world where every individual, regardless of gender or background, has access to quality education, essential healthcare, and a thriving natural environment. Through collective action and innovative solutions, AIM Foundation works tirelessly to create communities where hope grows, equality thrives, and every voice matters.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
