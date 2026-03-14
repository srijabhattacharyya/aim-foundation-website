
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
import { Input } from "@/components/ui/input";

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
  const { control, watch } = useFormContext();
  const nationality = watch("nationality");
  const selectedAmount = watch("amount");
  
  const donationAmounts =
    nationality === "Indian"
      ? donationAmountsIndian
      : donationAmountsNonIndian;

  const currentAmountObj = donationAmounts.find(
    (a) => a.value === selectedAmount
  );
  const description = currentAmountObj?.description || "";

  return (
    <div className="space-y-8">
      {/* NATIONALITY SELECTION */}
      <FormField
        control={control}
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
        control={control}
        name="amount"
        render={({ field }) => (
          <FormItem className="space-y-6">
            <FormLabel className="text-base font-semibold">Select Amount</FormLabel>
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
                {/* Other Amount Option */}
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="other" id={`other-${field.name}`} />
                  </FormControl>
                  <FormLabel
                    htmlFor={`other-${field.name}`}
                    className="font-normal text-lg cursor-pointer"
                  >
                    Other
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* CUSTOM AMOUNT INPUT */}
      {selectedAmount === 'other' && (
        <FormField
          control={control}
          name="otherAmount"
          render={({ field }) => (
            <FormItem className="animate-fade-in-down">
              <FormLabel>Enter Amount ({nationality === "Indian" ? "INR" : "USD"})</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder={nationality === "Indian" ? "Enter amount in ₹" : "Enter amount in $"}
                  {...field}
                  className="text-lg h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {selectedAmount !== 'other' && description && (
        <p className="text-center text-muted-foreground text-sm font-medium pt-2 uppercase tracking-wider animate-fade-in-up">
          {description}
        </p>
      )}

      {/* HIDDEN FIELDS */}
      <input type="hidden" name="cause" />
      <input type="hidden" name="initiative" />
    </div>
  );
}
