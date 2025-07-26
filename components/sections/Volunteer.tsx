
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Volunteer = () => {
  return (
    <section id="join-us" className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Become a Changemaker</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your time and skills are invaluable. Become a volunteer and join a passionate community dedicated to making a real difference. Whether it’s at our events, in our programs, or through administrative support, your contribution helps us create a bigger impact.
          </p>
          <Button size="lg" className="mt-8 transition-transform transform hover:scale-105" asChild>
            <Link href="/volunteering">Become a Volunteer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
