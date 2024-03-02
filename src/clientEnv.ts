import { z } from "zod";

const ClientEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string(),
});

const clientEnv = ClientEnvSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default clientEnv;
