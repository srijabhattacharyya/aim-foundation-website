
"use client";

import Image from 'next/image';
import React from 'react';

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
      <div className="relative w-full h-auto">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/banner/home-mobile.avif" />
          <source media="(min-width: 768px)" srcSet="/images/banner/home.png" />
          <Image
            src="/images/banner/home.png"
            alt="Home Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="container mx-auto px-4 md:px-6 text-white pb-8 md:pb-16">
            <div className="text-center md:hidden">
               <div role="heading" aria-level={1} className="text-3xl font-bold mb-4 font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Building a Brighter Future, Together
              </div>
            </div>
            <div className="text-center hidden md:block">
              <div role="heading" aria-level={1} className="text-4xl md:text-6xl font-bold mb-4 font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Building a Brighter Future, Together
              </div>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                We are committed to empowering communities through education, healthcare, and sustainable development.
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
