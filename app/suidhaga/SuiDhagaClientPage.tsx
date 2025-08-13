
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import InitiativeSidebar from "@/components/layout/InitiativeSidebar";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/SuiDhagaDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function SuiDhagaClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
            <div className="relative w-full">
                <Image
                    src="https://placehold.co/1920x580.png"
                    alt="SuiDhaga Banner"
                    width={1920}
                    height={580}
                    className="w-full h-auto object-cover brightness-50"
                    data-ai-hint="women tailoring skills"
                />
            </div>
            <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    SuiDhaga
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Stitching Dreams, Weaving Futures.
                </p>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
               <InitiativeSidebar from="gender-equality" />
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Threads of Hope, Dreams in Every Stitch</h2>
                    <div className="text-lg text-muted-foreground space-y-4 text-justify">
                      <p>
                        SuiDhaga is AIM Foundation’s skill development initiative dedicated to empowering women from underserved communities. By offering structured training in tailoring and embroidery, this program helps women turn time-honored domestic crafts into meaningful livelihood opportunities.
                      </p>
                      <p>
                        Many of these women have immense potential but lack access to formal employment or financial resources. SuiDhaga bridges that gap by providing them with practical, hands-on instruction, experienced trainers, and supportive learning environments. The focus is not on entrepreneurship but on enabling immediate, income-generating skills that women can use to support their families—whether by stitching from home or working in local tailoring units.
                      </p>
                      <p>
                        Through SuiDhaga, women gain more than just skills—they gain dignity, confidence, and a renewed sense of purpose. They become active contributors to their households, role models in their communities, and participants in a larger movement toward equality and empowerment.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">Hold the thread that changes her life</h3>
                      <p>
                        A sewing machine can be a tool of empowerment, and a new skill can be the start of a new life. <strong>Your donation to SuiDhaga provides women with the training, materials, and support they need to become financially independent.</strong> Help us equip more women with the skills to build a better future for themselves and their families. <strong>Donate today and help stitch together a world of opportunity.</strong>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
               <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to SuiDhaga</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                  <DynamicDonationForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
