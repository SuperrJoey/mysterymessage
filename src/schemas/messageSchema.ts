import { z } from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: 'Message is too short!'})
    .max(10, {message: 'Message is too long'})
})