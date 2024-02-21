import { z } from "zod"

export const loginFormSchema = z.object({
    email: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(1, { message: "Passoword is Required " })
})