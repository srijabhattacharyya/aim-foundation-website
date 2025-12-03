
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TrusteeEmail from '@/components/layout/TrusteeEmail';

export const metadata: Metadata = {
  title: 'CSR Impact Assessment Services India | AIM Foundation',
  description: 'AIM Foundation is a leading CSR Impact Assessment agency in India, providing independent third-party evaluation, M&E, and social impact reports for CSR projects.',
  keywords: [
    'CSR impact assessment India',
    'social impact assessment agency',
    'third-party CSR evaluation',
    'monitoring and evaluation NGO India',
    'CSR project assessment',
    'SROI methodology India',
    'CSR compliance reporting',
    'independent impact assessment organisation',
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/impact-assessment-services',
    title: 'CSR Impact Assessment Services in India | AIM Foundation',
    description: 'Trusted third-party CSR impact assessment services in India. We help companies measure and maximize the real outcomes of their CSR initiatives.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'CSR Impact Assessment Services',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'CSR Impact Assessment Services in India | AIM Foundation',
    description: 'Trusted third-party CSR impact assessment services in India.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/impact-assessment-services',
  },
};

const faqs = [
  {
    question: "What is CSR impact assessment?",
    answer: "CSR impact assessment is the process of measuring, evaluating, and analysing the social, environmental, and economic outcomes of Corporate Social Responsibility projects to understand their effectiveness and sustainability."
  },
  {
    question: "Why is independent third-party CSR impact assessment important?",
    answer: "An independent third-party CSR impact assessment ensures unbiased, transparent evaluation of CSR initiatives, providing credible insights for compliance with CSR regulations and improving project outcomes."
  },
  {
    question: "Is CSR impact assessment mandatory in India?",
    answer: "Yes, as per the Companies (CSR Policy) Amendment Rules 2021, organisations undertaking CSR projects above a certain financial threshold are required to conduct an independent impact assessment to maintain regulatory compliance."
  },
  {
    question: "What methodologies are used in CSR impact assessment?",
    answer: "Common methodologies include Social Return on Investment (SROI), quantitative and qualitative impact assessment models, monitoring and evaluation (M&E) frameworks, and community participatory research to measure social impact effectively."
  },
  {
    question: "How does AIM Foundation conduct CSR impact assessments?",
    answer: "AIM Foundation uses a customised, end-to-end approach following global best practices, combining field research, data analysis, and stakeholder consultations to deliver unbiased, data-driven CSR impact reports across 22+ Indian states."
  },
  {
    question: "What are the benefits of CSR impact assessment for companies?",
    answer: "Conducting a CSR impact assessment helps companies demonstrate accountability, improve project design, comply with statutory CSR regulations, enhance stakeholder trust, and maximise social value through data-driven insights."
  },
  {
    question: "Can AIM Foundation help with CSR compliance in India?",
    answer: "Yes, AIM Foundation specialises in helping organisations comply with the Companies Act CSR Rules 2021 by providing mandatory independent CSR impact assessments and detailed evaluation reports aligned with statutory requirements."
  },
  {
    question: "What kind of CSR projects does AIM Foundation assess?",
    answer: "We assess a wide range of CSR projects, including those focused on education, health, environment, livelihoods, women empowerment, and other development sectors across urban and rural India."
  },
  {
    question: "How long does a CSR impact assessment take?",
    answer: "The timeline varies depending on project size and scope but typically ranges from 4 to 12 weeks, including fieldwork, data analysis, report writing, and stakeholder consultations."
  },
  {
    question: "How can I get started with a CSR impact assessment by AIM Foundation?",
    answer: "You can contact AIM Foundation through our website or helpline. We offer a free initial consultation to understand your CSR goals and customise the impact assessment plan accordingly."
  },
];


export default function ImpactAssessmentServicesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "CSR Impact Assessment",
    "provider": {
      "@type": "Organization",
      "name": "AIM Foundation",
       "url": "https://www.aimindia.org.in/"
    },
    "description": "AIM Foundation offers independent third-party CSR impact assessment services across India, helping companies measure and improve the effectiveness of their social initiatives.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="impact-assessment-service-schema"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="py-12 md:py-20 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground text-justify">
                
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">CSR Impact Assessment Services</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                        Measuring What Matters: From CSR Spend to Real Social Value
                    </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4 text-center text-primary">Leading CSR Impact Assessment Agency in India</h2>
                  <p>AIM Foundation is a trusted Independent Third-Party Impact Assessment Organisation providing comprehensive evaluation of Corporate Social Responsibility (CSR) projects and Impact Investment initiatives across India. With expertise in Social Impact Assessment, Monitoring & Evaluation (M&E), and community research, we help companies measure and maximise the real outcomes of their CSR initiatives.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold font-headline mb-4 text-center">Unbiased CSR Project Impact Assessment Reports</h2>
                  <p>Our CSR Impact Assessment Reports offer clear, data-backed insights into your project’s effectiveness, scalability, and sustainability.
Operating all over India, we conduct rigorous field assessments to understand social, environmental, and economic changes brought by your CSR interventions.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold font-headline mb-4 text-center">CSR Impact Assessment – Mandatory Under CSR Rules 2021</h2>
                  <p>According to the Companies (CSR Policy) Amendment Rules 2021, organisations must conduct an independent impact assessment for CSR projects above the prescribed threshold.
AIM Foundation ensures full CSR compliance by delivering third-party evaluations aligned with statutory norms and reporting requirements.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold font-headline mb-4 text-center">Our Proven Impact Assessment Methodology</h2>
                  <p>We use globally accepted and industry-leading frameworks, including:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                    <li>Social Return on Investment (SROI) methodology</li>
                    <li>Quantitative & qualitative impact assessment models</li>
                    <li>ISO, global, and national standards</li>
                    <li>Monitoring & Evaluation (M&E) frameworks</li>
                    <li>Participatory rural appraisal & community research</li>
                    <li>Evidence-based data collection and analysis</li>
                  </ul>
                  <p className="mt-2">This ensures transparent, credible, and actionable results that enhance CSR decision-making.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold font-headline mb-4 text-center">Why Choose AIM Foundation?</h2>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Independent and unbiased third-party CSR assessment</li>
                    <li>Customised end-to-end solutions for your CSR or development project</li>
                    <li>Expert team with years of experience in social impact consultancy</li>
                    <li>Actionable reports that strengthen your CSR strategy and brand credibility</li>
                    <li>Alignment with global best practices and Indian CSR compliance norms</li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold font-headline mb-4 text-center">Delivering Real, Measurable Social Impact</h2>
                  <p>AIM Foundation helps companies, NGOs, and CSR teams understand the true value and long-term impact of their CSR investments — improving transparency, accountability, and community outcomes.</p>
                </div>

              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-8">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                     <div className="text-center mt-8">
                        <p className="text-lg text-muted-foreground">Have more questions? <a href="mailto:trustee@aimindia.org.in" className="text-primary hover:underline">Contact us</a> for a free consultation.</p>
                    </div>
                </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
