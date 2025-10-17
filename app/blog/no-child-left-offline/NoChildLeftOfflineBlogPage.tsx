
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wifi } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/DigiEmpowerDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function NoChildLeftOfflineBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-auto">
            <div className="relative w-full">
              <Image
                src="/images/banner/digiempower.avif"
                alt="Children learning on computers"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="digital literacy children"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  No Child Left Offline: How DigiEmpower is Bridging the Digital Divide
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                    In today’s rapidly evolving world, digital literacy is no longer a luxury—it is a necessity. From applying for jobs to accessing healthcare, from learning in classrooms to engaging in social dialogue, the ability to use technology effectively defines one’s ability to participate in modern society. Yet, for millions of children in India, especially those in underprivileged and remote communities, technology remains a distant dream.
                </p>
                <p>
                    DigiEmpower, an initiative supported by the Dhritiman Abilizing Infinity Foundation and implemented through the AIM Foundation’s Dhriti Abilizing Centres, is on a mission to change that. The program ensures that underprivileged and Adivasi children in West Bengal are not left behind in the digital revolution. By offering structured training, hands-on access to technology, and mentorship, DigiEmpower is bridging the digital divide—one child at a time.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Growing Digital Divide</h2>
                <p>
                    The concept of a “digital divide” refers to the gap between those who have ready access to computers, the internet, and digital knowledge, and those who do not. While India has made massive strides in mobile phone adoption and internet connectivity, the reality is that many rural and marginalized communities still struggle to access even the most basic digital tools.
                </p>
                <p>
                    In areas such as Kolkata’s underserved neighbourhoods, Rangakhila in Purba Bardhaman, and Dakshin Dhupjhora in Jalpaiguri, many children grow up without ever touching a computer. Even in urban areas, economic challenges often mean that families cannot afford laptops, broadband internet, or even basic mobile devices capable of educational use.
                </p>
                 <p>
                    The consequences of this divide are severe. Children without digital skills are at a disadvantage in education, as many schools and colleges increasingly integrate online learning platforms into their curriculum. They face limited career options in an economy where most jobs—from banking to farming—require some form of digital competence. Most importantly, they risk being excluded from the conversations, resources, and opportunities that define 21st-century life.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">DigiEmpower: More Than Just Computer Classes</h2>
                <p>
                    DigiEmpower is not simply about teaching children how to type or use a mouse—it’s about empowerment, opportunity, and inclusion. Through Dhriti Abilizing Centres, the AIM Foundation creates safe, supportive spaces where children can learn, explore, and build confidence in their digital skills.
                </p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">What Children Learn at DigiEmpower</h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Basic Computer Operations – Switching on and off, file management, keyboard and mouse skills.</li>
                    <li>Typing Skills – Improving speed and accuracy for academic and professional use.</li>
                    <li>Internet Navigation – How to search for information, use educational platforms, and verify credible sources.</li>
                    <li>Productivity Tools – Proficiency in applications such as Microsoft Word, Excel, and PowerPoint.</li>
                    <li>Online Safety – Understanding cyber threats, privacy concerns, and safe online communication.</li>
                    <li>Creative Applications – Introduction to graphic design, coding basics, and storytelling through digital media.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">How You Can Help</h2>
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Bridge the Digital Divide—One Child at a Time</h2>
                  <p className="mt-4">
                    In a world where digital skills shape futures, many underprivileged and Adivasi children remain disconnected. <strong>Your donation can help us provide computers, internet access, and hands-on training at our Dhriti Abilizing Centres—turning curiosity into competence.</strong> With your support, a child in a remote village can learn to type, explore the internet safely, and build skills vital for school and future employment. Empower a generation to thrive in the digital age—<strong>donate today</strong> to DigiEmpower and light the screen of opportunity.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/digiempower">Support DigiEmpower Today</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Wifi /> Donate Today and Be the Connection That Changes a Life
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/digiempower">Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering">Volunteer</Link></Button>
                        <Button asChild variant="outline"><Link href="/corporate-social-responsibility">Collaborate</Link></Button>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </main>
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
      <Footer />
    </div>
  );
}
