
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "Innocent Smiles",
    description: "Empowers children by combining education with art, dance, and music, nurturing both creativity and academics. It offers a supportive space where young minds gain confidence, express themselves, and grow holistically.",
    image: "https://placehold.co/600x400.png",
    hint: "classroom children",
    link: "/innocent-smiles"
  },
  {
    title: "Inspire EduLab",
    description: "Transforms classrooms into smart, internet-enabled hubs. With interactive tools, it makes complex lessons dynamic and easier to grasp, fostering engagement and a love for learning.",
    image: "https://placehold.co/600x400.png",
    hint: "smart classroom",
    link: "/inspire-eduLab"
  },
  {
    title: "EduAccess",
    description: "Delivers quality education to rural West Bengal through expert-led online classes. Covering core subjects, it empowers students in underserved areas with skills for academic success.",
    image: "https://placehold.co/600x400.png",
    hint: "online learning",
    link: "/eduaccess"
  },
   {
    title: "Empower English",
    description: "Offers spoken English training to students from underserved communities, strengthening communication skills and boosting self-confidence for academic and professional success.",
    image: "https://placehold.co/600x400.png",
    hint: "english class",
    link: "/empower-english"
  },
  {
    title: "DigiEmpower",
    description: "Promotes digital literacy among underprivileged and Adivasi children. It provides hands-on computer training, equipping them with essential skills for today’s technology-driven world.",
    image: "https://placehold.co/600x400.png",
    hint: "computer literacy",
    link: "/digiempower"
  },
  {
    title: "SheConnects",
    description: "Empowers women through digital literacy, helping them promote businesses online. Includes cyber safety sessions to ensure secure digital participation and financial independence.",
    image: "https://placehold.co/600x400.png",
    hint: "women entrepreneurs",
    link: "/sheconnects"
  },
  {
    title: "Milieu",
    description: "Fosters holistic development by connecting children from diverse backgrounds. Through interactive sessions, students learn together, building empathy, respect, and social awareness.",
    image: "https://placehold.co/600x400.png",
    hint: "children collaboration",
    link: "/milieu"
  },
];

export default function EducationalInitiativesPage() {
  return (
    <>
      <section className="relative w-full">
        <div className="relative w-full" style={{ paddingTop: '45%' }}>
          <Image
            src="https://placehold.co/1920x864.png"
            alt="Educational Initiatives Banner"
            fill
            className="object-cover brightness-50"
            data-ai-hint="students learning together"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
          <div className="relative z-10 text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Unlocking Potential Through Education
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Our educational programs are designed to inspire, empower, and create opportunities for every learner.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Educational Initiatives</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are committed to breaking down barriers to education and fostering a lifelong love of learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </>
  );
}
