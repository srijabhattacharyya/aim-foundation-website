// components/sections/donation-forms/schemas.ts

import { z } from 'zod';

export const donationSchema = z
  .object({
    nationality: z.enum(["Indian", "Non-Indian"]),
    amount: z.string(),
    otherAmount: z.string().optional(),
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    countryCode: z.string(),
    mobile: z.string().min(5, 'Mobile number seems too short'),
    dob: z.string().optional(),
    pan: z.string().optional(),
    aadhar: z.string().optional(),
    passport: z.string().optional(),
    country: z.string().nonempty('Country is required'),
    state: z.string().optional(),
    city: z.string().nonempty('City is required'),
    address: z.string().nonempty('Address is required'),
    pincode: z.string().min(5, 'Pincode seems too short'),
    agree: z.boolean(), // ✅ allow false, will validate in superRefine
    cause: z.string(),
    initiative: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Validate donation amount
    if (data.amount.trim() === '' && (!data.otherAmount || data.otherAmount.trim() === '')) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select or enter a donation amount.",
        path: ["amount"],
      });
    }

    // Validate agreement
    if (!data.agree) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "You must agree to the terms.",
        path: ["agree"],
      });
    }

    // For Indian nationals
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
      }

      if (data.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.pan)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["pan"],
          message: "Invalid PAN format.",
        });
      }

      if (data.aadhar && !/^[0-9]{12}$/.test(data.aadhar)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["aadhar"],
          message: "Aadhar must be 12 digits.",
        });
      }

      if (!data.state) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["state"],
          message: "State is required for Indian nationals.",
        });
      }
    }

    // For Non-Indian nationals
    if (data.nationality === 'Non-Indian' && !data.passport) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passport"],
        message: "Passport is required for Non-Indian nationals.",
      });
    }
  });

// Newsletter schema
export const newsletterSchema = z.object({
  email: z.string().email({ message: 'A valid email is required.' }),
});
