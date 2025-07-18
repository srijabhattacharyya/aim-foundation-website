
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function InspireEduLabPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Inspire EduLab Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="modern classroom technology"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Inspire EduLab
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Transforming classrooms into smart, internet-enabled learning hubs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {/* Left Text Column */}
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Future-Ready Learning Environments</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Inspire EduLab transforms traditional classrooms into smart, internet-enabled learning hubs that spark curiosity and engagement. With interactive tools like audio-visual content, online expert sessions, and dynamic 2D/3D animations, it makes complex lessons dynamic and easier to grasp for every student.
                  </p>
                  <p>
                    Our approach bridges the gap between conventional education and modern technology, empowering students with the skills they need for tomorrow. By creating immersive and interactive learning experiences, Inspire EduLab fosters a love for learning and prepares students to thrive in a digital world. We believe in providing the tools that not only educate but also inspire innovation and critical thinking.
                  </p>
                  <p>
                    The program focuses on creating a level playing field, ensuring that students from all backgrounds have access to high-quality digital education. From rural villages to urban centers, Inspire EduLab is dedicated to building a brighter, more equitable future through the power of technology.
                  </p>
                </div>
              </div>
              
              {/* Right Sticky Image Column */}
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <Card className="overflow-hidden shadow-lg">
                    <CardContent className="p-0">
                      <Image
                        src="https://placehold.co/400x600.png"
                        alt="Students in a smart classroom"
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover"
                        data-ai-hint="students learning computer"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
