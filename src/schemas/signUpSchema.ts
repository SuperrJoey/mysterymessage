import { z } from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "Username is too short!")
    .max(20, "Username is too long!")
    .regex(/^[a-zA-Z0-9 ]*$/
        , "No special characters")


export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().email({message: 'Invalid'}),
    password: z.string().min(6, {
        message: "Password is too short"
    })
})