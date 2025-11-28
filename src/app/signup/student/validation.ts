import { z } from "zod";

export const studentSignupSchema = z.object({
  name: z.string().min(1),
  parentEmail: z.string().email(),
  username: z.string().min(1),
  password: z.string().min(8),
});

export type StudentSignupFormType = z.infer<typeof studentSignupSchema>;
