
"use client";

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
import React from "react";
import dynamic from "next/dynamic";
import StatesAndUTs from "@/components/layout/StatesAndUTs";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const DynamicReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"], { required_error: "Please select your nationality." }),
  amount: z.string().nonempty({ message: "Please select a donation amount." }),
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
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms.",
  }),
  recaptcha: z.string().nonempty({ message: "Please complete the reCAPTCHA." }),
}).superRefine((data, ctx) => {
    if (data.nationality === 'Indian') {
      if (!data.pan && !data.aadhar) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "PAN or Aadhar is required for Indian nationals.",
          path: ["pan"],
        });
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "PAN or Aadhar is required for Indian nationals.",
            path: ["aadhar"],
          });
      } else if (data.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.pan)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid PAN format.",
            path: ["pan"],
          });
      } else if (data.aadhar && !/^[0-9]{12}$/.test(data.aadhar)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Aadhar must be 12 digits.",
            path: ["aadhar"],
          });
      }
      if (!data.state) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "State is required for Indian nationals.",
            path: ["state"],
          });
      }
    }
    if (data.nationality === 'Non-Indian' && !data.passport) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passport is required for Non-Indian nationals.",
            path: ["passport"],
        });
    }
});

const donationAmountsIndian = [
    { value: "2000", label: "₹2000", description: "PLANT 20 TREES" },
    { value: "5000", label: "₹5000", description: "SUPPORT A CLEANUP DRIVE" },
    { value: "10000", label: "₹10000", description: "FUND AN ENVIRONMENTAL WORKSHOP" },
    { value: "25000", label: "₹25000", description: "SPONSOR A RESTORATION PROJECT" },
];

const donationAmountsNonIndian = [
    { value: "25", label: "$25", description: "PLANT 20 TREES" },
    { value: "60", label: "$60", description: "SUPPORT A CLEANUP DRIVE" },
    { value: "120", label: "$120", description: "FUND AN ENVIRONMENTAL WORKSHOP" },
    { value: "300", label: "$300", description: "SPONSOR A RESTORATION PROJECT" },
];


export default function SustainabilityDonationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      amount: "2000",
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

  const recaptchaRef = React.createRef<any>();
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  
  const nationality = form.watch("nationality");
  const donationAmounts = nationality === 'Indian' ? donationAmountsIndian : donationAmountsNonIndian;
  const selectedAmountValue = form.watch("amount");

  const selectedAmount = donationAmounts.find(a => a.value === selectedAmountValue);
  const description = selectedAmount ? selectedAmount.description : "";


  React.useEffect(() => {
    if (nationality === "Indian") {
      form.setValue("country", "India");
      form.setValue("passport", "");
      form.setValue("amount", "2000");
    } else {
      form.setValue("country", "");
      form.setValue("pan", "");
      form.setValue("aadhar", "");
      form.setValue("state", "");
      form.setValue("amount", "25");
    }
  }, [nationality, form]);


  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
        const donationData = { ...values, cause: 'Sustainability', initiative: 'Sustainability', createdAt: serverTimestamp() };
        await addDoc(collection(db, "donations"), donationData);
        
        toast({
            title: "Thank you for supporting our Sustainability Initiatives!",
            description: "Your donation helps nurture our planet.",
        });
        recaptchaRef.current?.reset();
        form.reset();
    } catch (error) {
        toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "An unexpected error occurred. Please try again.",
        });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full border-0 shadow-none rounded-none">
        <CardContent className="p-6 md:p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-headline">SUPPORT SUSTAINABILITY INITIATIVES</h2>
                <p className="text-muted-foreground">NURTURE OUR PLANET</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                            <Input placeholder="Other Amount" {...field} />
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
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="tel" placeholder="Enter Mobile No" {...field} />
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
                                <Input placeholder="Country" {...field} disabled={nationality === 'Indian'} />
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
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
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

                <FormField
                  control={form.control}
                  name="recaptcha"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-center">
                            <DynamicReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={recaptchaSiteKey}
                              onChange={field.onChange}
                            />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-[#8bc34a] hover:bg-[#8bc34a]/90 text-white" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit"}
                </Button>
                </form>
            </Form>
        </CardContent>
    </Card>
  );
}

