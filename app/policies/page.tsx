
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
    title: "Refund Policy",
    content: "AIM Foundation deeply values donor support. As a non-profit, all donations are used immediately for charitable programs and are non-refundable. Donors are encouraged to review details carefully before giving. For any concerns, the Foundation remains available for clarification and assistance.",
    link: "#"
  },
  {
    title: "Child Protection Policy",
    content: "Our strict guidelines and procedures to ensure the safety and well-being of all children we work with.",
     link: "#"
  },
  {
    title: "Data Security Policy",
    content: "How we secure the data you entrust to us against unauthorized access and breaches.",
     link: "#"
  },
  {
    title: "Volunteer Policy",
    content: "Guidelines and expectations for our valued volunteers who contribute their time and skills.",
     link: "#"
  },
  {
    title: "Whistleblower Policy",
    content: "A safe and confidential process for reporting any concerns about misconduct or unethical behavior.",
     link: "#"
  },
  {
    title: "Code of Conduct",
    content: "The ethical standards and principles that guide our staff, volunteers, and partners.",
     link: "#"
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
