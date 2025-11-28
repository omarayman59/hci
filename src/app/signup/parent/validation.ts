import { z } from "zod";

export const parentSignupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export type ParentSignupFormType = z.infer<typeof parentSignupSchema>;
