
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrusteeEmail from "@/components/layout/TrusteeEmail";

export const metadata: Metadata = {
  title: 'Grievance Redressal - AIM Foundation',
  description: 'Our Grievance Redressal Policy outlines our framework for addressing concerns in a fair, transparent, and timely manner.',
  alternates: {
    canonical: '/grievance-redressal',
  },
};

export default function GrievanceRedressalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Grievance Redressal Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              <p>
                At Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), we are committed to conducting our work with integrity, accountability, and respect for all individuals. We believe every stakeholder has the right to raise concerns, lodge complaints, or provide feedback about any aspect of our operations, services, or conduct of personnel.
              </p>
              <p>
                This Grievance Redressal Policy outlines our framework for receiving, addressing, and resolving grievances in a fair, transparent, and timely manner.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Objective</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>To provide a formal mechanism for stakeholders to raise concerns, complaints, or grievances.</li>
                <li>To ensure that all grievances are handled confidentially, respectfully, and without fear of retaliation.</li>
                <li>To promote accountability, learning, and continuous improvement within the organization.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Scope</h2>
              <p>This policy applies to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Beneficiaries and community members</li>
                <li>Donors, supporters, and partners</li>
                <li>Volunteers, interns, and employees</li>
                <li>Members of the public who interact with AIM Foundation</li>
              </ul>
              <p className="pt-2">Grievances may relate to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Misconduct, discrimination, or abuse</li>
                <li>Unethical behaviour by staff or volunteers</li>
                <li>Program delivery or beneficiary concerns</li>
                <li>Financial integrity or misuse of resources</li>
                <li>Any violation of AIM Foundation’s policies or code of conduct</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Guiding Principles</h2>
               <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Accessibility:</strong> The grievance mechanism is open and easy to access for all stakeholders.</li>
                <li><strong>Confidentiality:</strong> All grievances will be treated with strict confidentiality and shared only on a need-to-know basis.</li>
                <li><strong>Non-retaliation:</strong> No individual will face retaliation for raising a genuine concern in good faith.</li>
                <li><strong>Timeliness:</strong> Grievances will be acknowledged within a reasonable time and resolved promptly.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">How to Raise a Grievance</h2>
              <p>Grievances may be submitted through any of the following channels:</p>
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span>📧 Email:</span> <TrusteeEmail />
                </div>
                <p>📬 Mail: 41, Ballygaunge Terrace, Kolkata 700029</p>
                <p>💬 Feedback box / In-person at project locations (where applicable)</p>
              </div>
              <p>Anonymous complaints will also be accepted, but may be more difficult to investigate fully.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Grievance Redressal Process</h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li><strong>Acknowledgment:</strong> All grievances will be acknowledged within 3–5 working days of receipt.</li>
                <li><strong>Assessment:</strong> The complaint will be reviewed to determine its nature, seriousness, and required action.</li>
                <li><strong>Investigation:</strong> Where necessary, a fair and impartial inquiry will be initiated by the Grievance Officer or designated committee.</li>
                <li><strong>Resolution:</strong> Depending on the issue, corrective action will be taken, and a response will be shared.</li>
              </ol>

              <h2 className="text-2xl font-bold font-headline pt-4">Record-Keeping and Monitoring</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>All grievances and their resolutions will be documented and securely maintained.</li>
                <li>Periodic reports may be submitted to the management/Board for review to improve systems and services.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Review of Policy</h2>
              <p>This policy will be reviewed at least once a year and updated as required to reflect best practices, organizational changes, or legal requirements.</p>

              <div className="pt-6 text-center">
                 <p>We value your voice. Whether you are a beneficiary, donor, partner, or visitor — your feedback helps us grow, improve, and serve with integrity.</p>
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
