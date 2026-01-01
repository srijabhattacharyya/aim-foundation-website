
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

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/WebDevelopmentDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const skillDevelopmentInitiatives = [
  { href: '/digital-marketing', label: 'Digital Marketing' },
  { href: '/graphic-design', label: 'Graphic Designing' },
  { href: '/web-development', label: 'Web Development' },
];

const relatedResource = {
    link: "#",
    text: "Read our blog on the impact of web development skills.",
    image: { src: "/images/projects/skill/web.avif", alt: "Web Development class in session", hint: "web development class", description: "Students learning WordPress website development."},
};

export default function WebDevelopmentClientPage() {
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
                  alt="Web Development Program Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover"
                  data-ai-hint="web development team"
                  priority
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Free No-Code Website Building Course
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Build Websites, Build Your Future.
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
                        <h2 className="text-3xl md:text-4xl font-headline">Free No-Code Website Building Course - A <strong>Skill Development Initiative</strong> by AIM Foundation</h2>
                        <p>AIM Foundation offers a <strong>Free No-Code Website Building Course</strong> as part of our <strong>Skill Development Initiative</strong>. This course is designed for students, entrepreneurs, small business owners, homemakers, and anyone interested in creating professional websites without any prior coding experience.</p>
                        <p>Learn to build, customize, and manage WordPress websites step-by-step with practical, hands-on training that empowers you to launch and grow your online presence confidently.</p>
                        
                        <h3 className="text-2xl font-bold font-headline pt-4">Why Join Our WordPress Website Building Course?</h3>
                        <p>Having a website is essential for businesses, freelancers, and individuals looking to establish a professional digital presence. Our course breaks down website creation into simple, manageable steps, helping you build beautiful, functional websites using WordPress — the world’s most popular website platform.</p>
                        <p>This course is ideal for those who want to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                          <li>Start a career in website development without coding</li>
                          <li>Build websites for business, portfolios, blogs, or e-commerce</li>
                          <li>Manage and update their website independently</li>
                          <li>Learn practical digital skills for career and entrepreneurship</li>
                          <li>Gain confidence in using WordPress and its tools</li>
                        </ul>

                        <h3 className="text-2xl font-bold font-headline pt-4">What the Course Covers</h3>
                        <p>Our curriculum is designed to teach you everything needed to create a professional website with WordPress, including:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Introduction to WordPress</li>
                            <li>Installing WordPress & Setup</li>
                            <li>WordPress Dashboard Tour</li>
                            <li>Creating Content: Posts & Pages</li>
                            <li>Themes & Customization</li>
                            <li>Plugins & Functionality</li>
                            <li>Menu & Navigation Setup</li>
                            <li>Media Management</li>
                            <li>SEO Basics & Performance</li>
                            <li>Website Security Basics</li>
                            <li>Create contact forms and manage submissions</li>
                        </ul>
                        <p>All lessons are delivered in simple language, with step-by-step tutorials and practical assignments.</p>

                        <h3 className="text-2xl font-bold font-headline pt-4">Who Can Join</h3>
                        <p>This free WordPress course is open to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Students seeking digital skills for career growth</li>
                            <li>Small business owners wanting an online presence</li>
                            <li>Homemakers and freelancers exploring new income streams</li>
                            <li>Entrepreneurs and creatives building websites for their work</li>
                            <li>Anyone interested in learning no-code website development</li>
                        </ul>

                        <h3 className="text-2xl font-bold font-headline pt-4">Course Benefits</h3>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>100% free training with no hidden fees</li>
                            <li>Beginner-friendly, no coding required</li>
                            <li>Practical, skill-based modules with hands-on projects</li>
                            <li>Training available in Bengali and English</li>
                            <li>Certificate of Completion from AIM Foundation</li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold font-headline pt-4">Course Benefits</h3>
                        <p>Completing this course can help you:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Build and manage professional websites easily</li>
                            <li>Increase your employment and freelancing opportunities</li>
                            <li>Promote businesses online and expand your reach</li>
                            <li>Gain valuable digital skills for the modern workplace</li>
                            <li>Empower yourself with independence in website management</li>
                        </ul>

                        <h3 className="text-2xl font-bold font-headline pt-4">Our Commitment</h3>
                        <p>AIM Foundation is a leading <strong>skill development NGO</strong> committed to education, livelihood promotion, and <strong>community empowerment through skills</strong>. Through our <strong>skill development courses</strong> and free training initiatives, we aim to build a digitally skilled, self-reliant society.</p>
                        <p>This course is part of our broader mission to deliver high-quality, <strong>online skill development training</strong> to underserved communities.</p>
                         <div className="pt-4">
                            <Button asChild>
                                <Link href="https://aimtoskill.in/website-building/" target="_blank" rel="noopener noreferrer">
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
                      <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate for Free Web Development Course</Button>
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
