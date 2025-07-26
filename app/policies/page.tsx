
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const policies = [
  {
    title: "Privacy Policy",
    content: "Our commitment to protecting your personal information and how we use data responsibly.",
  },
  {
    title: "Refund Policy",
    content: "Details on our policy regarding donations and refunds, ensuring transparency and trust.",
  },
  {
    title: "Child Protection Policy",
    content: "Our strict guidelines and procedures to ensure the safety and well-being of all children we work with.",
  },
  {
    title: "Data Security Policy",
    content: "How we secure the data you entrust to us against unauthorized access and breaches.",
  },
  {
    title: "Volunteer Policy",
    content: "Guidelines and expectations for our valued volunteers who contribute their time and skills.",
  },
  {
    title: "Whistleblower Policy",
    content: "A safe and confidential process for reporting any concerns about misconduct or unethical behavior.",
  },
  {
    title: "Code of Conduct",
    content: "The ethical standards and principles that guide our staff, volunteers, and partners.",
  },
  {
    title: "Terms of Service",
    content: "The terms and conditions for using our website and engaging with our services.",
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
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-base">{policy.content}</p>
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
