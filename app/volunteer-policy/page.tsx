

import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactEmail from "@/components/layout/ContactEmail";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Volunteer Policy | AIM Foundation',
  description: 'Learn about AIM Foundation’s volunteer policy, rights, responsibilities, code of conduct, and opportunities for meaningful engagement.',
  keywords: ['AIM Foundation volunteer policy', 'NGO volunteering India', 'volunteer rights', 'volunteer code of conduct', 'volunteer opportunities'],
  robots: 'index, follow',
  alternates: { canonical: '/volunteer-policy' },
};

export default function VolunteerPolicyPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIM Foundation",
    url: "https://www.aimindia.org.in/",
    logo: "https://aimindia.org.in/logo.png",
    sameAs: [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    description: "Learn about AIM Foundation’s volunteer policy, rights, responsibilities, and volunteering opportunities.",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-volunteer"
      />
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Volunteer Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify break-words">
              <p>
                <Link href="/volunteering" className="text-primary hover:underline">Volunteers</Link> are the heart of Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), helping us drive positive change in communities through <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>, <Link href="/healthcare-initiatives" className="text-primary hover:underline">health</Link>, empowerment, and social development initiatives. This Volunteer Policy outlines the principles, expectations, and procedures for engaging volunteers ethically, respectfully, and effectively.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Purpose</h2>
              <p>This policy aims to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Define the role of volunteers within AIM Foundation</li>
                <li>Ensure mutual respect, clarity, and consistency in volunteer engagement</li>
                <li>Promote a safe, inclusive, and supportive volunteering environment</li>
                <li>Protect the rights and responsibilities of both volunteers and the organization</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Who is a Volunteer?</h2>
              <p>A volunteer is any individual who offers their time, skills, and service to AIM Foundation without financial compensation, under the guidance and supervision of the organization. Volunteers may support short-term events, long-term projects, or remote initiatives.</p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Volunteer Opportunities</h2>
              <p>Volunteers may be engaged in:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Teaching and mentoring children</li>
                <li>Assisting at health camps or outreach drives</li>
                <li>Organizing fundraising or awareness events</li>
                <li>Office and administrative support</li>
                <li>Graphic design, social media, or content writing</li>
                <li>Research and community surveys</li>
              </ul>
              <p>Opportunities will be matched based on skills, availability, and program needs.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Recruitment and Onboarding</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Interested individuals must complete a Volunteer Application Form and may undergo a basic screening or interview.</li>
                <li>Volunteers working directly with children or vulnerable groups may be required to submit identity/address proof and references.</li>
                <li>Orientation will be provided covering AIM Foundation’s mission, <Link href="/code-of-conduct" className="text-primary hover:underline">code of conduct</Link>, <Link href="/safeguarding-policy" className="text-primary hover:underline">safeguarding policy</Link>, and assigned duties.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Volunteer Rights</h2>
              <p>Volunteers at AIM Foundation are entitled to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>A respectful, safe, and non-discriminatory environment</li>
                <li>Clear communication about tasks, responsibilities, and expectations</li>
                <li>Proper supervision and support</li>
                <li>Recognition of their contributions</li>
                <li>Access to relevant policies and <Link href="/grievance-redressal" className="text-primary hover:underline">grievance mechanisms</Link></li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Volunteer Responsibilities</h2>
              <p>Volunteers are expected to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Act respectfully and ethically at all times</li>
                <li>Maintain the confidentiality of beneficiary and organizational information as per our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></li>
                <li>Be punctual, reliable, and committed to agreed tasks</li>
                <li>Follow safety, safeguarding, and child protection guidelines</li>
                <li>Inform their supervisor in case of absence, delay, or difficulty</li>
                <li>Not represent AIM Foundation publicly or in media without prior authorization</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Code of Conduct</h2>
              <p>All volunteers must adhere to our <Link href="/code-of-conduct" className="text-primary hover:underline">Code of Conduct</Link> and:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Treat beneficiaries, staff, and fellow volunteers with dignity and kindness</li>
                <li>Avoid any form of harassment, abuse, or exploitation</li>
                <li>Never engage in political, religious, or personal solicitation during volunteering</li>
                <li>Refrain from using AIM Foundation’s name for personal, commercial, or fundraising purposes without written consent</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Safeguarding</h2>
              <p>Volunteers working with children or vulnerable adults must:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Adhere to the <Link href="/safeguarding-policy" className="text-primary hover:underline">Safeguarding Policy</Link></li>
                  <li>Report any concerns or suspected abuse to the designated Safeguarding Officer</li>
                  <li>Avoid being alone with a child in private spaces</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Volunteer Exit and Feedback</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Volunteers may withdraw their services at any time with prior notice.</li>
                <li>AIM Foundation may end a volunteer’s involvement if conduct or performance violates policy or ethics.</li>
                <li>All volunteers are encouraged to provide feedback upon completion of service to help improve volunteer engagement.</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Certification and Acknowledgment</h2>
              <p>Upon successful completion of volunteering, AIM Foundation may issue a Volunteer Certificate or Letter of Appreciation, depending on the nature and duration of the contribution.</p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Liability</h2>
              <p>AIM Foundation will take reasonable care for the safety of volunteers during organized activities but is not liable for personal loss, injury, or damage arising outside the scope of official volunteering duties.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Contact and Support</h2>
              <p>For questions, volunteering opportunities, or reporting concerns, please contact:</p>
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span>📧 Email:</span> <ContactEmail />
                </div>
                <p>📞 Phone: +91 6290022813</p>
                <p>🏢 Address: 41, Ballygaunge Terrace, Kolkata 700029, India</p>
              </div>

              <div className="pt-6 text-center">
                <p>Volunteers are invaluable partners in our mission to serve humanity. We are grateful for your time, energy, and compassion — and we look forward to making a difference together.</p>
                <p className="mt-2">— Team AIM Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
