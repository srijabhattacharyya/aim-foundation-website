'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const FootprintCarousel = dynamic(() => import('@/components/sections/FootprintCarousel'), {
    loading: () => <Skeleton className="h-[400px] w-full" />,
    ssr: false
});

const AboutUs = () => {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full max-w-lg mx-auto">
                <FootprintCarousel />
            </div>
            <div>
                <h3 className="text-lg md:text-xl font-semibold font-headline text-primary mb-6">Building Dignity. Inspiring Change.</h3>
                <div className="mt-4 text-base text-muted-foreground space-y-4 text-justify">
                    <p>
                        Since 2016, AIM Foundation has stood for one unwavering belief — that every life deserves dignity, opportunity, and hope.
                    </p>
                    <p>
                        We partner with some of the most underserved communities in India, creating real impact through healthcare, education, environmental sustainability, and support for women and children. Our work goes beyond providing services — we work at the roots, empowering people to uplift themselves and those around them.
                    </p>
                    <p>
                        At the heart of our mission is the power of women as changemakers. When a woman is empowered, a family is strengthened, and a community begins to thrive.
                    </p>
                    <p>
                        We're not just delivering aid. We’re building futures — one life, one village, one step at a time.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
