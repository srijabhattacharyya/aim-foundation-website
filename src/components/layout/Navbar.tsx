
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const DynamicIndividualDonationForm = dynamic(
  () => import('@/components/sections/donation-forms/IndividualDonationForm'),
  {
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div>
  }
);

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    label: 'About',
    isDropdown: true,
    items: [
      { href: '/organisation', label: 'Organisation' },
      { href: '/team', label: 'Our Team' },
    ]
  },
  { 
    label: 'Initiatives',
    isDropdown: true,
    items: [
      { 
        label: 'Educational Initiatives',
        isSubDropdown: true,
        href: '/educational-initiatives',
        subItems: [
          { href: '/innocent-smiles', label: 'Innocent Smiles' },
          { href: '/inspire-eduLab', label: 'Inspire EduLab' },
          { href: '/eduaccess', label: 'EduAccess' },
          { href: '/empower-english', label: 'Empower English'},
          { href: '/digiempower', label: 'DigiEmpower' },
          { href: '/sheconnects', label: 'SheConnects' },
          { href: '/milieu', label: 'Milieu' },
          { href: '/vidyashakti', label: 'VidyaShakti' },
        ]
      },
      { 
        label: 'Healthcare Initiatives',
        isSubDropdown: true,
        href: '/healthcare-initiatives', 
        subItems: [
          { href: '/cureline', label: 'CureLine' },
          { href: '/surgireach', label: 'SurgiReach' },
          { href: '/carecircle', label: 'CareCircle' },
          { href: '/childfirst', label: 'ChildFirst' },
          { href: '/detect', label: 'Detect' },
          { href: '/sighthope', label: 'SightHope' },
          { href: '/oralscan', label: 'OralScan' },
          { href: '/cyclesafe', label: 'CycleSafe' },
          { href: '/soulcircle', label: 'SoulCircle' },
        ]
      },
       { 
        label: 'Gender Equality Initiatives',
        isSubDropdown: true,
        href: '/gender-equality-initiative',
        subItems: [
          { href: '/sheconnects', label: 'SheConnects' },
          { href: '/cyclesafe', label: 'CycleSafe' },
          { href: '/detect', label: 'Detect' },
          { href: '/suidhaga', label: 'SuiDhaga' },
          { href: '/krishti', label: 'Krishti' },
        ]
      },
      { 
        label: 'Childcare Initiatives',
        isSubDropdown: true,
        href: '/childcare-initiatives',
        subItems: [
          { href: '/innocent-smiles', label: 'Innocent Smiles' },
          { href: '/milieu', label: 'Milieu' },
          { href: '/childfirst', label: 'ChildFirst' },
        ]
      },
      { 
        label: 'Sustainability Initiatives',
        isSubDropdown: true,
        href: '/sustainability-initiatives',
        subItems: [
          { href: '/green-roots', label: 'GreenRoots' },
          { href: '/tideshield', label: 'TideShield' },
          { href: '/roots-of-change', label: 'Roots of Change' },
        ]
      },
      { href: '/relief-to-the-underprivileged', label: 'Relief to the underprivileged' },
      { href: '/disaster-management', label: 'Disaster Management' },
      { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
    ]
  },
  { 
    label: 'Together',
    isDropdown: true,
    items: [
      { href: '/individual-donation', label: 'Individual Donation' },
      { 
        label: 'Corporate Partnership',
        isSubDropdown: true,
        href: '#',
        subItems: [
          { href: '/corporate-social-responsibility', label: 'Corporate Social Responsibility' },
          { href: '/cause-marketing-events', label: 'Cause Marketing & Events' },
        ]
      },
    ]
  },
  { href: '#events', label: 'Highlights' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Connect' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Dialog>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 md:mr-10" aria-label="AIM Foundation Home">
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
                        item.isSubDropdown ? (
                          <DropdownMenuSub key={item.label}>
                            <DropdownMenuSubTrigger>
                                {item.href && item.href !== '#' ? (
                                  <Link href={item.href} className="w-full text-left">{item.label}</Link>
                                ) : (
                                  <span>{item.label}</span>
                                )}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                {item.subItems?.map((subItem) => (
                                  <DropdownMenuItem key={subItem.label} asChild>
                                    <Link href={subItem.href}>{subItem.label}</Link>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        ) : (
                          <DropdownMenuItem key={item.label} asChild>
                            <Link href={item.href || '#'}>{item.label}</Link>
                          </DropdownMenuItem>
                        )
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
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost">
                <Link href="/login">
                  <LogIn className="mr-2" /> Login
                </Link>
              </Button>
              <DialogTrigger asChild>
                <Button className="transition-transform transform hover:scale-105">Donate Now</Button>
              </DialogTrigger>
            </div>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <DialogTrigger asChild>
              <Button size="sm" className="transition-transform transform hover:scale-105">Donate Now</Button>
            </DialogTrigger>
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
                    <Link href="/" className="flex items-center gap-2" aria-label="AIM Foundation Home">
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
                          <AccordionItem value={link.label} className="border-b-0">
                            <AccordionTrigger className="text-lg font-medium text-foreground transition-colors hover:text-primary py-2 hover:no-underline">
                              {link.label}
                            </AccordionTrigger>
                            <AccordionContent className="pl-4">
                              <nav className="flex flex-col gap-4 pt-2">
                              {link.items?.map((item) => (
                                item.isSubDropdown ? (
                                  <Accordion type="single" collapsible key={item.label}>
                                    <AccordionItem value={item.label} className="border-b-0">
                                      <AccordionTrigger className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2 hover:no-underline">
                                        <SheetClose asChild>
                                          {item.href && item.href !== '#' ? (
                                            <Link href={item.href} className="flex-1 text-left">{item.label}</Link>
                                          ) : (
                                            <span className="flex-1 text-left">{item.label}</span>
                                          )}
                                        </SheetClose>
                                      </AccordionTrigger>
                                      <AccordionContent className="pl-4">
                                        <nav className="flex flex-col gap-4 pt-2">
                                          {item.subItems?.map((subItem) => (
                                            <SheetClose asChild key={subItem.label}>
                                              <Link href={subItem.href} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                                                {subItem.label}
                                              </Link>
                                            </SheetClose>
                                          ))}
                                        </nav>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                ) : (
                                  <SheetClose asChild key={item.label}>
                                    <Link href={item.href || '#'} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                                      {item.label}
                                    </Link>
                                  </SheetClose>
                                )
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
                    <SheetClose asChild>
                      <Link href="/login" className="text-lg font-medium text-foreground transition-colors hover:text-primary flex items-center">
                          <LogIn className="mr-2 h-5 w-5" /> Login
                      </Link>
                    </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
          <DynamicIndividualDonationForm />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
