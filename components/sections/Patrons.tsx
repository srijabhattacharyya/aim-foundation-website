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
  ...Array(14).fill({
    name: "Patron Logo",
    logo: "https://placehold.co/200x90.png",
    hint: "corporate logo",
    alt: "Patron Logo"
  })
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
