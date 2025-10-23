'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smile } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/InnocentSmilesDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function InnocentSmilesBlogPage() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-auto">
            <div className="relative w-full">
                <Image
                src="/images/banner/innocent-smiles.avif"
                alt="Happy children in a classroom"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="children smiling classroom"
                priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Innocent Smiles: Nurturing Dreams, Inspiring Futures
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In a world that often measures success by grades and numbers, there exists a quieter, deeper kind of growth—the growth that happens when a child feels seen, heard, and encouraged to dream. This belief forms the heart of “Innocent Smiles,” a transformative initiative by AIM Foundation that celebrates the creativity, curiosity, and potential within every child, especially those from underprivileged communities.
                </p>
                <p>
                  Through a blend of <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>, art, dance, music, and mentorship, Innocent Smiles is much more than a learning program—it’s a movement of hope and imagination. It opens doors for children who may never have access to structured artistic or academic opportunities, allowing them to discover their strengths and express their unique voices with confidence and joy.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Holistic Approach to Child Development</h2>
                <p>
                  Every child is born with potential—an artist, a thinker, a dreamer waiting to bloom. But for many children in marginalized communities, the lack of resources and opportunities often stifles these sparks before they can shine. The Innocent Smiles initiative was born out of a simple but powerful realization: children need more than education—they need inspiration.
                </p>
                <p>The program integrates academic learning with creative exploration, nurturing both intellect and imagination. Children participate in a variety of activities including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Academic Support:</strong> Foundational lessons in language, math, and general knowledge, delivered in engaging and interactive ways.</li>
                  <li><strong>Creative Arts:</strong> Drawing, painting, craftwork, and storytelling sessions that let imagination flow freely.</li>
                  <li><strong>Performing Arts:</strong> Music, singing, and dance classes that bring rhythm, confidence, and expression to young hearts.</li>
                  <li><strong>Life Skills & Teamwork:</strong> Games and group activities designed to foster discipline, cooperation, empathy, and leadership.</li>
                </ul>
                <p>Each session is crafted to spark curiosity, build confidence, and help children explore their talents in a joyful, pressure-free environment.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Safe Space for Every Child</h2>
                <p>
                  One of the most beautiful aspects of Innocent Smiles is the safe and inclusive environment it creates. Many children from disadvantaged backgrounds face social or economic challenges that affect their sense of security and self-worth. At AIM Foundation’s centres and partner institutions, these barriers disappear. Every child is treated with respect and love, and their voices are valued.
                </p>
                <p>
                  In this nurturing space, children are free to laugh, ask questions, make mistakes, and learn—without fear of judgment. Here, a shy girl finds her confidence through dance; a quiet boy discovers his talent for painting; a group of children learns to collaborate on a song that tells their story. Through these experiences, children begin to see themselves not as victims of circumstance, but as creators of their own future.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Learning Through Joy and Discovery</h2>
                <p>
                  Education, when combined with creativity, becomes an experience of joy. In every Innocent Smiles session, children learn not just from books, but through play, art, and exploration. Teachers and <Link href="/volunteering" className="text-primary hover:underline">volunteers</Link> serve as mentors, guiding the children to connect what they learn with real-life experiences. A lesson in science might become an art project; a story in English may inspire a short play; a group activity could become a dance of unity.
                </p>
                <p>This interactive model helps children:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Build communication and expression skills.</li>
                    <li>Develop problem-solving and critical thinking abilities.</li>
                    <li>Gain confidence in their abilities and creativity.</li>
                    <li>Learn empathy and teamwork.</li>
                </ul>
                <p>These lessons go beyond the classroom—they prepare children for life.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Stories That Inspire</h2>
                <p>
                    Every session of Innocent Smiles is filled with stories of transformation. Like Mita, a 10-year-old from a low-income neighbourhood in Kolkata, who once hesitated to speak in front of others. Through drawing and storytelling sessions, she began expressing her thoughts freely. Today, she not only participates confidently but helps her peers during art workshops.
                </p>
                <p>
                    Or Rahul, a shy boy who loved music but never had access to instruments. During one of the program’s creative camps, he was introduced to rhythm exercises and basic singing. That moment of encouragement sparked a dream—Rahul now performs in his school’s cultural programs. These stories are not just about individual success—they are about the power of opportunity and care. When a child is given the space to grow, the entire community flourishes.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Empowering Through Mentorship</h2>
                <p>
                    The success of Innocent Smiles lies not only in its curriculum but also in the compassionate mentorship it provides. A team of educators, artists, and volunteers guide each child’s journey with patience and empathy. The mentors serve as role models—demonstrating discipline, kindness, and creativity in action. Regular workshops, interactive storytelling sessions, and skill-based projects keep the learning dynamic and engaging. The focus is not on competition but on self-discovery and collaboration. Through mentorship, children learn one of life’s most important lessons: that someone believes in them.
                </p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Beyond the Classroom: Building Future Pathways</h2>
                <p>
                    The long-term goal of Innocent Smiles goes far beyond art and academics. The program seeks to equip children with the life skills and emotional strength needed to thrive in a rapidly changing world. By building self-esteem and communication skills early, the initiative helps children transition smoothly into formal education or vocational training programs. In this way, Innocent Smiles becomes the first step in a lifelong journey of empowerment—from creativity to career, from curiosity to confidence.
                </p>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">You Can Make a Difference</h2>
                  <p className="mt-4">
                    Every smile tells a story—and you can help write the next one. Your support can help AIM Foundation reach more children who deserve a chance to learn, play, and dream. Contributions help provide:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-left sm:text-center sm:list-none pl-4 sm:pl-0 mt-4">
                    <li>Art supplies for creative expression.</li>
                    <li>Educational resources to strengthen learning.</li>
                    <li>Nutritious snacks to keep children energized.</li>
                    <li>Safe, inclusive spaces where they can grow with joy and dignity.</li>
                  </ul>
                  <p className="mt-4">
                    By supporting Innocent Smiles, you’re not just donating—you’re investing in the dreams of children who will one day shape the world with their ideas, creativity, and compassion. Even a small act of kindness can spark a lifetime of change. Together, we can ensure that every child has the opportunity to shine with confidence and joy.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/innocent-smiles">Support Innocent Smiles</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Smile /> Because Every Innocent Smile Deserves to Shine
                    </p>
                    <p className="mt-2">
                        When a child smiles—truly smiles—it is more than a moment of happiness. It is a reflection of safety, love, and possibility. Through Innocent Smiles, AIM Foundation continues its mission of bringing light to young lives—helping them learn, imagine, and grow into the best versions of themselves. Each brushstroke, each dance step, each note sung is a reminder that with the right support, hope can flourish even in the simplest of spaces. Together, let’s create a world where every innocent smile is nurtured, cherished, and celebrated—for in those smiles lies the promise of a brighter tomorrow.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/innocent-smiles">Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering">Volunteer</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Innocent Smiles</Button>
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