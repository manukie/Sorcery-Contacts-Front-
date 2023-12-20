import { z } from "zod"

export const schema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    description: z.string().max(120),
})

export type ContactData = z.infer<typeof schema>