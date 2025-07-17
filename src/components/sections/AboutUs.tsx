import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About AIM Foundation</h2>
            <p className="mt-4 text-lg text-muted-foreground text-justify">
              Associated Initiative for Mankind (AIM) Foundation is a non-profit organization dedicated to creating a significant and lasting impact on marginalized communities. We believe in the power of collective action to foster change.
            </p>
            <p className="mt-4 text-muted-foreground text-justify">
              Our work spans across critical areas including education for underprivileged children, accessible healthcare for remote populations, women empowerment through skill development, and environmental sustainability projects. We strive to restore dignity and provide the tools for self-reliance, ensuring that every individual has the opportunity to build a better future.
            </p>
            <div className="mt-6">
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
