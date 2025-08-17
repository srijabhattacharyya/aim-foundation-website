
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MonitorPlay } from 'lucide-react';

export default function InspireEduLabBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="A smart classroom with students engaged"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="smart classroom children"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Redefining Classrooms for a Digital Tomorrow: How Inspire EduLab is Changing the Way Children Learn
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In a world where technology is rapidly transforming every aspect of life, education remains one of the most powerful tools for shaping the future. Yet, millions of children across India still sit in classrooms where chalk and blackboards are their only windows to knowledge. While the digital revolution is racing ahead, the gap between those who have access to technology and those who do not is growing wider.
                </p>
                <p>
                  <strong>Inspire EduLab is here to change that.</strong>
                </p>
                <p>
                  Launched with the vision of turning every classroom into a smart, internet-enabled learning hub, Inspire EduLab bridges the gap between traditional education and modern learning technology. Through interactive tools like audio-visual content, online expert sessions, and dynamic 2D/3D animations, Inspire EduLab makes complex lessons easier to understand, more engaging, and infinitely more inspiring.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Challenge: A Widening Digital Divide</h2>
                <p>
                  The 21st century demands new skills — critical thinking, problem-solving, creativity, and digital literacy. Unfortunately, students in under-resourced schools often miss out on these skills simply because they lack access to technology.
                </p>
                <p>In many rural villages and urban slums:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Schools lack basic internet connectivity.</li>
                  <li>Teachers don’t have access to modern teaching aids.</li>
                  <li>Students never see the practical applications of the science or math they learn.</li>
                  <li>Learning often becomes rote memorization, detached from real-life application.</li>
                </ul>
                <p>The result? A generation of bright, eager children who are left behind in the race toward a digital tomorrow.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Inspire EduLab Solution</h2>
                <p>
                  Inspire EduLab transforms a traditional classroom into a vibrant, technology-enabled space that sparks curiosity and boosts learning outcomes.
                </p>
                <p>Each EduLab setup includes:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Smartboards and Projectors – Bringing lessons to life with visuals and interactive content.</li>
                  <li>High-Speed Internet Access – Opening a world of resources, videos, and expert sessions.</li>
                  <li>2D/3D Animation Content – Simplifying complex concepts in science, mathematics, and history.</li>
                  <li>Audio-Visual Lessons – Engaging students with storytelling and real-world examples.</li>
                  <li>Teacher Training – Empowering educators to use these tools effectively.</li>
                </ul>
                <p>This isn't just about technology for technology's sake — it’s about connecting knowledge to real-world applications.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Day in an Inspire EduLab Classroom</h2>
                <p>Imagine a small government school in a remote village. Before Inspire EduLab, students huddled over worn-out textbooks, reciting definitions of "photosynthesis" without truly understanding the process. Science was a distant idea, unrelated to the plants outside their classroom window.</p>
                <p>Now, the same lesson unfolds very differently:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>The teacher switches on the smartboard.</li>
                    <li>A 3D animation shows sunlight streaming into a plant's leaves, zooming into microscopic cells.</li>
                    <li>Students see chlorophyll molecules capturing energy, water flowing through xylem, and oxygen bubbles forming.</li>
                    <li>Laughter and curiosity fill the room as questions come alive: “Does this happen in all plants?”, “Can we see this in real life?”</li>
                    <li>The teacher takes them outside to observe plants in the schoolyard, linking theory with practice.</li>
                </ul>
                <p>Learning is no longer a chore. It’s an adventure.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why This Matters for the Future</h2>
                <p>Digital classrooms are not just a luxury — they’re a necessity for preparing students for tomorrow’s workforce. The jobs of the future will require:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Comfort with technology.</li>
                    <li>Creative problem-solving.</li>
                    <li>Ability to learn continuously from online resources.</li>
                    <li>Collaboration beyond geographical boundaries.</li>
                </ul>
                <p>Without exposure to these skills, children risk being excluded from opportunities that could change their lives. Inspire EduLab ensures they get that exposure, regardless of their socio-economic background.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Breaking Barriers Across Geographies</h2>
                <p>One of the most powerful aspects of Inspire EduLab is its reach. Whether it’s a school in a Himalayan village, an urban slum learning centre, or a tribal community school, Inspire EduLab creates a level playing field. Every student, no matter where they are, deserves access to the same quality of digital education.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Stories of Change</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Rani’s First Science Experiment</h3>
                <p>Rani, a 12-year-old from a rural school in West Bengal, had always been curious about how machines work. After Inspire EduLab arrived, she watched animated demonstrations, participated in an online Q&A with an engineering student, and built her own simple pulley system. Today, Rani dreams of becoming a mechanical engineer.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">A Teacher’s Transformation</h3>
                <p>Mr. Sharma, a mathematics teacher, struggled to keep students engaged. With Inspire EduLab, he uses animated number games and connects with educators online. He reports a 40% improvement in test scores. Technology didn’t replace him—it empowered him.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Beyond the Classroom: Skills for Life</h2>
                <p>Inspire EduLab is not just about boosting grades—it’s about preparing children for life with confidence, research skills, global perspectives, and teamwork.</p>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Your Role: Help Spark a Child’s Curiosity</h2>
                  <p className="mt-4">Your donation can equip a classroom with a smartboard, provide interactive content, and train teachers.</p>
                   <ul className="list-none space-y-2 mt-4">
                    <li>₹500 provides a month of high-speed internet for a school.</li>
                    <li>₹5,000 helps install a smartboard in a rural classroom.</li>
                  </ul>
                  <p className="mt-4 italic">Every contribution makes a measurable difference. Your generosity builds more than just a digital classroom — it builds dreams.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/inspire-eduLab">Support Inspire EduLab</Link>
                  </Button>
                </div>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">A Call to Dream Bigger</h2>
                <p>Right now, a child who has never seen a computer, a classroom where the internet is just a word, a teacher who wishes for better tools—we can change all that. We can turn wishes into reality and ensure no child is left behind in the digital age.</p>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <MonitorPlay /> Join the Movement. Redefine Classrooms. Inspire the Future.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/inspire-eduLab">Donate</Link></Button>
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
