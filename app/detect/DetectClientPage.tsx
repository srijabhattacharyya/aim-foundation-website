
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

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/DetectDonationForm'), { 
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

function PageContent() {
    const [showForm, setShowForm] = useState(false);
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

    const Sidebar = (
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

    return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <section className="relative w-full">
              <div className="relative w-full">
                <Image
                  src="https://placehold.co/1920x580.png"
                  alt="Detect Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover brightness-50"
                  data-ai-hint="cervical cancer screening"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Detect
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Detect Early. Live Fully.
                  </p>
                </div>
              </div>
            </section>
    
            <section className="py-12 md:py-20 lg:py-24 bg-muted">
              <div className="container mx-auto px-4 md:px-6 relative">
                <div className="grid md:grid-cols-3 gap-12">
                    {Sidebar}
                    <div className="md:col-span-2">
                      <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Catching Cancer Before It Catches Her.</h2>
                        <div className="text-lg text-muted-foreground space-y-4 text-justify">
                          <p>
                            Detect is a critical women’s health initiative by AIM Foundation that aims to empower rural women through increased awareness of <strong>cervical health and the early detection of cervical cancer</strong>. In partnership with the Chittaranjan National Cancer Institute and the Government of West Bengal, this initiative brings essential health education and screening services to some of the most underserved regions in the state.
                          </p>
                          <p>
                            Cervical cancer is one of the leading causes of cancer-related deaths among women in India, especially in rural areas where <strong>lack of awareness, stigma, and poor access to healthcare</strong> hinder early diagnosis. Project Detect addresses this gap through:
                          </p>
                          <ul className="list-disc list-inside space-y-2">
                            <li><strong>Community-based screening camps</strong>, especially for women with limited access to gynecological care</li>
                            <li><strong>Awareness sessions</strong> on HPV, cervical cancer symptoms, menstrual health, and preventive care</li>
                            <li><strong>Training and sensitization of ASHA and Anganwadi workers</strong> district-by-district, starting with Howrah, to ensure sustainable, local outreach</li>
                            <li><strong>Encouraging open dialogue</strong> to break myths and cultural barriers around reproductive health</li>
                          </ul>
                          <p>
                            The initiative has already witnessed inspiring participation from women in remote villages, many of whom are learning about cervical health for the first time. These sessions not only save lives through early detection but also promote a broader sense of bodily autonomy, health literacy, and dignity.
                          </p>
                          <p>
                            By equipping both women and frontline health workers with knowledge and tools, Project Detect fosters a <strong>community-led movement for prevention, early intervention, and long-term well-being</strong>.
                          </p>
                          <h3 className="text-2xl font-bold font-headline pt-4">Help Her Live—Not Just Survive</h3>
                          <p>
                            In rural India, too many women are losing their lives to a disease that’s preventable. <strong>Your donation to Project Detect can fund life-saving cervical cancer screenings, awareness workshops, and training for frontline health workers.</strong> Just ₹500 can help screen a woman who’s never had access to gynecological care. With early detection comes hope, dignity, and a future. Stand with us to protect mothers, daughters, sisters—and <strong>ensure that no woman is left behind simply because she was unaware</strong>. Donate today and help us detect before it’s too late.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="fixed bottom-8 right-8 z-50">
                   <Dialog open={showForm} onOpenChange={setShowForm}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Detect</Button>
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

export default function DetectClientPage() {
    return (
        <Suspense fallback={<Skeleton className="h-screen w-screen" />}>
            <PageContent />
        </Suspense>
    )
}
