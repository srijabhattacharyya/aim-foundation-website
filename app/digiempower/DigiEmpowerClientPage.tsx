
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import InitiativeSidebar from "@/components/layout/InitiativeSidebar";
import Link from 'next/link';

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/DigiEmpowerDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const educationalInitiatives = [
  { href: '/innocent-smiles?from=educational', label: 'Innocent Smiles' },
  { href: '/eduaccess?from=educational', label: 'EduAccess' },
  { href: '/empower-english?from=educational', label: 'Empower English'},
  { href: '/digiempower?from=educational', label: 'DigiEmpower' },
  { href: '/milieu?from=educational', label: 'Milieu' },
  { href: '/vidyashakti?from=educational', label: 'VidyaShakti' },
];

const relatedResource = {
    link: "/blog/no-child-left-offline",
    text: "No Child Left Offline: How DigiEmpower is Bridging the Digital Divide",
    image: { src: "/images/projects/digiempower/digiempower1.avif", alt: "DigiEmpower initiative", hint: "digital literacy children", description: "Children learning to use computers"}
};

export default function DigiEmpowerClientPage() {
  const [showForm, setShowForm] = useState(false);
  const initiativeLists = [{ title: "Educational Initiatives", initiatives: educationalInitiatives }];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/digiempower.avif"
              alt="DigiEmpower Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="digital literacy children"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                DigiEmpower
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bridging the Digital Divide, Building Futures.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <div className="space-y-6">
                        <div className="text-lg text-muted-foreground space-y-4 text-justify">
                           <h2 className="text-3xl md:text-4xl font-bold font-headline">DigiEmpower – Digital Literacy for Underprivileged Children</h2>
                           <p>
                            DigiEmpower, an initiative by AIM Foundation, is dedicated to promoting digital literacy for underprivileged and Adivasi <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> in both urban and remote areas of West Bengal. Operating in regions such as Kolkata, Rangakhila in Purba Bardhaman, and Dakshin Dhupjhora in Jalpaiguri, the program reaches <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> who traditionally have limited or no access to computers, the internet, and digital learning tools.
                          </p>
                          <h3 className="text-2xl font-bold font-headline pt-4">Bridging the Digital Divide</h3>
                          <p>
                            Through its Dhriti Abilizing Centres, AIM Foundation provides hands-on computer training, equipping <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> with essential digital skills such as typing, internet navigation, using productivity software, and understanding online safety. These foundational skills prepare <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> to thrive in school, compete in future careers, and participate fully in a technology-driven world.
                          </p>
                          <p>
                            By offering structured digital <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>, DigiEmpower ensures that <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> gain both confidence and competence, opening doors to educational and professional opportunities that were previously out of reach.
                          </p>
                          <h3 className="text-2xl font-bold font-headline pt-4">Empowering Adivasi and Rural Communities</h3>
                          <p>
                            DigiEmpower places a special focus on Adivasi communities in Aushgram, Rangakhila, and Dakshin Dhupjhora, where <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> often face social and infrastructural barriers. By bringing digital skills <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link> to these underserved areas, the program fosters social inclusion, reduces the digital divide, and empowers <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> to reach their full potential.
                          </p>
                           <h3 className="text-2xl font-bold font-headline pt-4">Hands-On Learning for the Digital Age</h3>
                            <p>The program emphasizes interactive, practical learning rather than just theoretical knowledge. <Link href="/childcare-initiatives" className="text-primary hover:underline">Children</Link> engage in:</p>
                           <ul className="list-disc list-inside space-y-2">
                                <li>Typing and computer basics</li>
                                <li>Internet safety and responsible usage</li>
                                <li>Productivity tools like Word, Excel, and presentation software</li>
                                <li>Collaborative projects that build teamwork and problem-solving skills</li>
                            </ul>
                            <p>These experiences give <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> valuable skills for <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link> and future employment, ensuring they are prepared for a rapidly changing digital world.</p>
                          <h3 className="text-2xl font-bold font-headline pt-4">Bridge the Digital Divide—One Child at a Time</h3>
                          <p>
                            In today’s technology-driven society, digital competence is essential. Your support can help provide computers, internet access, and hands-on training at our Dhriti Abilizing Centres, turning curiosity into competence.
                          </p>
                          <p>With your <Link href="/individual-donation" className="text-primary hover:underline">donation</Link>, a child in a remote village can:</p>
                           <ul className="list-disc list-inside space-y-2">
                                <li>Learn to type and use computers confidently</li>
                                <li>Explore the internet safely</li>
                                <li>Build critical digital skills essential for school and work</li>
                            </ul>
                            <p>Empower a generation to thrive in the digital age. <Link href="/individual-donation" className="text-primary hover:underline">Donate to DigiEmpower today</Link> and light the screen of opportunity for every child.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:col-span-1 md:order-last">
                  <InitiativeSidebar initiativeLists={initiativeLists} relatedResource={relatedResource} />
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to DigiEmpower</Button>
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
