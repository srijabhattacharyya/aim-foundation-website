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
                    Founded in 2016, AIM Foundation is dedicated to uplifting underprivileged and marginalised families, guiding them toward self-sufficiency and dignity. With a strong focus on healthcare, education, environmental conservation, and women and child development, the foundation is committed to fostering a sustainable and equitable society.
                </p>
                <p>
                    At the heart of AIM Foundation’s mission is the empowerment of women—creating leadership opportunities and enabling economic independence—while driving holistic community development. The organization envisions a world where everyone, regardless of gender, socioeconomic status, or background, has access to quality education, healthcare, and a thriving environment. Through collaborative efforts and innovative solutions, AIM Foundation works toward building communities where health and education are prioritized, nature is preserved, and women are empowered to lead and contribute economically.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
