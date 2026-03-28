
'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import imageData from 'app/lib/placeholder-images.json';
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  hint: string;
  description: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedStates, setLoadedStates] = useState<boolean[]>([]);

  useEffect(() => {
    const sortedImages = [...imageData.gallery].sort((a, b) => parseInt(b.id) - parseInt(a.id));
    setImages(sortedImages);
    setLoadedStates(new Array(sortedImages.length).fill(false));
    setLoading(false);
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedStates(prev => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full h-[334px]">
            <Image
              src="/images/banner/pg.avif"
              alt="Gallery Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Gallery
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Capturing Moments of Hope and Change.
              </p>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{ label: 'Media', href: '/press-releases' }, { label: 'Gallery' }]} />

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <Card key={i} className="overflow-hidden shadow-lg">
                    <CardContent className="relative aspect-[3/2] w-full p-0 overflow-hidden">
                      <Skeleton className="w-full h-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <Card
                    key={image.id}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <CardContent className="relative aspect-[3/2] w-full p-0 overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        data-ai-hint={image.hint}
                        className={`object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105
                          transition-opacity duration-700 ease-out ${loadedStates[index] ? 'opacity-100' : 'opacity-0'}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={index < 3 ? 'eager' : 'lazy'}
                        onLoad={() => handleImageLoad(index)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-4 absolute bottom-0 text-white">
                          <p className="font-semibold text-sm">{image.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
