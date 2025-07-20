
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import SoulCircleDonationForm from "@/components/sections/donation-forms/SoulCircleDonationForm";

export default function SoulCirclePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="SoulCircle Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="mental health support"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SoulCircle
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Your Safe Space to Talk and Heal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">24/7 Emotional Support, Just a Chat Away</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                        SoulCircle is an innovative <strong>AI-powered mental health support app</strong> created to provide accessible, compassionate, and judgment-free support for anyone experiencing emotional distress, stress, anxiety, loneliness, or other mental health challenges.
                    </p>
                    <p>
                        Whether you're struggling in silence, need someone to talk to, or just want daily emotional check-ins, <strong>SoulCircle's intelligent AI mental health counselors</strong> are always available—24/7. These virtual companions are designed to <strong>listen empathetically, respond mindfully</strong>, and provide <strong>supportive guidance</strong> based on therapeutic frameworks and emotional well-being best practices.
                    </p>
                    <h3 className="text-2xl font-bold font-headline pt-4">SoulCircle is especially helpful for:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>People who hesitate to seek traditional therapy</li>
                        <li>Those in regions with limited mental health resources</li>
                        <li>Individuals needing immediate emotional support at odd hours</li>
                        <li>Youth and students navigating emotional challenges</li>
                    </ul>
                     <h3 className="text-2xl font-bold font-headline pt-4">Key features include:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Private, confidential conversations</strong> with AI counselors</li>
                        <li><strong>Mood tracking and journaling tools</strong></li>
                        <li><strong>Mindfulness prompts and stress-relief exercises</strong></li>
                    </ul>
                    <p>
                        In a world where mental health support is often hard to access, SoulCircle bridges the gap, creating a safe, stigma-free space where users can feel heard, supported, and guided toward emotional balance.
                    </p>
                    <h3 className="text-2xl font-bold font-headline pt-4">Be the Reason Someone Feels Heard Today</h3>
                    <p>
                        Millions suffer in silence, afraid or unable to seek help for their mental health. With your support, SoulCircle can offer 24/7 emotional care—free of stigma, barriers, or judgment—to those who need it most. Your donation helps us improve AI emotional intelligence, expand multilingual access, and reach more isolated individuals, especially students, youth, and those in underserved regions. Just ₹500 can fund a month of safe, compassionate support for someone silently battling anxiety, stress, or depression. Mental health is not a luxury—it’s a necessity. Help us make healing accessible to all. Donate now.
                    </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <SoulCircleDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
