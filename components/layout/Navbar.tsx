
"use client";

import { useState, ComponentType } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuTrigger,
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

// Dynamic donation forms
const DynamicSponsorChildDonationForm = dynamic(
  () => import('@/components/sections/donation-forms/SponsorChildDonationForm'),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);

// Type for nav links
interface NavItem {
  label: string;
  href?: string;
  isDropdown?: boolean;
  items?: NavItem[];
  isSubDropdown?: boolean;
  subItems?: NavItem[];
}

// Navbar links
const navLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  { label: 'About', isDropdown: true, items: [
      { href: '/organisation', label: 'Organisation' },
      { href: '/profile', label: 'Our Profile' },
      { href: '/team', label: 'Our Team' },
    ]
  },
  { label: 'Initiatives', isDropdown: true, items: [
      { label: 'Educational Initiatives', isSubDropdown: true, href: '/educational-initiatives', subItems: [
        { href: '/innocent-smiles', label: 'Innocent Smiles' },
        { href: '/eduaccess', label: 'EduAccess' },
        { href: '/empower-english', label: 'Empower English'},
        { href: '/digiempower', label: 'DigiEmpower' },
        { href: '/milieu', label: 'Milieu' },
        { href: '/vidyashakti', label: 'VidyaShakti' },
      ]},
      { label: 'Healthcare Initiatives', isSubDropdown: true, href: '/healthcare-initiatives', subItems: [
        { href: '/cureline', label: 'CureLine' },
        { href: '/carecircle', label: 'CareCircle' },
        { href: '/childfirst', label: 'ChildFirst' },
        { href: '/detect', label: 'Detect' },
        { href: '/sighthope', label: 'SightHope' },
        { href: '/oralscan', label: 'OralScan' },
        { href: '/cyclesafe', label: 'CycleSafe' },
        { href: '/soulcircle', label: 'SoulCircle' },
      ]},
      { label: 'Gender Equality Initiative', isSubDropdown: true, href: '/gender-equality-initiative', subItems: [
        { href: '/cyclesafe', label: 'CycleSafe' },
        { href: '/detect', label: 'Detect' },
        { href: '/suidhaga', label: 'SuiDhaga' },
        { href: '/krishti', label: 'Krishti' },
      ]},
       { label: 'Sustainability Initiatives', isSubDropdown: true, href: '/sustainability-initiatives', subItems: [
        { href: '/green-roots', label: 'GreenRoots' },
        { href: '/tideshield', label: 'TideShield' },
        { href: '/roots-of-change', label: 'Roots of Change' },
        { href: '/forest-cleaning', label: 'Forest Cleaning' },
      ]},
      { href: '/relief-to-the-underprivileged', label: 'Relief to the Underprivileged' },
      { href: '/disaster-management', label: 'Disaster Management' },
      { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
    ]
  },
  { label: 'Get Involved', isDropdown: true, items: [
      { href: '/individual-donation', label: 'Individual Donation' },
      { href: '/corporate-social-responsibility', label: 'Corporate Social Responsibility' },
      { href: '/payroll-giving', label: 'Payroll Giving' },
      { href: '/cause-marketing-events', label: 'Cause-Marketing & Events' },
    ]
  },
   { label: 'Join Us', isDropdown: true, items: [
      { href: '/volunteering', label: 'Volunteering' },
      { href: '/internship', label: 'Internship' },
      { href: '/career', label: 'Careers' },
    ]
  },
  { label: 'Resources', isDropdown: true, items: [
      { href: '/blog', label: 'Blog' },
      { href: '/annual-report', label: 'Annual Report' },
      { href: '/policies', label: 'Policies' },
    ]
  },
  { label: 'Media', isDropdown: true, items: [
      { href: '/gallery', label: 'Gallery' },
      { href: '/films', label: 'Films' },
      { href: '/press-releases', label: 'Press Releases' },
    ]
  },
  { href: '/connect', label: 'Connect' },
];

const SkeletonLoader = () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div>;

// Map causes to dynamically loaded form components
const causeToFormComponent: Record<string, ComponentType<any>> = {
  "general": dynamic(() => import('@/components/sections/donation-forms/GeneralDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "educational": dynamic(() => import('@/components/sections/donation-forms/EducationalDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "innocent-smiles": dynamic(() => import('@/components/sections/donation-forms/InnocentSmilesDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "eduaccess": dynamic(() => import('@/components/sections/donation-forms/EduAccessDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "empower-english": dynamic(() => import('@/components/sections/donation-forms/EmpowerEnglishDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "digiempower": dynamic(() => import('@/components/sections/donation-forms/DigiEmpowerDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "milieu": dynamic(() => import('@/components/sections/donation-forms/MilieuDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "vidyashakti": dynamic(() => import('@/components/sections/donation-forms/VidyaShaktiDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "healthcare": dynamic(() => import('@/components/sections/donation-forms/HealthcareDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "cureline": dynamic(() => import('@/components/sections/donation-forms/CureLineDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "carecircle": dynamic(() => import('@/components/sections/donation-forms/CareCircleDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "childfirst": dynamic(() => import('@/components/sections/donation-forms/ChildFirstDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "detect": dynamic(() => import('@/components/sections/donation-forms/DetectDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "sighthope": dynamic(() => import('@/components/sections/donation-forms/SightHopeDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "oralscan": dynamic(() => import('@/components/sections/donation-forms/OralScanDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "cyclesafe": dynamic(() => import('@/components/sections/donation-forms/CycleSafeDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "soulcircle": dynamic(() => import('@/components/sections/donation-forms/SoulCircleDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "gender-equality": dynamic(() => import('@/components/sections/donation-forms/GenderEqualityDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "suidhaga": dynamic(() => import('@/components/sections/donation-forms/SuiDhagaDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "krishti": dynamic(() => import('@/components/sections/donation-forms/KrishtiDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "childcare": dynamic(() => import('@/components/sections/donation-forms/ChildcareDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "sustainability": dynamic(() => import('@/components/sections/donation-forms/SustainabilityDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "green-roots": dynamic(() => import('@/components/sections/donation-forms/GreenRootsDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "tideshield": dynamic(() => import('@/components/sections/donation-forms/TideShieldDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "roots-of-change": dynamic(() => import('@/components/sections/donation-forms/RootsOfChangeDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "forest-cleaning": dynamic(() => import('@/components/sections/donation-forms/ForestCleaningDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "relief": dynamic(() => import('@/components/sections/donation-forms/ReliefDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "disaster-management": dynamic(() => import('@/components/sections/donation-forms/DisasterManagementDonationForm'), { ssr: false, loading: SkeletonLoader }),
  "ignite-change": dynamic(() => import('@/components/sections/donation-forms/IgniteChangeDonationForm'), { ssr: false, loading: SkeletonLoader }),
};

const Navbar = () => {
  const [sponsorDialogOpen, setSponsorDialogOpen] = useState(false);
  const [donateDialogOpen, setDonateDialogOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<string | null>(null);

  const handleCauseSelection = (cause: string) => {
    // Map general categories to their specific general donation form
    const causeMapping: { [key: string]: string } = {
        "educational-general": "educational",
        "healthcare-general": "healthcare",
        "gender-equality-general": "gender-equality",
        "childcare-general": "childcare",
        "sustainability-general": "sustainability",
    };
    setSelectedCause(causeMapping[cause] || cause);
  };
  
  const handleDialogChange = (open: boolean) => {
    setDonateDialogOpen(open);
    if (!open) {
      setSelectedCause(null);
    }
  };

  const FormComponent = selectedCause ? causeToFormComponent[selectedCause] : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-[100px] items-center px-4 md:px-6">
        <div className="flex h-full items-center mr-auto">
          <Link href="/" className="flex items-center" aria-label="AIM Foundation Home">
            <Image src="/images/logo.png" alt="AIM Foundation Logo" width={150} height={60} className="w-auto h-auto"/>
          </Link>
        </div>

        {/* Desktop Menu */}
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
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Sponsor a Child</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                  <DynamicSponsorChildDonationForm />
                </DialogContent>
              </Dialog>
              <Dialog open={donateDialogOpen} onOpenChange={handleDialogChange}>
                <DialogTrigger asChild>
                  <Button size="sm">Donate Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                  {FormComponent ? <FormComponent /> : <CauseSelectionForm onCauseSelect={handleCauseSelection} />}
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex justify-end items-center h-1/2">
            <nav className="flex gap-6 items-center">
              {navLinks.map((link) =>
                link.isDropdown ? (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary">
                      {link.label} <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.items?.map((item) =>
                        item.isSubDropdown ? (
                           <DropdownMenuSub key={item.label}>
                              <DropdownMenuSubTrigger>
                                <Link href={item.href ?? '#'}>{item.label}</Link>
                              </DropdownMenuSubTrigger>
                              <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                  {item.subItems?.map((subItem) => (
                                    <DropdownMenuItem key={subItem.label} asChild>
                                      <Link href={subItem.href ?? '#'}>{subItem.label}</Link>
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuSubContent>
                              </DropdownMenuPortal>
                            </DropdownMenuSub>
                        ) : (
                          <DropdownMenuItem key={item.label} asChild>
                            <Link href={item.href ?? '#'}>{item.label}</Link>
                          </DropdownMenuItem>
                        )
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link key={link.label} href={link.href ?? '#'} className="text-sm font-medium text-muted-foreground hover:text-primary">{link.label}</Link>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <Dialog open={donateDialogOpen} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
              <Button size="sm">Donate Now</Button>
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
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2">
                      <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={50} />
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon"><X className="h-6 w-6" /></Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-2">
                  <Accordion type="multiple" className="w-full">
                    {navLinks.map((link) => 
                      link.isDropdown ? (
                        <AccordionItem value={link.label} key={link.label} className="border-b-0">
                          <AccordionTrigger className="py-3 text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pl-4">
                            {link.items?.map((item) => (
                              item.isSubDropdown ? (
                                <Accordion type="multiple" key={item.label}>
                                  <AccordionItem value={item.label} className="border-b-0">
                                    <AccordionTrigger className="py-2 text-md font-medium text-muted-foreground hover:text-primary hover:no-underline">
                                      <SheetClose asChild>
                                        <Link href={item.href ?? '#'} className="w-full text-left">{item.label}</Link>
                                      </SheetClose>
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-4">
                                      {item.subItems?.map((subItem) => (
                                        <SheetClose asChild key={subItem.label}>
                                          <Link href={subItem.href ?? '#'} className="block py-2 text-muted-foreground hover:text-primary">{subItem.label}</Link>
                                        </SheetClose>
                                      ))}
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              ) : (
                                <SheetClose asChild key={item.label}>
                                  <Link href={item.href ?? '#'} className="block py-2 text-muted-foreground hover:text-primary">{item.label}</Link>
                                </SheetClose>
                              )
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <SheetClose asChild key={link.label}>
                          <Link href={link.href ?? '#'} className="block py-3 text-lg font-medium text-foreground hover:text-primary">{link.label}</Link>
                        </SheetClose>
                      )
                    )}
                  </Accordion>
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
