
"use client"

import Image from "next/image"

const patrons = Array(20).fill({
  name: "Patron Logo",
  logo: "https://placehold.co/300x135.png",
  hint: "corporate logo",
});

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
                    className="relative flex h-[400px] w-full flex-col items-center overflow-hidden rounded-lg border"
                >
                    <div className="flex flex-col items-center animate-scroll-up">
                        {[...patrons, ...patrons].map((patron, index) => (
                            <div key={index} className="flex justify-center items-center h-[135px] w-[300px] my-4">
                                <Image
                                    src={patron.logo}
                                    alt={`${patron.name} ${index + 1}`}
                                    width={300}
                                    height={135}
                                    data-ai-hint={patron.hint}
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Patrons;
