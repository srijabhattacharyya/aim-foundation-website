
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InitiativeSidebar from "@/components/layout/InitiativeSidebar";
import Link from 'next/link';

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/DigitalMarketingDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const skillDevelopmentInitiatives = [
  { href: '/digital-marketing', label: 'Digital Marketing' },
  { href: '#', label: 'Graphic Designing' },
  { href: '#', label: 'Web Development' },
];

const relatedResource = {
    link: "#",
    text: "Read our blog on the impact of digital skills.",
    image: { src: "/images/projects/skill/digital.avif", alt: "Digital Marketing class in session", hint: "digital marketing class", description: "Students engaged in a digital marketing workshop."},
};

export default function DigitalMarketingClientPage() {
    const [showForm, setShowForm] = useState(false);
    
    const initiativeLists = [
        { title: "Skill Development Initiatives", initiatives: skillDevelopmentInitiatives }
    ];

    return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <section className="relative w-full">
              <div className="relative w-full">
                <Image
                  src="/images/banner/skill-development.avif"
                  alt="Digital Marketing Program Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover"
                  data-ai-hint="digital marketing team"
                  priority
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Free Digital Marketing Course
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Unlocking Opportunities in the Digital World.
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
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Digital Marketing Program</h2>
                        <p>
                          Our Digital Marketing program is designed to equip youth and aspiring professionals with the essential skills needed to succeed in today's dynamic digital landscape. This initiative focuses on practical, hands-on training in key areas of digital marketing.
                        </p>
                        <h3 className="text-2xl font-bold font-headline pt-4">What You Will Learn</h3>
                        <p>
                          The curriculum covers a comprehensive range of topics, ensuring that participants gain a holistic understanding of digital marketing. Key areas of focus include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li><strong>Search Engine Optimization (SEO):</strong> Learn how to improve website visibility on search engines.</li>
                            <li><strong>Social Media Marketing (SMM):</strong> Master strategies for engaging audiences on platforms like Facebook, Instagram, and LinkedIn.</li>
                            <li><strong>Content Creation:</strong> Develop skills in creating compelling and relevant content that drives engagement.</li>
                            <li><strong>Analytics:</strong> Understand how to measure and analyze campaign performance to optimize results.</li>
                        </ul>
                        <p>
                            Through a blend of theoretical knowledge and practical projects, our program prepares students for various roles in the digital marketing industry, empowering them with the tools for a sustainable career.
                        </p>
                        <h3 className="text-xl font-bold font-headline pt-4">Empower a Young Professional's Future</h3>
                        <p>
                          Your support can provide a student with access to this transformative program, covering course fees, materials, and mentorship. By making a donation, you are investing in the future of a young individual, helping them build a career and achieve financial independence.
                        </p>
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
                      <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Digital Marketing</Button>
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
