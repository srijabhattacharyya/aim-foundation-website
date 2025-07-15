import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Us</h2>
            <p className="text-lg text-muted-foreground">
              AIM Foundation is a non-profit organization dedicated to fostering a society where every individual has the opportunity to thrive. We believe in creating sustainable change through comprehensive programs in education, healthcare, and livelihood.
            </p>
            <p className="text-muted-foreground">
              Our approach is rooted in transparency, accountability, and community participation. We work hand-in-hand with local communities to address their unique needs and empower them to build a better future for themselves.
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
