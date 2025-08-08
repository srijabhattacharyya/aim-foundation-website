
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Suspense, useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/CycleSafeDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const healthcareInitiatives = [
  { href: '/cureline?from=healthcare', label: 'CureLine' },
  { href: '/surgireach?from=healthcare', label: 'SurgiReach' },
  { href: '/carecircle?from=healthcare', label: 'CareCircle' },
  { href: '/childfirst?from=healthcare', label: 'ChildFirst' },
  { href: '/detect?from=healthcare', label: 'Detect' },
  { href: '/sighthope?from=healthcare', label: 'SightHope' },
  { href: '/oralscan?from=healthcare', label: 'OralScan' },
  { href: '/cyclesafe?from=healthcare', label: 'CycleSafe' },
  { href: '/soulcircle?from=healthcare', label: 'SoulCircle' },
];

const genderEqualityInitiatives = [
    { href: '/sheconnects?from=gender-equality', label: 'SheConnects' },
    { href: '/cyclesafe?from=gender-equality', label: 'CycleSafe' },
    { href: '/detect?from=gender-equality', label: 'Detect' },
    { href: '/suidhaga?from=gender-equality', label: 'SuiDhaga' },
    { href: '/krishti?from=gender-equality', label: 'Krishti' },
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

function SidebarContent() {
    const searchParams = useSearchParams();
    const from = searchParams.get('from');

    let mainInitiatives, title;

    if (from === 'gender-equality') {
        mainInitiatives = genderEqualityInitiatives;
        title = "Gender Equality";
    } else { // Default to healthcare
        mainInitiatives = healthcareInitiatives;
        title = "Healthcare Initiatives";
    }

    return (
        <aside className="md:col-span-1 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                    {mainInitiatives.map((item) => (
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
    );
}

export default function CycleSafeClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="CycleSafe Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="adolescent girls smiling"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                CycleSafe
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Dignity, Health, and Confidence for Every Girl.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
                <Suspense fallback={<Skeleton className="h-full w-full md:col-span-1" />}>
                    <SidebarContent />
                </Suspense>
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Empowering Girls, One Cycle at a Time.</h2>
                    <div className="text-lg text-muted-foreground space-y-4 text-justify">
                      <p>
                        CycleSafe is a dedicated initiative that supports the <strong>menstrual and reproductive health of underprivileged adolescent girls</strong> in and around Kolkata. These girls, many of whom come from socioeconomically disadvantaged backgrounds, often lack access to basic menstrual hygiene resources, health education, and supportive spaces to discuss their bodies and well-being.
                      </p>
                      <p>
                        The project addresses this gap through comprehensive menstrual hygiene workshops, awareness sessions on cervical health, and open discussions on puberty, reproductive health, and emotional changes. These sessions are led by trained health educators who approach the subject with sensitivity, accuracy, and respect.
                      </p>
                      <p>
                        In addition, the initiative provides monthly sanitary napkins to ensure girls don’t miss school or feel shame during their menstrual cycles. Access to these essentials helps boost their confidence, attendance, and participation in daily life.
                      </p>
                      <p>
                        The program also works to break taboos and social stigma surrounding menstruation and female reproductive health. By creating safe, inclusive, and educational spaces, the project not only promotes physical well-being but also helps these young girls build self-worth, body awareness, and emotional resilience.
                      </p>
                      <p>
                        Ultimately, this initiative empowers adolescent girls to take charge of their health, voice their needs, and grow into informed, confident individuals—laying the foundation for a more equitable and healthy future.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">Help Her Stay in School, Stay Confident</h3>
                      <p>
                        For many adolescent girls, periods mean missed classes, silent shame, and compromised health—simply because they can’t afford sanitary napkins or don’t understand what’s happening to their bodies. <strong>Your support to CycleSafe can change that.</strong> <strong>Just ₹300 can provide a girl with sanitary pads and vital menstrual health education for a month.</strong> With your donation, you’re not just giving hygiene products—you’re restoring dignity, confidence, and opportunity. <strong>Stand with these girls. Help them grow without fear or stigma. Donate today and empower a future that’s safe, strong, and unstoppable.</strong>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to CycleSafe</Button>
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
