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
const DynamicSponsorChildDonationForm = dynamic(
  () => import('@/components/sections/donation-forms/SponsorChildDonationForm'),
  {
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div>,
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
    ],
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
          { href: '/empower-english', label: 'Empower English' },
          { href: '/digiempower', label: 'DigiEmpower' },
          { href: '/sheconnects', label: 'SheConnects' },
          { href: '/milieu', label: 'Milieu' },
          { href: '/vidyashakti', label: 'VidyaShakti' },
        ],
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
        ],
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
        ],
      },
      {
        label: 'Childcare Initiatives',
        isSubDropdown: true,
        href: '/childcare-initiatives',
        subItems: [
          { href: '/innocent-smiles', label: 'Innocent Smiles' },
          { href: '/milieu', label: 'Milieu' },
          { href: '/childfirst', label: 'ChildFirst' },
        ],
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
        ],
      },
      { href: '/relief-to-the-underprivileged', label: 'Relief to the underprivileged' },
      { href: '/disaster-management', label: 'Disaster Management' },
      { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
    ],
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
        ],
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
        ],
      },
    ],
  },
  {
    label: 'Media Room',
    isDropdown: true,
    items: [
      { href: '/press-releases', label: 'Press Releases' },
      { href: '/media', label: 'Media' },
    ],
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
    ],
  },
  { href: '/connect', label: 'Connect' },
];

const causeToFormComponent: { [key: string]: React.ComponentType<any> } = {
  "general": dynamic(() => import('@/components/sections/donation-forms/IndividualDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "educational": dynamic(() => import('@/components/sections/donation-forms/EducationalDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "educational-general": dynamic(() => import('@/components/sections/donation-forms/EducationalDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "innocent-smiles": dynamic(() => import('@/components/sections/donation-forms/InnocentSmilesDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "inspire-edulab": dynamic(() => import('@/components/sections/donation-forms/InspireEduLabDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "eduaccess": dynamic(() => import('@/components/sections/donation-forms/EduAccessDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "empower-english": dynamic(() => import('@/components/sections/donation-forms/EmpowerEnglishDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "digiempower": dynamic(() => import('@/components/sections/donation-forms/DigiEmpowerDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "sheconnects": dynamic(() => import('@/components/sections/donation-forms/SheConnectsDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "milieu": dynamic(() => import('@/components/sections/donation-forms/MilieuDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "vidyashakti": dynamic(() => import('@/components/sections/donation-forms/VidyaShaktiDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "gender-equality": dynamic(() => import('@/components/sections/donation-forms/GenderEqualityDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "gender-equality-general": dynamic(() => import('@/components/sections/donation-forms/GenderEqualityDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "suidhaga": dynamic(() => import('@/components/sections/donation-forms/SuiDhagaDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "krishti": dynamic(() => import('@/components/sections/donation-forms/KrishtiDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "healthcare": dynamic(() => import('@/components/sections/donation-forms/HealthcareDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "healthcare-general": dynamic(() => import('@/components/sections/donation-forms/HealthcareDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "cureline": dynamic(() => import('@/components/sections/donation-forms/CureLineDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "carecircle": dynamic(() => import('@/components/sections/donation-forms/CareCircleDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "childfirst": dynamic(() => import('@/components/sections/donation-forms/ChildFirstDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "detect": dynamic(() => import('@/components/sections/donation-forms/DetectDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "sighthope": dynamic(() => import('@/components/sections/donation-forms/SightHopeDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "oralscan": dynamic(() => import('@/components/sections/donation-forms/OralScanDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "cyclesafe": dynamic(() => import('@/components/sections/donation-forms/CycleSafeDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "soulcircle": dynamic(() => import('@/components/sections/donation-forms/SoulCircleDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "childcare": dynamic(() => import('@/components/sections/donation-forms/ChildcareDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "childcare-general": dynamic(() => import('@/components/sections/donation-forms/ChildcareDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "sustainability": dynamic(() => import('@/components/sections/donation-forms/SustainabilityDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "sustainability-general": dynamic(() => import('@/components/sections/donation-forms/SustainabilityDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "green-roots": dynamic(() => import('@/components/sections/donation-forms/GreenRootsDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "tideshield": dynamic(() => import('@/components/sections/donation-forms/TideShieldDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "roots-of-change": dynamic(() => import('@/components/sections/donation-forms/RootsOfChangeDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "forest-cleaning": dynamic(() => import('@/components/sections/donation-forms/ForestCleaningDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "relief": dynamic(() => import('@/components/sections/donation-forms/ReliefDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "disaster-management": dynamic(() => import('@/components/sections/donation-forms/DisasterManagementDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
  "ignite-change": dynamic(() => import('@/components/sections/donation-forms/IgniteChangeDonationForm'), { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }),
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
  };

  const FormComponent = selectedCause ? causeToFormComponent[selectedCause] : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-[100px] items-center px-4 md:px-6">
        <div className="flex h-full items-center mr-auto">
          <Link href="/" class
