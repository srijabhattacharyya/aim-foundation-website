
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ContactEmail from "@/components/layout/ContactEmail";
import { Button } from "@/components/ui/button";

export default function InternshipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down">
                    Internship Opportunities at AIM Foundation
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up text-muted-foreground">
                    Learn. Contribute. Grow. Make a Difference.
                </p>
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-20 lg:pb-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-muted-foreground text-justify">
                <p>
                  Are you ready to turn your passion into purpose? At AIM Foundation, we offer impactful internship opportunities in India for students, gap-year travellers, and aspiring professionals seeking hands-on experience in the social sector.
                </p>
                <p>
                  Our internships are thoughtfully designed fixed-term programs that align with academic schedules and career goals. Whether you’re exploring a future in development or looking to apply your knowledge meaningfully, we provide a space to learn by doing.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Internship Areas You Can Explore:</h2>
                <p>Dive into real-world projects in diverse sectors:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Health & Hygiene</strong> – Support health camps, awareness drives, and wellness outreach.</li>
                  <li><strong>Education & Child Development</strong> – Assist in teaching, mentorship, and learning materials.</li>
                  <li><strong>Women’s Empowerment</strong> – Contribute to skill-building workshops, advocacy, and training.</li>
                  <li><strong>Community Development</strong> – Work on grassroots initiatives that uplift underserved communities.</li>
                  <li><strong>Environmental Conservation</strong> – Join green projects like tree planting, waste reduction, and eco-awareness.</li>
                </ul>

                <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Why Choose an Internship with AIM Foundation?</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Gain real-world experience in impactful social work</li>
                  <li>Collaborate with dedicated professionals and community changemakers</li>
                  <li>Receive an official Internship Certificate upon successful completion</li>
                  <li>Build essential skills in communication, leadership, and project management</li>
                  <li>Contribute directly to positive change in communities across India</li>
                </ul>
                
                <h3 className="text-2xl font-bold font-headline pt-6">More Ways to Get Involved</h3>
                <p>
                    In addition to internships, we offer volunteer opportunities and gap-year programs—perfect for anyone eager to contribute to meaningful change while learning and growing.
                </p>

                <div className="bg-card p-6 rounded-lg shadow-md mt-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Begin?</h2>
                    <p className="mt-4">
                        Before applying, we encourage you to read our <Link href="/volunteer-policy" className="underline hover:text-primary">Volunteer Policy</Link> and the <Link href="/code-of-conduct" className="underline hover:text-primary">Code of Conduct</Link> to ensure a respectful, responsible, and enriching journey.
                    </p>
                    <p className="mt-4 font-semibold">
                        Start your journey of purpose today!
                    </p>
                    <p className="mt-4">
                        Apply now to intern with AIM Foundation and become part of something truly transformative.
                    </p>
                     <p className="mt-4">
                        Write to: <ContactEmail />
                    </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
