
import { Button } from '@/components/ui/button';

const Volunteer = () => {
  return (
    <section id="join" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Become a Part of the Change</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/90">
          Your time, skills, and passion can make a world of difference. Join our team of dedicated volunteers or contribute to our cause.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button disabled size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-transform transform hover:scale-105">
            Join Us
          </Button>
          <Button disabled size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-transform transform hover:scale-105">
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
