
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PenTool } from 'lucide-react';

export default function SuiDhagaBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="https://placehold.co/1920x800.png"
              alt="Women learning to sew with sewing machines"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="women tailoring"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Threading Changes: The SuiDhaga Story by AIM Foundation
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In a world full of noise, the soft hum of a sewing machine can seem almost unremarkable. But for many women across India’s underserved communities, that hum represents something powerful: transformation. It’s not just about tailoring—it’s about threading change into the fabric of everyday life. Through its unique initiative <strong>SuiDhaga</strong>, AIM Foundation is doing just that—threading changes that empower women, stitch dignity into livelihoods, and create new patterns of possibility.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Needle, A Thread, A New Beginning</h2>
                <p>
                  Across India, countless women carry the burden of poverty, social limitations, and invisibility. Many possess creativity, intelligence, and resilience—but lack opportunities, access to training, or the financial resources to break free from generational cycles of dependence.
                </p>
                <p>
                  SuiDhaga, meaning "needle and thread," is more than a metaphor; it’s a mission. Launched by AIM Foundation, the program empowers women by equipping them with skills in tailoring and embroidery. These aren't just crafts—they are instruments of change, practical tools that allow women to generate income, support their families, and rebuild their self-worth.
                </p>
                <p>
                  At the heart of SuiDhaga is a simple belief: when you give a woman the tools to shape her own future, she threads change—not just in her life, but in her entire community.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The SuiDhaga Vision: Empowering Through Skill</h2>
                <p>
                  Unlike many skill development programs that emphasize entrepreneurship or advanced business development, SuiDhaga is grounded in practicality. The focus is not to create entrepreneurs out of every woman but to make each woman economically active and self-reliant.
                </p>
                <p>The program delivers:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Hands-on training in tailoring and embroidery</li>
                  <li>Access to tools, materials, and sewing machines</li>
                  <li>Guidance from experienced female trainers</li>
                  <li>Supportive peer environments</li>
                  <li>Certificates that help them find work or earn from home</li>
                </ul>
                <p>
                  The goal is simple: to enable women to earn, immediately and sustainably—from their homes or within local tailoring hubs.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why SuiDhaga Is Needed</h2>
                <p>
                  India is home to millions of women who, despite their capabilities, are locked out of formal employment. Gender bias, low education levels, and family responsibilities often keep them confined to domestic spaces. But what if those very domestic skills—like stitching, hemming, and embroidery—could become sources of empowerment?
                </p>
                <p>
                  That’s the essence of threading change. SuiDhaga turns familiar, culturally rooted practices into meaningful income opportunities. It doesn’t impose a foreign concept of success—it enhances what already exists in women’s hands and homes.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Inside the Program: How Change Is Threaded</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">1. Structured Training Modules</h3>
                <p>The program begins with a structured curriculum that includes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Basic and advanced tailoring</li>
                  <li>Traditional and modern embroidery techniques</li>
                  <li>Garment measurement and fitting</li>
                  <li>Machine operation and maintenance</li>
                </ul>
                <p>The curriculum is designed for women with little or no prior experience and is taught in local languages.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">2. Practice-Driven Learning</h3>
                <p>Training centres are equipped with sewing machines, fabrics, threads, and other essentials. Women engage in hands-on practice, making real garments, building confidence, and perfecting their craft.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">3. Mentorship and Support</h3>
                <p>Learning is not just technical—it’s emotional. Trainers and mentors provide supportive spaces where women uplift one another, celebrate progress, and share challenges.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">4. Certification and Livelihood Access</h3>
                <p>At the end of their training, women receive certificates that validate their skills. Many begin earning right away by:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Stitching for local customers</li>
                  <li>Joining garment production units</li>
                  <li>Selling embroidered products</li>
                  <li>Repairing or altering clothes in their community</li>
                </ul>

                <h3 className="text-2xl font-semibold font-headline text-foreground">5. Post-Training Follow-Up</h3>
                <p>SuiDhaga doesn’t end at certification. AIM Foundation offers follow-up guidance, helps women access affordable machines, and connects them with job leads or local groups.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">The Impact: What Threading Change Looks Like</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Economic Empowerment</h3>
                <p>Even earning ₹2,000–₹5,000 per month from stitching can dramatically shift a household's economy, especially where no one else is earning. It means paying for school, buying medicines, or simply having a say in family decisions.</p>
                
                <h3 className="text-2xl font-semibold font-headline text-foreground">Social Transformation</h3>
                <p>Women who complete the program often become leaders and mentors themselves. They train others, organize community tailoring groups, or even become self-employed.</p>
                
                <h3 className="text-2xl font-semibold font-headline text-foreground">Confidence and Identity</h3>
                <p>Women enter the program unsure of themselves—and emerge with confidence, skills, and pride. They stop seeing themselves as dependents and start seeing themselves as contributors.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">Mental Well-being</h3>
                <p>Having a purpose, a skill, and a social network brings mental peace and happiness. Many participants say SuiDhaga is their first space of emotional freedom.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Real Stories of Threaded Change</h2>
                
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  <p>“I never thought I could earn. Now I do. My children are proud of me. I feel proud of myself too.”</p>
                  <cite className="not-italic font-semibold">- Rina, 28, Homemaker turned Earner</cite>
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  <p>“I thought my life had ended. Now, with every blouse I stitch, I feel I am rebuilding it—thread by thread.”</p>
                  <cite className="not-italic font-semibold">- Fatima, a widow finding hope</cite>
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  <p>“They call me ‘Teacher Didi.’ It’s more than a job. I feel I’m threading change in others’ lives.”</p>
                  <cite className="not-italic font-semibold">- Reshmi Bibi, SuiDhaga graduate and community trainer</cite>
                </blockquote>

                <h2 className="text-3xl font-bold font-headline text-foreground">SuiDhaga as a Scalable Model</h2>
                <p>What makes SuiDhaga truly impactful is its replicability. It doesn’t rely on large infrastructure or expensive resources. A small room, a few sewing machines, committed trainers, and determined women are all it takes.</p>
                <p><strong>Key Advantages:</strong></p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Low-cost model with high impact</li>
                  <li>Community-led training and follow-up</li>
                  <li>Quick skill absorption and income generation</li>
                  <li>Alignment with CSR goals of livelihood and gender empowerment</li>
                </ul>
                <p>With every new centre, SuiDhaga threads change across new communities—and multiplies the impact organically.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Hold the Thread That Changes a Life</h2>
                  <p className="mt-4">We often look for big ways to create change. But sometimes, change starts with something small—a needle, a thread, a stitch. When you support SuiDhaga, you support a woman’s journey from silence to self-reliance.</p>
                  <p className="mt-4 font-semibold">How You Can Help:</p>
                  <ul className="list-none space-y-2 mt-2">
                    <li>₹2,000 can cover training materials for one woman.</li>
                    <li>₹5,000 can sponsor a complete training cycle.</li>
                    <li>₹10,000 can help buy a sewing machine.</li>
                    <li>₹25,000 can start a new training batch in a village.</li>
                  </ul>
                  <p className="mt-6 italic">“You may not teach her how to sew, but you can give her the thread that stitches a future.”</p>
                   <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                        <Link href="/suidhaga">Support SuiDhaga Today</Link>
                    </Button>
                </div>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Looking Ahead: Stitching a Movement</h2>
                <p>The SuiDhaga program is more than a skill development initiative—it’s a movement for economic dignity, gender equity, and grassroots transformation. As AIM Foundation expands its reach, the goal is to open more centres, train thousands of women, and weave change into the very social fabric of the communities we serve.</p>
                <p>Every time a woman learns to sew, she’s not just making a blouse—she’s making history. She’s threading her name into the future of her family. She’s reshaping her role in society. She’s claiming her space in the story of India’s development.</p>
                <p>And you can be a part of that story.</p>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <PenTool /> Support SuiDhaga Today. Thread the Change.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/suidhaga">Donate</Link></Button>
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
