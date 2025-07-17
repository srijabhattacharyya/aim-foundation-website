"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    label: 'About',
    isDropdown: true,
    items: [
      { href: '#organisation', label: 'Organisation' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#team', label: 'Our Team' },
    ]
  },
  { 
    label: 'Initiatives',
    isDropdown: true,
    items: [
      { href: '#initiatives', label: 'Educational Initiatives' },
      { href: '#initiatives', label: 'Healthcare Initiatives' },
      { href: '#initiatives', label: 'Environment Initiatives' },
      { href: '#initiatives', label: 'Gender Equality Initiative' },
      { href: '#initiatives', label: 'Childcare Initiatives' },
      { href: '#initiatives', label: 'Relief to the underprivileged' },
      { href: '#initiatives', 'label': 'Disaster Management' },
      { href: '#initiatives', label: 'Ignite Change Initiative' },
    ]
  },
  { href: '#events', label: 'Events' },
  { href: '#join', label: 'Together' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Connect' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={50} />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 items-center">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-base font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none">
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.items?.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={link.label} href={link.href} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </Link>
              )
            ))}
          </nav>
          <Button asChild className="transition-transform transform hover:scale-105">
            <Link href="#contact">Donate Now</Link>
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Button asChild size="sm" className="transition-transform transform hover:scale-105">
            <Link href="#contact">Donate Now</Link>
          </Button>
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
                     <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={50} />
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
                     link.isDropdown ? (
                      <Accordion type="single" collapsible key={link.label}>
                        <AccordionItem value="item-1" className="border-b-0">
                          <AccordionTrigger className="text-lg font-medium text-foreground transition-colors hover:text-primary py-2 hover:no-underline">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pl-4">
                            <nav className="flex flex-col gap-4 pt-2">
                            {link.items?.map((item) => (
                              <SheetClose asChild key={item.label}>
                                <Link href={item.href} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                                  {item.label}
                                </Link>
                              </SheetClose>
                            ))}
                            </nav>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                     ) : (
                      <SheetClose asChild key={link.label}>
                          <Link href={link.href} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                          {link.label}
                          </Link>
                      </SheetClose>
                     )
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
