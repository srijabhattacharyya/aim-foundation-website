
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import PayrollGivingBenefits from "@/components/sections/PayrollGivingBenefits";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import { Button } from "@/components/ui/button";

export default function PayrollGivingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Payroll Giving"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="corporate charity partnership"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Payroll Giving with AIM Foundation
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                A Simple Way to Make a Big Impact
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Empower Change, One Paycheck at a Time</h2>
              <p className="mt-4 text-lg text-muted-foreground text-justify">
                Payroll Giving is a simple, effective, and convenient way for employees to make regular donations to AIM Foundation directly from their salary. A small, consistent contribution from many can create a powerful wave of change, providing us with the steady support needed to sustain our long-term community development projects. It's an effortless way for your team to engage in philanthropy and for your company to foster a culture of giving.
              </p>
            </div>
          </div>
        </section>

        <PayrollGivingBenefits />

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Implement Payroll Giving?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Partner with us to set up a seamless Payroll Giving program for your employees and join a network of socially responsible companies dedicated to creating lasting impact.
                </p>
                <div className="mt-6">
                    <p className="font-semibold">Connect with our Corporate Partnerships Team</p>
                    <p className="mt-2">
                        Email us at: <TrusteeEmail />
                    </p>
                </div>
                <Button size="lg" className="mt-8">
                    Get Started Today
                </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
