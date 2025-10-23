

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import Link from 'next/link';

export default function WhistleblowerPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Whistleblower Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              
              <h2 className="text-2xl font-bold font-headline pt-4">Purpose</h2>
              <p>The purpose of this Whistleblower Policy is to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Encourage and enable employees, <Link href="/volunteering" className="text-primary hover:underline">volunteers</Link>, beneficiaries, donors, and stakeholders to report any unethical behavior, misconduct, or wrongdoing in good faith.</li>
                <li>Establish a safe and confidential process for reporting concerns.</li>
                <li>Protect whistleblowers from retaliation, discrimination, or victimization.</li>
              </ul>
              <p>AIM Foundation is committed to the highest standards of integrity, transparency, and ethical conduct in all its operations and activities.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Scope</h2>
              <p>This policy applies to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Employees, volunteers, interns, and consultants</li>
                <li>Board members and trustees</li>
                <li>Donors, partners, vendors, and beneficiaries</li>
                <li>Any other stakeholder associated with AIM Foundation</li>
              </ul>
              <p className="pt-2">Reports may relate to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Financial irregularities or fraud</li>
                <li>Misuse of organizational funds or assets</li>
                <li>Corruption or bribery</li>
                <li>Harassment or abuse (including child abuse or exploitation)</li>
                <li>Discrimination or violation of human rights</li>
                <li>Violation of AIM Foundation policies, including <Link href="/code-of-conduct" className="text-primary hover:underline">Code of Conduct</Link>, <Link href="/safeguarding-policy" className="text-primary hover:underline">Safeguarding Policy</Link>, etc.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Principles</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Confidentiality:</strong> All reports will be handled confidentially, and the identity of the whistleblower will be protected.</li>
                <li><strong>Non-Retaliation:</strong> No individual will face retaliation for reporting a concern in good faith, even if it is later found to be unsubstantiated.</li>
                <li><strong>Good Faith:</strong> Reports must be made honestly and based on reasonable grounds.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Reporting Channels</h2>
              <p>Whistleblowers can report concerns through any of the following confidential channels:</p>
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span>📧 Email:</span> <TrusteeEmail />
                </div>
                <p>📬 Mail: 41, Ballygaunge Terrace, Kolkata 700029</p>
              </div>
              <p><strong>Anonymous Reporting:</strong> Reports may also be submitted anonymously. However, including contact details may help with investigation and resolution.</p>
              <p>All complaints will be directed to the Whistleblower Committee or a designated Compliance Officer.</p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Investigation Process</h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li><strong>Acknowledgment:</strong> Complaints will be acknowledged within 5 working days.</li>
                <li><strong>Preliminary Review:</strong> The Whistleblower Committee or designated officer will conduct a preliminary review to assess validity.</li>
                <li><strong>Investigation:</strong> A full investigation will be initiated if the complaint warrants further inquiry. This may include interviews, document review, and gathering of evidence.</li>
                <li><strong>Outcome:</strong> Based on findings, necessary action will be taken, which may include disciplinary action, legal reporting, or corrective measures.</li>
                <li><strong>Closure:</strong> The whistleblower (if identified) will be informed of the resolution status, subject to legal and confidentiality considerations.</li>
              </ol>

              <h2 className="text-2xl font-bold font-headline pt-4">Protection Against Retaliation</h2>
              <p>AIM Foundation strictly prohibits retaliation, harassment, or discrimination against any person who reports a concern in good faith. Any retaliatory action will be treated as a serious violation of this policy and may lead to disciplinary action, including termination or legal proceedings.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">False Allegations</h2>
              <p>If a complaint is found to be knowingly false or malicious, AIM Foundation reserves the right to take appropriate disciplinary action against the individual making the false claim.</p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Records and Documentation</h2>
              <p>All reports, investigations, and outcomes will be documented and securely stored. Periodic summaries may be shared with the Board of Trustees while maintaining confidentiality.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Review of Policy</h2>
              <p>This policy will be reviewed annually and revised as necessary to comply with best practices, evolving legal standards, and organizational needs.</p>

              <div className="pt-6 text-center">
                <p>At AIM Foundation, integrity and accountability are at the core of our mission. We thank our community members for standing up for transparency and fairness.</p>
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
