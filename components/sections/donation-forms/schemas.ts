
import { z } from 'zod';

export const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string(),
  otherAmount: z.string().optional(),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
  dob: z.string().optional(),
  pan: z.string().optional(),
  aadhar: z.string().optional(),
  passport: z.string().optional(),
  country: z.string().nonempty('Country is required'),
  state: z.string().optional(),
  city: z.string().nonempty('City is required'),
  address: z.string().nonempty('Address is required'),
  pincode: z.string().min(6, 'Pincode must be 6 digits'),
  agree: z.literal('on', {
    errorMap: () => ({ message: "You must agree to the terms." }),
  }),
  cause: z.string(),
  initiative: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.amount.trim() === '' && (!data.otherAmount || data.otherAmount.trim() === '')) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please select or enter a donation amount.",
            path: ["amount"],
        });
    }

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
        ctx.addIssue({ path: ["pan"], message: "Invalid PAN format." });
      }
      if (data.aadhar && !/^[0-9]{12}$/.test(data.aadhar)) {
        ctx.addIssue({ path: ["aadhar"], message: "Aadhar must be 12 digits." });
      }
      if (!data.state) {
        ctx.addIssue({ path: ["state"], message: "State is required for Indian nationals." });
      }
    }
    if (data.nationality === 'Non-Indian' && !data.passport) {
        ctx.addIssue({ path: ["passport"], message: "Passport is required for Non-Indian nationals." });
    }
});
