import Image from 'next/image';
import { Button } from '@/components/ui/button';

const DonateSection = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Children receiving aid"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint="charity donation"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Your Donation Can Change a Life</h2>
            <p className="text-lg text-muted-foreground">
              Every contribution, no matter how small, helps us provide essential resources, education, and healthcare to those in need. By donating today, you become a part of their story of hope and transformation.
            </p>
            <p className="text-muted-foreground">
              Your support allows us to expand our reach and continue our work in creating a better, more equitable world for everyone.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform transform hover:scale-105">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
