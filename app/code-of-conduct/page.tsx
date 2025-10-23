
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Code of Conduct - AIM Foundation',
  description: 'Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization.',
  keywords: ['AIM Foundation', 'Code of Conduct', 'NGO ethics', 'volunteer code of conduct', 'nonprofit values', 'organizational policies', 'AIM Foundation governance'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/code-of-conduct',
    title: 'Code of Conduct - AIM Foundation',
    description: 'Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization.',
    images: [
      {
        url: 'https://aimindia.org.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Logo',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Code of Conduct - AIM Foundation',
    description: 'Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization.',
    images: ['https://aimindia.org.in/logo.png'],
  },
  alternates: {
    canonical: '/code-of-conduct',
  },
};

export default function CodeOfConductPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-code-of-conduct"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
                Code of Conduct
              </h1>
              <div className="space-y-6 text-muted-foreground text-justify">
                  <p>Our Code of Conduct applies to all AIM Foundation staff, <Link href="/volunteering" className="text-primary hover:underline">volunteers</Link>, interns, partners, and representatives. It outlines the ethical principles and standards of behavior expected of everyone associated with our organization, ensuring we operate with integrity, respect, and accountability.</p>
                  
                  <h2 className="text-2xl font-bold font-headline pt-4">1. Professionalism and Integrity</h2>
                  <p>We act with honesty, transparency, and fairness in all our dealings. We are accountable for our actions and decisions, and we strive for excellence in our work.</p>

                  <h2 className="text-2xl font-bold font-headline pt-4">2. Respect for All Individuals</h2>
                  <p>We treat every individual—including beneficiaries, colleagues, donors, and community members—with dignity, respect, and courtesy, regardless of their background, identity, or beliefs.</p>

                  <h2 className="text-2xl font-bold font-headline pt-4">3. Child Protection and Safeguarding</h2>
                  <p>The safety and well-being of children and vulnerable adults are our highest priority. We have a zero-tolerance policy for any form of abuse, exploitation, or harm. All personnel must adhere to our <Link href="/safeguarding-policy" className="text-primary hover:underline">Safeguarding Policy</Link>.</p>

                  <h2 className="text-2xl font-bold font-headline pt-4">4. Harassment-Free Environment</h2>
                  <p>We are committed to maintaining a work environment free from harassment, discrimination, and bullying. Any such behavior will not be tolerated.</p>

                  <h2 className="text-2xl font-bold font-headline pt-4">5. Confidentiality</h2>
                  <p>We respect and protect the confidentiality of sensitive information concerning beneficiaries, donors, and organizational matters, in line with our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</p>

                  <h2 className="text-2xl font-bold font-headline pt-4">6. Responsible Use of Resources</h2>
                  <p>We use all organizational resources—including funds, assets, and data—responsibly, ethically, and for their intended purposes only.</p>

                  <h2 className="text-2xl font-bold font-headline pt-4">7. Accountability and Reporting</h2>
                  <p>We encourage open communication and have a clear <Link href="/grievance-redressal" className="text-primary hover:underline">Grievance Redressal</Link> and <Link href="/whistleblower-policy" className="text-primary hover:underline">Whistleblower Policy</Link> for reporting concerns without fear of retaliation.</p>
                  
                  <h2 className="text-2xl font-bold font-headline pt-4">8. Responsible Social Media and Communication</h2>
                  <p>When representing AIM Foundation, we communicate respectfully and accurately, protecting the dignity of our beneficiaries and upholding the organization’s reputation.</p>

                  <h2 className="text-2xl font-bold font-headline pt-4">9. Continuous Learning and Improvement</h2>
                  <p>We foster a culture of learning, reflection, and professional development to continuously improve our impact and effectiveness.</p>

                  <h2 className="text-2xl font-bold font-headline pt-4">10. Disciplinary Action</h2>
                  <p>Violations of this Code of Conduct may result in disciplinary action, up to and including termination of employment or engagement, and legal action where applicable.</p>
                  
                  <h2 className="text-2xl font-bold font-headline pt-4">11. Acknowledgment</h2>
                  <p>All individuals working with AIM Foundation are required to read, understand, and abide by this Code of Conduct.</p>
              </div>
              <div className="pt-6 text-center">
                <p>Together, we uphold the values of AIM Foundation and work toward a more just, compassionate, and empowered society.</p>
                <p className="mt-2">— Team AIM Foundation</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
