
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
import CauseSelectionForm from '@/components/sections/donation-forms/CauseSelectionForm';

// Dynamically import all the specific donation forms
const DynamicIndividualDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/IndividualDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEducationalDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/EducationalDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicHealthcareDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/HealthcareDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicGenderEqualityDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/GenderEqualityDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicChildcareDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/ChildcareDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSustainabilityDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/SustainabilityDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicReliefDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/ReliefDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDisasterManagementDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/DisasterManagementDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicIgniteChangeDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/IgniteChangeDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicInnocentSmilesDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/InnocentSmilesDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicInspireEduLabDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/InspireEduLabDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEduAccessDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/EduAccessDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEmpowerEnglishDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/EmpowerEnglishDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDigiEmpowerDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/DigiEmpowerDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSheConnectsDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/SheConnectsDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicMilieuDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/MilieuDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicVidyaShaktiDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/VidyaShaktiDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCureLineDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/CureLineDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCareCircleDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/CareCircleDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicChildFirstDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/ChildFirstDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDetectDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/DetectDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSightHopeDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/SightHopeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicOralScanDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/OralScanDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCycleSafeDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/CycleSafeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSoulCircleDonationForm = dynamic(
  () => import("@/components/sections/donation-forms/SoulCircleDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicGreenRootsDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/GreenRootsDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicTideShieldDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/TideShieldDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicRootsOfChangeDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/RootsOfChangeDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicForestCleaningDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/ForestCleaningDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSuiDhagaDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/SuiDhagaDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicKrishtiDonationForm = dynamic(
    () => import('@/components/sections/donation-forms/KrishtiDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSponsorChildDonationForm = dynamic(
  () => import('@/components/sections/donation-forms/SponsorChildDonationForm'),
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
          { href: '/forest-cleaning', label: 'Forest Cleaning' },
        ]
      },
      { href: '/relief-to-the-underprivileged', label: 'Relief to the underprivileged' },
      { href: '/disaster-management', label: 'Disaster Management' },
      { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
    ]
  },
  { 
    label: 'Get Involved',
    isDropdown: true,
    items: [
      { 
        label: 'Join Us',
        isSubDropdown: true,
        href: '/join-us',
        subItems: [
          { href: '/internship', label: 'Join as an Intern' },
          { href: '/volunteering', label: 'Join as a Volunteer' },
          { href: '/career', label: 'Careers with Purpose' },
        ]
      },
      { href: '/individual-donation', label: 'Individual Donation' },
      { 
        label: 'Corporate Partnership',
        isSubDropdown: true,
        href: '#',
        subItems: [
          { href: '/corporate-social-responsibility', label: 'Corporate Social Responsibility' },
          { href: '/cause-marketing-events', label: 'Cause Marketing & Events' },
          { href: '/employee-engagement', label: 'Employee Engagement' },
          { href: '/payroll-giving', label: 'Payroll Giving' },
        ]
      },
    ]
  },
  { 
    label: 'Media Room',
    isDropdown: true,
    items: [
      { href: '/press-releases', label: 'Press Releases' },
      { href: '/media', label: 'Media' },
    ]
  },
  { href: '/workshops-events', label: 'Workshops & Events' },
  { 
    label: 'Resource Centre',
    isDropdown: true,
    items: [
        { href: '/voices', label: 'Voices of Change' },
        { href: '/films', label: 'Films' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/newsletter', label: 'Newsletter' },
        { href: '/annual-report', label: 'Annual Report' },
        { href: '/library', label: 'Library' },
    ]
  },
  { href: '/connect', label: 'Connect' },
];

const causeToFormComponent: { [key: string]: React.FC } = {
  "general": DynamicIndividualDonationForm,
  "educational": DynamicEducationalDonationForm,
  "educational-general": DynamicEducationalDonationForm,
  "innocent-smiles": DynamicInnocentSmilesDonationForm,
  "inspire-edulab": DynamicInspireEduLabDonationForm,
  "eduaccess": DynamicEduAccessDonationForm,
  "empower-english": DynamicEmpowerEnglishDonationForm,
  "digiempower": DynamicDigiEmpowerDonationForm,
  "sheconnects": DynamicSheConnectsDonationForm,
  "milieu": DynamicMilieuDonationForm,
  "vidyashakti": DynamicVidyaShaktiDonationForm,
  "gender-equality": DynamicGenderEqualityDonationForm,
  "gender-equality-general": DynamicGenderEqualityDonationForm,
  "suidhaga": DynamicSuiDhagaDonationForm,
  "krishti": DynamicKrishtiDonationForm,
  "healthcare": DynamicHealthcareDonationForm,
  "healthcare-general": DynamicHealthcareDonationForm,
  "cureline": DynamicCureLineDonationForm,
  "carecircle": DynamicCareCircleDonationForm,
  "childfirst": DynamicChildFirstDonationForm,
  "detect": DynamicDetectDonationForm,
  "sighthope": DynamicSightHopeDonationForm,
  "oralscan": DynamicOralScanDonationForm,
  "cyclesafe": DynamicCycleSafeDonationForm,
  "soulcircle": DynamicSoulCircleDonationForm,
  "childcare": DynamicChildcareDonationForm,
  "childcare-general": DynamicChildcareDonationForm,
  "sustainability": DynamicSustainabilityDonationForm,
  "sustainability-general": DynamicSustainabilityDonationForm,
  "green-roots": DynamicGreenRootsDonationForm,
  "tideshield": DynamicTideShieldDonationForm,
  "roots-of-change": DynamicRootsOfChangeDonationForm,
  "forest-cleaning": DynamicForestCleaningDonationForm,
  "relief": DynamicReliefDonationForm,
  "disaster-management": DynamicDisasterManagementDonationForm,
  "ignite-change": DynamicIgniteChangeDonationForm,
};

const Navbar = () => {
    const [sponsorDialogOpen, setSponsorDialogOpen] = useState(false);
    const [donateDialogOpen, setDonateDialogOpen] = useState(false);
    const [selectedCause, setSelectedCause] = useState<string | null>(null);

    const handleCauseSelection = (cause: string) => {
        setSelectedCause(cause);
    };

    const handleDialogClose = () => {
      setDonateDialogOpen(false);
      setSelectedCause(null);
    }

    const FormComponent = selectedCause ? causeToFormComponent[selectedCause] : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-[100px] items-center px-4 md:px-6">
          <div className="flex h-full items-center mr-auto">
            <Link href="/" className="flex items-center" aria-label="AIM Foundation Home">
              <Image src="/images/logo.png" alt="AIM Foundation Logo" width={150} height={60} className="w-auto h-auto"/>
            </Link>
          </div>
          <div className="hidden md:flex flex-col h-full">
              <div className="flex justify-end items-center h-1/2 border-b">
                  <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" size="sm">
                        <Link href="/admin/login">
                        <LogIn className="mr-2 h-4 w-4" /> Login
                        </Link>
                    </Button>
                    <Dialog open={sponsorDialogOpen} onOpenChange={setSponsorDialogOpen}>
                        <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="transition-transform transform hover:scale-105 border-accent text-accent hover:bg-accent hover:text-accent-foreground">Sponsor a Child</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                            <DynamicSponsorChildDonationForm />
                        </DialogContent>
                    </Dialog>
                    <Dialog open={donateDialogOpen} onOpenChange={handleDialogClose}>
                        <DialogTrigger asChild>
                            <Button size="sm" className="transition-transform transform hover:scale-105" onClick={() => setDonateDialogOpen(true)}>Donate Now</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                           {FormComponent ? <FormComponent /> : <CauseSelectionForm onCauseSelect={handleCauseSelection} />}
                        </DialogContent>
                    </Dialog>
                  </div>
              </div>
              <div className="flex justify-end items-center h-1/2">
                <nav className="flex gap-6 items-center">
                {navLinks.map((link) => (
                    link.isDropdown ? (
                    <DropdownMenu key={link.label}>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none">
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
                    <Link key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                        {link.label}
                    </Link>
                    )
                ))}
                </nav>
              </div>
          </div>
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <Dialog open={donateDialogOpen} onOpenChange={handleDialogClose}>
                <DialogTrigger asChild>
                    <Button size="sm" className="transition-transform transform hover:scale-105" onClick={() => setDonateDialogOpen(true)}>Donate Now</Button>
                </DialogTrigger>
                 <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                    {FormComponent ? <FormComponent /> : <CauseSelectionForm onCauseSelect={handleCauseSelection} />}
                </DialogContent>
            </Dialog>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="overflow-y-auto">
                <div className="flex flex-col p-6">
                  <div className="flex justify-between items-center mb-6">
                    <Link href="/" className="flex items-center gap-2" aria-label="AIM Foundation Home">
                      <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={50} className="w-auto h-auto"/>
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
                      <Link href="/admin/login" className="text-lg font-medium text-foreground transition-colors hover:text-primary flex items-center">
                          <LogIn className="mr-2 h-5 w-5" /> Login
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Dialog open={sponsorDialogOpen} onOpenChange={setSponsorDialogOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="w-full justify-start text-lg font-medium border-accent text-accent hover:bg-accent hover:text-accent-foreground">Sponsor a Child</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                                <DynamicSponsorChildDonationForm />
                            </DialogContent>
                        </Dialog>
                    </SheetClose>
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
