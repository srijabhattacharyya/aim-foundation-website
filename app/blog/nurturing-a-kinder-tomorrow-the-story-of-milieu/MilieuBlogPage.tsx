
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

export default function MilieuBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="https://placehold.co/1920x800.png"
              alt="Diverse group of children learning together"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="children collaboration"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Nurturing a Kinder Tomorrow: The Story of Milieu
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In a divided world, where children often grow up in social bubbles, <strong>Milieu by AIM Foundation</strong> is creating safe, inclusive spaces where empathy, awareness, and friendship flourish. By bringing together children from privileged schools and underserved communities, Milieu helps shape conscious citizens who learn to see beyond economic, cultural, and social differences.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Beyond Books: Where Learning Meets Humanity</h2>
                <p>
                  Classrooms teach math, science, and grammar—but where do children learn empathy, respect, and inclusion? Milieu answers this gap by offering real-world education that goes beyond textbooks and into the hearts and minds of children.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Bridging the Divide: Why Milieu Was Born</h2>
                <p>
                  Too often, children from different social backgrounds grow up without ever meaningfully interacting. This lack of exposure fuels stereotypes and unconscious bias. Milieu breaks this pattern early—creating safe spaces for connection and learning across differences.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Day in Milieu: How Change Begins with a Smile</h2>
                <p>
                  Every Milieu session is a journey—filled with games, stories, creativity, and shared discoveries. These aren’t just activities; they are moments that help children see the world through someone else’s eyes.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Breaking Barriers, Building Bonds: Stories from the Heart</h2>
                <p>
                    Real transformation happens when children open up and connect. From Arjun’s awakening to Tapan’s resilience, and Meena finding her voice, these stories show how Milieu touches lives and rewrites narratives.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">What Makes Milieu Different: The Values We Weave</h2>
                <p>
                  Milieu isn’t charity. It’s mutual growth. Children are treated as equals, activities are collaborative, and lessons are rooted in emotional intelligence, shared responsibility, and cultural respect.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">More Than a Program: A Movement Toward Social Harmony</h2>
                <p>
                  Milieu’s impact extends far beyond the sessions. It influences families, schools, and communities—planting seeds of compassion, cooperation, and citizenship that grow for a lifetime.
                </p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Your Role in the Story: Support Learning Without Boundaries</h2>
                  <p className="mt-4 font-semibold">Your support can fund:</p>
                  <ul className="list-none space-y-2 mt-2">
                    <li>🚍 Transport for children from underserved areas</li>
                    <li>🎨 Creative materials for interactive learning</li>
                    <li>🧑‍🏫 Trained facilitators and mentors</li>
                    <li>🏡 Safe, inclusive venues for workshops</li>
                  </ul>
                  <p className="mt-4 italic">Every rupee threads a bond. Every gesture fuels a friendship.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/milieu">Support Milieu Today</Link>
                  </Button>
                </div>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Together, We Can Stitch a More United Future</h2>
                <p>
                  Milieu proves that children don’t need to be taught to care—they only need the chance to connect. When given the opportunity, they listen, laugh, learn, and lead—with open hearts and open minds.
                </p>
                <p>
                  Help us create more spaces where children grow together—beyond class, beyond color, beyond boundaries.
                  Support Milieu. Nurture empathy. Build a future stitched with unity.
                </p>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Users /> Join the Movement. Shape Tomorrow’s Leaders—Today.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/milieu">Donate</Link></Button>
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
