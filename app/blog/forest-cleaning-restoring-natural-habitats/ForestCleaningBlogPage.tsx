
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Trash2 } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/ForestCleaningDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function ForestCleaningBlogPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-auto">
            <div className="relative w-full">
                <Image
                src="/images/banner/tide-shield1.avif"
                alt="Volunteers cleaning a forest"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="forest cleanup volunteers"
                priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Restoring Natural Habitats: The Forest Cleaning Initiative
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  Our planet's forests are the lungs of the Earth, vital for biodiversity and climate regulation. However, they are increasingly under threat from pollution. AIM Foundation’s Forest Cleaning initiative is a direct-action program dedicated to restoring these precious ecosystems.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Problem of Forest Pollution</h2>
                <p>
                  Plastic and other non-biodegradable waste choke our forests, harming wildlife and disrupting natural processes. This pollution not only degrades the beauty of our natural landscapes but also poses a long-term threat to the health of the environment.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Our Hands-On Approach</h2>
                <p>
                  We believe in the power of community action. Our Forest Cleaning initiative organizes and equips volunteers to conduct large-scale cleanup drives in affected forest areas.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Mobilizing Volunteers:</strong> We bring together passionate individuals, students, and corporate groups to take part in our cleaning events.</li>
                  <li><strong>Providing Equipment:</strong> We supply all necessary gear, including gloves, bags, and safety equipment, to ensure a safe and effective cleanup.</li>
                  <li><strong>Waste Management:</strong> Collected waste is sorted and transported for responsible disposal and recycling.</li>
                  <li><strong>Awareness and Education:</strong> Each drive is an opportunity to educate participants and local communities about the importance of reducing waste and protecting our natural heritage.</li>
                </ul>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Your Support Clears the Path for Nature</h2>
                  <p className="mt-4">
                    Your contribution helps us organize more cleaning drives and provide essential resources to our volunteers. By supporting this initiative, you are directly helping to restore the health and beauty of our forests.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/forest-cleaning">Support Forest Cleaning</Link>
                  </Button>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Trash2 /> Join Us in Protecting Our Forests.
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/forest-cleaning"><Leaf className="mr-2 h-4 w-4"/>Donate</Link></Button>
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
            <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate Now</Button>
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
