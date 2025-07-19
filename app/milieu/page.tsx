
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function MilieuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Milieu Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="diverse children interacting"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Milieu
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bridging Backgrounds, Building Bonds.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Shaping Conscious Citizens of Tomorrow.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                        Milieu is a unique initiative that promotes holistic development in children by fostering meaningful connections across diverse socio-economic backgrounds. The program brings together students from reputed schools and underprivileged communities, offering a shared space where learning, empathy, and mutual respect flourish.
                    </p>
                    <p>
                        Through interactive sessions, collaborative activities, and open conversations, children engage with one another in ways that go beyond textbooks. These exchanges create opportunities for students to see the world through different lenses—helping privileged children develop humility and social awareness, while underprivileged children gain confidence and a sense of inclusion.
                    </p>
                    <p>
                        Milieu helps to break down socio-economic barriers, replacing stereotypes with understanding and compassion. It instills values of respect, equality, and inclusivity in young minds at an early age—planting the seeds for a more united and empathetic future.
                    </p>
                    <p>
                        By promoting emotional intelligence, communication, and shared learning, Milieu builds a sense of community and connectedness, empowering all children involved to grow into open-minded, socially responsible individuals who value diversity and collective well-being.
                    </p>
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
