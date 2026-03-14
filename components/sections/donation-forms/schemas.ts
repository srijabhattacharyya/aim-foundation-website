
// components/sections/donation-forms/schemas.ts

import { z } from 'zod';

export const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string().min(1, 'Please select a donation amount'),
  cause: z.string(),
  initiative: z.string().optional(),
  // All other fields are now optional as they are removed from the minimal UI
  otherAmount: z.string().optional(),
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
