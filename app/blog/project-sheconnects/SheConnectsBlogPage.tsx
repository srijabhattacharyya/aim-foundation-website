
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wifi } from 'lucide-react';

export default function SheConnectsBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Women learning digital skills"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="women technology"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Project SheConnects: Empowering Women Through Technology
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p className="text-xl font-semibold text-center text-primary py-4">
                  Because when women are connected, communities are unstoppable.
                </p>
                <p>
                  In the 21st century, digital technology is no longer a luxury—it is a lifeline. From accessing essential information to running businesses, staying connected means staying empowered. Yet, for millions of women across underserved communities, this connection remains out of reach. Project SheConnects by AIM Foundation is here to change that.
                </p>
                <p>
                  At its heart, SheConnects is more than a program—it’s a movement. It’s about giving women the tools, skills, and confidence they need to enter and thrive in the digital economy. And in doing so, it’s about transforming not just individual lives, but entire communities.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Digital Empowerment Matters for Women</h2>
                <p>Digital access is the modern equalizer. It bridges the gap between opportunity and reality. A woman with a smartphone and internet access can:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Start and grow a business from home</li>
                    <li>Market products to customers beyond her neighbourhood</li>
                    <li>Access government schemes and benefits directly</li>
                    <li>Learn new skills that open income opportunities</li>
                    <li>Stay informed on health, education, and safety</li>
                </ul>
                <p>
                  Yet, according to UNESCO, women in developing regions are 20–30% less likely than men to have access to the internet. For those who do, limited knowledge of digital tools and online safety keeps them from using these resources effectively. The digital gender gap is real—and it’s costing communities progress.
                </p>
                <p>
                  Project SheConnects steps into this gap with a holistic solution: practical digital skills + safe online practices + entrepreneurial guidance.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Vision Behind SheConnects</h2>
                <p>
                    The inspiration for SheConnects came from a simple observation: When women gain skills, they don’t just improve their own lives—they uplift families, support children’s education, and contribute to community development.
                </p>
                <p>
                    AIM Foundation recognized that many women in underserved communities have entrepreneurial talent but lack the knowledge to harness the internet’s power. They may be artisans creating beautiful handicrafts, home cooks preparing delicious local delicacies, or tailors stitching garments with skill—but their market is limited to who they know in person. SheConnects opens their world.
                </p>
                <p>
                    By teaching women how to use digital platforms for marketing, sales, and networking, SheConnects transforms local talent into sustainable businesses.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">How SheConnects Works</h2>
                <p>The program follows a step-by-step approach to ensure no participant is left behind.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">1. Building Digital Literacy from the Ground Up</h3>
                <p>Many participants begin with limited or no exposure to technology. Training starts with the basics:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Using smartphones and computers efficiently</li>
                    <li>Understanding the internet and search tools</li>
                    <li>Setting up and managing email accounts</li>
                    <li>Navigating common apps and platforms</li>
                </ul>
                <p>Once comfortable with these essentials, participants move on to advanced skills.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">2. Social Media for Business</h3>
                <p>From Instagram to Facebook, social media is a powerful marketing tool. SheConnects teaches women:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>How to set up business pages</li>
                    <li>Creating engaging content (photos, videos, product descriptions)</li>
                    <li>Running targeted ads on a budget</li>
                    <li>Engaging with customers and building brand loyalty</li>
                </ul>
                <h3 className="text-2xl font-semibold font-headline text-foreground">3. E-commerce and Online Sales</h3>
                <p>Participants learn to:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>List products on platforms like Amazon, Flipkart, and Etsy</li>
                    <li>Set up online stores using free or low-cost tools</li>
                    <li>Handle orders, payments, and customer service</li>
                </ul>
                <h3 className="text-2xl font-semibold font-headline text-foreground">4. Financial Management Tools</h3>
                <p>Managing income and expenses digitally is critical for business growth. Training covers:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Using mobile banking and UPI safely</li>
                    <li>Basic bookkeeping with free apps</li>
                    <li>Tracking orders and payments</li>
                </ul>
                <h3 className="text-2xl font-semibold font-headline text-foreground">5. Cyber Safety and Security</h3>
                <p>No digital empowerment is complete without digital safety. SheConnects includes awareness sessions on cyber safety, teaching women:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>How to protect personal data</li>
                    <li>Secure online transactions</li>
                    <li>Recognize and avoid online scams</li>
                    <li>Handle cyberbullying or harassment</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">How You Can Help</h2>
                <p>Every contribution makes a difference:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>₹1,000 can fund a participant’s training materials.</li>
                    <li>₹5,000 can provide a refurbished laptop to a woman entrepreneur.</li>
                    <li>₹10,000 can sponsor a complete training cycle for one participant.</li>
                </ul>
                
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Connected Women, Stronger Communities</h2>
                  <p className="mt-4">
                    Project SheConnects is not just about teaching women to use technology—it’s about unlocking their potential, boosting their confidence, and giving them the tools to lead independent lives.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/sheconnects">Support SheConnects Today</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Wifi /> Donate Today and Be the Connection That Changes a Life
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/sheconnects">Donate</Link></Button>
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
