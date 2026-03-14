
// components/sections/donation-forms/schemas.ts

import { z } from 'zod';

export const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string().optional(),
  otherAmount: z.string().optional().refine((val) => {
    if (!val) return true;
    const num = parseFloat(val);
    return !isNaN(num) && num > 0;
  }, {
    message: "Please enter a valid positive number",
  }),
  cause: z.string(),
  initiative: z.string().optional(),
  fullName: z.string().optional(),
  email: z.string().optional(),
  countryCode: z.string().optional(),
  mobile: z.string().optional(),
  dob: z.string().optional(),
  pan: z.string().optional(),
  aadhar: z.string().optional(),
  passport: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  pincode: z.string().optional(),
  agree: z.boolean().default(true),
});

// Newsletter schema
export const newsletterSchema = z.object({
  email: z.string().email({ message: 'A valid email is required.' }),
  honeypot: z.string().optional(),
});
