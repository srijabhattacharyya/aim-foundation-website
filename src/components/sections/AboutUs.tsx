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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Key Focus Areas</h2>
            <div className="mt-4 text-lg text-muted-foreground space-y-2 text-justify">
                <p>֍ Healthcare: Ensuring access to essential medical services and health awareness programs.</p>
                <p>֍ Education: Providing learning opportunities and resources for underprivileged children.</p>
                <p>֍ Environmental Sustainability: Promoting conservation efforts and eco-friendly initiatives.</p>
                <p>֍ Women Empowerment: Encouraging leadership, skill development, and financial independence for women.</p>
                <p>֍ Child Development: Supporting the holistic growth and well-being of children through education and healthcare.</p>
                <p>֍ Disaster Relief: AIM Foundation prioritises disaster relief, providing food, medical aid &amp; essentials to vulnerable communities during crises</p>
            </div>
            <p className="mt-4 text-lg text-muted-foreground text-justify">
              By engaging with communities and implementing holistic programs, AIM Foundation strives to create a lasting impact—fostering healthier individuals, educated societies, environmental responsibility, and economic opportunities for women. Its work contributes to the overall well-being of society, laying the foundation for sustainable growth and equitable progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
