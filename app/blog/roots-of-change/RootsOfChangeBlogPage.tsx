
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trees } from 'lucide-react';

export default function RootsOfChangeBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full">
            <div className="relative w-full h-auto">
                <Image
                src="/images/banner/roots-of-change1.avif"
                alt="Community discussing environmental issues"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="environmental awareness education"
                priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Roots of Change: Planting Awareness, Growing a Greener Tomorrow
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p className="text-xl font-semibold text-center text-primary py-4">
                  Because change begins with understanding.
                </p>
                <p>
                  When we think about the future, most of us imagine a world where our children can breathe clean air, drink pure water, and walk through lush green landscapes without fear of pollution or climate disasters. But for millions around the world—especially in vulnerable communities—this vision is slipping away. Rising sea levels, extreme weather, polluted rivers, vanishing forests, and contaminated soil are no longer distant threats; they are part of daily reality.
                </p>
                <p>
                  The AIM Foundation believes that change—real, lasting, and deeply rooted—can only happen when people understand the “why” behind the problems they face. Our flagship <Link href="/sustainability-initiatives" className="text-primary hover:underline">environmental education</Link> initiative, <strong><Link href="/roots-of-change" className="text-primary hover:underline">Roots of Change</Link></strong>, was created to bring that understanding to life.
                </p>
                <p>
                  It’s not just about telling people to recycle or plant trees. It’s about giving them the knowledge, the tools, and the inspiration to see themselves as active stewards of the Earth.
                </p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Why Environmental Education Matters More Than Ever</h2>
                <p>
                  Climate change is not an abstract scientific theory. It’s a lived experience for farmers whose crops fail due to irregular rainfall, for fishing communities whose waters are overrun with waste, for families forced to migrate after floods destroy their homes.
                </p>
                <p>
                  Research shows that environmental awareness and education have a profound impact on how individuals and communities respond to these challenges.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>A child who learns about the value of clean water will be more likely to conserve it.</li>
                    <li>A community that understands the dangers of plastic pollution will adopt sustainable alternatives faster.</li>
                    <li>Local leaders informed about climate adaptation can develop policies that protect their people and natural resources.</li>
                </ul>
                <p>This is the heart of Roots of Change—making knowledge a catalyst for action.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Our Approach: Education with Purpose</h2>
                <p>
                  Unlike generic awareness drives, Roots of Change focuses on interactive, practical, and community-driven learning. We tailor our programs to the unique challenges of each area we serve.
                </p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">1. Expert-Led Seminars</h3>
                <p>We bring environmental scientists, activists, and policy experts directly to the communities that need them most. These sessions demystify complex topics like climate change, renewable energy, and biodiversity loss, making them accessible and relatable.</p>
                
                <h3 className="text-2xl font-semibold font-headline text-foreground">2. Hands-On Workshops</h3>
                <p>Learning sticks best when it’s practical. Our workshops often involve:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Waste Segregation Demonstrations</li>
                    <li>Kitchen Gardening</li>
                    <li>Composting</li>
                    <li>Plastic-Free Living</li>
                </ul>

                <h3 className="text-2xl font-semibold font-headline text-foreground">3. School Partnerships</h3>
                <p>Children are the most powerful agents of change. By collaborating with schools, we integrate environmental topics into their learning journey.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">4. Community Engagement</h3>
                <p>We work with local organizations, women’s self-help groups, youth clubs, and municipal bodies to keep the momentum alive.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories from the Roots</h2>
                <p>Change is best understood through stories. In a small village outside Kolkata, we met Anita, a mother of two who attended one of our waste management workshops. She learned how burning plastic releases toxic fumes that can harm her <Link href="/childcare-initiatives" className="text-primary hover:underline">children’s</Link> lungs. Within weeks, she organized her neighbourhood to collect and send recyclable waste to a nearby centre.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">How You Can Be Part of the Roots of Change</h2>
                <p>Planting awareness is a community effort. Your <Link href="/individual-donation" className="text-primary hover:underline">donation</Link> funds workshops, educational materials, and sustainability projects in vulnerable communities.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Every voice we awaken through Roots of Change plants a seed of environmental responsibility.</h2>
                  <p className="mt-4 italic">But we can’t nurture these seeds alone. Your donation helps us reach more communities, host impactful seminars, and inspire lasting change. Together, let’s grow minds that protect the Earth. Donate today—and let your support become the root of real change.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/roots-of-change">Support Roots of Change Today</Link>
                  </Button>
                </div>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Trees /> Plant Awareness, Grow a Greener Tomorrow.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/roots-of-change">Donate</Link></Button>
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
