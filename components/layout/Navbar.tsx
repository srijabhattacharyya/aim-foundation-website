
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
      { href: '/team', label: 'Our Team' },
    ]
  },
  { label: 'Initiatives', isDropdown: true, items: [
      { label: 'Educational Initiatives', isSubDropdown: true, href: '/educational-initiatives', subItems: [
        { href: '/innocent-smiles', label: 'Innocent Smiles' },
        { href: '/inspire-edulab', label: 'Inspire EduLab' },
        { href: '/eduaccess', label: 'EduAccess' },
        { href: '/empower-english', label: 'Empower English'},
        { href: '/digiempower', label: 'DigiEmpower' },
        { href: '/sheconnects', label: 'SheConnects' },
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
        { href: '/sheconnects', label: 'SheConnects' },
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
      { href: '/relief-to-the-underprivileged', label: 'Relief to the underprivileged' },
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
      { href: '/annual-report', label: 'Annual Report' },
      { href: '/library', label: 'Library' },
      { href: '/voices', label: 'Voices' },
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

// Map causes to dynamically loaded form components
const causeToFormComponent: Record<string, ComponentType<any>> = {
  "general": dynamic(() => import('@/components/sections/donation-forms/GeneralDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "educational": dynamic(() => import('@/components/sections/donation-forms/EducationalDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "innocent-smiles": dynamic(() => import('@/components/sections/donation-forms/InnocentSmilesDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
};

const Navbar = () => {
  const [sponsorDialogOpen, setSponsorDialogOpen] = useState(false);
  const [donateDialogOpen, setDonateDialogOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<string | null>(null);

  const handleCauseSelection = (cause: string) => setSelectedCause(cause);
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
              <Dialog open={donateDialogOpen} onOpenChange={handleDialogClose}>
                <DialogTrigger asChild>
                  <Button size="sm" onClick={() => setDonateDialogOpen(true)}>Donate Now</Button>
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
          <Dialog open={donateDialogOpen} onOpenChange={handleDialogClose}>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => setDonateDialogOpen(true)}>Donate Now</Button>
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
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={50} />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon"><X className="h-6 w-6" /></Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link href={link.href ?? '#'} className="text-lg font-medium text-foreground hover:text-primary">{link.label}</Link>
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
