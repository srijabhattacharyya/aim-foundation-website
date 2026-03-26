import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'Press Releases | AIM Foundation',
  description: 'Welcome to the official Press Releases page of AIM Foundation. Stay updated with our latest announcements, initiatives, and impact stories.',
};

export default function PressReleasesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">
                Press Releases
              </h1>
              <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Welcome to the official Press Releases page of AIM Foundation. Here you will find our latest announcements, initiatives, partnerships, events, and impact stories.
                </p>
              </div>
            </div>
            
            {/* Placeholder for future release list */}
            <div className="mt-16 max-w-4xl mx-auto space-y-6">
              <div className="p-6 rounded-lg border border-dashed border-primary/30 bg-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground italic">Latest releases coming soon...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
