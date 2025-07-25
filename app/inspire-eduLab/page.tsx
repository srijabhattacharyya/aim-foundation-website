
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/InspireEduLabDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function InspireEduLabPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Inspire EduLab Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="modern classroom technology"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Inspire EduLab
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Transforming Learning, Empowering Minds
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Redefining Classrooms for a Digital Tomorrow</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Inspire EduLab transforms traditional classrooms into smart, internet-enabled learning hubs that spark curiosity and engagement. With interactive tools like audio-visual content, online expert sessions, and dynamic 2D/3D animations, it makes complex lessons dynamic and easier to grasp for every student.
                  </p>
                  <p>
                    Our approach bridges the gap between conventional education and modern technology, empowering students with the skills they need for tomorrow. By creating immersive and interactive learning experiences, Inspire EduLab fosters a love for learning and prepares students to thrive in a digital world. We believe in providing the tools that not only educate but also inspire innovation and critical thinking.
                  </p>
                  <p>
                    The program focuses on creating a level playing field, ensuring that students from all backgrounds have access to high-quality digital education. From rural villages to urban centers, Inspire EduLab is dedicated to building a brighter, more equitable future through the power of technology.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Help Spark a Child’s Curiosity</h3>
                  <p>
                    Your support can turn an ordinary classroom into a world of discovery. With your donation, we can equip more schools with smartboards, internet access, and interactive digital tools—bringing engaging, future-ready education to children who need it most. Whether in a remote village or an urban slum, every student deserves the chance to learn through innovation. <strong>Donate today</strong> to help bridge the digital divide and empower young minds to think big, learn boldly, and dream beyond boundaries. <strong>Together, let’s inspire the future.</strong>
                  </p>
                </div>
              </div>
              
              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <Dialog open={showForm} onOpenChange={setShowForm}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full transition-transform transform hover:scale-105">Donate to Inspire EduLab</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                    <DynamicDonationForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
