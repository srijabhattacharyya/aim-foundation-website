
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartHandshake, BookOpen, HandCoins } from 'lucide-react';

export default function CureLineBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Healthcare camp in a rural area"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="rural healthcare camp"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  CureLine: Bringing Healthcare to the Last Mile
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In a quiet corner of rural West Bengal, far from the bustling streets of Kolkata, an elderly woman sits on the steps of a village school, clutching her chest and breathing heavily. She has walked several kilometers from her home in the hopes of seeing a doctor. For weeks, the pain has kept her awake at night, but the nearest health center is more than 20 kilometers away. Transport is expensive, and she can’t afford to take a day’s wage loss just to stand in a long queue—if the doctor even happens to be there that day.
                </p>
                <p>
                  Today is different. A small team of doctors, nurses, and volunteers arrives in her village with medical kits, diagnostic tools, and a simple promise: “We are here for you.” This is CureLine, AIM Foundation’s frontline healthcare initiative, designed to bridge the gap between underserved communities and essential medical care.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Unseen Healthcare Crisis</h2>
                <p>
                  While urban India boasts multi-specialty hospitals and advanced diagnostic facilities, millions of people living in rural, forest-fringe, and disaster-prone areas remain locked out of the healthcare system. Many of these regions have:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>No registered medical practitioners for miles.</li>
                  <li>Lack of diagnostic services like blood sugar testing or blood pressure monitoring.</li>
                  <li>Limited awareness of preventive healthcare.</li>
                  <li>Prohibitive costs for travel and treatment.</li>
                  <li>Minimal access to maternal, child, or chronic disease care.</li>
                </ul>
                <p>
                  For these communities, falling sick often means choosing between neglecting treatment or going into debt. The result? A cycle of untreated illnesses, worsening health conditions, and preventable deaths.
                </p>
                 <p>
                  This is where CureLine steps in—not as a replacement for the health system, but as its much-needed extension to the last mile.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">CureLine’s Mission: Care Without Borders</h2>
                <p>CureLine is built on one core belief: Quality healthcare is a right, not a privilege.</p>
                <p>Our goal is to take medical services directly to people who otherwise would never receive them—regardless of where they live, what they earn, or what barriers stand in the way.</p>
                <p>Through regular, on-ground medical camps, CureLine delivers:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>General health check-ups and consultations – For both acute and long-standing health issues.</li>
                    <li>Diagnosis and treatment – For common illnesses like fever, infections, skin diseases, and seasonal ailments.</li>
                    <li>Chronic disease management – Regular monitoring of diabetes, hypertension, and other lifestyle-related conditions.</li>
                    <li>Maternal and child healthcare – Antenatal care, nutrition advice, and pediatric consultations.</li>
                    <li>Free distribution of medicines and supplements – Ensuring affordability is never an obstacle.</li>
                    <li>Health education – Practical guidance on hygiene, nutrition, and disease prevention.</li>
                </ul>
                <p>Every camp is more than a medical service—it’s an outreach of trust, empathy, and empowerment.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Where CureLine Works</h2>
                <p>We go where healthcare rarely reaches:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Remote Villages – Areas that are cut off from main roads, where public transport is infrequent or non-existent.</li>
                    <li>Forest-Fringe Settlements – Communities living near national parks like Gorumara, where wildlife restrictions and isolation limit access to services.</li>
                    <li>The Sundarbans Delta – A labyrinth of islands where boat rides replace roads, and cyclones frequently disrupt life.</li>
                    <li>Flood-Prone Regions – Low-lying districts where seasonal flooding cuts off entire communities for weeks.</li>
                    <li>Disaster-Hit Zones – Immediate medical relief during cyclones, floods, and health emergencies.</li>
                </ul>
                <p>In each of these regions, CureLine adapts to the geography, climate, and cultural context—sometimes traveling by road, sometimes by boat, and sometimes carrying everything on foot.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Stories from the Field</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">A Young Mother’s Relief</h3>
                <p>In the tribal belt near Gorumara, a young mother arrived at a CureLine camp with her newborn. The child was underweight and suffering from severe skin rashes. Our doctors immediately diagnosed the condition, provided medication, and gave the mother clear guidance on nutrition and hygiene. Two months later, when the team returned, the baby was visibly healthier—and the mother was eager to share that she had passed the advice on to other women in her village.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Fighting the Silent Killers</h3>
                <p>In a village in the Sundarbans, our screening revealed that nearly 40% of adults had undiagnosed hypertension, and 25% had high blood sugar levels. Without intervention, these silent conditions could lead to strokes, kidney failure, or heart disease. CureLine began regular monitoring, supplied medicines, and educated the community on diet and lifestyle changes—helping prevent long-term complications.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">CureLine in Emergencies</h2>
                <p>When disaster strikes, healthcare needs escalate dramatically. During floods in North Bengal, CureLine deployed emergency medical teams to distribute first aid, treat water-borne diseases, and manage injuries caused by debris and contaminated water. In the aftermath of Cyclone Amphan, CureLine provided care for injuries, dehydration, and infections, along with critical medicines that were otherwise inaccessible due to road blockages.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Your Role: Be the Lifeline</h2>
                <p>For a family living in a remote island in the Sundarbans or a tribal village in the Dooars, CureLine might be the only healthcare service they see all year. Your contribution can help us:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Send doctors and nurses to hard-to-reach communities.</li>
                    <li>Stock essential medicines and diagnostic equipment.</li>
                    <li>Train local volunteers to assist in medical camps.</li>
                    <li>Respond swiftly to health emergencies.</li>
                </ul>
                <p>₹500 can fund medicines for 10 patients. ₹2,000 can support chronic disease monitoring for a month in a small village. ₹5,000 can cover an entire day’s camp in a remote location.</p>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Join Us in Restoring Hope</h2>
                  <p className="mt-4">
                    Every rupee you give becomes a part of someone’s survival story. Help us keep CureLine moving. Help us keep hope alive.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/cureline">Support CureLine Today</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline">Together, we can bring healing to the last mile.</p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/cureline"><HandCoins className="mr-2 h-4 w-4" />Donate</Link></Button>
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
