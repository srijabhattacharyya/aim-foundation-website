
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/SurgiReachDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const healthcareInitiatives = [
  { href: '/cureline', label: 'CureLine' },
  { href: '/surgireach', label: 'SurgiReach' },
  { href: '/carecircle', label: 'CareCircle' },
  { href: '/childfirst', label: 'ChildFirst' },
  { href: '/detect', label: 'Detect' },
  { href: '/sighthope', label: 'SightHope' },
  { href: '/oralscan', label: 'OralScan' },
  { href: '/cyclesafe', label: 'CycleSafe' },
  { href: '/soulcircle', label: 'SoulCircle' },
];

const otherInitiatives = [
    { href: '/educational-initiatives', label: 'Educational Initiatives' },
    { href: '/gender-equality-initiative', label: 'Gender Equality Initiatives' },
    { href: '/childcare-initiatives', label: 'Childcare Initiatives' },
    { href: '/sustainability-initiatives', label: 'Sustainability Initiatives' },
    { href: '/relief-to-the-underprivileged', label: 'Relief to the Underprivileged' },
    { href: '/disaster-management', label: 'Disaster Management' },
    { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
];

export default function SurgiReachClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="SurgiReach Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="operating room surgery"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SurgiReach
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Providing Life-Changing Surgeries, Restoring Hope.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
             <div className="grid md:grid-cols-3 gap-12">
                <aside className="md:col-span-1 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Healthcare Initiatives</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                            {healthcareInitiatives.map((item) => (
                                <li key={item.href}>
                                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Related Resources</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-40 w-full" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Other Initiatives</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {otherInitiatives.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </aside>
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Surgery Shouldn’t Be a Luxury.</h2>
                    <div className="text-lg text-muted-foreground space-y-4 text-justify">
                      <p>
                        SurgiReach is AIM Foundation’s flagship hospital partnership initiative, dedicated to ensuring that <strong>life-saving and life-enhancing surgeries</strong> are accessible to those who need them most—<strong>economically disadvantaged individuals</strong> who often go untreated due to high medical costs and limited access to specialized care.
                      </p>
                      <p>
                        Through meaningful collaborations with reputed hospitals and surgical specialists, SurgiReach identifies eligible patients and facilitates <strong>free surgical interventions</strong>, with a focus on both pediatric and adult care.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">For Children:</h3>
                      <p>
                        Children between 5 months and 14 years receive free pediatric surgeries, including treatments for congenital disorders, hernias, cleft conditions, orthopedic needs, and other critical conditions. Early intervention is key to giving these young lives a healthy start and preventing long-term complications.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">For Adults:</h3>
                      <p>
                        SurgiReach supports complex and essential surgeries for adults such as:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Kidney transplants</li>
                        <li>Knee and joint replacements</li>
                        <li>Gallbladder, appendix, and abdominal surgeries</li>
                        <li>Other procedures based on medical urgency</li>
                      </ul>
                      <p>
                        Every case is reviewed based on <strong>medical necessity and financial eligibility</strong>, ensuring a transparent, fair, and patient-centered process. The program covers not just the surgical cost but also <strong>pre-operative diagnostics, hospital admission, post-operative recovery support</strong>, and in some cases, medication assistance.
                      </p>
                      <p>
                        SurgiReach represents AIM Foundation’s commitment to health equity—ensuring that no child suffers in pain, no adult is left untreated, and no family is pushed into poverty because of surgery-related costs.
                      </p>
                      <p>
                        With every successful surgery, <strong>SurgiReach restores health, dignity, and hope</strong>—one patient at a time.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4"><strong>Help Someone Heal—and Hope Again</strong></h3>
                      <p>
                        For many families, a needed surgery is a distant dream—delayed by cost, denied by circumstance. <strong>With your donation, SurgiReach can provide life-changing operations to children and adults who would otherwise go untreated</strong>. From cleft repairs in toddlers to kidney transplants for struggling parents, <strong>every contribution helps restore not just health, but dignity and a second chance at life. Support SurgiReach today—and be the reason someone wakes up to a pain-free tomorrow.</strong>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to SurgiReach</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                  <DynamicDonationForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
