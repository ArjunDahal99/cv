import { z } from "zod"

export const registerFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email( {message:"Invalid Email"}),
    password: z.string().min(8,{message:"Passowrd Length should be 8"})
  })