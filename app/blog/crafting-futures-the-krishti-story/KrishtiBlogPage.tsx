'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/KrishtiDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function KrishtiBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-auto">
            <div className="relative w-full">
                <Image
                src="/images/banner/krishti1.avif"
                alt="Women entrepreneurs working in a production unit"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="women entrepreneurship"
                priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Crafted by Her. Backed by Krishti.
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In countless small towns and villages, women with extraordinary talent sit quietly behind sewing machines, embroidering beauty into pieces of cloth. Their stitches are neat, their patterns intricate, and their work speaks of a craftsmanship passed down through generations. Yet, despite their skill, many remain financially dependent, unable to translate their art into a sustainable income.
                </p>
                <p>
                  For years, the <strong>SuiDhaga</strong> initiative worked to change this reality—training women in tailoring and embroidery so they could earn from home or within their communities. But training alone is just the first step. Once the needlework was mastered, a bigger challenge emerged: How do you turn skill into a livelihood?
                </p>
                <p className="text-xl font-semibold text-center text-primary py-4">
                  That’s where Krishti steps in.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">What Is Krishti?</h2>
                <p>
                  Krishti is more than an empowerment program—it is the bridge between learning and earning. While SuiDhaga equips women with skills, Krishti ensures those skills flourish into thriving micro-enterprises.
                </p>
                <p>We provide:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Modern production infrastructure</strong> – Well-equipped workspaces with high-quality sewing machines, cutting tools, and embroidery setups.</li>
                  <li><strong>Collaborative work environments</strong> – Spaces where women can learn from each other, share ideas, and work on joint orders for larger markets.</li>
                  <li><strong>Marketing and sales support</strong> – From branding guidance to connecting with e-commerce platforms and physical retailers.</li>
                  <li><strong>Financial literacy and entrepreneurship training</strong> – Teaching the basics of running a business, pricing products, and managing income.</li>
                </ul>
                <p>Here, a skilled woman is not just another seamstress. She becomes a creator, a leader, and an entrepreneur.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Krishti Matters</h2>
                <p>
                  While India is home to millions of women artisans, many are trapped in low-paying work or seasonal jobs that offer no security. The lack of access to modern tools, competitive markets, and business networks keeps them in a cycle of dependence.
                </p>
                <p>Krishti exists to break that cycle. We believe:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Economic independence changes everything</strong> – When a woman earns her own income, she gains decision-making power in her household, invests in her children’s education, and becomes a role model in her community.</li>
                    <li><strong>Traditional skills deserve modern opportunities</strong> – Handcrafted products can have a global audience if given the right exposure.</li>
                    <li><strong>Sustainability is key</strong> – Instead of temporary aid, we focus on creating self-sustaining business models for women.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">From Training to Transformation: A Woman’s Journey with Krishti</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li><strong>Skill Development through SuiDhaga:</strong> She learns to stitch, embroider, and design—building her confidence with every completed piece.</li>
                    <li><strong>Access to Production Facilities:</strong> She moves into the Krishti workspace, where she works with better tools and can take on bulk orders without the limitations of her home setup.</li>
                    <li><strong>Business & Branding Support:</strong> She learns to create product lines, set prices, manage stock, and communicate with buyers.</li>
                    <li><strong>Market Linkage:</strong> Her creations are sold at exhibitions, online marketplaces, and boutique stores, reaching customers who value handcrafted work.</li>
                    <li><strong>Financial Independence:</strong> Her income becomes steady, her household stability improves, and her voice grows stronger.</li>
                </ol>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories That Inspire</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Meet Anjali – From Housewife to Entrepreneur</h3>
                <p>Anjali had been stitching clothes for neighbours for years, but it was always for minimal payment. After training with SuiDhaga, she joined Krishti’s production unit. Today, she runs her own small clothing brand, supplying kurtas and saree blouses to boutiques in Kolkata. Her income now covers her children’s school fees entirely.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Meet Parveen – A Master of Embroidery</h3>
                <p>Parveen’s embroidery work is exquisite, but her reach was limited to local fairs. Through Krishti, she learned about product photography, pricing for online markets, and quality control for bulk orders. She now sells her work to buyers in Delhi, Mumbai, and even overseas.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Your Donation Matters</h2>
                <p>Setting up and sustaining Krishti requires:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Modern sewing machines and embroidery units</li>
                    <li>Raw materials like fabric, threads, and trims</li>
                    <li>Digital marketing and e-commerce platform fees</li>
                    <li>Training workshops on entrepreneurship and financial literacy</li>
                    <li>Rent and utilities for collaborative workspaces</li>
                </ul>
                <p>Every contribution directly fuels a woman’s path to independence. For example:</p>
                <ul className="list-none space-y-2 pl-4">
                    <li><strong>₹1,000</strong> can provide high-quality fabric for one woman’s first product line.</li>
                    <li><strong>₹8,000</strong> can cover the cost of a sewing machine for shared use.</li>
                    <li><strong>₹10,000</strong> can sponsor a marketing campaign to take products online.</li>
                </ul>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">A Future Stitched with Dignity and Dreams</h2>
                  <p className="mt-4">The future of women’s empowerment lies not just in training but in turning that training into sustainable livelihoods. Krishti is proof that with the right resources, women can create their own opportunities and lift entire communities along with them.</p>
                  <p className="mt-4 italic">When you donate to Krishti, you’re not giving charity—you’re making an investment. An investment in women’s potential, in handcrafted artistry, and in a future where every woman has the chance to earn with dignity.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/krishti">Support Krishti Today</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Sparkles /> Help us transform skilled women into successful entrepreneurs.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/krishti">Donate</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Krishti</Button>
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
