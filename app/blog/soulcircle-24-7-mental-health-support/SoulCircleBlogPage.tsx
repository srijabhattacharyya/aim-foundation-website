
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartHandshake } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/SoulCircleDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function SoulCircleBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="A person finding mental peace"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="mental health peace"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  SoulCircle: Bringing 24/7 Compassionate Mental Health Support to Everyone, Everywhere
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <h2 className="text-3xl font-bold font-headline text-foreground">Introduction – Why Mental Health Can’t Wait</h2>
                <p>
                  In today’s fast-paced, always-connected yet often emotionally disconnected world, mental health has become one of the most pressing challenges of our time. Anxiety, stress, loneliness, and depression are no longer rare struggles—they are everyday realities for millions of people across the globe. And while awareness is growing, access to quality mental health support is still limited, especially in rural areas, underserved regions, and among those who feel too stigmatized to seek help.
                </p>
                <p>
                  This is where SoulCircle comes in—a revolutionary AI-powered mental health support app designed to offer accessible, compassionate, and judgment-free care anytime, anywhere. It is not here to replace human therapy, but to bridge the critical gap between the moment someone feels emotionally distressed and the moment they can access the help they deserve.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Silent Mental Health Crisis</h2>
                <p>
                  Before diving into what makes SoulCircle unique, it’s important to understand the backdrop against which it was created.
                </p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Rising mental health issues:</strong> According to the World Health Organization, depression affects more than 300 million people worldwide, while anxiety disorders impact over 260 million. These numbers have grown sharply after the COVID-19 pandemic.</li>
                  <li><strong>Limited access to therapists:</strong> In India, for example, there are fewer than 0.75 mental health professionals per 100,000 people—far below the global average. This shortage means that even those who want help may wait months before they can talk to a professional.</li>
                  <li><strong>Stigma and cultural barriers:</strong> In many communities, mental health challenges are still misunderstood or seen as weaknesses. This stigma prevents people from seeking help until their condition worsens.</li>
                  <li><strong>Cost and accessibility:</strong> Therapy sessions can be expensive, and many people—especially students, unemployed individuals, or those in rural areas—cannot afford regular professional support.</li>
                </ul>
                <p>
                    These realities mean that millions suffer in silence, sometimes with devastating consequences. The need for an affordable, stigma-free, and instantly accessible support system has never been greater.
                </p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">What is SoulCircle?</h2>
                <p>
                  SoulCircle is more than just another mental health app. It is a 24/7 AI-powered emotional companion—a safe space where anyone can share their feelings without fear of being judged, misunderstood, or dismissed.
                </p>
                <p>Key features include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Private, Confidential Conversations:</strong> Users can talk to the AI counselor anytime, anywhere. Conversations are encrypted and kept strictly confidential.</li>
                    <li><strong>Multilingual Support:</strong> SoulCircle can converse in multiple languages, making emotional support more inclusive for non-English speakers.</li>
                    <li><strong>Mood Tracking & Journaling:</strong> Users can log their daily emotions, triggers, and experiences, helping them understand patterns in their mental well-being.</li>
                    <li><strong>Mindfulness & Stress-Relief Exercises:</strong> Guided breathing, meditation prompts, and grounding techniques help manage anxiety and stress in the moment.</li>
                    <li><strong>Non-Judgmental, Empathetic Responses:</strong> The AI is trained on therapeutic frameworks, active listening techniques, and supportive language to ensure users feel genuinely heard.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Who is SoulCircle For?</h2>
                 <p>While SoulCircle is designed for everyone, it is especially helpful for:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Students & Youth:</strong> Navigating academic pressure, peer relationships, and self-identity.</li>
                  <li><strong>People in Remote or Underserved Areas:</strong> Where mental health resources are scarce or nonexistent.</li>
                  <li><strong>Those Hesitant to Seek Traditional Therapy:</strong> Due to stigma, cost, or fear of judgment.</li>
                  <li><strong>Individuals Needing Immediate Support:</strong> For moments when emotional distress can’t wait for an appointment.</li>
                  <li><strong>Professionals Facing Burnout:</strong> Looking for stress-management tools and a listening ear at any hour.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why AI for Mental Health?</h2>
                <p>
                  At first, some may wonder—can AI really understand human emotions? While AI cannot replace the empathy and expertise of a trained therapist, it can provide instant, non-judgmental, and accessible support in moments when human help is unavailable.
                </p>
                <p>SoulCircle’s AI is trained on evidence-based therapeutic approaches like:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>CBT (Cognitive Behavioral Therapy) techniques to challenge negative thinking patterns.</li>
                    <li>Mindfulness-based strategies to help users stay grounded in the present.</li>
                    <li>Active listening frameworks to ensure responses are empathetic and validating.</li>
                </ul>
                <p>The beauty of AI in this context is that it:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Never gets tired – Available 24/7, even at 3 AM.</li>
                    <li>Never judges – Creates a safe, stigma-free space.</li>
                    <li>Scales globally – Can support millions at once without waitlists.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Real-Life Scenarios Where SoulCircle Can Help</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Scenario 1 – A College Student Away from Home</h3>
                <p>Riya, a first-year college student, is struggling with homesickness and exam stress. She doesn’t feel comfortable sharing her feelings with her parents and can’t afford therapy. With SoulCircle, she can talk about her fears in Hindi, receive coping strategies, and log her moods to see progress over time.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">Scenario 2 – A Working Professional Facing Burnout</h3>
                <p>Arjun works 12-hour shifts in a high-pressure corporate job. At night, he feels anxious and restless. Instead of bottling it up, he uses SoulCircle to journal his thoughts and practice guided breathing before bed.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">Scenario 3 – A Young Person in a Remote Village</h3>
                <p>Meena, living in a rural area with no access to a counselor, uses her basic smartphone and internet connection to chat with SoulCircle in her native language. She finds relief in being heard and learns self-help exercises she can practice daily.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Science Behind Emotional Support</h2>
                <p>Decades of research show that being listened to with empathy can significantly reduce emotional distress. While AI cannot replace deep therapeutic work, even short conversations where a person feels validated and understood can have measurable positive effects on mood and resilience.</p>
                <p>In psychological terms, this works because:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Venting emotions helps regulate the nervous system.</li>
                    <li>Naming feelings reduces their intensity (a process known as affect labeling).</li>
                    <li>Receiving coping strategies increases a sense of control over one’s mental state.</li>
                </ul>
                <p>SoulCircle’s responses are designed to mirror these evidence-based principles.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">How You Can Help</h2>
                  <p className="mt-4">
                    Mental health challenges can affect anyone, but together, we can ensure that no one faces them alone. Here’s how you can support SoulCircle’s mission:
                  </p>
                  <ul className="list-disc list-inside text-left space-y-2 mt-4 pl-4">
                      <li><strong>Donate:</strong> Just ₹500 can fund a month of safe, compassionate support for one person.</li>
                      <li><strong>Spread the Word:</strong> Share SoulCircle with friends, family, and colleagues.</li>
                      <li><strong>Partner with Us:</strong> Schools, colleges, and NGOs can collaborate to make the app accessible to their communities.</li>
                      <li><strong>Advocate for Mental Health:</strong> Use your voice to break stigma and promote open conversations.</li>
                  </ul>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/soulcircle">Support SoulCircle Today</Link>
                  </Button>
                </div>

                <h2 className="text-3xl font-bold font-headline text-foreground">Conclusion: A Vision for a Greener Tomorrow</h2>
                <p>
                    Our dream is to see every child grow up understanding the value of nature, every community protecting its resources, and every individual feeling responsible for the Earth’s well-being. We believe that real change always starts at the roots. And those roots grow stronger when we nurture them together.
                </p>

                 <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <HeartHandshake /> Be the Reason Someone Feels Heard Today
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/soulcircle">Donate</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to SoulCircle</Button>
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
