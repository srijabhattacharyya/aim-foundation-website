
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

export default function CauseSelectionForm() {
  const [selectedCause, setSelectedCause] = useState<string | null>(null);

  const handleProceed = () => {
    if (selectedCause) {
        // This is where we would navigate to the next step
        console.log("Proceeding with cause:", selectedCause);
    }
  };

  const renderFormForCause = () => {
    switch (selectedCause) {
        case "general":
            return <IndividualDonationForm />;
        // In a real application, each case would render a specific donation form
        // For now, we show a placeholder for other causes.
        case "educational":
        case "healthcare":
        case "gender-equality":
        case "childcare":
        case "sustainability":
        case "relief":
        case "disaster-management":
        case "ignite-change":
            return (
                <div className="text-center p-8">
                    <p>Donation form for '{causes.find(c => c.value === selectedCause)?.label}' is coming soon.</p>
                </div>
            );
        default:
            return null;
    }
  };

  if (selectedCause) {
    return renderFormForCause();
  }

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
                <Button onClick={handleProceed} disabled={!selectedCause} className="w-full">
                    Proceed
                </Button>
            </div>
        </CardContent>
    </Card>
  );
}
