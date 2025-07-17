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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Us</h2>
            <h3 className="mt-4 text-xl font-semibold text-primary">AIM Foundation: Transforming Lives, Building Futures</h3>
            <div className="mt-4 text-lg text-muted-foreground space-y-4 text-justify">
                <p>
                    AIM Foundation began its journey in 2016 with a simple yet powerful vision—to bring dignity, opportunity, and hope to those who need it most. We work hand in hand with underserved communities, focusing on healthcare, education, environmental sustainability, and the well-being of women and children.
                </p>
                <p>
                    We believe that real change begins with empowerment. By nurturing women as leaders and changemakers, we help entire families and communities rise. Our mission is to create a world where everyone—regardless of background—has the chance to grow, thrive, and live with purpose. AIM Foundation is not just building services, but sowing seeds of lasting transformation.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
