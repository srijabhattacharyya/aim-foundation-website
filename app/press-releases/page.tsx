
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Megaphone, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press Releases | AIM Foundation',
  description: 'Official Press Releases from AIM Foundation. Stay updated with our latest announcements, initiatives, and impact stories.',
};

export default function PressReleasesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">
                Press Releases
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Welcome to the official Press Releases page of AIM Foundation. Here you will find our latest announcements, initiatives, partnerships, events, and impact stories.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Press Release: SuiDhaga Expansion */}
              <Card className="shadow-lg border-primary/10 overflow-hidden">
                <CardHeader className="bg-card border-b border-muted p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Women Empowerment</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      New
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold font-headline text-foreground leading-tight">
                    AIM Foundation Opens Second SuiDhaga Unit in Natunhat, Boral
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8 space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
                  <p>
                    <strong>AIM Foundation</strong> proudly announces the launch of its second <strong>SuiDhaga Unit</strong> in Natunhat, Boral, with an initial batch of 23 women trainees.
                  </p>
                  <p>
                    SuiDhaga, the Foundation’s women-centric skill development initiative, focuses on tailoring and embroidery training to help women from underserved communities gain practical, income-generating skills.
                  </p>
                  <p>
                    Built on the philosophy <strong>“Threads of Hope, Dreams in Every Stitch,”</strong> the program enables women to transform traditional skills into sustainable livelihood opportunities—whether from home or through local work.
                  </p>
                  
                  <blockquote className="border-l-4 border-primary pl-6 py-4 italic bg-primary/5 rounded-r-xl">
                    <p className="text-foreground">"SuiDhaga is not just about skills—it’s about dignity, confidence, and empowering women to become financially independent."</p>
                    <footer className="mt-3 not-italic font-bold text-primary">
                      — Representative, AIM Foundation
                    </footer>
                  </blockquote>

                  <p>
                    With this expansion, AIM Foundation continues its mission of creating self-reliant communities by equipping women with tools for a better future.
                  </p>

                  <div className="bg-muted/50 p-6 rounded-xl border border-primary/10">
                    <h3 className="text-xl font-bold text-foreground mb-2">About SuiDhaga:</h3>
                    <p className="text-base">
                      SuiDhaga is AIM Foundation’s initiative to empower women through skill-based training, helping them build confidence, support their families, and become active contributors to society.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Press Release: Digital Marketing Course */}
              <Card className="shadow-lg border-primary/10 overflow-hidden">
                <CardHeader className="bg-card border-b border-muted p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Skill Development</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      Recent
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold font-headline text-foreground leading-tight">
                    Free Digital Marketing Course – A Skill Development Initiative by AIM Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8 space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
                  <p>
                    <strong>AIM Foundation</strong> has launched a <strong>Free Digital Marketing Course</strong> under its Skill Development Initiative to empower students, unemployed youth, homemakers, and small business owners with job-ready digital skills.
                  </p>
                  <p>
                    This beginner-friendly program offers practical training in <strong>SEO, social media marketing, content creation, paid ads, email & WhatsApp marketing, analytics, and freelancing</strong>. The course is delivered in <strong>Bengali</strong> to ensure easy learning for all.
                  </p>
                  <p>
                    The initiative aims to help participants start digital careers, earn from home, and grow businesses online in today’s digital-first economy.
                  </p>
                  
                  <div className="bg-muted/50 p-6 rounded-xl border border-primary/10">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <Megaphone className="mr-2 h-5 w-5 text-primary" />
                      Key Benefits:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                      <li className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span>100% free training</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span>Practical, job-oriented modules</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span>Hands-on learning</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span>Certificate of Completion</span>
                      </li>
                    </ul>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-6 py-4 italic bg-primary/5 rounded-r-xl">
                    <p className="text-foreground">"Our goal is to make digital skills accessible to everyone and create sustainable livelihood opportunities."</p>
                    <footer className="mt-3 not-italic font-bold text-primary">
                      — Spokesperson, AIM Foundation
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
