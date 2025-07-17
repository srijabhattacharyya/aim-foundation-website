"use client";

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
  { label: 'Home' },
  { 
    label: 'About',
    isDropdown: true,
    items: [
      { label: 'Organisation' },
      { label: 'Gallery' },
      { label: 'Our Team' },
    ]
  },
  { 
    label: 'Initiatives',
    isDropdown: true,
    items: [
      { label: 'Educational Initiatives' },
      { label: 'Healthcare Initiatives' },
      { label: 'Environment Initiatives' },
      { label: 'Gender Equality Initiative' },
      { label: 'Childcare Initiatives' },
      { label: 'Relief to the underprivileged' },
      { label: 'Disaster Management' },
      { label: 'Ignite Change Initiative' },
    ]
  },
  { label: 'Events' },
  { label: 'Together' },
  { label: 'Blog' },
  { label: 'Connect' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/images/log(120x50).svg" alt="AIM Foundation Logo" width={120} height={50} loading="lazy" />
        </div>
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
                        <span className="cursor-pointer">{item.label}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <span key={link.label} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                  {link.label}
                </span>
              )
            ))}
          </nav>
          <Button disabled className="transition-transform transform hover:scale-105">Donate Now</Button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Button disabled size="sm" className="transition-transform transform hover:scale-105">Donate Now</Button>
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
                   <div className="flex items-center gap-2 cursor-pointer">
                     <Image src="/images/log(120x50).svg" alt="AIM Foundation Logo" width={120} height={50} loading="lazy" />
                  </div>
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
                                <span className="text-base font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                                  {item.label}
                                </span>
                              </SheetClose>
                            ))}
                            </nav>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                     ) : (
                      <SheetClose asChild key={link.label}>
                          <span className="text-lg font-medium text-foreground transition-colors hover:text-primary cursor-pointer">
                          {link.label}
                          </span>
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
