
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

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/InnocentSmilesDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const educationalInitiatives = [
  { href: '/innocent-smiles', label: 'Innocent Smiles' },
  { href: '/inspire-eduLab', label: 'Inspire EduLab' },
  { href: '/eduaccess', label: 'EduAccess' },
  { href: '/empower-english', label: 'Empower English' },
  { href: '/digiempower', label: 'DigiEmpower' },
  { href: '/sheconnects', label: 'SheConnects' },
  { href: '/milieu', label: 'Milieu' },
  { href: '/vidyashakti', label: 'VidyaShakti' },
];

export default function InnocentSmilesClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Innocent Smiles Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="children smiling classroom"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Innocent Smiles
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bright Futures Begin with Innocent Smiles
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
                    <CardTitle>Educational Initiatives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {educationalInitiatives.map((item) => (
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
                    <CardTitle>Related Blogs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-40 w-full" />
                  </CardContent>
                </Card>
              </aside>
              <div className="md:col-span-2">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Shaping Dreams with Smiles and Skills</h2>
                  <div className="text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                      Innocent Smiles is a heartfelt initiative dedicated to nurturing the creative and academic potential of children, especially those from underprivileged backgrounds. The program focuses on developing talents across multiple disciplines, including education, visual arts, dance, and singing—ensuring that each child receives the opportunity to grow both intellectually and artistically.
                    </p>
                    <p>
                      At its core, the project creates a safe, inclusive, and encouraging environment where children can freely express themselves, discover their passions, and build self-confidence. By integrating artistic expression with strong academic foundations, Innocent Smiles promotes a holistic model of development—recognizing that true learning goes beyond textbooks.
                    </p>
                    <p>
                      Through thoughtfully designed activities, workshops, and mentorship, children are not only taught essential academic concepts but also guided to explore their creativity, voice their feelings, and work collaboratively. These experiences equip them with life skills such as communication, discipline, teamwork, and resilience.
                    </p>
                    <p>
                      By investing in the potential of each child, Project Innocent Smiles aims to brighten futures, instill hope, and cultivate well-rounded individuals who can thrive in all areas of life. It’s more than a program—it’s a journey of growth, joy, and transformation for every young heart it touches.
                    </p>
                    <h3 className="text-2xl font-bold font-headline pt-4">You Can Make a Difference</h3>
                    <p>
                      Every child deserves the chance to dream, create, and succeed—regardless of their background. Your support can help us provide art supplies, educational resources, nutritious snacks, and safe spaces for learning and expression. With your generous contribution, we can reach more children, organize more workshops, and nurture brighter, more confident futures. <strong>Donate today</strong> and become a part of a child’s journey toward joy, growth, and transformation. <strong>Because every innocent smile deserves to shine.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Innocent Smiles</Button>
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
