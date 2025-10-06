'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Define GalleryImage type
export interface GalleryImage {
  id: string;
  createdAt: string;
  description: string;
  status: string;
  sequence: number;
  imageUrl: string;
}

// Mock fetch function (replace with your real API call)
async function fetchGalleryImages(): Promise<Partial<GalleryImage>[]> {
  // Example: API might only return partial data
  return [
    {
      id: "1",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/projects/book/book-distribution.avif",
      description: "Book distribution to underprivileged children",
    },
    {
      id: "2",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/projects/cureline/cureline1.avif",
      description: "Healthcare camp in remote village",
    },
  ];
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const fetchedImages = await fetchGalleryImages();

        // ✅ Map API data to match GalleryImage type exactly
        const galleryImages: GalleryImage[] = fetchedImages.map((img) => ({
          id: img.id ?? "",
          createdAt: img.createdAt ?? new Date().toISOString(),
          description: img.description ?? "",
          status: img.status ?? "active",
          sequence: img.sequence ?? 0,
          imageUrl: img.imageUrl ?? "",
        }));

        setImages(galleryImages);
      } catch (err: any) {
        console.error("Error fetching gallery images:", err);
        toast({
          title: "Error",
          description: "Could not fetch gallery images",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [toast]);

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

            {loading ? (
              <p className="text-center text-lg">Loading images...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image) => (
                  <Card
                    key={image.id}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <CardContent className="relative aspect-[3/2] w-full p-0 overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description || "Gallery image"}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
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
