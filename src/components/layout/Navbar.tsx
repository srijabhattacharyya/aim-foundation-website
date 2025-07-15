"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#projects', label: 'Projects' },
  { href: '#events', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#join', label: 'Join Us' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://placehold.co/120x50.png" alt="AIM Foundation Logo" width={120} height={50} data-ai-hint="logo" />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
          <Button>Donate Now</Button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Button size="sm">Donate Now</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <div className="flex justify-between items-center mb-6">
                   <Link href="/" className="flex items-center gap-2">
                     <Image src="https://placehold.co/120x50.png" alt="AIM Foundation Logo" width={120} height={50} data-ai-hint="logo" />
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                     <SheetClose asChild key={link.label}>
                        <Link href={link.href} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                        {link.label}
                        </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
