"use client";

import { useState, ComponentType } from "react";
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

// Dynamic donation forms
const DynamicIndividualDonationForm = dynamic(
  () => import("./IndividualDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicEducationalDonationForm = dynamic(
  () => import("./EducationalDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
const DynamicInnocentSmilesDonationForm = dynamic(
  () => import("./InnocentSmilesDonationForm"),
  { ssr: false, loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> }
);
// ... add other dynamic imports similarly

// ✅ Fix: Use ComponentType<any> instead of React.FC
export const causeToFormComponent: Record<string, ComponentType<any>> = {
  "general": DynamicIndividualDonationForm,
  "educational": DynamicEducationalDonationForm,
  "innocent-smiles": DynamicInnocentSmilesDonationForm,
  // ... add other mappings
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
    let initiatives = [];
    let title = "";
    let placeholder = "";

    switch(selectedCause) {
      case 'educational': initiatives = [
        { value: "educational-general", label: "General Educational" },
        { value: "innocent-smiles", label: "Innocent Smiles" },
      ]; title = "SUPPORT OUR EDUCATIONAL INITIATIVES"; placeholder = "Select an educational initiative"; break;
      case 'healthcare': initiatives = []; title = "SUPPORT OUR HEALTHCARE INITIATIVES"; placeholder = "Select healthcare initiative"; break;
      // ... add other causes similarly
    }

    return (
      <>
        <DialogHeader className="text-center mb-8">
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <DialogDescription>Choose a specific initiative or make a general donation.</DialogDescription>
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
          <Button variant="outline" onClick={handleBack}>Back</Button>
          <Button onClick={handleStep2Proceed} disabled={!selectedSubCause}>Proceed</Button>
        </DialogFooter>
      </>
    );
  }

  return (
    <div className="bg-card p-8 rounded-lg">
      {step === 1 && (
        <>
          <DialogHeader className="text-center mb-8">
            <DialogTitle className="text-2xl font-bold">Choose a Cause</DialogTitle>
            <DialogDescription>Select a cause you are passionate about to make a donation.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Select onValueChange={setSelectedCause} value={selectedCause ?? undefined}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a cause to support" />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom">
                {["general","educational","healthcare"].map((cause) => (
                  <SelectItem key={cause} value={cause}>{cause}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="mt-8">
            <Button onClick={handleCauseProceed} disabled={!selectedCause} className="w-full">Proceed</Button>
          </DialogFooter>
        </>
      )}
      {step === 2 && renderSubCauseSelector()}
    </div>
  );
}
