
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import PayrollGivingBenefits from "@/components/sections/PayrollGivingBenefits";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Payroll Giving Programs with AIM Foundation India",
  description:
    "Support social impact with AIM Foundation Payroll Giving. Enable employees to donate effortlessly, strengthen CSR goals, and create lasting community change.",
  keywords: [
    "payroll Giving AIM Foundation",
    "workplace giving India",
    "employee donation programs AIM Foundation",
    "CSR payroll giving India",
    "corporate giving AIM Foundation",
    "monthly salary donation NGO",
    "AIM Foundation payroll CSR",
    "employee payroll donation India",
    "workplace charity partnership",
    "sustainable giving programs AIM Foundation",
  ],
  robots: "index, follow",
  authors: [{ name: "AIM Foundation" }],
  openGraph: {
    type: "website",
    url: "https://aimindia.org.in/payroll-giving",
    title: "Payroll Giving Programs with AIM Foundation India",
    description:
      "Support social impact with AIM Foundation Payroll Giving. Enable employees to donate effortlessly, strengthen CSR goals, and create lasting community change.",
    images: [
      {
        url: "https://aimindia.org.in/home.avif",
        width: 1200,
        height: 630,
        alt: "Payroll Giving with AIM Foundation",
      },
    ],
    siteName: "AIM Foundation",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aimindiango",
    title: "Payroll Giving Programs with AIM Foundation India",
    description:
      "Support social impact with AIM Foundation Payroll Giving. Enable employees to donate effortlessly, strengthen CSR goals, and create lasting community change.",
    images: ["https://aimindia.org.in/home.avif"], // ✅ correct key
  },
  alternates: {
    canonical: "/payroll-giving",
  },
};

export default function PayrollGivingPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://www.aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604",
    ],
    "description":
      "Support social impact with AIM Foundation Payroll Giving. Enable employees to donate effortlessly, strengthen CSR goals, and create lasting community change.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-payroll"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="relative w-full">
            <div className="relative w-full">
              <Image
                src="/images/banner/pg.avif"
                alt="Payroll Giving"
                width={1920}
                height={334}
                className="w-full h-auto object-cover"
                data-ai-hint="corporate charity partnership"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
              <div className="relative z-10 text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Payroll Giving with AIM Foundation
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  A Simple Way to Give Back—Every Month, Every Paycheck
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6 text-lg text-muted-foreground text-justify">
                  <p>
                    Payroll Giving is a powerful and seamless way for employees
                    and organizations to support social causes they care about.
                    Through this program, a small, voluntary amount is deducted
                    from an employee’s monthly salary and donated directly to
                    AIM Foundation’s initiatives, creating lasting impact—
                    without any extra effort.
                  </p>

                  <h3 className="text-2xl font-bold font-headline pt-6">
                    Why Choose Payroll Giving?
                  </h3>
                  <p>
                    Payroll Giving is more than just a donation—it’s a culture.
                    It encourages employees to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Contribute effortlessly from their workplace</li>
                    <li>Feel connected to a larger social purpose</li>
                    <li>Participate in creating positive, sustainable change</li>
                    <li>
                      Bond as a team through shared values and collective impact
                    </li>
                  </ul>
                  <p>
                    For organizations, it’s a meaningful way to demonstrate your
                    social commitment, while fostering <Link href="/employee-engagement" className="text-primary hover:underline">employee engagement</Link> and
                    team spirit.
                  </p>

                  <h3 className="text-2xl font-bold font-headline pt-6">
                    How It Works
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>
                      Employees opt-in voluntarily to donate a fixed monthly
                      amount
                    </li>
                    <li>
                      The organization facilitates automatic deductions from
                      their salaries
                    </li>
                    <li>
                      AIM Foundation receives the funds and channels them into
                      programs across <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>, <Link href="/healthcare-initiatives" className="text-primary hover:underline">healthcare</Link>, <Link href="/gender-equality-initiative" className="text-primary hover:underline">women empowerment</Link>, <Link href="/sustainability-initiatives" className="text-primary hover:underline">environment</Link>, and more
                    </li>
                    <li>
                      Regular updates and impact reports are shared with both
                      employees and the organization
                    </li>
                  </ol>
                  <p>
                    It’s easy to implement, fully transparent, and customizable
                    to your <Link href="/corporate-social-responsibility" className="text-primary hover:underline">CSR</Link> goals.
                  </p>

                  <h3 className="text-2xl font-bold font-headline pt-6">
                    Go Beyond Donations
                  </h3>
                  <p>
                    Payroll Giving isn’t just about monetary contributions.
                    Employees also have the chance to engage deeper with AIM
                    Foundation’s work by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><Link href="/volunteering" className="text-primary hover:underline">Volunteering</Link> on special occasions</li>
                    <li>Participating in community drives and campaigns</li>
                    <li>
                      Visiting project locations to witness their impact
                      firsthand
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <PayrollGivingBenefits />

          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                  Start a Culture of Giving in Your Workplace
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Empower your employees to make a difference—right from their
                  desks. Partner with AIM Foundation to launch your Payroll
                  Giving Program today.
                </p>
                <div className="mt-6">
                  <p className="font-semibold">
                    Email us at: <TrusteeEmail />
                  </p>
                </div>
                <p className="mt-4 text-lg font-semibold">
                  Small contributions. Big change. Every month. Together.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
