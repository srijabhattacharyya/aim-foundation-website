
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartHandshake, ShieldAlert, Users } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/DisasterManagementDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function DisasterReliefBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-auto">
            <div className="relative w-full">
                <Image
                src="/images/banner/disuster.avif"
                alt="Disaster relief efforts"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="disaster relief team"
                priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  From Despair to Recovery: Rebuilding Lives After Disaster
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  Disasters don’t wait for the perfect moment—they strike without warning, leaving families shattered, homes destroyed, and communities struggling to survive. In such times of chaos, the difference between despair and hope often comes down to how quickly help arrives. At AIM Foundation, we believe that when disaster strikes, our response must be swift, compassionate, and effective. Through our <Link href="/disaster-management" className="text-primary hover:underline">Disaster Management and Relief Program</Link>, we stand with those affected—bringing life-saving assistance, comfort, and the promise of recovery.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Why Disaster Relief Matters</h2>
                <p>
                  Floods, cyclones, earthquakes, and other calamities do more than destroy infrastructure—they disrupt the very fabric of communities. Homes vanish overnight, livelihoods are wiped out, and vulnerable populations are pushed further into poverty. In these moments, access to food, clean water, shelter, and <Link href="/healthcare-initiatives" className="text-primary hover:underline">healthcare</Link> becomes a matter of life and death.
                </p>
                <p>
                  For many survivors, aid is not just about physical supplies—it’s about the reassurance that they are not alone, that someone cares enough to stand beside them in their darkest hour. This is where AIM Foundation steps in, providing both immediate relief and long-term recovery support to help communities not just survive, but rebuild stronger than before.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Our Emergency Relief Services</h2>
                <ol className="list-decimal list-inside space-y-4 pl-4">
                  <li><strong>Emergency Food Distribution:</strong> We mobilize quickly to distribute dry ration kits, ready-to-eat meals, and baby food.</li>
                  <li><strong>Clean Water and Hygiene Kits:</strong> We provide clean drinking water, purification tablets, and hygiene kits to prevent disease.</li>
                  <li><strong>Temporary Shelter and Essential Supplies:</strong> We distribute tarpaulins, tents, blankets, and clothing to offer safety and dignity.</li>
                  <li><strong>Mobile Medical Units and First Aid:</strong> Our teams offer first aid, essential medicines, and maternal healthcare in affected areas.</li>
                  <li><strong>Psychosocial Support:</strong> Our counselors help survivors, especially <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link>, process grief and trauma.</li>
                </ol>

                <h2 className="text-3xl font-bold font-headline text-foreground">Beyond Immediate Relief – Building Resilience</h2>
                <p>
                  Recovery doesn’t end when the crisis abates. We are committed to helping communities rebuild stronger. We assist in repairing homes and schools, restoring <Link href="/gender-equality-initiative" className="text-primary hover:underline">livelihoods</Link> through grants and training, and implementing disaster preparedness programs to mitigate future risks.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Stories of Hope from the Front Lines</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">The Cyclone Survivor Who Rebuilt Her Shop</h3>
                <p>When Cyclone Amphan tore through coastal West Bengal, Rekha Devi’s small tailoring shop was washed away. With AIM Foundation’s livelihood grant, she purchased a new sewing machine and materials. Today, she’s not only back in business but also training two young girls from her village—turning her recovery into an opportunity for others.</p>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Children Back to School After the Floods</h3>
                <p>In Assam, devastating floods submerged entire villages. Our team set up temporary learning spaces so that <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> could continue their <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link> while their schools were rebuilt, providing a lifeline to normalcy amidst chaos.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Be a Beacon of Hope in the Storm</h2>
                  <p className="mt-4">
                    Your contribution to our <Link href="/disaster-management" className="text-primary hover:underline">Disaster Relief Program</Link> has a direct and measurable impact. It’s a message of solidarity and hope to those who’ve lost everything.
                  </p>
                  <ul className="list-none space-y-2 mt-4 text-left sm:text-center">
                    <li><strong>₹1,000</strong> can provide a week’s worth of food to a family of four.</li>
                    <li><strong>₹2,500</strong> can supply an emergency shelter kit.</li>
                    <li><strong>₹5,000</strong> can equip a mobile medical unit for a day.</li>
                  </ul>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/disaster-management">Support Disaster Relief</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <ShieldAlert /> Together, we can turn despair into hope.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/disaster-management"><HeartHandshake className="mr-2 h-4 w-4" />Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering"><Users className="mr-2 h-4 w-4"/>Volunteer</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Disaster Relief</Button>
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
