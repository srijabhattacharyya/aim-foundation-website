
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

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/GraphicDesignDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const skillDevelopmentInitiatives = [
  { href: '/digital-marketing', label: 'Digital Marketing' },
  { href: '/graphic-design', label: 'Graphic Designing' },
  { href: '/skill-development-initiatives', label: 'Web Development' },
];

const relatedResource = {
    link: "#",
    text: "Read our blog on the impact of creative skills.",
    image: { src: "/images/projects/skill/graphic-design.avif", alt: "Graphic Design class in session", hint: "graphic design class", description: "Students learning graphic design with Canva."},
};

export default function GraphicDesignClientPage() {
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
                  alt="Graphic Design Program Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover"
                  data-ai-hint="graphic design team"
                  priority
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Free Graphic Design Course with Canva
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Unleash Your Creativity, Build Your Future.
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
                        <h2 className="text-3xl md:text-4xl font-headline">Free Graphic Design Certificate Course with Canva - A <strong>Skill Development Initiative</strong> by AIM Foundation</h2>
                        <p>AIM Foundation is proud to offer a <strong>Free Graphic Design Certificate Course with Canva</strong> as part of our ongoing <strong>Skill Development Initiative</strong>. This course empowers students, unemployed youth, homemakers, small business owners, and aspiring freelancers to learn essential graphic design skills using Canva — a user-friendly, no-code design tool. Our beginner-friendly training helps individuals create professional-quality visuals for social media, marketing campaigns, presentations, branding, and more — all without prior design experience.</p>
                        
                        <h3 className="text-2xl font-bold font-headline pt-4">Why Join Our Canva Graphic Design Course?</h3>
                        <p>Visual communication is a critical skill in today’s digital and business landscape. Our course provides practical training on Canva, enabling you to design stunning graphics that engage audiences and support career and business growth.</p>
                        <p>This course is ideal for those who want to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                          <li>Start a creative career in graphic design or social media</li>
                          <li>Promote their business or products with eye-catching visuals</li>
                          <li>Learn a valuable freelancing skill</li>
                          <li>Build confidence using digital design tools</li>
                          <li>Enhance resumes and professional profiles with a recognized certificate</li>
                        </ul>

                        <h3 className="text-2xl font-bold font-headline pt-4">What the Course Covers</h3>
                        <p>Our curriculum is designed for easy learning with hands-on projects and clear instructions. Key modules include:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Introduction to Graphic Design</li>
                            <li>Canva Interface & Basic Tools</li>
                            <li>Design Principles Fundamentals</li>
                            <li>Working with Images & Elements</li>
                            <li>Creating Social Media Posts</li>
                            <li>Branding Basics & Logo Design</li>
                            <li>Designing Presentations</li>
                            <li>Canva Animation & Video</li>
                            <li>Designing Marketing Materials</li>
                        </ul>
                        <p>All lessons are delivered in simple language with practical examples to ensure effective learning.</p>

                        <h3 className="text-2xl font-bold font-headline pt-4">Why This Course Matters</h3>
                        <p>This Graphic Design Course with Canva matters because visual communication is a powerful tool in today’s digital world. Whether you’re a student, entrepreneur, or job seeker, mastering graphic design helps you create compelling content that captures attention, builds your brand, and opens doors to new career and business opportunities. By learning practical, easy-to-use skills with Canva, you can confidently bring your ideas to life without needing expensive software or prior experience—making creative expression and professional growth accessible to all.</p>

                        <h3 className="text-2xl font-bold font-headline pt-4">Who Can Join</h3>
                        <p>This free graphic design course is open to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                          <li>Students looking to develop creative digital skills</li>
                          <li>Unemployed youth seeking job-ready design training</li>
                          <li>Homemakers interested in home-based creative work</li>
                          <li>Small business owners aiming to enhance their marketing efforts</li>
                          <li>Freelancers and aspiring graphic designers</li>
                        </ul>

                        <h3 className="text-2xl font-bold font-headline pt-4">Course Benefits</h3>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>100% free training with no hidden costs</li>
                            <li>Practical, skill-based modules focused on Canva</li>
                            <li>Delivered in Bengali and English for accessibility</li>
                            <li>Hands-on assignments and real-life design projects</li>
                            <li>Certificate of Completion from AIM Foundation</li>
                        </ul>

                        <h3 className="text-2xl font-bold font-headline pt-4">Our Commitment</h3>
                        <p>AIM Foundation is a leading <strong>skill development NGO</strong> committed to education, livelihood promotion, and <strong>community empowerment through skills</strong>. Through our <strong>skill development courses</strong> and free training initiatives, we aim to build a digitally skilled, self-reliant society.</p>
                        <p>This course is part of our broader mission to deliver high-quality, <strong>online skill development training</strong> to underserved communities.</p>
                         <div className="pt-4">
                            <Button asChild>
                                <Link href="https://aimtoskill.in/graphic-design/" target="_blank" rel="noopener noreferrer">
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
                      <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Graphic Design</Button>
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
