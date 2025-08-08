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

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/MilieuDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const educationalInitiatives = [
  { href: '/innocent-smiles?from=educational', label: 'Innocent Smiles' },
  { href: '/inspire-eduLab?from=educational', label: 'Inspire EduLab' },
  { href: '/eduaccess?from=educational', label: 'EduAccess' },
  { href: '/empower-english?from=educational', label: 'Empower English'},
  { href: '/digiempower?from=educational', label: 'DigiEmpower' },
  { href: '/sheconnects?from=educational', label: 'SheConnects' },
  { href: '/milieu?from=educational', label: 'Milieu' },
  { href: '/vidyashakti?from=educational', label: 'VidyaShakti' },
];

const childcareInitiatives = [
  { href: '/innocent-smiles?from=childcare', label: 'Innocent Smiles' },
  { href: '/milieu?from=childcare', label: 'Milieu' },
  { href: '/childfirst?from=childcare', label: 'ChildFirst' },
];

const otherInitiatives = [
    { href: '/healthcare-initiatives', label: 'Healthcare Initiatives' },
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

    if (from === 'childcare') {
        mainInitiatives = childcareInitiatives;
        title = "Childcare Initiatives";
    } else { // Default to educational
        mainInitiatives = educationalInitiatives;
        title = "Educational Initiatives";
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

export default function MilieuClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/milieu.jpg"
              alt="Milieu Banner"
              width={1920}
              height={334}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="diverse children interacting"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Milieu
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bridging Backgrounds, Building Bonds.
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
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Shaping Conscious Citizens of Tomorrow.</h2>
                        <div className="text-lg text-muted-foreground space-y-4 text-justify">
                            <p>
                                Milieu is a unique initiative that promotes holistic development in children by fostering meaningful connections across diverse socio-economic backgrounds. The program brings together students from reputed schools and underprivileged communities, offering a shared space where learning, empathy, and mutual respect flourish.
                            </p>
                            <p>
                                Through interactive sessions, collaborative activities, and open conversations, children engage with one another in ways that go beyond textbooks. These exchanges create opportunities for students to see the world through different lenses—helping privileged children develop humility and social awareness, while underprivileged children gain confidence and a sense of inclusion.
                            </p>
                            <p>
                                Milieu helps to break down socio-economic barriers, replacing stereotypes with understanding and compassion. It instills values of respect, equality, and inclusivity in young minds at an early age—planting the seeds for a more united and empathetic future.
                            </p>
                            <p>
                                By promoting emotional intelligence, communication, and shared learning, Milieu builds a sense of community and connectedness, empowering all children involved to grow into open-minded, socially responsible individuals who value diversity and collective well-being.
                            </p>
                            <h3 className="text-2xl font-bold font-headline pt-4">Help Children Learn Beyond Boundaries</h3>
                            <p>
                              In every Milieu session, a child discovers empathy, breaks a bias, or finds the courage to connect across differences. <strong>Your donation can help us organize more inclusive workshops, provide transportation, materials, and safe spaces</strong> where children from all walks of life learn together, grow together, and inspire each other. <strong>Support Milieu today</strong> to build bridges of understanding and shape a generation that sees unity in diversity. <strong>Your kindness can nurture a more compassionate tomorrow—one child at a time.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Milieu</Button>
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
