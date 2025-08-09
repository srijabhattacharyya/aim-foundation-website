
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartPulse } from 'lucide-react';

export default function SurgiReachBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="A caring doctor with a patient"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="operating room surgery"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Surgery Shouldn’t Be a Luxury: How SurgiReach is Bringing Life-Saving Surgeries Within Everyone’s Reach
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  When illness or injury strikes, the last thing any family should have to worry about is whether they can afford treatment. Yet for millions of people across India, the cost of surgery is not just high—it’s unattainable. For them, life-saving and life-changing medical procedures remain a distant dream, postponed indefinitely until it’s too late.
                </p>
                <p>
                  At AIM Foundation, we believe that access to essential healthcare is a right, not a privilege. This belief gave birth to <strong>SurgiReach</strong>—our flagship hospital partnership initiative dedicated to making surgeries accessible for economically disadvantaged individuals. Through a combination of strategic hospital tie-ups, compassionate medical professionals, and unwavering community support, SurgiReach is restoring health, dignity, and hope—one patient at a time.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Reality: Why Surgery Feels Out of Reach for So Many</h2>
                <p>
                  While India has made significant strides in medical technology and hospital infrastructure, healthcare inequality remains a pressing issue. For families living in poverty or low-income households:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>A complex surgery may cost months or even years of earnings.</li>
                  <li>Hospitals often require upfront payment before a procedure can even be scheduled.</li>
                  <li>Delays in treatment can lead to worsening conditions, disability, or even death.</li>
                </ul>
                <p>
                    A child born with a congenital disorder may live in pain for years. A father with kidney failure may skip life-saving surgery because his family can’t raise the money. A mother with a hernia may push through the pain until it becomes unbearable—simply because there’s no affordable option.
                </p>
                <p>The heartbreaking truth is that many lives are lost not because a cure doesn’t exist—but because it costs too much. SurgiReach exists to change that.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">What is SurgiReach?</h2>
                <p>
                  SurgiReach is AIM Foundation’s structured program that works with reputed hospitals, expert surgeons, and medical institutions to provide free surgical interventions for those who cannot afford them.
                </p>
                <p>
                  We identify eligible patients through community health camps, NGO networks, and hospital referrals. Every case is carefully reviewed for both medical urgency and financial need, ensuring resources are directed where they are most impactful.
                </p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">Our Focus Areas</h3>
                <p>We support two main categories of surgeries:</p>
                <h4 className="text-xl font-semibold font-headline text-foreground">1. Pediatric Surgeries (5 months to 14 years)</h4>
                <p>For children, early intervention is critical. SurgiReach covers:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Cleft lip and cleft palate repair – giving children the ability to eat, speak, and smile without stigma.</li>
                    <li>Hernia repairs – preventing serious complications later in life.</li>
                    <li>Orthopedic surgeries – correcting deformities, enabling mobility, and improving quality of life.</li>
                    <li>Congenital disorder treatments – addressing heart, digestive, and skeletal issues.</li>
                </ul>
                <p>When a child’s health is restored early, their entire future changes—school becomes possible, play becomes painless, and opportunities expand.</p>

                <h4 className="text-xl font-semibold font-headline text-foreground">2. Adult Surgeries</h4>
                <p>For adults, we focus on life-saving and life-enhancing procedures, including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Kidney transplants – giving patients with end-stage renal disease a second chance at life.</li>
                    <li>Knee and joint replacements – restoring mobility and independence.</li>
                    <li>Gallbladder, appendix, and abdominal surgeries – preventing long-term health deterioration.</li>
                    <li>Other medically urgent procedures as determined by specialists.</li>
                </ul>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">How SurgiReach Works: The Journey from Illness to Recovery</h2>
                <p>We designed SurgiReach to remove every major barrier to accessing surgical care. The process is simple yet thorough:</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li><strong>Patient Identification:</strong> Through our community health outreach, hospital referrals, and partner NGOs, we find individuals in urgent need of surgery.</li>
                    <li><strong>Medical & Financial Assessment:</strong> Each case is evaluated for medical necessity and financial eligibility to ensure fairness and transparency.</li>
                    <li><strong>Hospital Partnership Coordination:</strong> We collaborate with partner hospitals to schedule surgeries, ensuring patients are matched with the right specialists.</li>
                    <li><strong>Full Cost Coverage:</strong> SurgiReach covers pre-operative diagnostic tests, hospital admission costs, surgeon’s fees, post-operative care, and in certain cases, medication assistance.</li>
                    <li><strong>Post-Surgery Support:</strong> Our involvement doesn’t end when the surgery is over. We follow up to ensure patients receive proper recovery support and can return to daily life with confidence.</li>
                </ol>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories of Hope: Lives Changed by SurgiReach</h2>
                <p>While numbers show scale, stories show impact.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Rani’s New Smile</h3>
                <p>Born with a cleft lip, 6-year-old Rani from a rural village struggled to eat and speak. Classmates teased her, and she often stayed home from school. Through SurgiReach, she underwent a free corrective surgery. Today, she not only smiles without fear but has also become one of the most confident children in her class.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">A Farmer’s Second Chance</h3>
                <p>Raghunath, a 42-year-old farmer, suffered from severe kidney disease. His local clinic told him a transplant was his only option—but the cost was beyond imagination. SurgiReach facilitated a free kidney transplant through a partner hospital. Today, he is back to tending his fields, earning a livelihood, and providing for his family.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Walking Again</h3>
                <p>Meena, a mother of three, endured years of knee pain that made even short walks unbearable. A knee replacement surgery funded by SurgiReach not only restored her mobility but also her independence. She can now actively care for her children without relying on others.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">How You Can Help</h2>
                  <p className="mt-4">Your donation to SurgiReach can directly change a life.</p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong>₹5,000</strong> can cover pre-operative tests for a child.</li>
                    <li><strong>₹20,000</strong> can fund a life-changing hernia or cleft surgery.</li>
                    <li><strong>₹50,000 – ₹2,00,000</strong> can support complex adult surgeries like knee replacements or transplants.</li>
                  </ul>
                  <p className="mt-4 italic">Every contribution—big or small—creates ripples of change.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/surgireach">Donate to SurgiReach</Link>
                  </Button>
                </div>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Bigger Picture: Health Equity and Poverty Prevention</h2>
                <p>Healthcare inequality isn’t just a medical issue—it’s an economic one. When a family is forced to spend everything on a medical procedure, they often fall deeper into poverty. Children may drop out of school to help earn money, and livelihoods suffer.</p>
                <p>By covering surgery costs, SurgiReach prevents families from making impossible choices—like selling land, pulling children from school, or sinking into lifelong debt.</p>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <HeartPulse /> Be the Reason Someone Wakes Up Without Pain.
                    </p>
                    <p className="mt-2">Donate today and be the reason someone not only survives—but thrives.</p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/surgireach">Donate</Link></Button>
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
