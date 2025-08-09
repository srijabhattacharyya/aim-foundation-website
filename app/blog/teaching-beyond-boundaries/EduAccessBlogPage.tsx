
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpenCheck } from 'lucide-react';

export default function EduAccessBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="An online class in a rural setting"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="online learning rural"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Teaching Beyond Boundaries: How EduAccess is Bringing Quality Education to Rural West Bengal
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In today’s interconnected world, education has the power to break cycles of poverty, open doors to opportunities, and ignite a lifetime of learning. But while technology has transformed classrooms in cities, millions of children in rural India still sit in classrooms where resources are scarce and quality teachers are a distant dream.
                </p>
                <p><strong>This is the reality EduAccess seeks to change.</strong></p>
                <p>
                  Supported by Dhritiman Abilizing Infinity Foundation, EduAccess is redefining how children in rural West Bengal learn. Through expert-led online classes streamed from a state-of-the-art studio in Kolkata, we connect some of the best educators with students who might otherwise never get the chance to learn from them.
                </p>
                <p>
                  The result? A classroom without borders — where knowledge travels faster than roads can be built, and where dreams no longer have to wait for infrastructure to catch up.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Rural Education Gap</h2>
                <p>In West Bengal’s rural districts, the challenges are steep:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Schools often lack qualified teachers, especially in English, Math, and Science.</li>
                  <li>Textbooks may be outdated or in short supply.</li>
                  <li>Large class sizes make it hard for students to get personal attention.</li>
                  <li>Economic hardship forces many children to drop out early.</li>
                </ul>
                <p>
                  Even the most eager and capable students are limited by circumstances beyond their control. They may have the talent and drive to excel, but without access to quality education, their potential remains untapped.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">EduAccess: A Bridge Between Talent and Opportunity</h2>
                <p>EduAccess was born from a simple question: <strong>What if distance didn’t determine destiny?</strong></p>
                <p>From our Kolkata studio, experienced teachers conduct live, interactive classes for students in rural schools and learning centers. Using high-speed internet, audio-visual equipment, and real-time communication tools, we deliver lessons that are:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Engaging</strong> – with visuals, examples, and real-world connections.</li>
                  <li><strong>Interactive</strong> – students can ask questions, solve problems together, and share their ideas.</li>
                  <li><strong>Personalized</strong> – teachers can identify students who need extra help and provide guidance.</li>
                </ul>
                <p>Our subjects include:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>English – building communication skills critical for higher education and jobs.</li>
                  <li>Mathematics – teaching logical thinking and problem-solving.</li>
                  <li>Science – sparking curiosity about the world and its possibilities.</li>
                </ul>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">How It Works</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">1. The Studio</h3>
                <p>Our Kolkata-based studio is equipped with:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>High-definition cameras for clear video streaming.</li>
                    <li>Interactive whiteboards and presentation tools.</li>
                    <li>Microphones that ensure every explanation is crisp and audible.</li>
                    <li>Stable internet connectivity to keep classes uninterrupted.</li>
                </ul>
                <h3 className="text-2xl font-semibold font-headline text-foreground">2. The Schools</h3>
                 <p>Partner schools in rural West Bengal are provided with:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Projectors or large screens.</li>
                    <li>Speakers for clear audio.</li>
                    <li>Internet access to connect to the studio sessions.</li>
                    <li>A facilitator or coordinator to assist students on-site.</li>
                </ul>
                <h3 className="text-2xl font-semibold font-headline text-foreground">3. The Experience</h3>
                <p>Every class is designed to be more than a lecture:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Students answer live polls and quizzes.</li>
                    <li>Teachers display real-time examples.</li>
                    <li>Doubt-clearing happens instantly.</li>
                    <li>Lessons are recorded so students can revisit them.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Day in the Life of an EduAccess Student</h2>
                <p>Meet Soham, a 14-year-old from a village near Purulia.</p>
                <p>Before EduAccess, Soham struggled in English and Science. His school had dedicated teachers, but they were stretched thin, and specialized subjects often suffered. Today:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Soham logs in for his EduAccess class three times a week.</li>
                    <li>He participates in group discussions about global warming, watching videos that explain climate change in ways a textbook never could.</li>
                    <li>He asks questions to a teacher sitting 300 kilometers away in Kolkata — and gets an immediate, thoughtful response.</li>
                    <li>His confidence has soared, and he now dreams of becoming an environmental scientist.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Breaking Down Barriers</h2>
                <p>EduAccess doesn’t just deliver lessons — it removes obstacles:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Geographical barriers:</strong> Teachers don’t have to be in the same room to inspire students.</li>
                    <li><strong>Resource barriers:</strong> Schools can share the same digital classes, making high-quality education affordable.</li>
                    <li><strong>Motivational barriers:</strong> When students see interactive, modern lessons, they engage more deeply.</li>
                </ul>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Why This Matters</h2>
                <p>The skills students gain in these classes extend far beyond exams. They learn to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Think critically.</li>
                    <li>Communicate effectively.</li>
                    <li>Use technology as a learning tool.</li>
                    <li>See themselves as part of a bigger, interconnected world.</li>
                </ul>
                <p>In a competitive global economy, these skills are non-negotiable.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Scaling for Greater Impact</h2>
                <p>Currently, EduAccess serves several rural schools in West Bengal, but the need is enormous. There are hundreds of villages where children have never interacted with a subject expert, never seen a science experiment outside of a textbook, and never been encouraged to ask “Why?” or “How?”</p>
                <p>With more support, we can:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Expand to more schools and districts.</li>
                    <li>Add subjects like Computer Science, History, and Life Skills.</li>
                    <li>Provide tablets or laptops to students for individual practice.</li>
                    <li>Train local facilitators to guide and mentor students between classes.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories of Change</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Priya’s Journey</h3>
                <p>Priya, a Class 9 student from a small village in Birbhum, had never spoken English confidently. After a year with EduAccess:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>She can now introduce herself, describe her interests, and participate in group discussions.</li>
                    <li>She topped her English exam for the first time.</li>
                    <li>Her parents say she now dreams of becoming a teacher herself.</li>
                </ul>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Mr. Banerjee’s Perspective</h3>
                <p>As a science teacher in a rural school, Mr. Banerjee often found it hard to explain complex processes without visual aids. EduAccess provided him with animated diagrams and real-time simulations.</p>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  <p>“The first time my students saw a working model of the solar system on the big screen, they were speechless. Now, they ask more questions than I can answer — and that’s the best thing a teacher can hope for.”</p>
                </blockquote>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Vision Ahead</h2>
                <p>We dream of a day when no child’s education is limited by their postal code. With every new school we connect, we move closer to that reality. EduAccess is proof that technology, when used with purpose, can create equity in education.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">How You Can Help</h2>
                  <p className="mt-4">Your donation can make a direct, measurable impact:</p>
                   <ul className="list-none space-y-2 mt-4">
                    <li>₹500 – Provides internet access for a rural school for one month.</li>
                    <li>₹2,000 – Covers the cost of streaming equipment for a classroom.</li>
                    <li>₹5,000 – Sponsors an entire subject’s classes for a term.</li>
                    <li>₹10,000 – Brings EduAccess to a new school for a whole year.</li>
                  </ul>
                   <p className="mt-4 italic">When you give, you don’t just donate to a cause — you invest in a child’s future.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/eduaccess">Support EduAccess</Link>
                  </Button>
                </div>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Join Us</h2>
                <p>The distance between a remote village and a thriving city may be hundreds of kilometers — but with EduAccess, it’s just a click away.</p>
                <p>Be the reason a child discovers their potential. Be the link between talent and opportunity.</p>
                <p><strong>Donate today and help us bring classrooms without borders to the children who need them most.</strong></p>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <BookOpenCheck /> Teaching Beyond Boundaries.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/eduaccess">Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering">Volunteer</Link></Button>
                        <Button asChild variant="outline"><Link href="/corporate-social-responsibility">Collaborate</Link></Button>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
