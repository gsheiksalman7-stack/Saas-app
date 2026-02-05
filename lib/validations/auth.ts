import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(4, 'Name must be atleast  4 characters').max(50, 'Name must not exceed 50 characters').regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),

  email: z.email('Inavlid email address').refine((val) => val.endsWith('@gmail.com') || val.endsWith('@yahoo.com'), {}),

  password: z.string().min(8, 'Password must be atleast 8 characters').max(20, 'password must not exceed 20 characters').regex(/[A-Z]/, 'Password must contain at least one uppercase letter').regex(/[a-z]/, 'Password must contain at least one lowercase letter').regex(/[0-9]/, 'Password must contain at least one number').regex(/[@$!%*?&]/, 'Password must contain at least one special character'),

  image: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupSchema>;
