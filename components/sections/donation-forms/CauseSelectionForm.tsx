"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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

// Dynamically import all the specific donation forms
const DynamicIndividualDonationForm = dynamic(
  () => import("./IndividualDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const DynamicInnocentSmilesDonationForm = dynamic(
  () => import("./InnocentSmilesDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const DynamicInspireEduLabDonationForm = dynamic(
  () => import("./InspireEduLabDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const DynamicEduAccessDonationForm = dynamic(
  () => import("./EduAccessDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const DynamicEmpowerEnglishDonationForm = dynamic(
  () => import("./EmpowerEnglishDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const DynamicDigiEmpowerDonationForm = dynamic(
  () => import("./DigiEmpowerDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const DynamicSheConnectsDonationForm = dynamic(
  () => import("./SheConnectsDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const DynamicMilieuDonationForm = dynamic(
  () => import("./MilieuDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const DynamicVidyaShaktiDonationForm = dynamic(
  () => import("./VidyaShaktiDonationForm"),
  { ssr: false, loading: () => <Skeleton className="h-[500px] w-full" /> }
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

// Map sub-cause values to their corresponding form components
const subCauseToFormComponent: { [key: string]: React.FC | undefined } = {
  "general": DynamicIndividualDonationForm,
  "educational-general": DynamicIndividualDonationForm,
  "innocent-smiles": DynamicInnocentSmilesDonationForm,
  "inspire-edulab": DynamicInspireEduLabDonationForm,
  "eduaccess": DynamicEduAccessDonationForm,
  "empower-english": DynamicEmpowerEnglishDonationForm,
  "digiempower": DynamicDigiEmpowerDonationForm,
  "sheconnects": DynamicSheConnectsDonationForm,
  "milieu": DynamicMilieuDonationForm,
  "vidyashakti": DynamicVidyaShaktiDonationForm,
  // Future forms will be mapped here
};

export default function CauseSelectionForm() {
  const [step, setStep] = useState(1);
  const [selectedCause, setSelectedCause] = useState<string | undefined>(undefined);
  const [selectedSubCause, setSelectedSubCause] = useState<string | undefined>(undefined);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCauseProceed = () => {
    if (selectedCause === 'general') {
      setSelectedSubCause('general');
      setIsFormOpen(true);
      return;
    }
    if (selectedCause === 'educational') {
      setSelectedSubCause(undefined); // Reset sub-cause when moving to step 2
      setStep(2);
      return;
    }
    alert(`Donation form for "${mainCauses.find(c => c.value === selectedCause)?.label}" is coming soon!`);
  };

  const handleStep2Proceed = () => {
    if (selectedSubCause && subCauseToFormComponent[selectedSubCause]) {
      setIsFormOpen(true);
    } else {
      alert(`Donation form for "${educationalInitiatives.find(c => c.value === selectedSubCause)?.label}" is coming soon!`);
    }
  };

  const handleBack = () => {
    setStep(1);
    setSelectedSubCause(undefined);
  };

  const resetAll = () => {
    setStep(1);
    setSelectedCause(undefined);
    setSelectedSubCause(undefined);
  };

  return (
    <div className="p-6">
      {step === 1 && (
        <>
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-2xl font-bold font-headline">Choose a Cause</DialogTitle>
            <DialogDescription>
              Select a cause you are passionate about to make a donation.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Select onValueChange={(value) => { setSelectedCause(value); setSelectedSubCause(undefined); }} value={selectedCause ?? undefined}>
              <SelectTrigger>
                <SelectValue placeholder="Select a cause to support" />
              </SelectTrigger>
              <SelectContent>
                {mainCauses.map((cause) => (
                  <SelectItem key={cause.value} value={cause.value}>
                    {cause.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="mt-6">
            <Button onClick={handleCauseProceed} disabled={!selectedCause}>
              Proceed
            </Button>
          </DialogFooter>
        </>
      )}

      {step === 2 && selectedCause === "educational" && (
        <>
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-xl font-bold font-headline">THANKS FOR YOUR SUPPORT IN OUR EDUCATIONAL INITIATIVES</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Select onValueChange={setSelectedSubCause} value={selectedSubCause ?? undefined}>
              <SelectTrigger>
                <SelectValue placeholder="Select a specific educational initiative to support" />
              </SelectTrigger>
              <SelectContent>
                {educationalInitiatives.map((initiative) => (
                  <SelectItem key={initiative.value} value={initiative.value}>
                    {initiative.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="mt-6 justify-between">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleStep2Proceed} disabled={!selectedSubCause}>
              Proceed
            </Button>
          </DialogFooter>
        </>
      )}

      <Dialog
        open={isFormOpen}
        onOpenChange={(isOpen) => {
          setIsFormOpen(isOpen);
          if (!isOpen) {
            resetAll();
          }
        }}
      >
        <DialogContent className="sm:max-w-[800px] p-0 max-h-[90vh] overflow-y-auto">
          {selectedSubCause && subCauseToFormComponent[selectedSubCause] ? (
            React.createElement(subCauseToFormComponent[selectedSubCause]!)
          ) : (
            <div className="p-6">Form not available for this selection.</div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
