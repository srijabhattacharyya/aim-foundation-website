
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquareQuote } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/EmpowerEnglishDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function EmpowerEnglishBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-auto">
            <div className="relative w-full">
              <Image
                src="https://placehold.co/1920x580.png"
                alt="Students in an english speaking class"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="english speaking class"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Confidence Begins with Conversation: How Empower English Is Changing Lives
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p className="text-xl font-semibold text-center text-primary py-4">
                  A Voice That Opens Doors
                </p>
                <p>
                  In a bustling classroom in Jalpaiguri, a shy 16-year-old named Rina nervously stands before her peers. Just weeks ago, she could barely introduce herself in English. Today, she looks up, smiles, and says, “Good morning. My name is Rina, and I want to be a teacher.” Her voice is steady, her words clear. The room erupts in applause — not just for the sentence she spoke, but for the courage she found within herself.
                </p>
                <p>
                  This is the magic of <strong><Link href="/empower-english" className="text-primary hover:underline">Empower English</Link></strong> — a transformative initiative by the AIM Foundation that is helping young students in Kolkata, Purba Bardhaman, and Jalpaiguri find their voice, their confidence, and their place in the world.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Challenge: When Language Becomes a Barrier</h2>
                <p>
                  English is more than a language in today’s world. It’s a passport to <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>, a bridge to opportunity, and a tool for global connection. In India, where competitive exams, job interviews, and higher education often require English proficiency, the lack of spoken English skills can leave talented young minds at the margins.
                </p>
                <p>
                  In rural and semi-urban areas of West Bengal, many students grow up in environments where English is neither spoken at home nor taught effectively in schools. Textbook learning often focuses on grammar and rote memorization, leaving little space for real conversation practice. The result? Students understand written English to some extent but freeze when asked to speak. Their ideas remain locked inside, their confidence dwindles, and opportunities slip away.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The AIM Foundation’s Response: Empower English</h2>
                <p>
                  Recognizing this urgent gap, AIM Foundation launched <Link href="/empower-english" className="text-primary hover:underline">Empower English</Link>, a spoken English training program tailored for underserved communities. The initiative goes beyond vocabulary lists and grammar drills — it focuses on real-life communication skills that help students express themselves clearly and confidently.
                </p>
                <p>Key features of the program include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Interactive Classes:</strong> Students practice speaking through role-plays, group discussions, and storytelling.</li>
                  <li><strong>Listening and Comprehension Training:</strong> Exposure to different accents and real-life conversations.</li>
                  <li><strong>Confidence-Building Exercises:</strong> Public speaking, debates, and presentations to overcome fear.</li>
                  <li><strong>Cultural Context Learning:</strong> Understanding how language is used in professional and social settings.</li>
                  <li><strong>Digital Learning Support:</strong> For schools with internet access, students engage with multimedia lessons and virtual interactions.</li>
                </ul>

                <h3 className="text-2xl font-semibold font-headline text-foreground">Locations and Reach</h3>
                <p>The program currently runs in:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Kolkata</strong> — Urban centers where underserved communities often get overlooked.</li>
                    <li><strong>Purba Bardhaman</strong> — Semi-rural areas with limited access to quality language training.</li>
                    <li><strong>Jalpaiguri</strong> — Remote districts where many children are first-generation learners.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Ripple Effect of Confidence</h2>
                <p>
                    When students gain the ability to communicate in English, they gain more than language skills — they gain the courage to participate in class, apply for scholarships, attend job interviews, and interact with people beyond their immediate circles. Confidence transforms opportunities.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories of Change</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Rina’s Journey</h3>
                <p>Rina, from Jalpaiguri, always dreamed of becoming a teacher. However, during her first attempt at a teacher training course interview, she could not answer questions in English. Through <Link href="/empower-english" className="text-primary hover:underline">Empower English</Link>, she practiced daily conversations, learned to structure answers, and grew comfortable speaking to strangers. On her second attempt, she aced the interview — in English.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Arjun’s Transformation</h3>
                <p>Arjun, a college student from Purba Bardhaman, had strong technical knowledge in computers but struggled to land an internship because he could not explain his skills in English. After three months in <Link href="/empower-english" className="text-primary hover:underline">Empower English</Link>, he was able to confidently present his portfolio during interviews. Today, he works as a junior IT assistant and continues to mentor younger students in the program.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Your Donation Matters</h2>
                <p>Your <Link href="/individual-donation" className="text-primary hover:underline">contribution</Link> can:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Provide trained instructors.</li>
                    <li>Supply learning materials like books, flashcards, and audio lessons.</li>
                    <li>Fund digital resources for remote learning.</li>
                </ul>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Give a Voice to Their Dreams</h2>
                  <p className="mt-4">For many students, learning English isn’t about mastering a foreign language — it’s about gaining the confidence to step onto a bigger stage in life. By supporting <Link href="/empower-english" className="text-primary hover:underline">Empower English</Link>, you’re not just funding a class — you’re investing in futures.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/empower-english">Support Empower English Today</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <MessageSquareQuote /> Donate today. Volunteer tomorrow. Change a life forever.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/empower-english">Donate</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Empower English</Button>
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
