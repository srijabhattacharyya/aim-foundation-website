
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StatesAndUTs from "@/components/layout/StatesAndUTs";
import { addDonation } from "@/app/actions/donationActions";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

const DynamicReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { 
  ssr: false,
  loading: () => <Skeleton className="h-[78px] w-[304px] rounded-md" />
});

const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"], { required_error: "Please select your nationality." }),
  initiative: z.string().nonempty({ message: "Please select an initiative." }),
  amount: z.string().nonempty({ message: "Please select a donation amount." }),
  otherAmount: z.string().optional(),
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string().min(10, { message: "Mobile number must be at least 10 digits." }),
  dob: z.string().optional(),
  pan: z.string().optional(),
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
}).refine(data => {
    if (data.nationality === "Indian") {
        return !!data.pan && data.pan.length === 10;
    }
    return true;
}, {
    message: "PAN must be 10 characters for Indian nationals.",
    path: ["pan"],
}).refine(data => {
    if (data.nationality === "Indian") {
        return !!data.state;
    }
    return true;
}, {
    message: "State is required for Indian nationals.",
    path: ["state"],
});

const donationAmounts = [
    { value: "1000", label: "₹1000" },
    { value: "2500", label: "₹2500" },
    { value: "5000", label: "₹5000" },
    { value: "10000", label: "₹10000" },
];

const initiatives = [
    { value: "general", label: "General Fund" },
    { value: "cureline", label: "CureLine" },
    { value: "surgireach", label: "SurgiReach" },
    { value: "carecircle", label: "CareCircle" },
    { value: "childfirst", label: "ChildFirst" },
    { value: "detect", label: "Detect" },
    { value: "sighthope", label: "SightHope" },
    { value: "oralscan", label: "OralScan" },
    { value: "cyclesafe", label: "CycleSafe" },
    { value: "soulcircle", label: "SoulCircle" },
    { value: "innocent-smiles", label: "Innocent Smiles" },
    { value: "inspire-edulab", label: "Inspire EduLab" },
    { value: "eduaccess", label: "EduAccess" },
    { value: "empower-english", label: "Empower English" },
    { value: "digiempower", label: "DigiEmpower" },
    { value: "sheconnects", label: "SheConnects" },
    { value: "milieu", label: "Milieu" },
    { value: "vidyashakti", label: "VidyaShakti" },
    { value: "suidhaga", label: "SuiDhaga" },
    { value: "krishti", label: "Krishti" },
    { value: "green-roots", label: "GreenRoots" },
    { value: "tideshield", label: "TideShield" },
    { value: "roots-of-change", label: "Roots of Change" },
    { value: "relief-underprivileged", label: "Relief to the Underprivileged" },
    { value: "disaster-management", label: "Disaster Management" },
    { value: "ignite-change", label: "Ignite Change Initiative" },
];


export default function GeneralDonationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      initiative: "general",
      amount: "2500",
      otherAmount: "",
      fullName: "",
      email: "",
      mobile: "",
      dob: "",
      pan: "",
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

  React.useEffect(() => {
    if (nationality === "Indian") {
      form.setValue("country", "India");
      form.setValue("passport", "");
    } else {
      form.setValue("country", "");
      form.setValue("pan", "");
      form.setValue("state", "");
    }
  }, [nationality, form]);


  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
      const donationData = {
        ...values,
        cause: initiatives.find(i => i.value === values.initiative)?.label || "General Donation",
      };
      await addDonation(donationData);
      toast({
        title: "Thank you for your donation!",
        description: `Your support for the ${initiatives.find(i => i.value === values.initiative)?.label} program is greatly appreciated.`,
      });
      recaptchaRef.current?.reset();
      form.reset();
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem saving your donation. Please try again.",
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full border-0 shadow-none rounded-none">
        <CardContent className="p-6 md:p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-headline">DONATE TO A CAUSE</h2>
                <p className="text-muted-foreground">Your support makes a difference.</p>
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
                    name="initiative"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Select an Initiative</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a cause to support" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            {initiatives.map(item => (
                                <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                    <FormItem className="space-y-3">
                        <FormLabel>Select an Amount</FormLabel>
                        <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
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
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="otherAmount"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="Or Enter a Custom Amount" {...field} />
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
                        <FormField
                            control={form.control}
                            name="pan"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="Pan No" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
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
                        <FormItem>
                        <FormLabel>Date of Birth (Optional)</FormLabel>
                        <FormControl>
                            <Input type="date" {...field} />
                        </FormControl>
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

    