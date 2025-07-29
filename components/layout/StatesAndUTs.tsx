
"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";

const statesAndUTs = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

interface StatesAndUTsProps {
    field: {
        onChange: (...event: any[]) => void;
        value: string;
    };
}

export default function StatesAndUTs({ field }: StatesAndUTsProps) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
            <SelectTrigger>
            <SelectValue placeholder="Select State / UT" />
            </SelectTrigger>
        </FormControl>
        <SelectContent>
            {statesAndUTs.map(state => (
            <SelectItem key={state} value={state}>{state}</SelectItem>
            ))}
        </SelectContent>
    </Select>
  );
}
