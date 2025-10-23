

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import ContactEmail from "@/components/layout/ContactEmail";
import Link from 'next/link';

export default function SafeguardingPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Safeguarding Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              <p>
                At Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), we are committed to creating a safe, inclusive, and respectful environment for all individuals who engage with our organization — especially children, women, persons with disabilities, and other vulnerable communities.
              </p>
              <p>
                This Safeguarding Policy outlines our principles and procedures to prevent and respond to any form of abuse, exploitation, harassment, or neglect. It applies to all staff, <Link href="/volunteering" className="text-primary hover:underline">volunteers</Link>, partners, and anyone representing or working on behalf of AIM Foundation.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Purpose and Scope</h2>
              <p>The purpose of this policy is to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Protect beneficiaries, especially children and vulnerable adults, from harm or abuse.</li>
                <li>Ensure all AIM Foundation representatives understand their safeguarding responsibilities.</li>
                <li>Provide a clear procedure for responding to safeguarding concerns or allegations.</li>
              </ul>
              <p>This policy applies to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>All employees, board members, interns, and volunteers</li>
                <li>Contractors, consultants, donors, and program partners</li>
                <li>Any individual involved in AIM Foundation programs, whether directly or indirectly</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Key Definitions</h2>
              <ul className="list-disc list-inside space-y-2">
                  <li><strong>Safeguarding:</strong> The proactive responsibility to protect people from harm or abuse, especially children and vulnerable individuals.</li>
                  <li><strong>Child:</strong> Any individual under the age of 18, as defined by the Juvenile Justice Act, 2015 (India).</li>
                  <li><strong>Vulnerable Adult:</strong> A person aged 18 or over who may be unable to protect themselves due to age, illness, disability, or social circumstances.</li>
                  <li><strong>Abuse:</strong> Includes physical, emotional, sexual, or financial harm, neglect, and exploitation.</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Legal Framework</h2>
              <p>This policy complies with:</p>
              <ul className="list-disc list-inside space-y-2">
                  <li>The Protection of Children from Sexual Offences (POCSO) Act, 2012</li>
                  <li>The Juvenile Justice (Care and Protection of Children) Act, 2015</li>
                  <li>The Bharatiya Nyaya Sanhita (BNS), 2023</li>
                  <li>The Information Technology Act, 2000</li>
                  <li>International standards such as the UN Convention on the Rights of the Child</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Policy Commitments</h2>
              <p>AIM Foundation commits to:</p>
              <ul className="list-disc list-inside space-y-2">
                  <li>Prioritise safety and dignity of all participants in every program and interaction.</li>
                  <li>Ensure all staff and volunteers undergo orientation on safeguarding and <Link href="/code-of-conduct" className="text-primary hover:underline">code of conduct</Link>.</li>
                  <li>Require background checks and screening for individuals working directly with children or vulnerable groups.</li>
                  <li>Obtain informed consent from parents or guardians for activities involving children.</li>
                  <li>Never engage in or tolerate any form of abuse, harassment, or exploitation.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Code of Conduct for Staff and Volunteers</h2>
              <p>All AIM Foundation personnel must:</p>
              <ul className="list-disc list-inside space-y-2">
                  <li>Treat all individuals with respect and fairness</li>
                  <li>Maintain appropriate professional boundaries</li>
                  <li>Avoid being alone with a child in a private or secluded setting</li>
                  <li>Not engage in any form of sexual, physical, or emotional abuse</li>
                  <li>Immediately report any concern, suspicion, or incident of abuse</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Reporting and Response Mechanism</h2>
              <p>We maintain a zero-tolerance approach to abuse and are committed to responding swiftly and fairly.</p>
              <p>Any safeguarding concern must be reported to the Trustees at AIM Foundation.</p>
              <p>Reports can be made confidentially via:</p>
               <div className="pl-6">
                 <div className="flex items-center gap-2">
                    <span>📧 Email:</span> <TrusteeEmail />
                </div>
                <p>📞 Phone: +91 6290022813</p>
               </div>
              <p>All complaints will be investigated promptly, fairly, and in accordance with due process.</p>
              <p>If required, the matter will be referred to local authorities or child protection agencies.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Confidentiality</h2>
              <p>All safeguarding concerns will be handled with strict confidentiality. Information will be shared only on a need-to-know basis for the purpose of investigation and protection.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Training and Awareness</h2>
              <ul className="list-disc list-inside space-y-2">
                  <li>Regular training on safeguarding, child rights, and gender sensitivity will be conducted.</li>
                  <li>All staff and volunteers will be required to sign a <Link href="/code-of-conduct" className="text-primary hover:underline">Code of Conduct</Link> as a condition of engagement.</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">Monitoring and Review</h2>
              <p>This policy will be reviewed annually and updated as needed to comply with evolving legal, regulatory, and organizational requirements.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Contact Information</h2>
              <p>For concerns or questions related to this policy, please contact:</p>
              <div className="pl-6">
                <div className="flex items-center gap-2">
                    <span>📧 Email:</span> <ContactEmail />
                </div>
                <p>🏢 Address: 41, Ballygaunge Terrace, Kolkata - 700029</p>
              </div>

              <div className="pt-6 text-center">
                <p>At AIM Foundation, we believe that every individual has the right to live free from abuse and with dignity. We thank all our staff, volunteers, partners, and supporters for upholding these values in every action.</p>
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
