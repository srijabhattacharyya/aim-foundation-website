
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Frown } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-muted">
        <div className="text-center p-8">
          <Frown className="mx-auto h-24 w-24 text-primary opacity-50 mb-4" />
          <h1 className="text-6xl md:text-9xl font-extrabold text-primary font-headline">
            404
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
            Oops! Page Not Found.
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
            The page you are looking for might have been moved or doesn't exist.
          </p>
          <Button asChild size="lg" className="mt-8 transition-transform transform hover:scale-105">
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
