
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Shield, HeartHandshake } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/TideShieldDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function TideShieldBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Mangrove forest in the Sundarbans"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="mangrove restoration"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  TideShield: Restoring the Mangrove Heartbeat of the Sundarbans
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                    In the farthest reaches of West Bengal, where land dissolves into the sea, lies one of Earth’s most extraordinary and fragile ecosystems—the Sundarbans. This sprawling mangrove forest, a UNESCO World Heritage Site, is home to countless species and a lifeline for coastal communities. But in recent years, its protective shield has been torn apart by nature’s fury—cyclones, rising seas, and the relentless march of climate change.
                </p>
                <p>
                    On Bali Island, one of the Sundarbans’ most vulnerable fringes, the scars of cyclones Amphan (2020) and Yaas (2021) are still raw. Eroded coastlines, saline-invaded farmlands, and uprooted mangroves tell a story of both devastation and resilience. And in this critical chapter of recovery, TideShield—an environmental initiative by AIM Foundation—has taken root, determined to restore the mangrove heartbeat of this region.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Mangroves Matter More Than Ever</h2>
                <p>
                    Mangroves are not just trees. They are living fortresses, defending shorelines against tidal surges, filtering water, storing massive amounts of carbon, and providing a nursery for marine life.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Storm Protection:</strong> During cyclones, mangroves act as natural barriers, absorbing wave energy and reducing storm surges by up to 66%.</li>
                  <li><strong>Erosion Control:</strong> Their complex root systems hold the soil together, preventing coastlines from being washed away.</li>
                  <li><strong>Biodiversity Havens:</strong> The Sundarbans’ mangroves shelter species like the Royal Bengal Tiger, estuarine crocodiles, mudskippers, and countless fish species that sustain local fisheries.</li>
                  <li><strong>Climate Warriors:</strong> Mangroves store four times more carbon per hectare than rainforests, making them vital allies in combating global warming.</li>
                </ul>
                <p>
                    Yet, despite their importance, mangroves are disappearing at an alarming rate—victims of storms, unsustainable development, and rising sea levels. In the Sundarbans, each cyclone that tears through the delta strips away not just trees, but entire layers of protection for communities living at the water’s edge.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Cyclones Amphan & Yaas: Turning Points for Bali Island</h2>
                <p>
                    Before Cyclone Amphan struck in May 2020, Bali Island’s mangrove belt was already thinning. Years of gradual erosion had weakened its natural defenses. Amphan arrived like a sledgehammer—winds topping 185 km/h, storm surges swallowing embankments, and thousands of trees uprooted overnight. Then, less than a year later, Cyclone Yaas delivered another blow. Communities barely recovering from one disaster were plunged back into crisis. Saline water flooded rice paddies, freshwater ponds turned brackish, and once-thriving fishing grounds suffered irreversible damage. The loss was not just ecological—it was deeply personal. Families who had lived on the island for generations faced the impossible choice of rebuilding or migrating. For many, the absence of mangroves meant living without nature’s most reliable shield.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Birth of TideShield</h2>
                <p>
                    Amid this backdrop of urgency, AIM Foundation launched TideShield, an initiative singularly focused on restoring Bali Island’s mangrove ecosystems. The mission was clear:
                </p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Rebuild coastal protection by planting native mangrove species.</li>
                    <li>Empower local communities to take ownership of mangrove restoration and care.</li>
                    <li>Strengthen resilience against future climate disasters.</li>
                </ul>
                <p>TideShield is not just about planting trees. It’s about planting hope, security, and self-reliance in one of the most climate-threatened places on Earth.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">How TideShield Works</h2>
                <p>The program combines science-based restoration techniques with community-led action—because in the Sundarbans, any long-term environmental solution must also serve the people who depend on it.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">1. Careful Species Selection</h3>
                <p>Different mangrove species thrive in different tidal zones. TideShield focuses on planting native species such as:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Avicennia marina (Grey mangrove) – Tolerates high salinity, grows fast.</li>
                    <li>Rhizophora mucronata – Excellent at stabilizing soil with strong prop roots.</li>
                    <li>Sonneratia apetala – Attracts fish and crustaceans, aiding local livelihoods.</li>
                </ul>
                <p>By matching the right species to the right zone, the survival rate of saplings is significantly increased.</p>
                
                <h3 className="text-2xl font-semibold font-headline text-foreground">2. Community Participation</h3>
                <p>Local residents—many of whom lost farmland or fishing grounds to cyclones—are central to TideShield’s success. They collect mangrove seeds and propagules during peak season, raise saplings in nurseries, and monitor and maintain young mangroves during their vulnerable early years. This ensures that restoration is not a one-off event but an ongoing commitment.</p>
                
                <h3 className="text-2xl font-semibold font-headline text-foreground">3. Training & Awareness</h3>
                <p>Workshops are conducted to train villagers, especially women and youth, in mangrove care, nursery management, and sustainable harvesting practices. These sessions also explain the link between mangrove health and community safety—turning environmental knowledge into shared responsibility.</p>
                
                <h3 className="text-2xl font-semibold font-headline text-foreground">4. Scientific Monitoring</h3>
                <p>With help from environmental experts, TideShield monitors sapling survival rates, growth patterns, shoreline changes, and wildlife return indicators. This data guides future planting strategies and ensures that restoration efforts are adaptive, not static.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Be the Hope Coastal Families Are Waiting For</h2>
                  <p className="mt-4">
                    Your support can directly provide saplings, train local volunteers, and monitor the growth of young mangrove belts. A single contribution can plant not just a tree, but the seed of security for an entire family.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/tideshield">Support TideShield Today</Link>
                  </Button>
                </div>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Conclusion: Let Your Generosity Take Root</h2>
                <p>
                  The Sundarbans is a place where the line between land and water is ever-shifting, where life balances delicately between abundance and destruction. Mangroves are the quiet guardians of this world. And right now, they need us as much as we need them. TideShield is more than an environmental project—it’s a promise to future generations that we will not stand by as nature’s defenses crumble. With your help, the mangroves of Bali Island can rise again, stronger than before, ready to meet the tides head-on.
                </p>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Leaf /> Help us shield the Sundarbans.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/tideshield">Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering">Volunteer</Link></Button>
                        <Button asChild variant="outline"><Link href="/corporate-social-responsibility">Collaborate</Link></Button>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </main>
      <div className="fixed bottom-8 right-8 z-50">
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogTrigger asChild>
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to TideShield</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
            <DynamicDonationForm />
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
}
