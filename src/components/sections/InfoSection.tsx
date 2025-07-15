import { Button } from '@/components/ui/button';

const InfoSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Lighting the Way for Those Left Behind
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Since our inception, we have been dedicated to uplifting marginalized communities through comprehensive programs in education, health, and livelihood. Our commitment to transparency and accountability ensures that every contribution makes a real, measurable difference in the lives of the people we serve.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="transition-transform transform hover:scale-105">Learn More</Button>
            <Button size="lg" variant="outline" className="transition-transform transform hover:scale-105">Join Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
