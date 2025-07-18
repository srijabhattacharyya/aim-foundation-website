
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    title: "Innocent Smiles",
    description: "empowers children through education, art, dance, and music—blending creativity with academics. It provides a nurturing space where young minds build confidence, express themselves, and grow holistically. Through joyful learning and guided support, the initiative helps shape brighter, more confident futures.",
    image: "https://placehold.co/600x400.png",
    hint: "classroom children"
  },
  {
    title: "Inspire EduLab",
    description: "transforms classrooms into smart, internet-enabled learning hubs that spark curiosity and engagement. With interactive tools like audio-visual content, online sessions, and 2D/3D animations, it makes lessons dynamic and easier to grasp. Bridging traditional education with modern tech, Inspire EduLab empowers students through immersive, future-ready learning.",
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
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Igniting Talent, Inspiring Futures
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
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
                Education indeed plays a pivotal role in shaping responsible citizens! At AIM Foundation, we believe that education is the cornerstone of building responsible citizens and empowering future leaders.
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
