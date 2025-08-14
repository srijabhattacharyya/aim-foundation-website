
'use client';

import Image from 'next/image';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  {
    id: '1',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A moment of joy and learning at our educational center.',
    hint: 'children learning'
  },
  {
    id: '2',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Our dedicated team providing healthcare services in a remote village.',
    hint: 'healthcare camp'
  },
  {
    id: '3',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Empowering women through our skill development programs.',
    hint: 'women empowerment'
  },
  {
    id: '4',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Community members participating in a tree plantation drive.',
    hint: 'tree plantation'
  },
  {
    id: '5',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Distributing essential supplies during a relief operation.',
    hint: 'disaster relief'
  },
  {
    id: '6',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A successful eye care camp restoring sight and hope.',
    hint: 'eye care'
  }
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Gallery</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Moments of impact, stories of change. Explore our journey through these images.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="relative aspect-[3/2] w-full p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      data-ai-hint={image.hint}
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="p-4 absolute bottom-0 text-white">
                            <p className="font-semibold text-sm">{image.description}</p>
                        </div>
                    </div>
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
