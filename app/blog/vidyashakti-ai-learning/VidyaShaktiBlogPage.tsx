
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, BookOpen, MessageSquareHeart } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/VidyaShaktiDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function VidyaShaktiBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-auto">
            <div className="relative w-full">
              <Image
                src="/images/banner/vidyashakti.avif"
                alt="A student using a learning app on a smartphone"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="learning app student"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  VidyaShakti: Bringing AI-Powered Multilingual Learning to Rural Classrooms
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p className="text-xl font-semibold text-center text-primary py-4">
                  When the Classroom Fits in Your Pocket
                </p>
                <p>
                  In the heart of rural India, countless children wake up each morning with the same curiosity and dreams as their peers in cities. But while urban students step into classrooms equipped with trained teachers, well-stocked libraries, and digital tools, many rural children have no such access.
                </p>
                <p>
                  Yet, there is a powerful equalizer in their homes—a small device that has quietly revolutionized communication: the smartphone. What if this very phone could become a classroom? What if every child could have a personal tutor, speaking in their own language, ready to explain any concept at any time?
                </p>
                <p>
                  This is the vision of <Link href="/vidyashakti" className="text-primary hover:underline">VidyaShakti</Link>, an innovative educational app by AIM Foundation.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Education Gap in Rural India</h2>
                <p>
                  While India has made remarkable progress in expanding primary school enrollment, the real challenge lies in the quality and continuity of <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>. According to various education reports:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Many rural schools face teacher shortages, with some having just one teacher for all grades.</li>
                    <li>First-generation learners often have no academic support at home, as parents may not have attended school themselves.</li>
                    <li>Language barriers compound the problem—teaching materials are often in Hindi or English, but students may speak only their regional dialect at home.</li>
                    <li>Students in Classes 5–12, when faced with complex concepts in math, science, or literature, often have no one to guide them.</li>
                </ul>
                <p>The result? Bright, capable children lose confidence, fall behind, and in some cases, drop out entirely.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">VidyaShakti: A Teacher in Every Pocket</h2>
                <p>
                  <Link href="/vidyashakti" className="text-primary hover:underline">VidyaShakti</Link> was born out of a simple belief: every child, no matter where they live, deserves access to quality education in a language they understand. The app harnesses the power of AI to create an on-demand, multilingual learning experience tailored for rural learners.
                </p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Ask Any Question, Anytime:</strong> Students can type or speak their questions into the app—from solving a tricky math equation to understanding a historical event.</li>
                  <li><strong>Class-Level Tailored Answers:</strong> The AI adjusts its explanations to the student’s grade level (Class 5–12), ensuring that complex topics are broken down into age-appropriate, easy-to-understand answers.</li>
                  <li><strong>Multilingual Support:</strong> Whether a student is more comfortable in Bengali, Hindi, Tamil, Odia, or any other regional language, VidyaShakti responds in their preferred language. This removes one of the biggest barriers to comprehension.</li>
                  <li><strong>Self-Learning Empowerment:</strong> Students can revisit explanations as often as needed, building both knowledge and confidence to learn independently.</li>
                  <li><strong>Low-Bandwidth Friendly:</strong> Recognizing that rural connectivity can be patchy, the app is optimized to work on low internet speeds.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Multilingual Learning Matters</h2>
                <p>Language is not just a tool for communication—it is the bridge to understanding. A student who struggles with the language of instruction is like a swimmer battling against the current; they expend all their energy on decoding words instead of grasping ideas.</p>
                <p>VidyaShakti flips this dynamic. By delivering explanations in the student’s mother tongue, learning becomes faster and more intuitive, students can focus on concepts instead of translations, and parents can engage with their child’s learning process.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Technology as an Equalizer</h2>
                <p>For decades, the lack of physical infrastructure was the primary barrier to rural education. VidyaShakti transforms the existing smartphone in many households into a personal tutor, available 24/7, proving that quality learning doesn't have to be bound by geography.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Put the Power of Learning in a Child’s Hands</h2>
                  <p className="mt-4">
                    Your contribution can fund the integration of more regional languages, support teacher-curated content for accuracy, and expand our outreach to remote villages. When you contribute, you’re not just funding an app—you’re giving a rural child the keys to knowledge, confidence, and opportunity.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/vidyashakti">Support VidyaShakti Today</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Lightbulb /> Support VidyaShakti. Empower a generation.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/vidyashakti">Donate</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to VidyaShakti</Button>
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
