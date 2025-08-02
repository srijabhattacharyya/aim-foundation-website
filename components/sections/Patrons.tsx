
"use client"

import Image from "next/image"
import { Patron, getPatrons } from "@/lib/firebase/patrons"
import { useEffect, useState } from "react"

const Patrons = () => {
    const [patrons, setPatrons] = useState<Patron[]>([]);
    const [displayItems, setDisplayItems] = useState<Patron[]>([]);

    useEffect(() => {
        const fetchPatrons = async () => {
            const fetchedPatrons = await getPatrons();
            setPatrons(fetchedPatrons);
        };
        fetchPatrons();
    }, []);

    useEffect(() => {
        const items = [...patrons];
        // Ensure there's a good number of items for a smooth scroll effect
        while (items.length > 0 && items.length < 16) {
            items.push(...patrons);
        }
        if (items.length === 0) {
             while (items.length < 16) {
                items.push({
                    id: `placeholder-${items.length}`,
                    name: "Patron Logo",
                    logoUrl: "https://placehold.co/200x90.png",
                    logoPath: '',
                    createdAt: new Date() as any,
                });
            }
        }
        setDisplayItems(items);
    }, [patrons]);

    if (patrons.length === 0 && displayItems.length === 0) {
        return (
             <section className="py-12 md:py-20 lg:py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Valued Patrons</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            We are grateful for the generous support from our partners and patrons who make our work possible.
                        </p>
                    </div>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                        {Array.from({ length: 8 }).map((_, index) => (
                             <div key={index} className="flex justify-center items-center h-24 bg-muted/30 rounded-lg p-2">
                                <Image
                                    src="https://placehold.co/200x90.png"
                                    alt="Patron Logo Placeholder"
                                    width={180}
                                    height={80}
                                    data-ai-hint="corporate logo"
                                    className="object-contain max-w-full max-h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

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
                    className="relative flex h-[400px] w-full flex-col overflow-hidden rounded-lg border bg-background/50"
                >
                    <div className="flex flex-col animate-scroll-up">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                            {displayItems.map((patron) => (
                                <div key={patron.id} className="flex justify-center items-center h-24">
                                    <Image
                                        src={patron.logoUrl}
                                        alt={patron.name}
                                        width={200}
                                        height={90}
                                        data-ai-hint="corporate logo"
                                        className="object-contain w-4/5 h-auto transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6" aria-hidden="true">
                           {displayItems.map((patron) => (
                                <div key={`duplicate-${patron.id}`} className="flex justify-center items-center h-24">
                                    <Image
                                        src={patron.logoUrl}
                                        alt={patron.name}
                                        width={200}
                                        height={90}
                                        data-ai-hint="corporate logo"
                                        className="object-contain w-4/5 h-auto transition-all duration-300"
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
