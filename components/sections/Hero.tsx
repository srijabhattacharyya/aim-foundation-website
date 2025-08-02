

"use client";

import Image from 'next/image';
import React from 'react';

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="relative w-full h-auto">
            <Image
              src="https://placehold.co/1920x600.png"
              alt="Home Banner"
              width={1920}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              data-ai-hint="community charity event"
              fetchPriority="auto"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 rounded-lg">
              <div className="text-center text-white p-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Building a Brighter Future, Together
                  </h1>
                  <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    We are committed to empowering communities through education, healthcare, and sustainable development.
                  </p>
              </div>
            </div>
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">Our Current Programs</h2>
            {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
