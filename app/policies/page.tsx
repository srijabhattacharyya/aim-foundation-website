
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const policies = [
  {
    title: "Privacy Policy",
    content: "AIM Foundation respects your privacy and protects all personal information shared on its website. Data is used solely for donations and communication, not shared with third parties. Users remain anonymous while browsing, and all information is securely handled internally.",
    link: "/privacy-policy"
  },
  {
    title: "Donation Policy",
    content: "AIM Foundation ensures all donations are used responsibly for program support and community impact. Contributions are non-refundable and eligible for tax exemption under Section 80G. Donor data is kept confidential, and receipts are issued promptly. Transparency and accountability are prioritised.",
     link: "/donation-policy"
  },
  {
    title: "Refund Policy",
    content: "AIM Foundation deeply values donor support. As a non-profit, all donations are used immediately for charitable programs and are non-refundable. Donors are encouraged to review details carefully before giving. For any concerns, the Foundation remains available for clarification and assistance.",
    link: "/refund-policy"
  },
  {
    title: "Transparency Policy",
    content: "AIM Foundation is committed to openness, accountability, and ethical practices. Financial reports, governance details, and program outcomes are publicly shared. Donations are used responsibly, and legal compliance is strictly followed. Stakeholders are encouraged to engage, review reports, and provide feedback.",
     link: "/transparency-policy"
  },
  {
    title: "Safeguarding Policy",
    content: "AIM Foundation prioritizes the safety and dignity of children and vulnerable individuals. All staff and volunteers follow strict codes of conduct. Safeguarding concerns are handled confidentially, with zero tolerance for abuse. Legal compliance and regular training ensure a safe environment for all.",
     link: "/safeguarding-policy"
  },
  {
    title: "Whistleblower Policy",
    content: "AIM Foundation encourages stakeholders to report any unethical conduct, fraud, or abuse in good faith. Reports are confidential, investigated fairly, and free from retaliation. Whistleblowers are protected, and false allegations are discouraged. Integrity and accountability are core to our mission.",
     link: "/whistleblower-policy"
  },
  {
    title: "Volunteer Policy",
    content: "AIM Foundation values volunteers as essential partners in its mission. The policy outlines respectful engagement, clear roles, code of conduct, and safeguarding measures. Volunteers receive orientation, support, and recognition, while contributing ethically and responsibly to education, health, and community initiatives.",
     link: "/volunteer-policy"
  },
  {
    title: "Terms of Service",
    content: "The terms and conditions for using our website and engaging with our services.",
     link: "#"
  },
];

export default function PoliciesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">
                Our Policies
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparency and accountability are at the core of our operations. Explore our policies to understand our commitment to ethical and responsible practices.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {policies.map((policy, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{policy.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground text-base flex-grow">{policy.content}</p>
                    <Button asChild className="mt-6 w-full transition-transform transform hover:scale-105">
                      <Link href={policy.link}>View Policy</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
