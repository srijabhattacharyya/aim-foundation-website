
"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type DonationAmount = {
  value: string;
  label: string;
  description?: string;
};

interface DonationFormFieldsProps {
  donationAmountsIndian: DonationAmount[];
  donationAmountsNonIndian: DonationAmount[];
}

export function DonationFormFields({
  donationAmountsIndian,
  donationAmountsNonIndian,
}: DonationFormFieldsProps) {
  const form = useFormContext();
  const nationality = form.watch("nationality");
  const donationAmounts =
    nationality === "Indian"
      ? donationAmountsIndian
      : donationAmountsNonIndian;

  const selectedAmountValue = form.watch("amount");
  const selectedAmount = donationAmounts.find(
    (a) => a.value === selectedAmountValue
  );
  const description = selectedAmount?.description || "";

  return (
    <div className="space-y-8">
      {/* NATIONALITY SELECTION */}
      <FormField
        control={form.control}
        name="nationality"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base font-semibold">Nationality</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex items-center space-x-6"
              >
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="Indian" />
                  </FormControl>
                  <FormLabel className="font-normal text-base cursor-pointer">Indian</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="Non-Indian" />
                  </FormControl>
                  <FormLabel className="font-normal text-base cursor-pointer">Non-Indian</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* DONATION AMOUNT */}
      <FormField
        control={form.control}
        name="amount"
        render={({ field }) => (
          <FormItem className="space-y-6">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-wrap justify-center gap-6 md:gap-10"
              >
                {donationAmounts.map((item) => (
                  <FormItem
                    key={item.value}
                    className="flex items-center space-x-2 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={item.value}
                        id={`${item.value}-${field.name}`}
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor={`${item.value}-${field.name}`}
                      className="font-normal text-lg cursor-pointer"
                    >
                      {item.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
            {description && (
              <p className="text-center text-muted-foreground text-sm font-medium pt-4 uppercase tracking-wider animate-fade-in-up">
                {description}
              </p>
            )}
          </FormItem>
        )}
      />

      {/* HIDDEN FIELDS */}
      <input type="hidden" {...form.register("cause")} />
      <input type="hidden" {...form.register("initiative")} />
    </div>
  );
}
