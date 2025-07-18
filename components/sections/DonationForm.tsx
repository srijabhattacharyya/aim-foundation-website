
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
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const donationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  amount: z.string().nonempty({ message: "Please select a donation amount." }),
});

const donationAmounts = [
    { value: "3000", label: "₹3000" },
    { value: "6000", label: "₹6000" },
    { value: "12000", label: "₹12000" },
    { value: "24000", label: "₹24000" },
];

export default function DonationForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: "3000",
    },
  });

  function onSubmit(values: z.infer<typeof donationSchema>) {
    console.log(values);
    toast({
      title: "Thank you for your donation!",
      description: `We appreciate your support, ${values.name}.`,
    });
    form.reset();
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Support the Cause</CardTitle>
        <CardDescription>Make a Difference</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-wrap justify-center gap-4"
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
                   <p className="text-center text-sm text-muted-foreground pt-2">Education of 1 child for 6 months</p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
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
                    <Input type="email" placeholder="Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-[#2ecc71] hover:bg-[#2ecc71]/90" size="lg">
              Donate Now
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
