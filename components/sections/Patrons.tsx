import Image from "next/image";
import { getPatrons } from "@/lib/firebase/patrons";

export const revalidate = 0;

const Patrons = async () => {
    const patrons = await getPatrons();
    
    // Create a display list with real patrons and placeholders if needed
    const displayItems = [...patrons];
    while (displayItems.length < 8) { // Ensure at least 8 slots are filled
        displayItems.push({
            id: `placeholder-${displayItems.length}`,
            name: "Patron Logo",
            logoUrl: "https://placehold.co/200x90.png",
            logoPath: '',
            createdAt: new Date() as any,
        });
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
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                    {displayItems.map((patron, index) => (
                        <div key={patron.id} className="flex justify-center items-center h-24 bg-muted/30 rounded-lg p-2">
                            <Image
                                src={patron.logoUrl}
                                alt={patron.name}
                                width={180}
                                height={80}
                                data-ai-hint="corporate logo"
                                className="object-contain max-w-full max-h-full transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Patrons;
