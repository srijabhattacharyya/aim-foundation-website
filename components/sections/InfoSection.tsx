
import { Button } from '@/components/ui/button';
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
          <div className="mt-6 text-lg text-muted-foreground space-y-4 text-justify">
            <p>
                Since its inception, the Associated Initiative for Mankind Foundation (AIM Foundation) has stood beside marginalized communities — nurturing <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link>, healing the sick, empowering <Link href="/gender-equality-initiative" className="text-primary hover:underline">women</Link>, restoring dignity where it's been lost, and protecting the <Link href="/sustainability-initiatives" className="text-primary hover:underline">environment</Link> that sustains us all. Our work in <Link href="/healthcare-initiatives" className="text-primary hover:underline">healthcare</Link> and <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link> aims to build resilient communities.
            </p>
            <p className="font-semibold text-center">
                Together, we’re not just reaching lives — we’re transforming them.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
             <Button size="lg" variant="ghost" className="transition-transform transform hover:scale-105" asChild>
                <Link href="/volunteering">Join Volunteer</Link>
            </Button>
            <Button size="lg" variant="ghost" className="transition-transform transform hover:scale-105" asChild>
                <Link href="/internship">Join Intern</Link>
            </Button>
            <Button size="lg" variant="ghost" className="transition-transform transform hover:scale-105" asChild>
                <Link href="/corporate-social-responsibility">CSR</Link>
            </Button>
            <Button size="lg" variant="ghost" className="transition-transform transform hover:scale-105" asChild>
                <Link href="/cause-marketing-events">Cause Marketing</Link>
            </Button>
            <Button size="lg" variant="ghost" className="transition-transform transform hover:scale-105" asChild>
                <Link href="/payroll-giving">Payroll Giving</Link>
            </Button>
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
