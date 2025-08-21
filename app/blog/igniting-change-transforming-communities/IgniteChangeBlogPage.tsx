
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Users, Leaf } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/IgniteChangeDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function IgniteChangeBlogPage() {
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
                alt="Community members working together on a project"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="community action group"
                priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Igniting Change: How Grassroots Action Transforms Communities
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  When we think of change, we often imagine sweeping reforms, large-scale policies, or billion-dollar projects. But history tells a different story — one where transformations often begin with a spark in the heart of a single individual or a small group of determined people. This is the story of grassroots action — the power of communities rising to solve their own problems, creating ripples that grow into waves of lasting change.
                </p>
                <p>
                  At AIM Foundation, our <strong>Ignite Change Initiative</strong> is designed to capture that spark and turn it into a movement. We believe that every person can be a changemaker, and with the right tools, resources, and support, communities can create solutions that are not only effective but deeply rooted in local realities.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Power of Grassroots Action</h2>
                <p>
                  Grassroots action is more than just community involvement — it is community leadership. It’s about people stepping up to take ownership of their challenges and solutions. Whether it’s a group of women starting a self-help group to improve livelihoods, youth launching an environmental awareness campaign, or a neighbourhood banding together to clean up their local park, grassroots initiatives are driven by those who live and breathe the issues every day.
                </p>
                <p>The power of grassroots action lies in its authenticity and immediacy:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Local understanding:</strong> People know their own challenges better than anyone.</li>
                  <li><strong>Sustainable solutions:</strong> When solutions come from within, they are more likely to last.</li>
                  <li><strong>Stronger trust:</strong> Community-led projects have buy-in from those they serve.</li>
                </ul>
                <p>
                  When communities take the lead, they don’t just solve problems — they strengthen their ability to face future challenges with confidence.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why AIM Foundation Believes in Igniting Change</h2>
                 <p>
                  At AIM Foundation, we have seen firsthand that top-down approaches alone are not enough. External aid is important, but it works best when paired with local action. That’s why our Ignite Change Initiative is not about doing things for communities — it’s about doing things with them.
                </p>
                 <p>We don’t just deliver solutions; we enable communities to create their own. This means providing:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Seed funding to help promising ideas get off the ground.</li>
                  <li>Mentorship and guidance for project leaders.</li>
                  <li>Training workshops to build skills in planning, outreach, and management.</li>
                  <li>Volunteer mobilization to bring more hands and hearts into the work.</li>
                  <li>A network of changemakers to exchange ideas and inspiration.</li>
                </ul>
                <p>The result? Projects that are rooted in local wisdom, driven by local passion, and sustained by local ownership.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories of Transformation</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Cleaning the Shores, One Bag at a Time</h3>
                <p>In a small riverside community, plastic waste had become a daily sight. With seed funding from Ignite Change, a youth group launched a “Clean Shores” campaign. They began with weekly clean-ups and expanded to create eco-education programs in local schools. Within a year, waste levels dropped significantly, and the project inspired nearby towns to start their own clean-up drives.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Women Weaving a New Future</h3>
                <p>In a rural village, a group of skilled women weavers struggled to sell their products beyond the local market. Through Ignite Change, they received training in digital marketing and small business management. They launched an online store, reaching customers across the state. The income boost helped pay for children’s education and reinvestment into community projects.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Why Small Actions Matter</h2>
                <p>
                  You might think a single clean-up drive or a few online sales won’t change the world. But grassroots change is like planting seeds: each one has the potential to grow far beyond what you imagined. When small actions are replicated, scaled, or inspire others, they create a chain reaction. This multiplying effect is what makes grassroots action so powerful.
                </p>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Be the Spark. Fuel the Movement.</h2>
                  <p className="mt-4">
                    Change doesn’t have to wait for someone else to start it. It can begin with you, here, today. Your donation to the Ignite Change Initiative can fund a community-led health campaign, provide training to rural entrepreneurs, or supply tools for an environmental clean-up.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/ignite-change-initiative">Support a Changemaker</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Sparkles /> Join us. Support grassroots action. Together, we can transform communities.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/ignite-change-initiative">Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering"><Users className="mr-2 h-4 w-4" />Volunteer</Link></Button>
                        <Button asChild variant="outline"><Link href="/corporate-social-responsibility"><Leaf className="mr-2 h-4 w-4" />Collaborate</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Ignite Change</Button>
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
