
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'Code of Conduct - AIM Foundation',
  description: 'Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization.',
  alternates: {
    canonical: '/code-of-conduct',
  },
};

export default function CodeOfConductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Code of Conduct
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              <p>
                At Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), we are committed to serving communities with integrity, compassion, and respect. This Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization.
              </p>
              <p>
                By upholding this code, we ensure a professional, inclusive, and safe environment for all.
              </p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Professionalism and Integrity</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Act honestly, ethically, and responsibly at all times.</li>
                <li>Represent AIM Foundation positively in all public and private engagements.</li>
                <li>Avoid conflicts of interest, self-dealing, or misuse of organizational resources.</li>
                <li>Ensure accuracy in all communications, records, and reports.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Respect and Non-Discrimination</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Treat all individuals with dignity, courtesy, and fairness.</li>
                <li>Do not discriminate on the basis of gender, caste, religion, race, age, disability, sexual orientation, or economic status.</li>
                <li>Promote a culture of inclusion, equity, and mutual respect.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Child and Vulnerable Person Protection</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Strictly adhere to AIM Foundation’s Safeguarding Policy when working with children, youth, or vulnerable adults.</li>
                <li>Never engage in or tolerate any form of abuse, exploitation, neglect, or inappropriate behavior.</li>
                <li>Report all safeguarding concerns immediately to the designated officer.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Harassment-Free Environment</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Maintain a work culture free from harassment, bullying, intimidation, or retaliation.</li>
                <li>Respect personal boundaries and obtain consent in all interactions.</li>
                <li>Sexual harassment in any form will result in immediate disciplinary action, as per the law.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Confidentiality and Data Protection</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Maintain the confidentiality of all sensitive or personal information related to beneficiaries, donors, staff, and programs.</li>
                <li>Do not share internal data or documents with unauthorized persons.</li>
                <li>Comply with AIM Foundation’s Privacy Policy and relevant data protection laws.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Use of Resources</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Use AIM Foundation’s assets, funds, and materials responsibly and only for official purposes.</li>
                <li>Avoid waste, fraud, or unauthorized personal use of resources.</li>
                <li>Ensure transparency in all financial dealings.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Accountability and Compliance</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Follow all applicable laws, regulations, and organizational policies.</li>
                <li>Cooperate fully with internal or external audits, reviews, or investigations.</li>
                <li>Report any violations of this code or misconduct through appropriate channels, including the Whistleblower Policy.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Social Media and Public Communication</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Do not make unauthorized statements or publish information on behalf of AIM Foundation.</li>
                <li>When using social media, ensure content aligns with the organization’s values and protects the dignity of beneficiaries.</li>
                <li>Avoid sharing images, videos, or sensitive information without proper consent.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Commitment to Learning and Improvement</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Be open to feedback, training, and capacity building.</li>
                <li>Strive to improve your knowledge, skills, and contribution to the mission of the foundation.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Disciplinary Action</h2>
              <p>
                Violations of this Code of Conduct may lead to disciplinary action, including verbal or written warnings, termination of role or engagement, and legal action where necessary.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Acknowledgment</h2>
              <p>
                All individuals must sign a Code of Conduct Agreement before commencing work or volunteering with AIM Foundation. This confirms their understanding and acceptance of the responsibilities outlined herein.
              </p>

              <div className="pt-6 text-center">
                <p>Together, we uphold the values of AIM Foundation and work toward a more just, compassionate, and empowered society.</p>
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
