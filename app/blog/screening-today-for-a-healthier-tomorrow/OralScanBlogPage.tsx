
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Stethoscope } from 'lucide-react';

export default function OralScanBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Oral cancer screening camp"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="oral cancer screening"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Screening Today for a Healthier Tomorrow
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In India, oral cancer is not just a health issue—it’s a silent epidemic. According to the World Health Organization, India accounts for nearly one-third of the world’s oral cancer cases. The disease often creeps in unnoticed, hidden behind symptoms mistaken for harmless ulcers or gum issues. By the time it is detected, it is frequently in an advanced stage, making treatment more complex, costly, and less effective.
                </p>
                <p>
                  The tragedy is that oral cancer is largely preventable and highly curable if caught early. Yet, millions of people—especially in rural and underserved communities—never get screened. The reasons are many: lack of awareness, fear of diagnosis, financial barriers, and limited access to healthcare facilities.
                </p>
                <p className="font-semibold text-primary text-center text-xl">
                  This is where OralScan, an initiative by AIM Foundation, steps in to change the story.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">What Is OralScan?</h2>
                <p>
                  OralScan is AIM Foundation’s community-based program dedicated to the early detection of oral cancer through free screening camps. We focus on reaching populations that are at the highest risk yet have the least access to preventive care—small villages, low-income neighbourhoods, and communities where tobacco use is culturally entrenched.
                </p>
                <p>
                  The program is not just about diagnosis—it’s about prevention, awareness, and follow-through. Our approach is simple yet powerful: bring the doctors to the people, educate them about risk factors, screen them in a comfortable and familiar setting, and connect those at risk to the next steps of care.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Early Detection Matters</h2>
                <p>
                  Oral cancer develops slowly, often starting as precancerous lesions that can be detected during a simple visual examination by a trained healthcare provider. When identified in the early stages, survival rates can be as high as 80–90%. But when caught late, survival drops to 20–30%, and treatment becomes far more expensive and invasive.
                </p>
                <p>By focusing on early intervention, OralScan is able to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Save lives by diagnosing cases before they advance.</li>
                  <li>Reduce treatment costs for families already struggling financially.</li>
                  <li>Prevent suffering by ensuring faster recovery and better quality of life.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">How OralScan Works</h2>
                <p>Our work is built on three strong pillars—screening, education, and support.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">1. Free Oral Cancer Screenings</h3>
                <p>We organize mobile screening camps in collaboration with trained doctors and healthcare volunteers. Using non-invasive methods, we check for:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>White or red patches in the mouth.</li>
                  <li>Persistent sores that don’t heal.</li>
                  <li>Lumps or swelling in the oral cavity.</li>
                  <li>Early signs of gum and jawbone involvement.</li>
                </ul>
                <p>Each patient’s details are documented, and those with suspicious findings are referred for further tests.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">2. Awareness and Education</h3>
                <p>We believe that knowledge is the first line of defence. Every camp includes a short awareness session that covers:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>The dangers of tobacco in all forms—smoking, chewing, gutkha, khaini, etc.</li>
                  <li>The role of alcohol as a risk multiplier.</li>
                  <li>The importance of oral hygiene.</li>
                  <li>How to self-check for early symptoms.</li>
                </ul>
                <p>We use posters, leaflets, and local language storytelling so that the message resonates deeply with the community.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">3. Counseling and Follow-Up</h3>
                <p>Being told that you may have cancer is overwhelming. That’s why we provide on-the-spot counselling, explaining what the screening means, and guiding patients through the next steps. For high-risk or suspected cases, we coordinate referrals to government or charitable hospitals that can offer affordable or free treatment.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Communities We Serve</h2>
                <p>OralScan primarily targets:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Rural villages where healthcare infrastructure is minimal.</li>
                  <li>Urban slums where tobacco use is high and dental care is almost non-existent.</li>
                  <li>Tribal belts where traditional chewing habits like betel nut make oral cancer more prevalent.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories from the Field</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Ramesh’s Turning Point</h3>
                <p>Ramesh, a 42-year-old tea stall owner in a West Bengal village, had been chewing tobacco for over 20 years. He ignored a small sore in his mouth until he attended an OralScan camp. Our doctors flagged it as a potential precancerous lesion. With our referral, Ramesh received treatment at a charitable hospital. Today, he is cancer-free and has quit tobacco completely.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Mita’s Second Chance</h3>
                <p>Mita, a 35-year-old mother of two, attended our camp reluctantly after neighbours persuaded her. She had no symptoms but was screened as part of the general check-up. A tiny white patch was discovered—an early warning sign. Early treatment meant she avoided a major surgery, and she now works with OralScan as a community volunteer.</p>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Your Donation is Critical</h2>
                  <p className="mt-4">Every OralScan camp costs money—though surprisingly little considering the life-changing results. Your donation helps cover:</p>
                  <ul className="list-disc list-inside space-y-2 mt-4 text-left pl-8">
                    <li>Medical professionals’ honorarium.</li>
                    <li>Portable diagnostic equipment.</li>
                    <li>Educational materials in local languages.</li>
                    <li>Transport and logistics for reaching remote areas.</li>
                    <li>Referral support for high-risk cases.</li>
                  </ul>
                  <p className="mt-4 italic">A single donation of ₹500 can fund screenings for 10 individuals. Imagine the impact if even one of them discovers an early-stage cancer.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/oralscan">Support OralScan Today</Link>
                  </Button>
                </div>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">A Future Without Fear</h2>
                <p>With OralScan, we envision a future where no person dies because they were diagnosed too late. A future where education replaces ignorance, prevention replaces neglect, and early treatment replaces tragedy.</p>
                <p>We cannot achieve this alone. We need you—your generosity, your voice, and your belief in the power of prevention.</p>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Stethoscope /> Be the reason someone smiles without pain.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/oralscan">Donate</Link></Button>
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
