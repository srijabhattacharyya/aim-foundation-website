
"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { Checkbox } from "../../../components/ui/checkbox";
import { useToast } from "../../../hooks/use-toast";
import { Card, CardContent } from "../../../components/ui/card";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import StatesAndUTs from "@/components/layout/StatesAndUTs";
import { addDonation } from "@/app/actions/donationActions";
import { Loader2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { 
    ssr: false,
    loading: () => <Skeleton className="h-[78px] w-[304px] rounded-md mx-auto" />
});

const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string(),
  otherAmount: z.string().optional(),
  fullName: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().min(10),
  dob: z.date().optional(),
  pan: z.string().optional(),
  aadhar: z.string().optional(),
  passport: z.string().optional(),
  country: z.string(),
  state: z.string().optional(),
  city: z.string(),
  address: z.string(),
  pincode: z.string().min(6),
  agree: z.literal(true, { errorMap: () => ({ message: "You must agree to the terms." }) }),
  recaptcha: z.string().min(1, { message: "Please complete the reCAPTCHA." }),
});

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "SUPPORT A WORKSHOP FOR 5 CHILDREN" },
    { value: "5000", label: "₹5000", description: "SUPPORT A WORKSHOP FOR 10 CHILDREN" },
    { value: "10000", label: "₹10000", description: "SPONSOR LEARNING MATERIALS" },
    { value: "20000", label: "₹20000", description: "SPONSOR A FULL MILIEU SESSION" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "SUPPORT A WORKSHOP FOR 5 CHILDREN" },
    { value: "60", label: "$60", description: "SUPPORT A WORKSHOP FOR 10 CHILDREN" },
    { value: "120", label: "$120", description: "SPONSOR LEARNING MATERIALS" },
    { value: "240", label: "$240", description: "SPONSOR A FULL MILIEU SESSION" },
];

const SubmitButton = () => {
    return (
        <Button type="submit" className="w-full bg-[#8bc34a] hover:bg-[#8bc34a]/90 text-white" size="lg">
            Submit
        </Button>
    )
}

export default function MilieuDonationForm() {
  const { toast } = useToast();
  const [initialState, setInitialState] = useState({ success: false, message: "", errors: null });
  const [state, formAction] = useFormState(addDonation, initialState);

  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      amount: "2500",
      otherAmount: "",
      fullName: "",
      email: "",
      mobile: "",
      dob: undefined,
      pan: "",
      aadhar: "",
      passport: "",
      country: "India",
      state: "",
      city: "",
      address: "",
      pincode: "",
      agree: false,
      recaptcha: "",
    },
  });
  
  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Thank you for supporting Milieu!",
        description: "Your donation helps build bridges of understanding.",
      });
      form.reset();
    } else if (state?.message && !state?.success) {
       toast({
        variant: "destructive",
        title: "Submission Failed",
        description: state.message,
      });
    }
  }, [state, toast, form]);

  const nationality = form.watch("nationality");
  const donationAmounts = nationality === 'Indian' ? donationAmountsIndian : donationAmountsNonIndian;
  const selectedAmountValue = form.watch("amount");

  const selectedAmount = donationAmounts.find(a => a.value === selectedAmountValue);
  const description = selectedAmount ? selectedAmount.description : "";

  React.useEffect(() => {
    if (nationality === "Indian") {
      form.setValue("country", "India");
      form.setValue("passport", "");
      form.setValue("amount", "2500");
    } else {
      form.setValue("country", "");
      form.setValue("pan", "");
      form.setValue("aadhar", "");
      form.setValue("state", "");
      form.setValue("amount", "30");
    }
  }, [nationality, form]);

  return (
    <Card className="w-full border-0 shadow-none rounded-none">
      <CardContent
        className="p-6 md:p-8"
      >
        <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md">
          <Image
            src="/images/logo.png"
            alt="AIM Foundation Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="text-center mb-8 pt-20">
          <h2 className="text-3xl font-bold font-headline">SUPPORT MILIEU</h2>
          <p className="text-muted-foreground">BUILDING BRIDGES, NURTURING EMPATHY</p>
        </div>

        <Form {...form}>
          <form action={formAction} className="space-y-6">
            <input type="hidden" name="cause" value="Milieu" />
            <input type="hidden" name="initiative" value="Milieu" />
            
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center space-x-4"
                      name={field.name}
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
                  {state.errors?.nationality && <p className="text-sm font-medium text-destructive">{state.errors.nationality[0]}</p>}
                </FormItem>
              )}
            />

            <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormControl>
                    <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-wrap justify-center gap-4 md:gap-8"
                        name={field.name}
                    >
                        {donationAmounts.map((item) => (
                        <FormItem key={item.value} className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                            <RadioGroupItem value={item.value} />
                            </FormControl>
                            <FormLabel className="font-normal text-base">{item.label}</FormLabel>
                        </FormItem>
                        ))}
                    </RadioGroup>
                    </FormControl>
                    {state.errors?.amount && <p className="text-sm font-medium text-destructive">{state.errors.amount[0]}</p>}
                    {description && <p className="text-center text-muted-foreground pt-2">{description}</p>}
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="otherAmount"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="Other Amount" {...field} name={field.name} />
                    </FormControl>
                    {state.errors?.otherAmount && <p className="text-sm font-medium text-destructive">{state.errors.otherAmount[0]}</p>}
                    </FormItem>
                )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter Full Name" {...field} name={field.name}/>
                    </FormControl>
                    {state.errors?.fullName && <p className="text-sm font-medium text-destructive">{state.errors.fullName[0]}</p>}
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Enter Email ID" {...field} name={field.name}/>
                    </FormControl>
                    {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="tel" placeholder="Enter Mobile No" {...field} name={field.name}/>
                    </FormControl>
                    {state.errors?.mobile && <p className="text-sm font-medium text-destructive">{state.errors.mobile[0]}</p>}
                  </FormItem>
                )}
              />
              {nationality === 'Indian' ? (
                <>
                  <FormField
                    control={form.control}
                    name="pan"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="PAN No." {...field} name={field.name}/>
                        </FormControl>
                        {state.errors?.pan && <p className="text-sm font-medium text-destructive">{state.errors.pan[0]}</p>}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="aadhar"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Aadhar No." {...field} name={field.name}/>
                        </FormControl>
                         {state.errors?.aadhar && <p className="text-sm font-medium text-destructive">{state.errors.aadhar[0]}</p>}
                      </FormItem>
                    )}
                  />
                </>
              ) : (
                <FormField
                  control={form.control}
                  name="passport"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Passport Number" {...field} name={field.name}/>
                      </FormControl>
                       {state.errors?.passport && <p className="text-sm font-medium text-destructive">{state.errors.passport[0]}</p>}
                    </FormItem>
                  )}
                />
              )}
            </div>
            
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
                  <input type="hidden" name={field.name} value={field.value ? format(field.value, 'yyyy-MM-dd') : ''} />
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className="w-full pl-3 text-left font-normal"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        toDate={new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {state.errors?.dob && <p className="text-sm font-medium text-destructive">{state.errors.dob[0]}</p>}
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Country" {...field} name={field.name} disabled={nationality === 'Indian'} />
                    </FormControl>
                    {state.errors?.country && <p className="text-sm font-medium text-destructive">{state.errors.country[0]}</p>}
                  </FormItem>
                )}
              />
              {nationality === 'Indian' && (
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <StatesAndUTs field={{...field, name: "state"}} />
                      {state.errors?.state && <p className="text-sm font-medium text-destructive">{state.errors.state[0]}</p>}
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
                      <Input placeholder="City" {...field} name={field.name}/>
                    </FormControl>
                    {state.errors?.city && <p className="text-sm font-medium text-destructive">{state.errors.city[0]}</p>}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Pincode" {...field} name={field.name}/>
                    </FormControl>
                     {state.errors?.pincode && <p className="text-sm font-medium text-destructive">{state.errors.pincode[0]}</p>}
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Address" {...field} name={field.name}/>
                  </FormControl>
                  {state.errors?.address && <p className="text-sm font-medium text-destructive">{state.errors.address[0]}</p>}
                </FormItem>
              )}
            />
            
            <div className="text-xs text-muted-foreground text-center space-y-1">
              <p>YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UP TO 50% TAX BENEFIT UNDER SECTION 80G AS ASSOCIATED INITIATIVE FOR MANKIND FOUNDATION IS REGISTERED AS NON PROFIT ORGANIZATION</p>
              <p>PAN: AAFTA1983P | 80G NUMBER: AAFTA1983PF20221</p>
            </div>
            
            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} name={field.name}/>
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-xs text-muted-foreground">
                      You agree that Associated Initiative for Mankind Foundation can reach out to you through Whatsapp/email/SMS/Phone to provide information of your donation, campaigns, 80G receipt etc.
                    </FormLabel>
                    {state.errors?.agree && <p className="text-sm font-medium text-destructive">{state.errors.agree[0]}</p>}
                  </div>
                </FormItem>
              )}
            />
            
            <SubmitButton />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
