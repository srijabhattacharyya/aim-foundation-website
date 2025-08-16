
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TreePine } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/GreenRootsDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function GreenRootsBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full">
             <div className="relative w-full h-auto">
                <Image
                src="/images/banner/green-root1.avif"
                alt="Community members planting saplings for the GreenRoots initiative"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="community planting trees"
                priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/30 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Planting Hope, Growing Futures: The GreenRoots Journey
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  When we think about climate change, deforestation, and rising global temperatures, the solutions often seem distant and large-scale—massive forests, corporate-led afforestation drives, or sprawling green belts. But what if the power to fight environmental degradation lay right in our own backyards?
                </p>
                <p>
                  This is the heart of <strong>GreenRoots</strong>, AIM Foundation’s community-driven environmental initiative that believes reforestation is not just about planting trees on vast open lands—it’s about empowering people, families, and villages to nurture greenery where they live, work, and pray.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Seed of Change</h2>
                <p>
                  GreenRoots was born out of a simple yet powerful realization: in many rural and semi-rural areas, the lack of common or government-owned land makes large-scale plantations challenging. But every home has a courtyard, every farm has a border, every school has open space, and every temple has grounds waiting to be greened. These small spaces, when multiplied across communities, have the potential to create a vast and lasting green cover.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Challenge: Where Do We Plant When There’s No Land?</h2>
                 <p>In India, land is not just a piece of earth—it’s deeply tied to livelihoods, traditions, and identity. In many villages, every inch of land is privately owned or used for cultivation. Common lands that can host afforestation drives are scarce, and government-owned plots are often located far from population centers, making maintenance difficult.</p>
                <p>This poses a unique challenge to traditional reforestation projects:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Centralized plantations require large tracts of land, which are rare in densely populated areas.</li>
                  <li>Remote plantations struggle with upkeep because communities don’t feel a sense of ownership.</li>
                  <li>Seasonal initiatives often fail when there is no follow-up care after planting.</li>
                </ul>
                <p>GreenRoots addresses these challenges by flipping the model—from land first, community later to community first, land wherever you are.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The GreenRoots Model: Decentralized and Community-Driven</h2>
                <p>GreenRoots is not about creating a single large forest—it’s about planting thousands of mini-forests across homes, schools, farms, and community spaces. The model is simple but highly effective:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Sapling Distribution:</strong> Saplings of climate-appropriate, native, and fast-growing species are distributed directly to households, schools, farmers, and local organizations.</li>
                    <li><strong>Planting Guidance:</strong> Recipients are trained on how to plant, water, and care for the saplings. Workshops include tips on soil preparation, natural fertilizers, and protection from grazing animals.</li>
                    <li><strong>Decentralized Plantation Sites:</strong> Saplings are planted in courtyards, farm boundaries, roadside edges, school playgrounds, temple compounds, and other available open spaces.</li>
                    <li><strong>Community Awareness Drives:</strong> Through street plays, posters, and local champions, awareness about the importance of trees, biodiversity, and climate resilience is spread.</li>
                    <li><strong>Monitoring and Follow-up:</strong> Local volunteers and AIM Foundation teams revisit sites periodically to ensure the trees are thriving and provide additional support where needed.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why This Works: The Ownership Factor</h2>
                <p>The genius of GreenRoots lies in ownership. When a family plants a tree in their courtyard or on their farm boundary, they don’t see it as “someone else’s project.” It’s their tree—something they water every morning, protect from cattle, and watch grow.</p>
                <p>Ownership changes everything:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Trees are more likely to survive because they’re cared for daily.</li>
                  <li>Communities feel proud to showcase their greenery.</li>
                  <li>A sense of environmental responsibility develops at the grassroots level.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories from the Field</h2>
                <p>Every sapling planted under GreenRoots tells a story.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">The Farmer’s Shade</h3>
                <p>In a small village in West Bengal, a farmer planted neem and mango saplings along the border of his field. Two years later, he says the shade has improved soil moisture, and his children love to play under the trees.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">The School Garden</h3>
                <p>A primary school in a semi-rural block transformed its dusty playground into a green haven with 20 saplings provided by GreenRoots. Students take turns watering the plants, and science lessons often happen under the shade.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">The Temple Courtyard</h3>
                <p>A village temple that had only concrete and tiles now boasts flowering trees that attract birds. Festivals are celebrated amidst natural beauty, and visitors are inspired to plant in their own spaces.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">A Future Stitched with Dignity and Dreams</h2>
                  <p className="mt-4">The future of women’s empowerment lies not just in training but in turning that training into sustainable livelihoods. Krishti is proof that with the right resources, women can create their own opportunities and lift entire communities along with them.</p>
                  <p className="mt-4 italic">When you donate to Krishti, you’re not giving charity—you’re making an investment. An investment in women’s potential, in handcrafted artistry, and in a future where every woman has the chance to earn with dignity.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/green-roots">Support GreenRoots Today</Link>
                  </Button>
                </div>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <TreePine /> Let your support take root—help green India’s future.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/green-roots">Donate</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to GreenRoots</Button>
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
