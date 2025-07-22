
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
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import dynamic from "next/dynamic";

const DynamicReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

const donationSchema = z.object({
  amount: z.string().nonempty({ message: "Please select a donation amount." }),
  otherAmount: z.string().optional(),
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string().min(10, { message: "Mobile number must be at least 10 digits." }),
  dob: z.string().nonempty({ message: "Date of birth is required." }),
  pan: z.string().min(10, { message: "PAN must be 10 characters." }).max(10, { message: "PAN must be 10 characters." }),
  country: z.string(),
  state: z.string().nonempty({ message: "State is required." }),
  city: z.string().nonempty({ message: "City is required." }),
  address: z.string().nonempty({ message: "Address is required." }),
  pincode: z.string().min(6, { message: "Pincode must be 6 digits." }).max(6, { message: "Pincode must be 6 digits." }),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms.",
  }),
  recaptcha: z.string().nonempty({ message: "Please complete the reCAPTCHA." }),
});

const donationAmounts = [
    { value: "500", label: "₹500" },
    { value: "1000", label: "₹1000" },
    { value: "2500", label: "₹2500" },
    { value: "5000", label: "₹5000" },
];

export default function GreenRootsDonationForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: "1000",
      otherAmount: "",
      fullName: "",
      email: "",
      mobile: "",
      dob: "",
      pan: "",
      country: "India",
      state: "",
      city: "",
      address: "",
      pincode: "",
      agree: false,
      recaptcha: "",
    },
  });

  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


  function onSubmit(values: z.infer<typeof donationSchema>) {
    console.log(values);
    toast({
      title: "Thank you for supporting GreenRoots!",
      description: "Your contribution helps our planet grow greener.",
    });
    recaptchaRef.current?.reset();
    form.reset();
  }

  return (
    <Card className="w-full max-w-2xl p-6 md:p-8 shadow-lg bg-card">
        <CardContent className="p-0">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-headline">SUPPORT GREENROOTS</h2>
                <p className="text-muted-foreground">PLANT A TREE, GROW A FUTURE</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                    <FormItem className="space-y-3">
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
                        <p className="text-center text-muted-foreground pt-2">SPONSOR SAPLINGS & SUPPORT THEIR CARE</p>
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
                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="date" placeholder="DOB" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
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
                     <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="India" {...field} disabled />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Select State" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
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

                <Button type="submit" className="w-full bg-[#8bc34a] hover:bg-[#8bc34a]/90 text-white" size="lg">Submit</Button>
                </form>
            </Form>
        </CardContent>
    </Card>
  );
}
