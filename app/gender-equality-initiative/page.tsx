
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "SheConnects",
    description: "empowers rural women through cervical health education and cancer screenings. In collaboration with Chittaranjan National Cancer Institute and the West Bengal government, it organizes community camps and trains frontline workers district by district—starting with Howrah—to promote early detection, break taboos, and build awareness for women’s reproductive health.",
    image: "https://placehold.co/600x400.png",
    hint: "women networking",
    link: "/sheconnects"
  },
  {
    title: "CycleSafe",
    description: "Empowers underprivileged adolescent girls by promoting menstrual hygiene, cervical health awareness, and reproductive well-being. It breaks taboos and builds confidence, ensuring dignity and health for young girls to thrive.",
    image: "https://placehold.co/600x400.png",
    hint: "menstrual hygiene",
    link: "/cyclesafe"
  },
  {
    title: "Detect",
    description: "Empowers rural women through cervical health education and cancer screenings. It promotes early detection, breaks taboos, and builds awareness for women’s reproductive health, in collaboration with national health institutes.",
    image: "https://placehold.co/600x400.png",
    hint: "mother child health",
    link: "/detect"
  },
  {
    title: "SuiDhaga",
    description: "Empowers women by providing vocational training in tailoring and embroidery, enabling them to achieve financial independence. This initiative helps women turn a traditional skill into a modern livelihood, fostering entrepreneurship and self-reliance.",
    image: "https://placehold.co/600x400.png",
    hint: "women sewing",
    link: "/suidhaga"
  },
  {
    title: "Krishti",
    description: "Empowers women by preserving and promoting traditional art forms and cultural heritage. This initiative provides a platform for female artisans to showcase their talent, gain economic independence, and keep ancient traditions alive.",
    image: "https://placehold.co/600x400.png",
    hint: "women traditional art",
    link: "/krishti"
  },
];

export default function GenderEqualityInitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '45%' }}>
            <Image
              src="https://placehold.co/1920x864.png"
              alt="Gender Equality Initiatives Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="women empowerment"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Empowering Women, Uplifting Society
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Our initiatives are dedicated to creating a world of equal opportunity for women and girls.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Gender Equality Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that empowering women and girls is essential for building a just, prosperous, and compassionate society.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="relative w-full h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      data-ai-hint={item.hint}
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="font-headline mb-2">{item.title}</CardTitle>
                    <CardDescription className="flex-grow text-justify">{item.description}</CardDescription>
                    <Button asChild variant="link" className="p-0 mt-4 self-start transition-transform transform hover:scale-105">
                      <Link href={item.link || "#"}>Learn More &rarr;</Link>
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
