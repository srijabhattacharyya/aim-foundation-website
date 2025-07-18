
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    title: "Project Pathshala",
    description: "Providing quality primary education to children in remote villages, ensuring every child has a strong foundation for learning.",
    image: "https://placehold.co/600x400.png",
    hint: "classroom children"
  },
  {
    title: "Digital Literacy Program",
    description: "Equipping young adults with essential computer skills and digital knowledge to thrive in the modern workforce.",
    image: "https://placehold.co/600x400.png",
    hint: "computer lab students"
  },
  {
    title: "Scholarship Fund for Higher Education",
    description: "Supporting meritorious students from low-income families to pursue their dreams of higher education.",
    image: "https://placehold.co/600x400.png",
    hint: "university graduate"
  },
  {
    title: "Mobile Library Initiative",
    description: "Bringing the joy of reading to communities with limited access to books and educational resources.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile library"
  },
  {
    title: "Teacher Training Workshops",
    description: "Enhancing the skills and methodologies of educators to improve the quality of learning in schools.",
    image: "https://placehold.co/600x400.png",
    hint: "teacher training"
  },
  {
    title: "Adult Education & Vocational Centers",
    description: "Offering literacy programs and vocational training for adults to improve their livelihoods and self-reliance.",
    image: "https://placehold.co/600x400.png",
    hint: "adult learning"
  },
  {
    title: "STEM for Girls",
    description: "Inspiring and supporting young girls to pursue education and careers in science, technology, engineering, and math.",
    image: "https://placehold.co/600x400.png",
    hint: "girls science experiment"
  },
  {
    title: "Special Needs Education Support",
    description: "Providing specialized resources, support, and inclusive learning environments for children with disabilities.",
    image: "https://placehold.co/600x400.png",
    hint: "special needs classroom"
  }
];

export default function EducationalInitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '45%' }}>
            <Image
              src="https://placehold.co/1920x864.png"
              alt="Educational Initiatives Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="education children"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white p-8 md:p-12">
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Fostering Knowledge, Inspiring Futures
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Our educational programs are designed to unlock potential and create pathways to a brighter tomorrow for every learner.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Educational Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe in the power of education to transform lives. Explore our key initiatives that are making a difference.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      data-ai-hint={item.hint}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="mb-2 font-headline">{item.title}</CardTitle>
                    <CardDescription className="flex-grow text-justify">{item.description}</CardDescription>
                    <Button variant="link" className="p-0 mt-4 self-start transition-transform transform hover:scale-105">Learn More &rarr;</Button>
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
