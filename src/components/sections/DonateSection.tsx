import Image from 'next/image';
import { Button } from '@/components/ui/button';

const DonateSection = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/logo.png"
              alt="Children receiving aid"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 text-justify">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-left">Your Donation Can Change a Life</h2>
            <p className="text-lg text-muted-foreground">
              Every contribution — big or small — brings hope, dignity, and opportunity to those who need it most. Your generosity helps us provide education, healthcare, and a brighter future to underserved communities.
            </p>
            <p className="text-lg text-muted-foreground">
              When you donate, you’re not just giving — you’re becoming part of someone’s transformation, a second chance, a new beginning.
            </p>
            <p className="text-lg text-muted-foreground">
              Your support empowers us to reach more lives, extend our programs further, and work toward building a world where compassion, equality, and opportunity are within everyone’s reach.
            </p>
            <p className="text-lg text-muted-foreground font-bold italic">
                Together, we can make lasting impact — one act of kindness at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
