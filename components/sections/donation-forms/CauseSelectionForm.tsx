
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import IndividualDonationForm from "./IndividualDonationForm";
import InnocentSmilesDonationForm from "./InnocentSmilesDonationForm";
import InspireEduLabDonationForm from "./InspireEduLabDonationForm";
import EduAccessDonationForm from "./EduAccessDonationForm";
import EmpowerEnglishDonationForm from "./EmpowerEnglishDonationForm";
import DigiEmpowerDonationForm from "./DigiEmpowerDonationForm";
import SheConnectsDonationForm from "./SheConnectsDonationForm";
import MilieuDonationForm from "./MilieuDonationForm";
import VidyaShaktiDonationForm from "./VidyaShaktiDonationForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const causes = [
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

export default function CauseSelectionForm() {
  const [step, setStep] = useState(1);
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const [selectedSubCause, setSelectedSubCause] = useState<string | null>(null);

  const handleCauseProceed = () => {
    if (selectedCause) {
      if (selectedCause === 'general') {
        setStep(3); // Go straight to form
      } else if (selectedCause === 'educational') {
        setStep(2);
      } else {
        // For other causes, show placeholder for now
        setStep(4);
      }
    }
  };

  const handleSubCauseProceed = () => {
      if(selectedSubCause) {
          setStep(3);
      }
  };

  const handleBack = () => {
      setStep(1);
      setSelectedSubCause(null);
  }

  const renderForm = () => {
    const cause = selectedCause === 'educational' ? selectedSubCause : selectedCause;
    switch (cause) {
        case "general":
        case "educational-general":
            return <IndividualDonationForm />;
        case "innocent-smiles":
            return <InnocentSmilesDonationForm />;
        case "inspire-edulab":
            return <InspireEduLabDonationForm />;
        case "eduaccess":
            return <EduAccessDonationForm />;
        case "empower-english":
            return <EmpowerEnglishDonationForm />;
        case "digiempower":
            return <DigiEmpowerDonationForm />;
        case "sheconnects":
            return <SheConnectsDonationForm />;
        case "milieu":
            return <MilieuDonationForm />;
        case "vidyashakti":
            return <VidyaShaktiDonationForm />;
        default:
            return (
                <div className="text-center p-8">
                    <p>Donation form for '{causes.find(c => c.value === selectedCause)?.label}' is coming soon.</p>
                    <Button onClick={() => { setStep(1); setSelectedCause(null); }} className="mt-4">Back</Button>
                </div>
            );
    }
  };

  if (step === 1) {
    return (
      <Card className="w-full border-0 shadow-none rounded-none">
          <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold font-headline">Donate to a Cause</CardTitle>
              <CardDescription>Your support makes a difference. Choose a cause you are passionate about.</CardDescription>
          </CardHeader>
          <CardContent>
              <div className="space-y-6">
                  <Select onValueChange={setSelectedCause}>
                      <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a cause to support" />
                      </SelectTrigger>
                      <SelectContent>
                          {causes.map((cause) => (
                              <SelectItem key={cause.value} value={cause.value}>
                                  {cause.label}
                              </SelectItem>
                          ))}
                      </SelectContent>
                  </Select>
                  <Button onClick={handleCauseProceed} disabled={!selectedCause} className="w-full">
                      Proceed
                  </Button>
              </div>
          </CardContent>
      </Card>
    );
  }

  if (step === 2 && selectedCause === 'educational') {
      return (
        <Card className="w-full border-0 shadow-none rounded-none">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline">THANKS FOR YOUR SUPPORT IN OUR EDUCATIONAL INITIATIVES</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <Select onValueChange={setSelectedSubCause}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a specific educational initiative to support" />
                        </SelectTrigger>
                        <SelectContent>
                            {educationalInitiatives.map((cause) => (
                                <SelectItem key={cause.value} value={cause.value}>
                                    {cause.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="flex gap-4">
                        <Button onClick={handleBack} variant="outline" className="w-full">Back</Button>
                        <Button onClick={handleSubCauseProceed} disabled={!selectedSubCause} className="w-full">
                            Proceed
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
      )
  }

  if(step === 3) {
      return renderForm();
  }

  if(step === 4) {
      return (
          <div className="text-center p-8">
              <p>Donation form for '{causes.find(c => c.value === selectedCause)?.label}' is coming soon.</p>
              <Button onClick={() => { setStep(1); setSelectedCause(null); }} className="mt-4">Back</Button>
          </div>
      );
  }

  return null;
}
