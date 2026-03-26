'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartPulse, ShieldCheck, UserCheck, Palette } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(
  () => import('@/components/sections/donation-forms/HealthcareDonationForm'),
  {
    ssr: false,
    loading: () => (
      <div className="p-8">
        <Skeleton className="h-[500px] w-full" />
      </div>
    ),
  }
);

export default function ProHealthClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          {/* --- Header Banner --- */}
          <header className="relative w-full h-auto">
            <div className="relative w-full">
              <Image
                src="/images/projects/carecircle/carecircle2.avif"
                alt="ProHealth initiative health camp"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/70 to-transparent">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge className="mb-4 bg-primary hover:bg-primary/90">Flagship Project</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] leading-tight">
                  ProHealth: A $70,000 Strategic Investment in the Future of Kolkata
                </h1>
                <p className="text-xl md:text-2xl mt-2 font-medium opacity-95">
                  In Partnership with <strong>Children International, USA</strong>
                </p>
              </div>
            </div>
          </header>

          {/* --- Main Content --- */}
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-8">
                
                <div className="space-y-4">
                  <p>
                    In the vibrant yet complex landscape of Kolkata, opportunity and hardship often exist side by side. While the city continues to grow as a cultural and economic hub, thousands of children and young people in underserved communities still struggle with limited access to basic healthcare and well-being services. For them, good health is not guaranteed—it is a daily challenge.
                  </p>
                  <p>
                    Against this backdrop emerges <strong>Project ProHealth</strong>, a transformative initiative supported by <strong>Children International, USA</strong>. With a dedicated fund of <strong>$70,479.04</strong>, the project is reaching 3,252 children and youth, delivering not just healthcare—but dignity, resilience, and hope.
                  </p>
                  <p className="font-semibold text-primary">
                    This is not merely a grant. It is a strategic, high-impact intervention aimed at ensuring that no child’s future is determined by their socio-economic circumstances.
                  </p>
                </div>

                <h2 className="text-3xl font-bold font-headline text-foreground flex items-center gap-3 pt-4">
                  <ShieldCheck className="text-primary h-8 w-8" /> Building a Healthcare Shield: Preventing a Silent Crisis
                </h2>
                <p>
                  India continues to face a severe public health challenge—cervical cancer. Alarmingly, one woman dies every eight minutes from this preventable disease. In Kolkata, it remains one of the most common cancers among women, contributing significantly to mortality rates.
                </p>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
                  <p className="font-bold text-foreground mb-2">Project ProHealth addresses this crisis head-on with a focused and life-saving intervention:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Target:</strong> 635 girls aged 15–19</li>
                    <li><strong>Solution:</strong> Administration of the full two-dose HPV vaccination</li>
                    <li><strong>Outcome:</strong> Long-term protection against cervical cancer</li>
                  </ul>
                </div>
                <p>
                  By removing financial and accessibility barriers, ProHealth ensures that young girls receive a vaccine that can protect them for life. This is more than a medical intervention—it is a safeguard for the future of families, communities, and the city itself.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground pt-4">Beyond Healthcare: Nurturing the Whole Child</h2>
                <p>
                  Health is not limited to physical well-being. True development requires emotional strength, dignity, and essential life skills. Recognizing this, ProHealth invests in a holistic approach to child development, focusing on three critical pillars.
                </p>

                <div className="space-y-8 mt-6">
                  {/* Pillar 1 */}
                  <div className="border-t pt-6">
                    <h3 className="text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                      <HeartPulse className="text-primary" /> 1. Menstrual Dignity for 1,254 Girls
                    </h3>
                    <p>
                      For many adolescent girls in underserved areas, menstruation is accompanied by stigma, misinformation, and lack of access to hygienic products. This often leads to school absenteeism, increased risk of infections, and loss of confidence.
                    </p>
                    <p className="font-medium text-foreground">ProHealth tackles this issue through:</p>
                    <ul className="list-disc list-inside">
                      <li>Menstrual health awareness workshops</li>
                      <li>Provision of sanitary napkins for nine months</li>
                    </ul>
                    <p>
                      The impact is profound. Girls are empowered to manage their health with confidence and dignity, allowing them to stay in school and pursue their aspirations without interruption.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="border-t pt-6">
                    <h3 className="text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                      <UserCheck className="text-primary" /> 2. Mental Health & Substance Prevention for 422 Boys
                    </h3>
                    <p>
                      Adolescent boys often face silent struggles—ranging from emotional stress to peer pressure and exposure to substance abuse. Unfortunately, mental health support remains limited, particularly in low-resource settings.
                    </p>
                    <p className="font-medium text-foreground">ProHealth addresses this gap through awareness sessions that equip boys with:</p>
                    <ul className="list-disc list-inside">
                      <li>Emotional resilience and decision-making skills</li>
                      <li>Awareness of harmful behaviors and substance abuse prevention</li>
                    </ul>
                  </div>

                  {/* Pillar 3 */}
                  <div className="border-t pt-6">
                    <h3 className="text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                      <Palette className="text-primary" /> 3. Life Skills Through Art for 941 Children
                    </h3>
                    <p>
                      Creative expression is often overlooked in traditional systems, yet it plays a crucial role in cognitive and emotional development. ProHealth integrates art and craft-based learning for 615 boys (ages 3–14) and 326 girls (ages 3–8).
                    </p>
                    <p>
                      Through these activities, children develop creativity, imagination, problem-solving abilities, and social-emotional skills.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold font-headline text-foreground pt-8">Addressing the Core Problem</h2>
                <p>
                  At its heart, Project ProHealth is designed to tackle a deeper, systemic issue: the lack of accessible and equitable health services for underserved communities.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-muted rounded-lg h-full">
                    <h4 className="font-bold text-foreground mb-2">Healthcare Gaps</h4>
                    <p className="text-sm">Overcoming barriers to vaccine uptake caused by cost and lack of awareness.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg h-full">
                    <h4 className="font-bold text-foreground mb-2">Hygiene Gaps</h4>
                    <p className="text-sm">Ending the stigma and resource scarcity surrounding menstrual health.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg h-full">
                    <h4 className="font-bold text-foreground mb-2">Skill Gaps</h4>
                    <p className="text-sm">Providing marginalized children opportunities to develop life skills beyond academics.</p>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 my-12">
                  <h2 className="text-2xl font-bold font-headline text-foreground mb-6 text-center">Project ProHealth at a Glance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <ul className="list-none space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span><strong>Total Beneficiaries:</strong> 3,252 children and youth</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span><strong>Funding Support:</strong> Children International, USA</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span><strong>Total Project Fund:</strong> $70,479.04</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-none space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          <span>635 girls vaccinated against HPV</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          <span>1,254 girls supported with hygiene resources</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          <span>422 boys trained in mental resilience</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          <span>941 children engaged in life skills through art</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold font-headline text-foreground pt-4">A Shared Vision for a Healthier Kolkata</h2>
                <p>
                  Project ProHealth is more than an initiative—it is a promise. A promise that no girl should lose her life to a preventable disease, no child should miss school due to lack of basic hygiene, and no young person should face mental health challenges alone.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground pt-4">Conclusion: A Healthier Tomorrow Begins Today</h2>
                <p>
                  In a city as dynamic as Kolkata, the future depends on the well-being of its youngest citizens. Project ProHealth is a bold step toward ensuring that this future is not limited by inequality, but enriched by opportunity. By combining healthcare, education, and empowerment, the initiative is building a generation that is not only healthier—but stronger, more confident, and ready to lead.
                </p>
                <p className="font-bold text-foreground text-center text-2xl">
                  Because when we invest in children, we invest in the future.
                </p>

                {/* --- Final CTA --- */}
                <div className="text-center pt-12 border-t mt-12">
                  <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2 mb-6">
                    <HeartPulse /> Support our journey toward a healthier Kolkata.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg">
                          Donate to Healthcare
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                        <DynamicDonationForm />
                      </DialogContent>
                    </Dialog>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/healthcare-initiatives">All Health Initiatives</Link>
                    </Button>
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
