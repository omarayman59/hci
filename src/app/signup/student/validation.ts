import { z } from "zod";

export const studentSignupSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(1, { message: "Name is required" }),
  parentEmail: z.string({ message: "Parent email is required" }).email(),
  username: z
    .string({ message: "Username is required" })
    .min(1, { message: "Username is required" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type StudentSignupFormType = z.infer<typeof studentSignupSchema>;
