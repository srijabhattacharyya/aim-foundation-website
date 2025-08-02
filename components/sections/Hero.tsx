
"use client";

import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-100px)]">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A group of smiling volunteers"
        fill
        className="object-cover"
        data-ai-hint="community volunteers"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 font-headline animate-fade-in-down [text-shadow:0_3px_6px_rgba(0,0,0,0.7)]">
          BUILDING A BRIGHTER FUTURE, TOGETHER
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          We are committed to empowering communities through education, healthcare, and sustainable development.
        </p>
      </div>
    </section>
  );
};

export default Hero;
