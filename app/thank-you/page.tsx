
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Thank You | AIM Foundation',
  description: 'Thank you for your generous donation to AIM Foundation. Your support helps us create a lasting impact in the lives of those we serve.',
  robots: 'noindex, follow',
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col bg-muted">
        <Breadcrumbs items={[{ label: 'Donation' }, { label: 'Thank You' }]} />
        <div className="flex-grow flex items-center justify-center py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center bg-card p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <CheckCircle2 className="h-20 w-20 text-primary animate-bounce" />
                  <Heart className="h-8 w-8 text-destructive absolute -top-2 -right-2 fill-destructive animate-pulse" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-4">
                Thank You!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Your contribution has been received successfully. You are now a part of a movement that is changing lives and building futures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild size="lg" className="transition-transform transform hover:scale-105">
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-transform transform hover:scale-105">
                  <Link href="/blog">
                    Read Impact Stories <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-muted">
                <p className="text-sm text-muted-foreground">
                  Follow our journey of impact on social media:
                </p>
                <div className="flex justify-center gap-6 mt-4">
                  <Link href="https://www.facebook.com/aimindiango/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Facebook</Link>
                  <Link href="https://www.instagram.com/aimfoundation_ngo/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Instagram</Link>
                  <Link href="https://www.linkedin.com/in/aim-foundation-ngo/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
