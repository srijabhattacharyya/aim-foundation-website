
import { Button } from '../ui/button';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

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
                Since its inception, the <strong>Associated Initiative for Mankind Foundation (AIM Foundation)</strong> has stood beside marginalized communities — nurturing children, healing the sick, empowering women, restoring dignity where it's been lost, and protecting the environment that sustains us all.
            </p>
            <p className="font-semibold">
                Together, we’re not just reaching lives — we’re transforming them.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="transition-transform transform hover:scale-105">Join Us</Button>
            <Link href="https://www.youtube.com/watch?v=sG3BRIdRI3k" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="transition-transform transform hover:scale-105 w-full sm:w-auto">
                <PlayCircle className="mr-2 h-6 w-6" />
                Watch Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
