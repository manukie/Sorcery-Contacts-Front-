import { z } from "zod"

export const schema = z.object({
    name: z.string(),
    email: z.string().email("Precisa ser um e-mail"),
    password: z.string().min(8, "A senha precisa ter, no mínimo, 8 caracteres!"),
    phone: z.string(),
})

export type RegisterData = z.infer<typeof schema>