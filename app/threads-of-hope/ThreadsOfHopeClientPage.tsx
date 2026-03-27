'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PenTool, Sparkles, HeartHandshake, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import InitiativeSidebar from "@/components/layout/InitiativeSidebar";

const DynamicSuiDhagaForm = dynamic(
  () => import('@/components/sections/donation-forms/SuiDhagaDonationForm'),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);

const DynamicKrishtiForm = dynamic(
  () => import('@/components/sections/donation-forms/KrishtiDonationForm'),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);

const genderEqualityInitiatives = [
    { href: '/cyclesafe?from=gender-equality', label: 'CycleSafe' },
    { href: '/detect?from=gender-equality', label: 'Detect' },
    { href: '/suidhaga?from=gender-equality', label: 'SuiDhaga' },
    { href: '/krishti?from=gender-equality', label: 'Krishti' },
];

export default function ThreadsOfHopeClientPage() {
  const initiativeLists = [
      { title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          {/* --- Header Banner --- */}
          <header className="relative w-full h-auto">
            <div className="relative w-full">
              <Image
                src="/images/projects/suidhaga/suidhaga1.avif"
                alt="Women working at a tailoring unit"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/70 to-transparent">
              <div className="container mx-auto px-4 md:px-6 text-white text-left">
                <Badge className="mb-4 bg-primary hover:bg-primary/90">Women Empowerment</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] leading-tight">
                  Threads of Hope: How SuiDhaga and Krishti Are Stitching a Future of Women’s Empowerment
                </h1>
              </div>
            </div>
          </header>

          {/* --- Main Content Section --- */}
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-8">
                  
                  <p>
                    In countless homes across underserved communities, talent sits quietly—unseen, underutilized, and often underestimated. Women with extraordinary skill in stitching, embroidery, and garment-making carry forward traditions passed down through generations. Yet, without access to training, infrastructure, or markets, these skills rarely translate into sustainable income.
                  </p>

                  <p className="font-semibold text-primary">
                    This is where AIM Foundation’s flagship initiatives—SuiDhaga and Krishti—step in. Together, they form a powerful, interlinked model of skill development, women’s empowerment, and livelihood generation, transforming lives one stitch at a time.
                  </p>

                  <h2 className="text-3xl font-bold font-headline text-foreground flex items-center gap-3">
                    <PenTool className="text-primary" /> SuiDhaga: Turning Skills into Livelihoods
                  </h2>
                  <p>
                    At its heart, SuiDhaga is a skill development program for women designed to unlock potential where it already exists. Many women possess an inherent understanding of sewing and embroidery but lack formal training or access to structured opportunities.
                  </p>
                  <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
                    <p className="font-bold text-foreground mb-2">SuiDhaga bridges this gap through:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Hands-on tailoring and embroidery training</li>
                      <li>Access to experienced instructors</li>
                      <li>Structured learning environments</li>
                      <li>Skill-based livelihood opportunities</li>
                    </ul>
                  </div>
                  <p>
                    Unlike many programs that focus heavily on entrepreneurship from the outset, SuiDhaga takes a practical approach. Its primary goal is simple yet powerful: <strong>enable women to earn.</strong>
                  </p>
                  <p>
                    Whether working from home or joining local tailoring units, women trained under SuiDhaga gain income-generating skills that can immediately support their families. This direct pathway to earning is critical in communities where financial stability is fragile.
                  </p>

                  <h2 className="text-3xl font-bold font-headline text-foreground pt-4">Beyond Skills: Building Confidence and Dignity</h2>
                  <p>
                    SuiDhaga is not just about stitching garments—it’s about restoring dignity and self-worth. Women who once depended entirely on others begin contributing financially. They become decision-makers in their households, role models for their children, and active participants in their communities. This transformation is as emotional as it is economic. Confidence replaces hesitation. Purpose replaces limitation.
                  </p>

                  <h2 className="text-3xl font-bold font-headline text-foreground pt-4 flex items-center gap-3">
                    <HeartHandshake className="text-primary" /> The Power of a Simple Tool: A Sewing Machine
                  </h2>
                  <p>
                    A sewing machine may seem ordinary—but in the context of SuiDhaga, it becomes a tool of empowerment. With the right training and resources, it enables women to start home-based work, take on stitching assignments, and build consistent income streams.
                  </p>
                  <p className="italic">
                    Every contribution helps “hold the thread that changes her life.”
                  </p>

                  <h2 className="text-3xl font-bold font-headline text-foreground pt-8 flex items-center gap-3">
                    <Sparkles className="text-primary" /> Krishti: From Skilled Workers to Women Entrepreneurs
                  </h2>
                  <p>
                    While SuiDhaga lays the foundation, Krishti builds the future. Krishti is an advanced women entrepreneurship and livelihood initiative that takes trained women to the next level—transforming them from skilled workers into creators, leaders, and business owners.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-card border p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold font-headline text-foreground mb-3">What Krishti Offers</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Modern production infrastructure</li>
                        <li>Collaborative workspaces</li>
                        <li>Market linkages and exposure</li>
                        <li>Branding and marketing support</li>
                      </ul>
                    </div>
                    <div className="bg-card border p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold font-headline text-foreground mb-3">Empowering Growth</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Create market-ready products</li>
                        <li>Explore new designs and trends</li>
                        <li>Sell beyond local communities</li>
                        <li>Achieve financial independence</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold font-headline text-foreground pt-4">Stitching Tradition with Modern Opportunity</h2>
                  <p>
                    One of Krishti’s greatest strengths lies in its ability to blend traditional craftsmanship with contemporary markets. Women trained in embroidery and tailoring are empowered to create market-ready products and explore new trends. This connection to wider markets ensures that their work is not only appreciated but also fairly valued.
                  </p>

                  <h2 className="text-3xl font-bold font-headline text-foreground pt-4">Why SuiDhaga and Krishti Work Together</h2>
                  <p>
                    The true strength of these initiatives lies in their interconnected design. SuiDhaga focuses on skill development and immediate livelihood, while Krishti builds on those skills to create long-term sustainability and entrepreneurship. This seamless transition ensures that women are supported at every stage of their journey—from learning to earning to leading.
                  </p>

                  <h2 className="text-3xl font-bold font-headline text-foreground pt-8">A Collective Effort Backed by Strong Support</h2>
                  <p>
                    The success of these programs is made possible through the support of dedicated partners, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Mrs. Supriya Dutta, Mumbai</li>
                    <li>Rotary Club</li>
                    <li>Dharma International, Norway</li>
                  </ul>
                  <p>Their contributions help expand reach, enhance infrastructure, and bring these opportunities to more women in need.</p>

                  <h2 className="text-3xl font-bold font-headline text-foreground pt-4 flex items-center gap-3">
                    <TrendingUp className="text-primary" /> The Ripple Effect
                  </h2>
                  <p>
                    When you empower one woman, the impact extends far beyond her. Families gain financial stability, children gain better opportunities, and communities move toward gender equality. This is the ripple effect of sustainable development and inclusive growth.
                  </p>

                  <div className="bg-muted p-8 rounded-lg my-12 text-center">
                    <h2 className="text-3xl font-bold font-headline text-foreground">She Learned to Sew—Now Let Her Soar</h2>
                    <p className="mt-4">
                      The journey from learning to earning to leading is not easy—but it is possible. SuiDhaga gives her the skill. Krishti gives her the platform. You can give her the opportunity.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="lg" className="px-8">
                            Donate to SuiDhaga
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                          <DynamicSuiDhagaForm />
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="lg" className="px-8">
                            Support Krishti
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                          <DynamicKrishtiForm />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <p className="font-bold text-foreground text-center text-2xl">
                    Together, we can stitch a future where every woman has the chance to rise, thrive, and lead.
                  </p>
                </div>
              </div>

              <div className="hidden md:block md:col-span-1">
                <InitiativeSidebar 
                  initiativeLists={initiativeLists}
                  relatedResource={{
                    link: "/organisation",
                    text: "Learn about our Organisation",
                    image: {
                      src: "/images/aim.avif",
                      alt: "AIM Foundation",
                      hint: "ngo team",
                      description: "AIM Foundation - Serving with Integrity"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
