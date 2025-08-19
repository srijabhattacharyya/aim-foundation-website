
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HandHeart } from 'lucide-react';

export default function ReliefBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="/images/banner/relief.avif"
              alt="Community receiving relief supplies"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="community relief support"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Relief to the Underprivileged – AIM Foundation’s Lifeline of Hope
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In every corner of the world, there are people quietly battling daily hardships that many of us cannot imagine. They are mothers who skip meals so their children can eat, elderly individuals sleeping without a blanket during the cold nights, children who cannot concentrate in school because their stomachs are empty, and families whose homes have been washed away by floods or destroyed by fire.
                </p>
                <p>
                  For these individuals and families, even the most basic human needs—food, shelter, clean water, clothing—can feel out of reach. Poverty, sudden crises, and lack of resources leave them vulnerable and often invisible to the systems meant to protect them.
                </p>
                <p className="font-semibold text-primary text-center text-xl">
                  At AIM Foundation, we believe that no one should be left behind.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Immediate Relief Matters</h2>
                <p>
                  When disaster strikes—whether it is a personal crisis like the death of a breadwinner, a natural calamity like floods or cyclones, or the ongoing reality of deep poverty—speed matters. Immediate relief is not just about survival; it is about showing people that they are seen, valued, and supported.
                </p>
                 <p>Our relief work is rooted in three key principles:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Speed:</strong> Acting quickly to get aid into the hands of those in urgent need.</li>
                    <li><strong>Relevance:</strong> Providing exactly what is needed in each unique situation.</li>
                    <li><strong>Dignity:</strong> Ensuring that help is given respectfully, without making beneficiaries feel lesser or dependent.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">What We Provide: More Than Just Aid</h2>
                <p>Our Relief to the Underprivileged program covers a broad range of urgent needs:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Nutritious Food & Ration Kits:</strong> We distribute food kits with rice, pulses, oil, salt, sugar, and other essentials, ensuring families can prepare wholesome meals.</li>
                  <li><strong>Clean Drinking Water & Sanitation Supplies:</strong> We provide bottled drinking water, purification tablets, and hygiene kits to prevent disease outbreaks.</li>
                  <li><strong>Clothing, Blankets & Essentials:</strong> We distribute season-appropriate clothing and household necessities like utensils and mats.</li>
                  <li><strong>Shelter & Basic Living Support:</strong> For families left homeless, we provide temporary shelters and rebuilding tools.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories of Impact</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">A Warm Blanket, A Warmer Smile</h3>
                <p>Last winter in a village near Purba Bardhaman, our volunteers distributed blankets to elderly residents. One woman, aged 78, hugged her blanket tightly and said, “This is the first time in weeks I feel I can sleep without shivering.”</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Food for the Flood-Affected</h3>
                <p>In the wake of heavy monsoon flooding in Jalpaiguri, dozens of families were stranded. Within 24 hours, our team reached them with ready-to-eat meals and ration kits, providing crucial sustenance.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">How You Can Be the Lifeline</h2>
                <p>For many, a single meal or a warm blanket can be the difference between hope and despair. Your support makes this possible:</p>
                <ul className="list-none space-y-2 pl-4">
                    <li><strong>₹500</strong> can provide a warm blanket to two people.</li>
                    <li><strong>₹1,000</strong> can provide a family with a full month’s ration kit.</li>
                    <li><strong>₹2,500</strong> can supply clean drinking water to 50 people for a week.</li>
                </ul>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Join Us in Restoring Hope</h2>
                  <p className="mt-4">When you extend a helping hand, you don’t just give aid—you give hope, security, and dignity. Together, we can ensure that no one is left behind.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/relief-to-the-underprivileged">Support Our Relief Efforts</Link>
                  </Button>
                </div>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <HandHeart /> Be the reason a child sleeps on a full stomach tonight.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/relief-to-the-underprivileged">Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering">Volunteer</Link></Button>
                        <Button asChild variant="outline"><Link href="/corporate-social-responsibility">Collaborate</Link></Button>
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
