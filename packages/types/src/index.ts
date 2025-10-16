// Centralized shared types & validation schemas for UNIRWD

import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  loyaltyPoints: z.number().default(0),
});

export type User = z.infer<typeof UserSchema>;

export const OrderSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  total: z.number().positive(),
  status: z.enum(["pending", "paid", "fulfilled", "cancelled"]),
});

export type Order = z.infer<typeof OrderSchema>;
