
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
  { href: '/skill-development-initiatives', label: 'Graphic Designing' },
  { href: '/skill-development-initiatives', label: 'Web Development' },
];

const relatedResource = {
    link: "#",
    text: "Read our blog on the impact of digital skills.",
    image: { src: "/images/projects/skill-development/digital-marketing.avif", alt: "Digital Marketing class in session", hint: "digital marketing class", description: "Students engaged in a digital marketing workshop."},
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
                    Empowering Youth, Women, and Small Entrepreneurs through Practical Digital Skills
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
                        <h2 className="text-3xl md:text-4xl font-headline">Free Digital Marketing Course - A Skill Development Initiative by AIM Foundation</h2>
                        <p>AIM Foundation proudly offers a <strong>Free Digital Marketing Course</strong> under our flagship <strong>Skill Development Initiative</strong>. This <strong>no-cost digital marketing course</strong> is designed for <strong>students, unemployed youth, homemakers,</strong> and small business owners who want to learn digital marketing, enhance their livelihood opportunities, or build sustainable online careers.</p>
                        <p>Our digital marketing training combines beginner-friendly lessons, real-life applications, and practical tools to ensure participants gain job-oriented, future-ready skills.</p>
                        
                        <h3 className="text-2xl font-bold font-headline pt-4">Why Join Our Free Digital Marketing Course?</h3>
                        <p>In today’s digital era, digital marketing skills training is essential for employment, freelancing, entrepreneurship, and business expansion. Whether you are a beginner or someone looking to upgrade your abilities, this digital marketing for beginners programme helps you:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                          <li>Start a digital career</li>
                          <li>Promote your small business online</li>
                          <li>Learn work-from-home skills</li>
                          <li>Strengthen digital literacy</li>
                          <li>Gain confidence using online marketing tools</li>
                        </ul>
                        <p>This digital marketing course online free supports individuals seeking employment-oriented courses and digital skills applicable in real-world situations.</p>

                        <h3 className="text-2xl font-bold font-headline pt-4">What the Course Covers</h3>
                        <p>Our curriculum is structured to provide comprehensive, hands-on digital marketing training. Key modules include:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Introduction to Digital Marketing</li>
                            <li>Website & Online Presence Basics</li>
                            <li>Content Marketing Fundamentals</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Social Media Marketing</li>
                            <li>Paid Advertising Fundamentals</li>
                            <li>Email & WhatsApp Marketing</li>
                            <li>Analytics, AI Tools & Freelancing</li>
                        </ul>
                        <p>This free no-code digital marketing training program is delivered in Bengali to ensure seamless learning for all.</p>

                        <h3 className="text-2xl font-bold font-headline pt-4">Why This Course Matters</h3>
                        <p>Digital marketing is one of the fastest-growing skill areas globally. With businesses and individuals increasingly shifting to online platforms, learning digital marketing opens the door to multiple opportunities—freelancing, online entrepreneurship, digital jobs, home-based income, and business expansion.</p>

                        <h3 className="text-2xl font-bold font-headline pt-4">Who Can Join</h3>
                        <p>This course is specially curated for:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                          <li>Students preparing for future careers</li>
                          <li>Unemployed youth looking for skill-based job opportunities</li>
                          <li>Homemakers seeking to learn and earn from home</li>
                          <li>Small business owners aiming to scale up through digital strategies</li>
                        </ul>

                        <h3 className="text-2xl font-bold font-headline pt-4">Course Benefits</h3>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>100% free training</li>
                            <li>Beginner-friendly modules</li>
                            <li>Practical and job-oriented curriculum</li>
                            <li>Training in Bengali for ease of understanding</li>
                            <li>Hands-on assignments and real-life examples</li>
                            <li>Certificate of Completion from AIM Foundation</li>
                        </ul>

                        <h3 className="text-2xl font-bold font-headline pt-4">Our Commitment</h3>
                        <p>AIM Foundation is a leading skill development NGO committed to education, livelihood promotion, and community empowerment through skills. Through our skill development courses and free training initiatives, we aim to build a digitally skilled, self-reliant society.</p>
                        <p>This course is part of our broader mission to deliver high-quality, online skill development training to underserved communities.</p>
                         <div className="pt-4">
                            <Button asChild>
                                <Link href="https://aimtoskill.in/digital-marketing/" target="_blank" rel="noopener noreferrer">
                                View Details
                                </Link>
                            </Button>
                        </div>
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
