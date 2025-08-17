"use client";

import Image from 'next/image';
import React from 'react';

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-auto">
        {/* Mobile Banner */}
        <div className="block md:hidden">
          <Image
            src="/images/banner/home.png"
            alt="Home Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            sizes="100vw"
            priority
          />
        </div>
        {/* Desktop Banner */}
        <div className="hidden md:block">
          <Image
            src="/images/banner/home.avif"
            alt="Home Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="container mx-auto px-4 md:px-6 text-white pb-8 md:pb-16">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Building a Brighter Future, Together
              </h1>
              <p className="hidden md:block text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                We are committed to empowering communities through education, healthcare, and sustainable development.
              </p>
            </div>
             <div className="w-full hidden md:block">
                <h2 className="text-2xl font-semibold mb-6 text-center [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Our Current Programs</h2>
                {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
