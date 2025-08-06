
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactEmail from "@/components/layout/ContactEmail";

export default function VolunteeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/volunteer.jpg"
              alt="Volunteers Banner"
              width={1920}
              height={334}
              className="w-full h-auto object-cover brightness-50"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Volunteer with AIM Foundation
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Create Change!
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-muted-foreground text-justify">
                <p>
                  Looking to make a real difference? Join AIM Foundation and be part of meaningful, life-changing work in Kolkata, India – The City of Joy. Whether you're an individual, a group, or a family, we offer safe, affordable, and impactful volunteer experiences designed to empower both communities and volunteers.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Explore Our Volunteer Programs:</h2>
                <p>Make an impact in areas that matter most:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Healthcare</strong> – Support vital medical services and spread health awareness.</li>
                  <li><strong>Education</strong> – Teach and inspire underprivileged children with learning tools and support.</li>
                  <li><strong>Environmental Sustainability</strong> – Champion green initiatives and eco-awareness.</li>
                  <li><strong>Women Empowerment</strong> – Help women build leadership, skills, and financial independence.</li>
                  <li><strong>Child Development</strong> – Nurture children’s physical, mental, and emotional growth.</li>
                  <li><strong>Disaster Relief</strong> – Provide critical aid like food, medicine, and essentials during crises.</li>
                </ul>
                <p>
                  Kolkata is a city rich in culture and compassion—once home to Mother Teresa's iconic mission. Volunteering here offers a powerful blend of cultural immersion and social impact.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Virtual Volunteering: Make a Difference from Anywhere!</h2>
                <p>
                  Not in India? No problem! Our Virtual Volunteering Program lets you support meaningful causes right from your home.
                </p>
                <p>Contribute your skills in:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Online tutoring & mentoring</li>
                  <li>Digital marketing & fundraising</li>
                  <li>Graphic design & content creation</li>
                  <li>IT support & website development</li>
                </ul>
                 <p>Whether you're a student, professional, or retiree, your talents can make a big impact—no matter where you are.</p>

                <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Why Volunteer with AIM Foundation?</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Safe, supportive, and impactful programs</li>
                  <li>Real community engagement, real change</li>
                  <li>Flexible remote volunteering options</li>
                  <li>Certificate of Completion for every volunteer</li>
                </ul>

                <div className="bg-card p-6 rounded-lg shadow-md mt-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Get Involved?</h2>
                    <p className="mt-4">
                    Before applying, please explore our <Link href="/volunteer-policy" className="underline hover:text-primary">Volunteer Orientation Handbook</Link> and review our <Link href="/code-of-conduct" className="underline hover:text-primary">Code of Conduct for Working with Children & Young People</Link>.
                    </p>
                    <p className="mt-4 font-semibold">
                    Join Us & Be the Change You Wish to See!
                    </p>
                    <p className="mt-4">
                        Start your journey of purpose and compassion—Apply now to volunteer with AIM Foundation! Write to: <ContactEmail />
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
