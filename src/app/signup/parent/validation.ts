import { z } from "zod";

export const parentSignupSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(1, { message: "Name is required" }),
  email: z.string({ message: "Email is required" }).email(),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type ParentSignupFormType = z.infer<typeof parentSignupSchema>;
