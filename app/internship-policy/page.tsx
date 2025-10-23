

import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactEmail from "@/components/layout/ContactEmail";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Internship Policy - AIM Foundation',
  description: 'Our Internship Policy outlines the principles, expectations, and procedures for engaging interns ethically and effectively.',
  alternates: {
    canonical: '/internship-policy',
  },
};

export default function InternshipPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Internship Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              <p>
                Interns are valuable members of the Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), contributing fresh perspectives and skills to our mission. This Internship Policy outlines the principles, expectations, and procedures for engaging interns ethically, respectfully, and effectively, ensuring a mutually beneficial experience.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Purpose</h2>
              <p>This policy aims to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Define the role and expectations of interns within AIM Foundation.</li>
                <li>Provide a structured and meaningful learning experience for interns.</li>
                <li>Ensure a safe, inclusive, and supportive environment for all interns.</li>
                <li>Clarify the rights and responsibilities of both interns and the organization.</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Who is an Intern?</h2>
              <p>An intern is an individual, typically a student or recent graduate, who engages in a temporary, structured work experience at AIM Foundation to gain practical skills and knowledge in the social sector. Internships are for a fixed duration and may be paid or unpaid, as specified in the internship agreement.</p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Internship Opportunities</h2>
              <p>Interns may be engaged in various areas, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Project implementation and support in <Link href="/healthcare-initiatives" className="text-primary hover:underline">health</Link>, <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>, or <Link href="/sustainability-initiatives" className="text-primary hover:underline">environmental</Link> programs.</li>
                <li>Research, data analysis, and report writing.</li>
                <li>Communications, content creation, and social media management.</li>
                <li>Fundraising and donor relations support.</li>
                <li>Administrative and operational assistance.</li>
              </ul>
              <p>Opportunities are based on organizational needs and the intern's skills and interests.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Recruitment and Onboarding</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Recruitment will be conducted through a fair and transparent process, including an application and interview.</li>
                <li>Successful candidates will receive an internship offer letter detailing the role, duration, stipend (if any), and terms of engagement.</li>
                <li>All interns will undergo an onboarding process covering AIM Foundation’s mission, policies (including <Link href="/code-of-conduct" className="text-primary hover:underline">Code of Conduct</Link> and <Link href="/safeguarding-policy" className="text-primary hover:underline">Safeguarding</Link>), and their specific roles and responsibilities.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Intern Rights</h2>
              <p>Interns at AIM Foundation are entitled to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>A safe, respectful, and non-discriminatory work environment.</li>
                <li>A clear description of their tasks and learning objectives.</li>
                <li>Regular supervision, mentorship, and constructive feedback from a designated supervisor.</li>
                <li>Opportunities for professional development and networking.</li>
                <li>A certificate of completion upon successfully finishing the internship.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Intern Responsibilities</h2>
              <p>Interns are expected to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Adhere to all AIM Foundation policies, including the <Link href="/code-of-conduct" className="text-primary hover:underline">Code of Conduct</Link> and <Link href="/safeguarding-policy" className="text-primary hover:underline">Safeguarding Policy</Link>.</li>
                <li>Perform assigned duties diligently and professionally.</li>
                <li>Maintain confidentiality regarding sensitive organizational and beneficiary information.</li>
                <li>Communicate openly with their supervisor about their progress, challenges, and any concerns.</li>
                <li>Be punctual and committed to the agreed-upon work schedule.</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Code of Conduct</h2>
              <p>All interns must uphold the highest standards of ethical behavior, treating all individuals with dignity and respect, and avoiding any conflicts of interest or misuse of organizational resources.</p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Safeguarding</h2>
              <p>Interns working with children or vulnerable adults must strictly adhere to our <Link href="/safeguarding-policy" className="text-primary hover:underline">Safeguarding Policy</Link>, report any concerns immediately, and prioritize the well-being of beneficiaries at all times.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Internship Completion and Feedback</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>At the end of the internship, a performance review will be conducted.</li>
                <li>Interns are encouraged to provide feedback on their experience to help us improve the program.</li>
                <li>AIM Foundation may terminate an internship if the intern's conduct or performance is unsatisfactory or violates organizational policies.</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Contact and Support</h2>
              <p>For questions about internships or to report any concerns, please contact:</p>
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span>📧 Email:</span> <ContactEmail />
                </div>
                <p>📞 Phone: +91 6290022813</p>
                <p>🏢 Address: 41, Ballygaunge Terrace, Kolkata 700029, India</p>
              </div>

              <div className="pt-6 text-center">
                <p>We are excited to welcome talented and passionate individuals to our team and are committed to providing a rewarding and enriching internship experience.</p>
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
