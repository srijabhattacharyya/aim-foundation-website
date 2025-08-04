
"use client"

import Image from "next/image"

const patrons = [
  {
    name: "Forest Department",
    logo: "/images/patrons/forest.png",
    hint: "forest department logo",
    alt: "Forest Department"
  },
  {
    name: "STR",
    logo: "/images/patrons/str.png",
    hint: "sundarban tiger reserve logo",
    alt: "STR"
  },
  {
    name: "Jadavpur University",
    logo: "/images/patrons/ju.png",
    hint: "jadavpur university logo",
    alt: "Jadavpur University"
  },
  {
    name: "Animal Welfare Board",
    logo: "/images/patrons/animal.png",
    hint: "animal welfare board logo",
    alt: "Animal Welfare Board"
  },
  {
    name: "Google",
    logo: "/images/patrons/google.png",
    hint: "google logo",
    alt: "google"
  },
  {
    name: "Amazon",
    logo: "/images/patrons/amazon.png",
    hint: "amazon logo",
    alt: "amazon"
  },
  {
    name: "Canva",
    logo: "/images/patrons/canva.png",
    hint: "canva logo",
    alt: "canva"
  },
  {
    name: "Nexval",
    logo: "/images/patrons/nexval.png",
    hint: "nexval logo",
    alt: "Nexval"
  },
  {
    name: "Life Insurance Corporation of India",
    logo: "/images/patrons/lic.png",
    hint: "lic logo",
    alt: "Life Insurance Corporation of India"
  },
  {
    name: "Jio Digital",
    logo: "/images/patrons/jio.png",
    hint: "jio logo",
    alt: "Jio Digital"
  },
  {
    name: "Amul",
    logo: "/images/patrons/amul.png",
    hint: "amul logo",
    alt: "Amul"
  },
  {
    name: "Spencer",
    logo: "/images/patrons/spencer.png",
    hint: "spencer logo",
    alt: "Spencer"
  },
  {
    name: "Tata Consultancy Service",
    logo: "/images/patrons/tcs.png",
    hint: "tcs logo",
    alt: "Tata Consultancy Service"
  },
  {
    name: "Narayana Health",
    logo: "/images/patrons/narayana.png",
    hint: "narayana health logo",
    alt: "Narayana Health"
  },
  {
    name: "IIMS",
    logo: "/images/patrons/iims.png",
    hint: "iims logo",
    alt: "IIMS"
  },
  {
    name: "Indian Oil",
    logo: "/images/patrons/ioc.png",
    hint: "indian oil logo",
    alt: "Indian Oil"
  },
  {
    name: "BDM International",
    logo: "/images/patrons/bdmi.png",
    hint: "bdm international logo",
    alt: "BDM International"
  },
  {
    name: "Mahadevi Birla",
    logo: "/images/patrons/mahadevi.png",
    hint: "mahadevi birla world academy logo",
    alt: "Mahadevi Birla"
  },
  {
    name: "Great Eastern",
    logo: "/images/patrons/great-eastern.png",
    hint: "great eastern logo",
    alt: "Great Eastern"
  },
  {
    name: "Moothoot Finance",
    logo: "/images/patrons/moothoot.png",
    hint: "moothoot finance logo",
    alt: "Moothoot Finance"
  },
  {
    name: "Loreto",
    logo: "/images/patrons/loreto.png",
    hint: "loreto logo",
    alt: "Loreto"
  },
  {
    name: "CESC",
    logo: "/images/patrons/cesc.png",
    hint: "cesc logo",
    alt: "CESC"
  },
  {
    name: "Modern High School for Girls",
    logo: "/images/patrons/mhs.png",
    hint: "mhs logo",
    alt: "Modern High School for Girls"
  },
  {
    name: "Narayana School",
    logo: "/images/patrons/narayana-school.png",
    hint: "narayana school logo",
    alt: "Narayana School"
  },
  {
    name: "Bethune College",
    logo: "/images/patrons/bethun.png",
    hint: "bethune college logo",
    alt: "Bethune College"
  },
  {
    name: "Children International",
    logo: "/images/patrons/ci.png",
    hint: "children international logo",
    alt: "Children International"
  },
  {
    name: "Ganga Mission",
    logo: "/images/patrons/ganga.png",
    hint: "ganga mission logo",
    alt: "Ganga Mission"
  },
  {
    name: "Bengal Orthopedic Association",
    logo: "/images/patrons/boa.png",
    hint: "bengal orthopedic association logo",
    alt: "Bengal Orthopedic Association"
  },
  {
    name: "UPES University",
    logo: "/images/patrons/upes.png",
    hint: "upes university logo",
    alt: "UPES University"
  },
  {
    name: "St. Xavier's University",
    logo: "/images/patrons/st-xav.png",
    hint: "st xavier's university logo",
    alt: "St. Xavier's University"
  },
  {
    name: "Symbiosis Law School",
    logo: "/images/patrons/symbiosis.png",
    hint: "symbiosis law school logo",
    alt: "Symbiosis Law School"
  },
  {
    name: "Tata Institute of Social Science",
    logo: "/images/patrons/tis.png",
    hint: "tata institute social science logo",
    alt: "Tata Institute of Social Science"
  },
  {
    name: "Placeholder Patron 13",
    logo: "https://placehold.co/200x90.png",
    hint: "company logo",
    alt: "Placeholder Patron 13"
  },
  {
    name: "Placeholder Patron 14",
    logo: "https://placehold.co/200x90.png",
    hint: "company logo",
    alt: "Placeholder Patron 14"
  },
  {
    name: "Placeholder Patron 15",
    logo: "https://placehold.co/200x90.png",
    hint: "company logo",
    alt: "Placeholder Patron 15"
  },
  {
    name: "Placeholder Patron 16",
    logo: "https://placehold.co/200x90.png",
    hint: "company logo",
    alt: "Placeholder Patron 16"
  },
  {
    name: "Placeholder Patron 17",
    logo: "https://placehold.co/200x90.png",
    hint: "company logo",
    alt: "Placeholder Patron 17"
  },
  {
    name: "Placeholder Patron 18",
    logo: "https://placehold.co/200x90.png",
    hint: "company logo",
    alt: "Placeholder Patron 18"
  },
  {
    name: "Placeholder Patron 19",
    logo: "https://placehold.co/200x90.png",
    hint: "company logo",
    alt: "Placeholder Patron 19"
  },
  {
    name: "Placeholder Patron 20",
    logo: "https://placehold.co/200x90.png",
    hint: "company logo",
    alt: "Placeholder Patron 20"
  }
];

const Patrons = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Valued Patrons</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We are grateful for the generous support from our partners and patrons who make our work possible.
                    </p>
                </div>
                <div
                    className="relative flex h-[400px] w-full flex-col overflow-hidden rounded-lg border"
                >
                    <div className="flex flex-col animate-scroll-up">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
                            {patrons.map((patron, index) => (
                                <div key={index} className="flex justify-center items-center h-full">
                                    <Image
                                        src={patron.logo}
                                        alt={patron.alt}
                                        width={200}
                                        height={90}
                                        quality={100}
                                        data-ai-hint={patron.hint}
                                        className="object-contain w-full h-auto transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6" aria-hidden="true">
                            {patrons.map((patron, index) => (
                                <div key={index + patrons.length} className="flex justify-center items-center h-full">
                                    <Image
                                        src={patron.logo}
                                        alt={patron.alt}
                                        width={200}
                                        height={90}
                                        quality={100}
                                        data-ai-hint={patron.hint}
                                        className="object-contain w-full h-auto transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Patrons;
