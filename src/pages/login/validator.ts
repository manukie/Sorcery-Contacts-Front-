import { z } from "zod"

export const schema = z.object({
    email: z.string().email("Precisa ser um e-mail"),
    password: z.string().min(8)
})

export type LoginData = z.infer<typeof schema>