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
                    Founded in 2016, AIM Foundation is devoted to uplifting underprivileged and marginalized families—helping them move toward dignity, self-reliance, and a better future. With a focus on healthcare, education, environmental care, and women and child development, we aim to build a more just and compassionate society.
                </p>
                <p>
                    At our core is the belief in women’s empowerment—creating space for leadership and economic independence. We envision a world where everyone, regardless of background, has access to education, healthcare, and a healthy environment. Through collaboration and innovation, AIM Foundation nurtures communities where equality thrives and hope takes root.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
