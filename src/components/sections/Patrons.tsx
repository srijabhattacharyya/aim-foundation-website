"use client"

import Image from "next/image"

const patrons = [
    { name: "Global Tech Inc.", logo: "https://placehold.co/300x135.png", hint: "tech company logo" },
    { name: "Sunrise Bank", logo: "https://placehold.co/300x135.png", hint: "bank logo" },
    { name: "Evergreen Corp.", logo: "https://placehold.co/300x135.png", hint: "corporate logo" },
    { name: "People's Foundation", logo: "https://placehold.co/300x135.png", hint: "foundation logo" },
    { name: "Innovate Solutions", logo: "https://placehold.co/300x135.png", hint: "solutions company logo" },
    { name: "Community Trust", logo: "https://placehold.co/300x135.png", hint: "trust logo" },
    { name: "Starlight Industries", logo: "https://placehold.co/300x135.png", hint: "industries logo" },
    { name: "Oceanic Group", logo: "https://placehold.co/300x135.png", hint: "group logo" },
    { name: "Mountain Peak Co", logo: "https://placehold.co/300x135.png", hint: "outdoors logo" },
    { name: "Golden Key", logo: "https://placehold.co/300x135.png", hint: "financial logo" },
    { name: "Silver Spoon", logo: "https://placehold.co/300x135.png", hint: "restaurant logo" },
    { name: "Bronze Shield", logo: "https://placehold.co/300x135.png", hint: "security logo" },
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
                 <div className="relative h-[500px] overflow-hidden">
                    <div className="flex animate-scroll-up space-y-4 flex-col">
                         {patrons.concat(patrons).map((patron, index) => (
                            <div key={index} className="flex-shrink-0 mx-auto">
                                <Image
                                    src={patron.logo}
                                    alt={`${patron.name} logo`}
                                    width={200}
                                    height={90}
                                    data-ai-hint={patron.hint}
                                    className="object-contain"
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
