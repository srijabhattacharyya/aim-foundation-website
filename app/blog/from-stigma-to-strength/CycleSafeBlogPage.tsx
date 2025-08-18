
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartHandshake, BookOpen, HandCoins } from 'lucide-react';

export default function CycleSafeBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-auto">
            <div className="relative w-full">
                <Image
                src="/images/banner/cyclesafe.avif"
                alt="Adolescent girls discussing health"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="menstrual health awareness"
                priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  From Stigma to Strength: Supporting Girls’ Health and Education
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  For many adolescent girls, menstruation is a normal biological process—but for millions across India, it’s a monthly challenge filled with fear, shame, and missed opportunities. In underserved communities, particularly in and around Kolkata, menstruation is still shrouded in silence.
                </p>
                <p>
                  CycleSafe was born out of a simple yet powerful belief: no girl should have to miss school or compromise her health because of her period. By providing essential menstrual products, conducting awareness workshops, and breaking taboos, this initiative ensures girls can live with dignity, confidence, and independence.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Challenges Girls Face</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Lack of Menstrual Products:</strong> Girls resort to unsafe alternatives, leading to infections.</li>
                  <li><strong>Missed Education:</strong> One in five girls in India drop out of school after they start menstruating.</li>
                  <li><strong>Silence and Stigma:</strong> Cultural taboos reinforce feelings of shame and exclusion.</li>
                  <li><strong>Health Risks:</strong> Poor hygiene can lead to serious reproductive and urinary tract infections.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">How CycleSafe Makes a Difference</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li><strong>Monthly Sanitary Napkin Supply:</strong> Ensuring safe and hygienic management of periods.</li>
                  <li><strong>Menstrual Hygiene Workshops:</strong> Educating girls on their bodies and safe practices.</li>
                  <li><strong>Awareness on Reproductive Health:</strong> Covering topics like cervical health and puberty.</li>
                  <li><strong>Breaking the Stigma:</strong> Creating safe spaces for open discussion and questions.</li>
                  <li><strong>Community Engagement:</strong> Involving mothers, teachers, and leaders to foster a supportive environment.</li>
                </ol>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories of Change</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Rani’s Journey</h3>
                <p>Rani, a 14-year-old, used to miss school every month. After joining CycleSafe, she received sanitary pads and health education. Today, she attends school confidently, participates in sports, and educates her peers.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Meena Inspires a Village</h3>
                <p>Meena was the first in her family to openly talk about menstruation. Now a volunteer, she empowers other girls to embrace their bodies without shame.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Your Support is Crucial</h2>
                <p>Just <strong>₹300 per month</strong> can support one girl with both menstrual products and life-changing health education. Your contribution can:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Keep a girl in school all year round.</li>
                  <li>Provide her with dignity and comfort.</li>
                  <li>Educate her on reproductive health and self-care.</li>
                  <li>Break the cycle of stigma for an entire community.</li>
                </ul>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Be the Reason She Smiles</h2>
                  <p className="mt-4">
                    Imagine a girl attending school without fear, participating in sports, excelling in her studies, and dreaming big—simply because she has the tools and knowledge to manage her period with dignity. You can make this possible.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/cyclesafe">Support CycleSafe Today</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline">Together, we can empower girls, one cycle at a time.</p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/cyclesafe"><HandCoins className="mr-2 h-4 w-4" />Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering"><HeartHandshake className="mr-2 h-4 w-4" />Volunteer</Link></Button>
                        <Button asChild variant="outline"><Link href="/blog"><BookOpen className="mr-2 h-4 w-4" />Read More</Link></Button>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
