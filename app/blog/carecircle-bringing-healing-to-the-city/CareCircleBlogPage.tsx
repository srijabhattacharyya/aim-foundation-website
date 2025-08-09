
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HandHeart, HeartPulse } from 'lucide-react';

export default function CareCircleBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="An urban health camp in Kolkata"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="urban health camp"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  CareCircle: Bringing Healing to the Heart of the City
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In the bustling metropolis of Kolkata—where the hum of traffic, the call of street vendors, and the rhythm of daily life form a vivid urban symphony—there exists another, quieter reality. Hidden behind the veil of urban progress are countless individuals who struggle every day without access to the most basic human right: healthcare.
                </p>
                <p>
                  For daily wage earners, elderly citizens, migrants, and single mothers living on the margins, a doctor’s visit can feel like an unattainable luxury. Long working hours, the high cost of medical services, and the lack of accessible clinics mean that small illnesses often go untreated until they become life-threatening conditions.
                </p>
                <p className="font-semibold text-primary text-center text-xl">
                  This is where CareCircle, an initiative by AIM Foundation, steps in—a lifeline for underserved urban communities, bringing compassionate, affordable, and inclusive medical care directly to the people who need it most.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Vision Behind CareCircle</h2>
                <p>
                  CareCircle was born out of a simple but profound belief: health is not a privilege—it is a shared right. In a city where gleaming hospitals stand just a few kilometers away from sprawling slums, the stark disparity in healthcare access is impossible to ignore.
                </p>
                <p>
                  Recognizing this gap, AIM Foundation envisioned CareCircle as a mobile, community-based healthcare network—one that removes the barriers of distance, affordability, and bureaucracy, and instead delivers essential medical services to the very doorsteps of those in need.
                </p>
                <p>The initiative operates through regular health camps set up in key outreach centers such as:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Sarala Punyashram</li>
                  <li>Sarat Bose Road</li>
                  <li>Boral Natunhat</li>
                </ul>
                <p>These are not random locations—they are carefully chosen urban pockets where marginalized groups live and work, often invisible to mainstream health systems.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Who We Serve</h2>
                <p>The faces at a CareCircle camp are as diverse as Kolkata itself:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Daily wage workers, who cannot afford to lose a day’s income for a hospital visit.</li>
                  <li>Senior citizens without financial security or family support.</li>
                  <li>Migrants from rural Bengal and neighboring states, navigating life in an unfamiliar city.</li>
                  <li>Single mothers, balancing multiple jobs while raising children.</li>
                  <li>Homeless individuals who have no permanent address to register at a clinic.</li>
                </ul>
                <p>By serving these groups, CareCircle addresses a critical equity gap—ensuring that healthcare is not determined by social status, income, or identity.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">What Happens at a CareCircle Camp</h2>
                <p>Every CareCircle camp is designed to function as a complete, one-stop healthcare touchpoint, offering a blend of medical services and health education.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">1. General Health Check-ups and Consultations</h3>
                <p>Experienced doctors volunteer their time to provide thorough examinations, answer questions, and offer personalized advice. For many attendees, this is their first interaction with a qualified medical professional in years.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">2. Free Distribution of Essential Medicines</h3>
                <p>CareCircle stocks each camp with commonly needed medicines—from fever reducers and antibiotics to nutritional supplements—ensuring that treatment begins immediately.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">3. Screenings for Chronic Conditions</h3>
                <p>Blood pressure checks, blood sugar tests, and other screenings help in early detection of hypertension, diabetes, and other lifestyle diseases—conditions often undiagnosed in low-income communities until they become severe.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">4. Referrals to Partner Hospitals</h3>
                <p>For cases requiring specialized treatment, CareCircle connects patients to a network of partner hospitals and clinics willing to provide affordable or charitable care.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">5. Health Awareness Sessions</h3>
                <p>Workshops on hygiene, nutrition, disease prevention, and maternal care empower community members to take charge of their health.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories from the Field</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">The Carpenter Who Couldn’t Afford to Rest</h3>
                <p>Ramesh, a 42-year-old carpenter from Boral Natunhat, had been ignoring severe chest pain for weeks because taking a day off meant losing his only income. At a CareCircle camp, doctors discovered he had dangerously high blood pressure. With free medicines and follow-up support, Ramesh is now managing his condition and continues to work without the constant fear of a heart attack.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">A Grandmother’s Gratitude</h3>
                <p>Seventy-year-old Asha Devi, a widow from Sarat Bose Road, had been suffering from joint pain for years. Unable to afford treatment, she relied on home remedies that offered little relief. CareCircle provided her with not only free medicines but also physiotherapy guidance—transforming her mobility and quality of life.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Your Donation, Their Lifeline</h2>
                  <p className="mt-4">
                    In the shadows of skyscrapers and shopping malls, there are thousands still waiting for the comfort of medical attention. Your support can make that happen. A single donation can provide a full health check-up, supply life-saving medicines, or fund chronic illness screenings.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/carecircle">Support CareCircle Today</Link>
                  </Button>
                </div>

                <h2 className="text-3xl font-bold font-headline text-foreground">Conclusion: Be Part of the Circle</h2>
                <p>
                  In a world where healthcare inequality is a pressing challenge, CareCircle is proof that compassion, when combined with action, can transform lives. Every camp is a reminder that healing the city starts with healing its people—one neighborhood at a time. Join us. Be the reason someone receives the care they’ve been waiting for. Help us keep the circle unbroken.
                </p>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <HeartPulse /> Donate to CareCircle today and bring healing to the heart of the city.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/carecircle">Donate</Link></Button>
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
