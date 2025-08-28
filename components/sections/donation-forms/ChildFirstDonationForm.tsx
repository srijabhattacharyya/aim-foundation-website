
"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import StatesAndUTs from "@/components/layout/StatesAndUTs";
import dynamic from "next/dynamic";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { addDonation } from "@/app/actions/donationActions";
import { SubmitButton } from "./SubmitButton";

const DynamicReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { 
    ssr: false,
    loading: () => <Skeleton className="h-[78px] w-[304px] rounded-md mx-auto" />
});

const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string(),
  otherAmount: z.string().optional(),
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string().min(10, { message: "Mobile number must be at least 10 digits." }),
  dob: z.date().optional(),
  pan: z.string().optional(),
  aadhar: z.string().optional(),
  passport: z.string().optional(),
  country: z.string().nonempty({ message: "Country is required." }),
  state: z.string().optional(),
  city: z.string().nonempty({ message: "City is required." }),
  address: z.string().nonempty({ message: "Address is required." }),
  pincode: z.string().min(6, { message: "Pincode must be 6 digits." }).max(6, { message: "Pincode must be 6 digits." }),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms." }),
  }),
});

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "HEALTH & NUTRITION FOR ONE CHILD" },
    { value: "5000", label: "₹5000", description: "HEALTH & NUTRITION FOR TWO CHILDREN" },
    { value: "10000", label: "₹10000", description: "HEALTH & NUTRITION FOR FOUR CHILDREN" },
    { value: "20000", label: "₹20000", description: "SPONSOR A HEALTH CAMP FOR CHILDREN (EXCLUDING MEDICINE)" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "HEALTH & NUTRITION FOR ONE CHILD" },
    { value: "60", label: "$60", description: "HEALTH & NUTRITION FOR TWO CHILDREN" },
    { value: "120", label: "$120", description: "HEALTH & NUTRITION FOR FOUR CHILDREN" },
    { value: "240", label: "$240", description: "SPONSOR A HEALTH CAMP FOR CHILDREN (EXCLUDING MEDICINE)" },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function ChildFirstDonationForm() {
  const { toast } = useToast();
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const [state, formAction] = useFormState(addDonation, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  
  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      amount: "2500",
      fullName: "",
      email: "",
      mobile: "",
      country: "India",
    },
  });

  const nationality = form.watch("nationality");
  const donationAmounts = nationality === 'Indian' ? donationAmountsIndian : donationAmountsNonIndian;
  const selectedAmountValue = form.watch("amount");

  const selectedAmount = donationAmounts.find(a => a.value === selectedAmountValue);
  const description = selectedAmount ? selectedAmount.description : "";


  useEffect(() => {
    if (state.success) {
      toast({
        title: "Thank you for supporting ChildFirst!",
        description: "Your support makes a difference.",
      });
      formRef.current?.reset();
      form.reset();
    } else if (state.message && state.errors) {
       Object.entries(state.errors).forEach(([key, value]) => {
        form.setError(key as keyof z.infer<typeof donationSchema>, {
          type: "manual",
          message: (value as string[])[0],
        });
      });
    } else if (state.message) {
       toast({
        variant: "destructive",
        title: "Submission Failed",
        description: state.message,
      });
    }
  }, [state, toast, form]);

  useEffect(() => {
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
        <CardContent className="p-6 md:p-8" onFocus={() => setShowRecaptcha(true)} onClick={() => setShowRecaptcha(true)}>
            <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md">
                <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={48} className="object-contain"/>
            </div>
            <div className="text-center mb-8 pt-20">
                <h2 className="text-3xl font-bold font-headline">SUPPORT CHILDFIRST</h2>
                <p className="text-muted-foreground">MAKE A DIFFERENCE</p>
            </div>

            <Form {...form}>
                <form ref={formRef} action={formAction} className="space-y-6">
                <input type="hidden" name="cause" value="ChildFirst" />

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
                            name="nationality"
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
                            name="amount"
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
                        <FormMessage />
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
                            <Input placeholder="Other Amount" {...field} name="otherAmount" />
                        </FormControl>
                        <FormMessage />
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
                                <Input placeholder="Enter Full Name" {...field} name="fullName" />
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
                                <Input type="email" placeholder="Enter Email ID" {...field} name="email" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="tel" placeholder="Enter Mobile No" {...field} name="mobile" />
                            </FormControl>
                            <FormMessage />
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
                                        <Input placeholder="PAN No." {...field} name="pan" />
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
                                        <Input placeholder="Aadhar No." {...field} name="aadhar" />
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
                        <>
                         <FormField
                            control={form.control}
                            name="passport"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="Passport Number" {...field} name="passport" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <div className="flex items-center justify-center md:col-span-2">
                            <p className="text-xs text-center text-muted-foreground mt-1">
                                Passport No. is Mandatory as per Indian Law for Foreign Individual Donation
                            </p>
                        </div>
                        </>
                    )}
                </div>
                 <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
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
                        <input type="hidden" name="dob" value={field.value ? format(field.value, 'yyyy-MM-dd') : ''} />
                        <FormMessage />
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
                                <Input placeholder="Country" {...field} disabled={nationality === 'Indian'} name="country" />
                            </FormControl>
                            <FormMessage />
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
                                <Input placeholder="City" {...field} name="city" />
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
                                <Input placeholder="Pincode" {...field} name="pincode" />
                            </FormControl>
                            <FormMessage />
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
                            <Input placeholder="Address" {...field} name="address" />
                        </FormControl>
                        <FormMessage />
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
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} name="agree"/>
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel className="text-xs text-muted-foreground">
                            You agree that Associated Initiative for Mankind Foundation can reach out to you through Whatsapp/email/SMS/Phone to provide information of your donation, campaigns, 80G receipt etc.
                            </FormLabel>
                            <FormMessage />
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
