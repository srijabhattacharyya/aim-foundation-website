"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

// Dynamically import all the specific donation forms
const DynamicIndividualDonationForm = dynamic(
  () => import("./IndividualDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEducationalDonationForm = dynamic(
  () => import("./EducationalDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicHealthcareDonationForm = dynamic(
  () => import("./HealthcareDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicGenderEqualityDonationForm = dynamic(
  () => import("./GenderEqualityDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicChildcareDonationForm = dynamic(
  () => import("./ChildcareDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSustainabilityDonationForm = dynamic(
  () => import("./SustainabilityDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicReliefDonationForm = dynamic(
  () => import("./ReliefDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDisasterManagementDonationForm = dynamic(
  () => import("./DisasterManagementDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicIgniteChangeDonationForm = dynamic(
  () => import("./IgniteChangeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicInnocentSmilesDonationForm = dynamic(
  () => import("./InnocentSmilesDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicInspireEduLabDonationForm = dynamic(
  () => import("./InspireEduLabDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEduAccessDonationForm = dynamic(
  () => import("./EduAccessDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEmpowerEnglishDonationForm = dynamic(
  () => import("./EmpowerEnglishDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDigiEmpowerDonationForm = dynamic(
  () => import("./DigiEmpowerDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSheConnectsDonationForm = dynamic(
  () => import("./SheConnectsDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicMilieuDonationForm = dynamic(
  () => import("./MilieuDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicVidyaShaktiDonationForm = dynamic(
  () => import("./VidyaShaktiDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCureLineDonationForm = dynamic(
  () => import("./CureLineDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCareCircleDonationForm = dynamic(
  () => import("./CareCircleDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicChildFirstDonationForm = dynamic(
  () => import("./ChildFirstDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDetectDonationForm = dynamic(
  () => import("./DetectDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSightHopeDonationForm = dynamic(
  () => import("./SightHopeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicOralScanDonationForm = dynamic(
  () => import("./OralScanDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCycleSafeDonationForm = dynamic(
  () => import("./CycleSafeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSoulCircleDonationForm = dynamic(
  () => import("./SoulCircleDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicGreenRootsDonationForm = dynamic(
  () => import("./GreenRootsDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicTideShieldDonationForm = dynamic(
  () => import("./TideShieldDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicRootsOfChangeDonationForm = dynamic(
  () => import("./RootsOfChangeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicForestCleaningDonationForm = dynamic(
  () => import("./ForestCleaningDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSuiDhagaDonationForm = dynamic(
  () => import("./SuiDhagaDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicKrishtiDonationForm = dynamic(
  () => import("./KrishtiDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);

// Cause definitions
const mainCauses = [
  { value: "general", label: "General Donation to support any cause" },
  { value: "educational", label: "Educational Initiatives" },
  { value: "healthcare", label: "Healthcare Initiatives" },
  { value: "gender-equality", label: "Gender Equality Initiatives" },
  { value: "childcare", label: "Childcare Initiatives" },
  { value: "sustainability", label: "Sustainability Initiatives" },
  { value: "relief", label: "Relief to the Underprivileged" },
  { value: "disaster-management", label: "Disaster Management" },
  { value: "ignite-change", label: "Ignite Change Initiatives" },
];

const educationalInitiatives = [
  { value: "educational-general", label: "General Donation to support Educational Initiatives" },
  { value: "innocent-smiles", label: "Innocent Smiles" },
  { value: "inspire-edulab", label: "Inspire EduLab" },
  { value: "eduaccess", label: "EduAccess" },
  { value: "empower-english", label: "Empower English" },
  { value: "digiempower", label: "DigiEmpower" },
  { value: "sheconnects", label: "SheConnects" },
  { value: "milieu", label: "Milieu" },
  { value: "vidyashakti", label: "VidyaShakti" },
];

const healthcareInitiatives = [
  { value: "healthcare-general", label: "General Donation to support Healthcare Initiatives" },
  { value: "cureline", label: "CureLine" },
  { value: "carecircle", label: "CareCircle" },
  { value: "childfirst", label: "ChildFirst" },
  { value: "detect", label: "Detect" },
  { value: "sighthope", label: "SightHope" },
  { value: "oralscan", label: "OralScan" },
  { value: "cyclesafe", label: "CycleSafe" },
  { value: "soulcircle", label: "SoulCircle" },
];

const genderEqualityInitiatives = [
  { value: "gender-equality-general", label: "General Donation to support Gender Equality Initiatives" },
  { value: "sheconnects", label: "SheConnects" },
  { value: "cyclesafe", label: "CycleSafe" },
  { value: "detect", label: "Detect" },
  { value: "suidhaga", label: "SuiDhaga" },
  { value: "krishti", label: "Krishti" },
];

const childcareInitiatives = [
  { value: "childcare-general", label: "General Donation to support Childcare Initiatives" },
  { value: "innocent-smiles", label: "Innocent Smiles" },
  { value: "milieu", label: "Milieu" },
  { value: "childfirst", label: "ChildFirst" },
];

const sustainabilityInitiatives = [
  { value: "sustainability-general", label: "General Donation to support Sustainability Initiatives" },
  { value: "green-roots", label: "Green
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

// Dynamically import all the specific donation forms
const DynamicIndividualDonationForm = dynamic(
  () => import("./IndividualDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEducationalDonationForm = dynamic(
  () => import("./EducationalDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicHealthcareDonationForm = dynamic(
  () => import("./HealthcareDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicGenderEqualityDonationForm = dynamic(
  () => import("./GenderEqualityDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicChildcareDonationForm = dynamic(
  () => import("./ChildcareDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSustainabilityDonationForm = dynamic(
  () => import("./SustainabilityDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicReliefDonationForm = dynamic(
  () => import("./ReliefDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDisasterManagementDonationForm = dynamic(
  () => import("./DisasterManagementDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicIgniteChangeDonationForm = dynamic(
  () => import("./IgniteChangeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicInnocentSmilesDonationForm = dynamic(
  () => import("./InnocentSmilesDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicInspireEduLabDonationForm = dynamic(
  () => import("./InspireEduLabDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEduAccessDonationForm = dynamic(
  () => import("./EduAccessDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEmpowerEnglishDonationForm = dynamic(
  () => import("./EmpowerEnglishDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDigiEmpowerDonationForm = dynamic(
  () => import("./DigiEmpowerDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSheConnectsDonationForm = dynamic(
  () => import("./SheConnectsDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicMilieuDonationForm = dynamic(
  () => import("./MilieuDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicVidyaShaktiDonationForm = dynamic(
  () => import("./VidyaShaktiDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCureLineDonationForm = dynamic(
  () => import("./CureLineDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCareCircleDonationForm = dynamic(
  () => import("./CareCircleDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicChildFirstDonationForm = dynamic(
  () => import("./ChildFirstDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDetectDonationForm = dynamic(
  () => import("./DetectDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSightHopeDonationForm = dynamic(
  () => import("./SightHopeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicOralScanDonationForm = dynamic(
  () => import("./OralScanDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicCycleSafeDonationForm = dynamic(
  () => import("./CycleSafeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSoulCircleDonationForm = dynamic(
  () => import("./SoulCircleDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicGreenRootsDonationForm = dynamic(
  () => import("./GreenRootsDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicTideShieldDonationForm = dynamic(
  () => import("./TideShieldDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicRootsOfChangeDonationForm = dynamic(
  () => import("./RootsOfChangeDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicForestCleaningDonationForm = dynamic(
  () => import("./ForestCleaningDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSuiDhagaDonationForm = dynamic(
  () => import("./SuiDhagaDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicKrishtiDonationForm = dynamic(
  () => import("./KrishtiDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);

// Cause definitions
const mainCauses = [
  { value: "general", label: "General Donation to support any cause" },
  { value: "educational", label: "Educational Initiatives" },
  { value: "healthcare", label: "Healthcare Initiatives" },
  { value: "gender-equality", label: "Gender Equality Initiatives" },
  { value: "childcare", label: "Childcare Initiatives" },
  { value: "sustainability", label: "Sustainability Initiatives" },
  { value: "relief", label: "Relief to the Underprivileged" },
  { value: "disaster-management", label: "Disaster Management" },
  { value: "ignite-change", label: "Ignite Change Initiatives" },
];

const educationalInitiatives = [
  { value: "educational-general", label: "General Donation to support Educational Initiatives" },
  { value: "innocent-smiles", label: "Innocent Smiles" },
  { value: "inspire-edulab", label: "Inspire EduLab" },
  { value: "eduaccess", label: "EduAccess" },
  { value: "empower-english", label: "Empower English" },
  { value: "digiempower", label: "DigiEmpower" },
  { value: "sheconnects", label: "SheConnects" },
  { value: "milieu", label: "Milieu" },
  { value: "vidyashakti", label: "VidyaShakti" },
];

const healthcareInitiatives = [
  { value: "healthcare-general", label: "General Donation to support Healthcare Initiatives" },
  { value: "cureline", label: "CureLine" },
  { value: "carecircle", label: "CareCircle" },
  { value: "childfirst", label: "ChildFirst" },
  { value: "detect", label: "Detect" },
  { value: "sighthope", label: "SightHope" },
  { value: "oralscan", label: "OralScan" },
  { value: "cyclesafe", label: "CycleSafe" },
  { value: "soulcircle", label: "SoulCircle" },
];

const genderEqualityInitiatives = [
  { value: "gender-equality-general", label: "General Donation to support Gender Equality Initiatives" },
  { value: "sheconnects", label: "SheConnects" },
  { value: "cyclesafe", label: "CycleSafe" },
  { value: "detect", label: "Detect" },
  { value: "suidhaga", label: "SuiDhaga" },
  { value: "krishti", label: "Krishti" },
];

const childcareInitiatives = [
  { value: "childcare-general", label: "General Donation to support Childcare Initiatives" },
  { value: "innocent-smiles", label: "Innocent Smiles" },
  { value: "milieu", label: "Milieu" },
  { value: "childfirst", label: "ChildFirst" },
];

const sustainabilityInitiatives = [
  { value: "sustainability-general", label: "General Donation to support Sustainability Initiatives" },
  { value: "green-roots", label: "Green
