
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HandHeart, School } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/ChildFirstDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function ChildFirstBlogPage() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="A caring doctor with a child patient"
              fill
              objectFit="cover"
              className=""
              data-ai-hint="child healthcare"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/30 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  ChildFirst: Bringing Health, Hope, and Dignity to Children of Rambagan and Sonagachi
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In the bustling lanes of Rambagan and Sonagachi—two of Kolkata’s oldest red-light districts—life is a constant struggle for survival. For the children born here, innocence is often overshadowed by the harsh realities of poverty, stigma, and neglect. Many of these children live in cramped, unsafe quarters, surrounded by environments that threaten not only their physical health but also their emotional well-being. While the city around them continues to grow and modernize, they remain invisible to most. Their dreams are small—often just a hope for one full meal, freedom from recurring illness, and the comfort of someone who cares.
                </p>
                <p className="font-semibold text-primary text-center text-xl">
                    This is where ChildFirst, an initiative by AIM Foundation, steps in. Guided by compassion and committed to justice, ChildFirst brings free paediatric and general healthcare camps directly to these communities—offering medical care, dignity, and hope to those who need it most.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why ChildFirst Exists: The Urgent Need for Intervention</h2>
                <p>Children in these red-light districts face unique and compounded challenges:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>High Risk of Illness:</strong> Overcrowded and poorly ventilated living conditions make them highly susceptible to respiratory infections, skin diseases, and waterborne illnesses.</li>
                  <li><strong>Poor Nutrition:</strong> With limited access to balanced meals, malnutrition is widespread, leading to stunted growth, weak immunity, and developmental delays.</li>
                  <li><strong>Lack of Access to Healthcare:</strong> Stigma and financial hardship often keep families from seeking medical help, even when children are critically ill.</li>
                  <li><strong>Psychological Trauma:</strong> Growing up amidst exploitation, violence, and neglect leaves deep emotional scars, often leading to mental health challenges later in life.</li>
                </ul>
                <p>Without timely intervention, many of these children risk falling into a vicious cycle of illness, poverty, and marginalization.</p>
                <p>ChildFirst’s mission is simple yet profound: to put the child’s well-being first—every single time.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">How ChildFirst Works: Health Camps That Change Lives</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">1. Accessible Healthcare in a Safe Space</h3>
                <p>ChildFirst organizes regular paediatric and general health camps within walking distance of the children’s homes. These camps are set up in community halls, school courtyards, or NGO partner spaces—safe, familiar places where children and their caregivers feel welcome.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">2. Medical Services Provided</h3>
                <p>At each camp, children receive:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Complete Health Check-ups by qualified doctors</li>
                    <li>Essential Medicines free of cost</li>
                    <li>Basic Laboratory Tests for early detection of illnesses</li>
                    <li>Nutritional Supplements like protein powder, multivitamins, and iron tablets</li>
                    <li>Growth Monitoring to track height, weight, and development</li>
                </ul>
                <h3 className="text-2xl font-semibold font-headline text-foreground">3. Preventive Health Education</h3>
                <p>Doctors and volunteers conduct awareness sessions on:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Handwashing and hygiene</li>
                    <li>Clean drinking water practices</li>
                    <li>Importance of vaccinations</li>
                    <li>Balanced diets using affordable, locally available food</li>
                </ul>
                <h3 className="text-2xl font-semibold font-headline text-foreground">4. Referral for Serious Cases</h3>
                <p>For children needing specialized treatment, ChildFirst partners with hospitals and clinics to ensure follow-up care, often covering transportation and consultation costs.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories That Inspire</h2>
                <p>While statistics and medical reports highlight the urgency, real-life stories are what truly show the heart of ChildFirst.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Rani, Age 7</h3>
                <p>When Rani first visited a ChildFirst camp, she was severely underweight and constantly sick with fever and cough. Her mother, a sex worker, had no means to afford medical care. After two months of regular check-ups, medicines, and nutrition supplements, Rani gained weight, her energy returned, and she was able to attend school regularly.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Ayaan, Age 4</h3>
                <p>Ayaan suffered from untreated skin infections due to poor hygiene and contaminated water. The camp doctors treated his infections and taught his grandmother how to keep his skin clean. Within weeks, his sores healed, and his smile returned.</p>
                <p>These stories are not isolated—they happen every month in our camps.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Bigger Picture: Health as a Path to Dignity and Opportunity</h2>
                <p>ChildFirst is not just about medicine—it’s about changing the trajectory of a child’s life. Good health is the foundation for:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Education:</strong> A healthy child can attend school consistently and concentrate on learning.</li>
                    <li><strong>Confidence:</strong> Physical well-being improves self-esteem, allowing children to interact confidently with peers.</li>
                    <li><strong>Breaking the Cycle:</strong> Healthy children are more likely to grow into healthy adults who can support themselves and their families, reducing the risk of exploitation.</li>
                </ul>
                <p>By addressing health first, we lay the groundwork for education, empowerment, and long-term social change.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Your Role: How You Can Make a Difference</h2>
                  <p className="mt-4">Every individual contribution—no matter the size—has a tangible effect:</p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong>₹500</strong> can provide a child with a complete health check-up and medicines.</li>
                    <li><strong>₹2,000</strong> can supply nutritional supplements for 10 children for a month.</li>
                    <li><strong>₹10,000</strong> can sponsor an entire health camp for 50 children.</li>
                  </ul>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/childfirst">Support ChildFirst Today</Link>
                  </Button>
                </div>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Conclusion: No Child Left Behind</h2>
                <p>In Rambagan and Sonagachi, the odds are stacked against children from birth. But ChildFirst refuses to accept that fate. We believe every child—regardless of where they are born—deserves health, dignity, and the chance to dream. When you support ChildFirst, you are not just donating—you are saving childhoods, one check-up at a time. You are telling these children: “You matter. Your life matters. Your future matters.”</p>
                <p className="font-semibold text-center text-xl mt-4">Be the change. Be the hope. Be the reason a child smiles again.</p>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <HandHeart /> Donate to ChildFirst today.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/childfirst">Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering">Volunteer</Link></Button>
                        <Button asChild variant="outline"><Link href="/blog"><School className="mr-2 h-4 w-4" />Read More</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to ChildFirst</Button>
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
