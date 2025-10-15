"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const causeToFormComponent: Record<string, React.FC> = {
  general: dynamic(
    () =>
      import(
        "@/components/sections/donation-forms/IndividualDonationForm"
      ),
    {
      ssr: false,
      loading: () => (
        <div className="p-8">
          <Skeleton className="h-[500px] w-full" />
        </div>
      ),
    }
  ),
  educational: dynamic(
    () =>
      import(
        "@/components/sections/donation-forms/EducationalDonationForm"
      ),
    {
      ssr: false,
      loading: () => (
        <div className="p-8">
          <Skeleton className="h-[500px] w-full" />
        </div>
      ),
    }
  ),
  "educational-general": dynamic(
    () =>
      import(
        "@/components/sections/donation-forms/EducationalDonationForm"
      ),
    {
      ssr: false,
      loading: () => (
        <div className="p-8">
          <Skeleton className="h-[500px] w-full" />
        </div>
      ),
    }
  ),
  "innocent-smiles": dynamic(
    () =>
      import(
        "@/components/sections/donation-forms/InnocentSmilesDonationForm"
      ),
    {
      ssr: false,
      loading: () => (
        <div className="p-8">
          <Skeleton className="h-[500px] w-full" />
        </div>
      ),
    }
  ),
};

export default function Navbar() {
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const FormComponent = selectedCause
    ? causeToFormComponent[selectedCause]
    : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-[100px] items-center px-4 md:px-6">
        <div className="flex h-full items-center mr-auto">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="AIM Foundation Logo"
              width={120}
              height={60}
              priority
            />
            <span className="hidden md:block font-semibold text-lg text-primary">
              AIM Foundation
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/programs" className="hover:text-primary">
            Programs
          </Link>
          <Link href="/get-involved" className="hover:text-primary">
            Get Involved
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
          <Button
            onClick={() => setSelectedCause("general")}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Donate
          </Button>
        </nav>
      </div>

      {/* Render the selected donation form dynamically */}
      {FormComponent && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative">
            <Button
              onClick={() => setSelectedCause(null)}
              className="absolute top-2 right-2"
              variant="outline"
            >
              Close
            </Button>
            <div className="p-6">
              <FormComponent />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
