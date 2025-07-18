
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "Innocent Smiles",
    description: "empowers children by combining education with art, dance, and music, nurturing both creativity and academics. It offers a supportive space where young minds gain confidence, express themselves, and grow holistically. Through engaging programs and guidance, the initiative fosters joyful learning and builds brighter, more confident futures.",
    image: "https://placehold.co/600x400.png",
    hint: "classroom children",
    link: "/innocent-smiles"
  },
  {
    title: "Inspire EduLab",
    description: "transforms classrooms into smart, internet-enabled learning hubs that spark curiosity and engagement. With interactive tools like audio-visual content, online sessions, and 2D/3D animations, it makes lessons dynamic and easier to grasp. Bridging traditional education with modern tech, Inspire EduLab empowers students through immersive, future-ready learning.",
    image: "https://placehold.co/600x400.png",
    hint: "computer lab students",
    link: "/inspire-eduLab"
  },
  {
    title: "EduAccess",
    description: "supported by Dhritiman Abilizing Infinity Foundation, delivers quality education to rural West Bengal through expert-led online classes from a Kolkata studio. Covering subjects like English, Math, and Science, it empowers students in underserved areas with skills essential for academic success and future opportunities.",
    image: "https://placehold.co/600x400.png",
    hint: "university graduate",
    link: "/eduaccess"
  },
  {
    title: "Empower English",
    description: "provides spoken English training to students in underserved areas like Kolkata, Purba Bardhaman, and Jalpaiguri. The program builds confidence and improves communication skills, helping students succeed academically and professionally. It bridges language gaps, opening doors to greater opportunities and long-term growth.",
    image: "https://placehold.co/600x400.png",
    hint: "english classroom",
    link: "/empower-english"
  },
  {
    title: "DigiEmpower",
    description: "supported by Dhritiman Abilizing Infinity Foundation, promotes digital literacy among underprivileged and Adivasi children in Kolkata, Purba Bardhaman, and Jalpaiguri. Through computer training at Dhriti Abilizing Centres, AIM Foundation equips them with essential digital skills, bridging the digital divide and enabling future success.",
    image: "https://placehold.co/600x400.png",
    hint: "teacher technology",
    link: "/digiempower"
  },
  {
    title: "SheConnects",
    description: "empowers women through digital literacy training, helping them promote businesses on social media and sell online confidently. The program includes cyber safety sessions to ensure secure digital participation. By fostering tech skills and financial independence, SheConnects supports women in building brighter, self-reliant futures.",
    image: "https://placehold.co/600x400.png",
    hint: "women networking",
    link: "/sheconnects"
  },
  {
    title: "Milieu",
    description: "fosters holistic development by connecting children from diverse economic backgrounds. Through interactive sessions, students from reputed schools and underprivileged communities learn together, building empathy, respect, and inclusivity. This mutual exchange enhances emotional intelligence, breaks social barriers, and nurtures compassionate, community-minded young individuals.",
    image: "https://placehold.co/600x400.png",
    hint: "community gathering",
    link: "/milieu"
  },
  {
    title: "VidyaShakti",
    description: "is a multilingual app that supports rural and first-generation learners from Class 5 to 12. Students can ask questions and receive AI-generated, class-specific answers in their preferred language, making learning accessible. It bridges educational gaps where quality teachers are not always available.",
    image: "https://placehold.co/600x400.png",
    hint: "children learning",
    link: "/vidyashakti"
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
