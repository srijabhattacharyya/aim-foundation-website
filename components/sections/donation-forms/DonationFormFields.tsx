"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import StatesAndUTs from "@/components/layout/StatesAndUTs";
import { SubmitButton } from "./SubmitButton";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Match with your /types/donation.ts
export type DonationAmount = {
  value: string;
  label: string;
  description?: string;
};

interface DonationFormFieldsProps {
  donationAmountsIndian: DonationAmount[];
  donationAmountsNonIndian: DonationAmount[];
}

const countryCodes = [
    { value: "+91", label: "IN (+91)" },
    { value: "+1", label: "US (+1)" },
    { value: "+44", label: "UK (+44)" },
    { value: "+61", label: "AU (+61)" },
    { value: "+65", label: "SG (+65)" },
];

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
    <div className="space-y-6">
      {/* NATIONALITY SELECTION */}
      <FormField
        control={form.control}
        name="nationality"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Nationality</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex items-center space-x-4"
              >
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="Indian" />
                  </FormControl>
                  <FormLabel className="font-normal">Indian</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="Non-Indian" />
                  </FormControl>
                  <FormLabel className="font-normal">Non-Indian</FormLabel>
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
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(value);
                  form.setValue("otherAmount", "");
                }}
                value={field.value}
                className="flex flex-wrap justify-center gap-4 md:gap-8"
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
                      className="font-normal text-base"
                    >
                      {item.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
            {description && (
              <p className="text-center text-muted-foreground pt-2">
                {description}
              </p>
            )}
          </FormItem>
        )}
      />

      {/* OTHER AMOUNT */}
      <FormField
        control={form.control}
        name="otherAmount"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="Or Enter a Custom Amount"
                {...field}
                onFocus={() => form.setValue("amount", "")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* PERSONAL DETAILS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Enter Email ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:col-span-2 grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className="col-span-1">
                   <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Code" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {countryCodes.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                        </SelectContent>
                    </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Input type="tel" placeholder="Enter Mobile No" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Date of Birth (DD-MM-YYYY)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {nationality === "Indian" ? (
          <>
            <FormField
              control={form.control}
              name="pan"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="PAN No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aadhar"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Aadhar No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center md:col-span-2">
              <p className="text-xs text-center text-muted-foreground mt-1">
                PAN or AADHAR No. is Mandatory as per Law
              </p>
            </div>
          </>
        ) : (
          <FormField
            control={form.control}
            name="passport"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Passport Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>

      {/* ADDRESS DETAILS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Country"
                  {...field}
                  disabled={nationality === "Indian"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {nationality === "Indian" && (
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <StatesAndUTs field={field} />
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Pincode" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* ADDRESS */}
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* TAX INFORMATION */}
      <div className="text-xs text-muted-foreground text-center space-y-1">
        <p>
          YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UP TO 50% TAX BENEFIT UNDER
          SECTION 80G AS ASSOCIATED INITIATIVE FOR MANKIND FOUNDATION IS
          REGISTERED AS NON PROFIT ORGANIZATION
        </p>
        <p>PAN: AAFTA1983P | 80G NUMBER: AAFTA1983PF20221</p>
      </div>

      {/* AGREEMENT */}
      <FormField
        control={form.control}
        name="agree"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-xs text-muted-foreground">
                You agree that Associated Initiative for Mankind Foundation can
                reach out to you through WhatsApp/email/SMS/Phone to provide
                information of your donation, campaigns, 80G receipt etc.
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />

      <SubmitButton />

      {/* HIDDEN FIELDS */}
      <input type="hidden" {...form.register("cause")} />
      <input type="hidden" {...form.register("initiative")} />
    </div>
  );
}
