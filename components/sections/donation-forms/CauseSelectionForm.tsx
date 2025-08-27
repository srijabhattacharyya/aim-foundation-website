
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
    () => import('./GenderEqualityDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicChildcareDonationForm = dynamic(
    () => import('./ChildcareDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSustainabilityDonationForm = dynamic(
    () => import('./SustainabilityDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicReliefDonationForm = dynamic(
    () => import('./ReliefDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicDisasterManagementDonationForm = dynamic(
    () => import('./DisasterManagementDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicIgniteChangeDonationForm = dynamic(
    () => import('./IgniteChangeDonationForm'),
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
    () => import('./GreenRootsDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicTideShieldDonationForm = dynamic(
    () => import('./TideShieldDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicRootsOfChangeDonationForm = dynamic(
    () => import('./RootsOfChangeDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicForestCleaningDonationForm = dynamic(
    () => import('./ForestCleaningDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicSuiDhagaDonationForm = dynamic(
    () => import('./SuiDhagaDonationForm'),
    { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicKrishtiDonationForm = dynamic(
    () => import('./KrishtiDonationForm'),
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
    { value: "green-roots", label: "GreenRoots" },
    { value: "tideshield", label: "TideShield" },
    { value: "roots-of-change", label: "Roots of Change" },
    { value: "forest-cleaning", label: "Forest Cleaning" },
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

interface CauseSelectionFormProps {
  onCauseSelect: (cause: string) => void;
}

export default function CauseSelectionForm({ onCauseSelect }: CauseSelectionFormProps) {
  const [step, setStep] = useState(1);
  const [selectedCause, setSelectedCause] = useState<string | undefined>(undefined);
  const [selectedSubCause, setSelectedSubCause] = useState<string | undefined>(undefined);

  const handleCauseProceed = () => {
    if (selectedCause) {
        if (["general", "relief", "disaster-management", "ignite-change"].includes(selectedCause)) {
            onCauseSelect(selectedCause);
        } else if (["educational", "healthcare", "gender-equality", "childcare", "sustainability"].includes(selectedCause)) {
            setSelectedSubCause(undefined); 
            setStep(2);
        }
    }
  };

  const handleStep2Proceed = () => {
    if (selectedSubCause) {
        onCauseSelect(selectedSubCause);
    }
  };

  const handleBack = () => {
    setStep(1);
    setSelectedSubCause(undefined);
  };

  const renderSubCauseSelector = () => {
    let initiatives = [];
    let title = "";
    let placeholder = "";

    switch(selectedCause) {
        case 'educational':
            initiatives = educationalInitiatives;
            title = "SUPPORT OUR EDUCATIONAL INITIATIVES";
            placeholder = "Select a specific educational initiative";
            break;
        case 'healthcare':
            initiatives = healthcareInitiatives;
            title = "SUPPORT OUR HEALTHCARE INITIATIVES";
            placeholder = "Select a specific healthcare initiative";
            break;
        case 'gender-equality':
            initiatives = genderEqualityInitiatives;
            title = "SUPPORT GENDER EQUALITY INITIATIVES";
            placeholder = "Select a specific gender equality initiative";
            break;
        case 'childcare':
            initiatives = childcareInitiatives;
            title = "SUPPORT CHILDCARE INITIATIVES";
            placeholder = "Select a specific childcare initiative";
            break;
        case 'sustainability':
            initiatives = sustainabilityInitiatives;
            title = "SUPPORT SUSTAINABILITY INITIATIVES";
            placeholder = "Select a specific sustainability initiative";
            break;
    }
    
    return (
        <>
            <DialogHeader className="text-center mb-8">
              <DialogTitle className="text-xl font-bold font-headline">{title}</DialogTitle>
               <DialogDescription>
                Choose a specific initiative or make a general donation.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-8">
               <Select onValueChange={setSelectedSubCause} value={selectedSubCause ?? undefined}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom">
                  {initiatives.map((initiative) => (
                    <SelectItem key={initiative.value} value={initiative.value}>
                      {initiative.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <DialogFooter className="mt-8 grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleStep2Proceed} disabled={!selectedSubCause}>
                Proceed
              </Button>
            </DialogFooter>
          </>
    )
  }

  return (
    <div className="bg-card p-8 rounded-lg">
      {step === 1 && (
        <>
          <DialogHeader className="text-center mb-8">
            <DialogTitle className="text-2xl font-bold font-headline">Choose a Cause</DialogTitle>
            <DialogDescription>
              Select a cause you are passionate about to make a donation.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Select onValueChange={(value) => setSelectedCause(value)} value={selectedCause ?? undefined}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a cause to support" />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom">
                {mainCauses.map((cause) => (
                  <SelectItem key={cause.value} value={cause.value}>
                    {cause.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="mt-8">
            <Button onClick={handleCauseProceed} disabled={!selectedCause} className="w-full">
              Proceed
            </Button>
          </DialogFooter>
        </>
      )}

      {step === 2 && renderSubCauseSelector()}
    </div>
  );
}

