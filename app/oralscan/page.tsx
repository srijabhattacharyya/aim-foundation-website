

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import OralScanDonationForm from "../../components/sections/donation-forms/OralScanDonationForm";

export default function OralScanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="OralScan Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="dental health checkup"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                OralScan
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Early Detection for a Healthy Smile, a Healthy Life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Screening Today for a Healthier Tomorrow.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    OralScan is a crucial initiative by AIM Foundation focused on <strong>early detection of oral cancer</strong> through free screening camps in underserved communities. Oral cancer is a significant health threat in India, often diagnosed late due to lack of awareness and access to medical care. OralScan directly confronts this challenge by bringing vital services to those who need them most.
                  </p>
                  <p>
                    Our camps provide more than just screenings. We focus on comprehensive community engagement through:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Free, non-invasive oral cancer screenings</strong> conducted by healthcare professionals.</li>
                    <li><strong>Public awareness campaigns</strong> to educate on the risk factors, including tobacco and alcohol consumption.</li>
                    <li><strong>Guidance on oral hygiene</strong> practices to promote long-term health.</li>
                    <li><strong>Counseling and support</strong> for individuals identified with potential risks.</li>
                    <li><strong>Referrals for further diagnosis and treatment</strong>, ensuring a continuum of care.</li>
                  </ul>
                  <p>
                    By focusing on early detection, OralScan significantly improves the chances of successful treatment and saves lives. The program is built on the belief that preventive care and education are the most powerful tools in fighting this preventable disease. We work to break down barriers of fear and stigma, encouraging community members to take proactive steps for their health.
                  </p>
                  <p>
                    Join us in our mission to combat oral cancer. Your support helps us reach more villages, screen more people, and spread the life-saving message of early detection.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Your Support Can Save a Life</h3>
                  <p>
                    A simple screening can be the difference between life and death. <strong>Your donation to OralScan funds free screening camps, educational materials, and follow-up care for at-risk individuals</strong> in communities with little to no access to dental and health services. Help us detect cancer early and give someone a chance for a healthy future. <strong>Donate today and be a part of the fight against oral cancer.</strong>
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <OralScanDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
