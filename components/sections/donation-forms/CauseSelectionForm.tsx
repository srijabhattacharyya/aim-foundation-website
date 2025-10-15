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

// ---------------- Dynamic donation forms ----------------
const DynamicIndividualDonationForm = dynamic(
  () => import("./IndividualDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
// ... (all other dynamic imports like before) ...

// ---------------- Cause arrays ----------------
type Initiative = { value: string; label: string };

const mainCauses: Initiative[] = [
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

const educationalInitiatives: Initiative[] = [
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

const healthcareInitiatives: Initiative[] = [
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

const genderEqualityInitiatives: Initiative[] = [
  { value: "gender-equality-general", label: "General Donation to support Gender Equality Initiatives" },
  { value: "sheconnects", label: "SheConnects" },
  { value: "cyclesafe", label: "CycleSafe" },
  { value: "detect", label: "Detect" },
  { value: "suidhaga", label: "SuiDhaga" },
  { value: "krishti", label: "Krishti" },
];

const childcareInitiatives: Initiative[] = [
  { value: "childcare-general", label: "General Donation to support Childcare Initiatives" },
  { value: "innocent-smiles", label: "Innocent Smiles" },
  { value: "milieu", label: "Milieu" },
  { value: "childfirst", label: "ChildFirst" },
];

const sustainabilityInitiatives: Initiative[] = [
  { value: "sustainability-general", label: "General Donation to support Sustainability Initiatives" },
  { value: "green-roots", label: "GreenRoots" },
  { value: "tideshield", label: "TideShield" },
  { value: "roots-of-change", label: "Roots of Change" },
  { value: "forest-cleaning", label: "Forest Cleaning" },
];

// ---------------- CauseSelectionForm Component ----------------
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
      } else {
        setSelectedSubCause(undefined);
        setStep(2);
      }
    }
  };

  const handleStep2Proceed = () => {
    if (selectedSubCause) onCauseSelect(selectedSubCause);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedSubCause(undefined);
  };

  const renderSubCauseSelector = () => {
    let initiatives: Initiative[] = [];
    let title = "";
    let placeholder = "";

    switch(selectedCause) {
      case "educational":
        initiatives = educationalInitiatives;
        title = "SUPPORT OUR EDUCATIONAL INITIATIVES";
        placeholder = "Select a specific educational initiative";
        break;
      case "healthcare":
        initiatives = healthcareInitiatives;
        title = "SUPPORT OUR HEALTHCARE INITIATIVES";
        placeholder = "Select a specific healthcare initiative";
        break;
      case "gender-equality":
        initiatives = genderEqualityInitiatives;
        title = "SUPPORT GENDER EQUALITY INITIATIVES";
        placeholder = "Select a specific gender equality initiative";
        break;
      case "childcare":
        initiatives = childcareInitiatives;
        title = "SUPPORT CHILDCARE INITIATIVES";
        placeholder = "Select a specific childcare initiative";
        break;
      case "sustainability":
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
              {initiatives.map(i => <SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter className="mt-8 grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={handleBack}>Back</Button>
          <Button onClick={handleStep2Proceed} disabled={!selectedSubCause}>Proceed</Button>
        </DialogFooter>
      </>
    );
  };

  return (
    <div className="bg-card p-8 rounded-lg">
      {step === 1 ? (
        <>
          <DialogHeader className="text-center mb-8">
            <DialogTitle className="text-2xl font-bold font-headline">Choose a Cause</DialogTitle>
            <DialogDescription>Select a cause you are passionate about to make a donation.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Select onValueChange={setSelectedCause} value={selectedCause ?? undefined}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a cause to support" />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom">
                {mainCauses.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="mt-8">
            <Button onClick={handleCauseProceed} disabled={!selectedCause} className="w-full">Proceed</Button>
          </DialogFooter>
        </>
      ) : renderSubCauseSelector()}
    </div>
  );
}
