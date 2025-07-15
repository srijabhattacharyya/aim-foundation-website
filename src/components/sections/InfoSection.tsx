import { Button } from '@/components/ui/button';

const InfoSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Lighting the Way for Those Left Behind
          </h2>
          <div className="mt-6 text-lg text-muted-foreground space-y-4">
            <p>
                Since inception, <strong>Associated Initiative for Mankind Foundation (AIM Foundation)</strong> have stood beside marginalized communities — nurturing children, healing the sick, empowering women, and restoring dignity where it's been lost.
            </p>
            <p className="font-semibold">
                Together, we’re not just reaching lives — we’re transforming them.
            </p>
          </div>
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
