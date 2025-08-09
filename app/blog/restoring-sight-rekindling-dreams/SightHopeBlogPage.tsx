
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';

export default function SightHopeBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="An elderly person getting an eye check-up"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="vision eye exam"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Restoring Sight, Rekindling Dreams – The Journey of SightHope
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  Imagine waking up one morning and finding that the world around you has faded into a blur. The outlines of faces become indistinct, words on a page dissolve into hazy lines, and once-familiar paths turn into confusing, unsafe obstacles. For millions of people across India, especially in rural villages, urban slums, and economically marginalized communities, this is not imagination—it’s a daily reality.
                </p>
                <p>
                  Poor vision is far more than a medical condition. It’s a thief of opportunity, dignity, and independence. It silently erodes quality of life, often without drawing much attention from policymakers or healthcare systems. Yet, in many cases, this vision loss is avoidable—conditions like cataracts, refractive errors, and common eye infections can be diagnosed and treated quickly, effectively, and at relatively low cost.
                </p>
                <p>
                  The AIM Foundation, recognizing this urgent but under-addressed crisis, launched <strong>SightHope</strong>—a mission to restore sight and, with it, the dreams, livelihoods, and independence of those left in the shadows. In partnership with some of Kolkata’s most respected eye care institutions, SightHope brings world-class, no-cost eye care services directly to those who need them most.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Invisible Crisis: Vision Loss in India</h2>
                <p>
                  India is home to one of the largest populations affected by preventable blindness and visual impairment. According to the National Programme for Control of Blindness (NPCB), over 12 million people in India are blind, with cataracts alone accounting for nearly two-thirds of these cases. Millions more suffer from refractive errors—conditions easily corrected with prescription glasses.
                </p>
                <p>
                  For families living in poverty, eye care often falls to the bottom of the priority list. Daily struggles for food, shelter, and survival overshadow the gradual decline of vision.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Birth of SightHope</h2>
                <p>
                  The AIM Foundation conceived SightHope with a simple but powerful belief: no one should be condemned to a life of darkness when the cure is within reach. To achieve this vision, AIM Foundation forged partnerships with leading eye hospitals in Kolkata, including Sushrut Eye Foundation, B. B. Eye Foundation, and Hope Foundation.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">How SightHope Works</h2>
                <p>
                  SightHope operates on a community-first model, bringing free eye care services directly to where people live, work, and study. This includes eye care camps, cataract surgeries, school vision screenings, and awareness programs.
                </p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">The Human Impact – Stories that Inspire</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Rina – The Schoolgirl Who Couldn’t Read the Board</h3>
                <p>Rina, a bright 12-year-old from a rural school near Kolkata, often sat at the back of the classroom, squinting at the blackboard. A SightHope school screening revealed she had significant myopia. With a simple pair of glasses, her grades improved dramatically, and her confidence soared.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Mohammad – The Rickshaw Puller Who Saw the World Again</h3>
                <p>Mohammad, a 55-year-old rickshaw puller, gradually lost vision in both eyes due to cataracts. Unable to work, he struggled to feed his family. SightHope arranged a free cataract surgery. Today, he is back on the road, earning a living.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Restore Sight, Renew Lives</h2>
                  <p className="mt-4 italic">
                    Sight is more than vision—it’s freedom, dignity, and opportunity. Every contribution to SightHope brings us closer to a future where no one has to live in the dark due to poverty.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/sighthope">Support SightHope Today</Link>
                  </Button>
                </div>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Eye /> Give the gift of sight and change a life forever.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/sighthope">Donate</Link></Button>
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
