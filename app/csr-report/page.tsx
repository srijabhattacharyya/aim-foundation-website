
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { reportTypes } from './reportTypes';


export const metadata: Metadata = {
  title: 'CSR Reporting & Impact Assessment Services | AIM Foundation',
  description: 'AIM Foundation offers end-to-end CSR reporting and impact assessment services in India, ensuring compliance and showcasing social value through compelling storytelling.',
  keywords: [
    'CSR reporting services India', 'CSR impact assessment agency', 'annual CSR report India', 
    'CSR compliance reporting', 'third-party CSR assessment', 'social impact reporting', 
    'SROI analysis India', 'ESG reporting services', 'NGO impact reports', 
    'CSR project evaluation', 'AIM Foundation consulting'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/csr-report',
    title: 'CSR Reporting & Impact Assessment Services | AIM Foundation',
    description: 'End-to-end CSR reporting and impact assessment services, ensuring compliance and showcasing social value through compelling storytelling.',
    images: [{
      url: 'https://aimindia.org.in/home.avif',
      width: 1200,
      height: 630,
      alt: 'CSR Reporting Services by AIM Foundation'
    }],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'CSR Reporting & Impact Assessment Services | AIM Foundation',
    description: 'End-to-end CSR reporting and impact assessment services, ensuring compliance and showcasing social value through compelling storytelling.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/csr-report',
  },
};

const faqs = [
  {
    question: "What is CSR reporting?",
    answer: "CSR reporting is the structured documentation of a company’s Corporate Social Responsibility activities, including projects undertaken, funds spent, outcomes achieved, and social or environmental impact, in compliance with statutory and voluntary standards."
  },
  {
    question: "Why is CSR reporting mandatory in India?",
    answer: "CSR reporting is mandatory in India under the Companies Act, 2013. Eligible companies must disclose CSR policies, expenditures, and impact through annual CSR reports to ensure transparency, accountability, and regulatory compliance."
  },
  {
    question: "What are CSR impact assessment reports?",
    answer: "CSR impact assessment reports evaluate the social, economic, and environmental outcomes of CSR initiatives. They measure effectiveness, identify learnings, and assess whether CSR objectives are being achieved."
  },
  {
    question: "What standards are used for CSR and impact reporting?",
    answer: "CSR and impact reports in India typically align with the Companies Act, Schedule VII, MCA guidelines, and global frameworks such as SDGs, ESG principles, and internationally accepted impact measurement methodologies."
  },
  {
    question: "What is an annual CSR report?",
    answer: "An annual CSR report is a year-end document that outlines a company’s CSR policy, approved projects, expenditure, implementation partners, outcomes, and future plans, as required for corporate disclosures."
  },
  {
    question: "How does impact storytelling improve CSR reports?",
    answer: "Impact storytelling transforms data into meaningful narratives by linking metrics with real-world experiences. It makes CSR reports more engaging, relatable, and effective in building trust with stakeholders."
  },
  {
    question: "What is a CSR impact dashboard?",
    answer: "A CSR impact dashboard is a visual reporting tool that presents real-time or periodic CSR performance data through charts, indicators, and metrics, enabling easier tracking and decision-making."
  },
  {
    question: "What is Social Return on Investment (SROI)?",
    answer: "SROI is an evaluation method that measures the social, environmental, and economic value created by CSR initiatives, expressed in relation to the investment made."
  },
  {
    question: "Who needs CSR impact and reporting services?",
    answer: "Corporates, corporate foundations, trusts, NGOs, and social enterprises implementing CSR or development projects require CSR reporting and impact assessment services for compliance, donor communication, and strategic planning."
  },
  {
    question: "Can CSR reports be customised for different stakeholders?",
    answer: "Yes. CSR reports can be customised for regulators, boards, donors, investors, communities, and partners by adapting formats such as dashboards, impact decks, and bespoke reports."
  },
  {
    question: "What is the difference between CSR reporting and ESG reporting?",
    answer: "CSR reporting focuses on social responsibility initiatives and compliance, while ESG reporting covers environmental, social, and governance performance as part of broader sustainability and investment disclosures."
  },
  {
    question: "Do NGOs and non-profits need annual impact reports?",
    answer: "Yes. Annual impact reports help NGOs and non-profits demonstrate transparency, accountability, financial governance, and measurable outcomes to donors, regulators, and the public."
  },
  {
    question: "How does AIM Foundation support CSR reporting?",
    answer: "AIM Foundation provides end-to-end CSR reporting services, including data analysis, impact assessment, storytelling, report design, and compliance-ready documentation aligned with Indian and global standards."
  },
];

export default function CsrReportPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "CSR Reporting",
    "provider": {
      "@type": "Organization",
      "name": "AIM Foundation",
       "url": "https://www.aimindia.org.in/"
    },
    "description": "AIM Foundation offers end-to-end CSR reporting and impact assessment services across India, helping companies measure and communicate the effectiveness of their social initiatives.",
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
        key="csr-report-service-schema"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="py-12 md:py-20 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground text-justify">
                
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">CSR Reporting &amp; Impact Assessment Services</h1>
                    <h2 className="mt-4 text-2xl md:text-3xl font-bold font-headline text-primary">
                        Crafting Compelling CSR Reports That Inspire Action and Build Trust
                    </h2>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <p>AIM Foundation delivers comprehensive, end-to-end Corporate Social Responsibility Reporting and impact measurement solutions—from annual CSR reports to bespoke impact dashboards. Our reports are fully compliant with Indian CSR regulations (Companies Act, Schedule VII) and aligned with global reporting standards, ensuring credibility, transparency, and strategic value.</p>
                  <p className="mt-4">With strong local expertise and communicative, storytelling-driven design, we transform data into meaningful narratives that bring your social impact to life.</p>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4 text-center">The Power of Impact Reporting: Where Data Meets Purpose</h2>
                  <p>Effective CSR impact reporting makes your social value visible. It connects data with purpose—demonstrating outcomes, building trust, and guiding future action.</p>
                  <p className="mt-4 italic text-primary">Imagine a social enterprise empowering young women in technology. By tracking participation levels, skills development, and job placements, the impact report evolves into a compelling story of transformation—one that strengthens stakeholder confidence, attracts partners, and informs strategic decisions.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold font-headline mb-4 text-center">Storytelling That Inspires Action: Turning Numbers into Human Stories</h2>
                  <p>Great CSR reports go beyond numbers. Impact storytelling gives context and emotion to data, linking metrics with real human experiences.</p>
                  <p className="mt-4">Through clear language, authentic examples, and thoughtful design, your CSR report becomes more than a compliance document—it becomes a story that resonates, inspires action, and reinforces your organisation’s commitment to social change.</p>
                </div>

                 <div>
                  <h2 className="text-2xl font-bold font-headline mb-4 text-center">India’s Independent CSR Consulting Partner</h2>
                  <p>AIM Foundation is a trusted CSR consulting and reporting agency in India, working with leading organisations, corporate foundations, and global brands. We design and deliver clear, compliant, and compelling CSR and impact reports that communicate social value with credibility and creativity.</p>
                   <p className="mt-4 font-semibold">Our expertise spans:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                    <li>Annual CSR reporting</li>
                    <li>CSR impact assessment studies</li>
                    <li>Social Return on Investment (SROI) analysis</li>
                    <li>Custom impact dashboards and reporting frameworks</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">Types of CSR &amp; Impact Reports We Develop</h2>
                    <p className="text-lg text-muted-foreground text-center mb-12">We offer a complete suite of CSR and impact reporting formats, tailored to diverse stakeholder needs and objectives.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reportTypes.map((report, index) => (
                            <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full ${report.color}`}>
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <div className={`mb-4 p-3 rounded-full self-start ${report.iconBg}`}>
                                        {report.icon}
                                    </div>
                                    <CardTitle className="text-xl font-bold font-headline mb-3">{report.title}</CardTitle>
                                    <p className="text-sm opacity-90 flex-grow">{report.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>


          <section className="py-12 md:py-20 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground text-justify">
                <div>
                  <h2 className="text-2xl font-bold font-headline mb-4 text-center">CSR Report Design &amp; Layout Services</h2>
                  <p>We combine professional copy editing, content writing, and data visualisation to create high-impact CSR reports. Our design approach integrates:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                    <li>Graphs, charts, and infographics</li>
                    <li>Clean, accessible layouts</li>
                    <li>Storytelling-led visual narratives</li>
                  </ul>
                  <p className="mt-2">The result: CSR reports that are informative, engaging, and visually compelling.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold font-headline mb-4 text-center">Not-for-Profit Annual Reports</h2>
                    <p>Clear and engaging annual reports for NGOs and non-profits, summarising activities, governance, financials, and impact for donors, regulators, and the public.</p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-center">Donor &amp; Social Investor Impact Reports</h2>
                    <p>Tailored donor and investor impact reports that demonstrate how contributions create measurable change. These reports highlight outcomes, showcase successes, and strengthen long-term engagement through transparent, data-driven insights.</p>
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
                </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
