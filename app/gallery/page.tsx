
'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import Image from 'next/image';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface GalleryImage {
  id: string;
  imageUrl: string;
  description: string;
  initiatives: string[];
}

const initiatives = [
    "General",
    "Educational Initiatives",
    "Healthcare Initiatives",
    "Gender Equality Initiatives",
    "Childcare Initiatives",
    "Sustainability Initiatives",
    "Relief to the underprivileged",
    "Disaster Management",
    "Ignite Change Initiative"
];

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const q = query(
          collection(db, 'gallery'),
          where('status', '==', 'Active'),
          orderBy('sequence', 'asc')
        );
        const querySnapshot = await getDocs(q);
        const fetchedImages: GalleryImage[] = [];
        querySnapshot.forEach((doc) => {
          fetchedImages.push({ id: doc.id, ...doc.data() } as GalleryImage);
        });
        setImages(fetchedImages);
        setFilteredImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching gallery images: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(image => image.initiatives.includes(filter)));
    }
  }, [filter, images]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Gallery</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Moments of impact, stories of change. Explore our journey through these images.
              </p>
            </div>
            
            <div className="flex justify-end mb-8">
                <Select onValueChange={setFilter} defaultValue="All">
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Filter by initiative" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Initiatives</SelectItem>
                        {initiatives.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <Skeleton className="h-[250px] w-full rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    </div>
                ))}
              </div>
            ) : filteredImages.length === 0 ? (
                <div className="text-center py-12">
                    <p>No images match the current filter. Try selecting another initiative.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredImages.map((image) => (
                    <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="relative aspect-[3/2] w-full p-0">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                            <div className="p-4 absolute bottom-0 text-white">
                                <p className="font-semibold text-sm">{image.description}</p>
                                <p className="text-xs">{image.initiatives.join(', ')}</p>
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
