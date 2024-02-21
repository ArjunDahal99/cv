"use server"
import prisma from "@/db/db.config";
import bcrypt from 'bcryptjs';
import * as z from "zod";

import { registerFormSchema } from '../schema/zod-register';

// Define the type for the input values
type RegisterFormValues = z.infer<typeof registerFormSchema>;

// Define the type for the return value of the function
type RegisterResponse = {
  message: string;
  status: boolean;
};

// Explicitly annotate the type of the registerUser function
export const registerUser: (values: RegisterFormValues) => Promise<RegisterResponse> = async (values) =>
{
  try
  {
    const { email, password, username } = values;

    // Ensure that the provided values match the schema
    const validationResult = registerFormSchema.safeParse(values);

    if (!validationResult.success)
    {
      throw new Error("Validation error");
    }

    // Check if the user already exists
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })
    if (user)
    {
      return { message: "User Already Exist", status: false };
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);
    // Create the user
    await prisma.user.create({
      data: {
        email,
        username,
        password: hashPassword,
        credentialProvider: "Credentail"
      }
    });

    // Return success message
    return { message: "User Registered Successfully", status: true };
  } catch (error)
  {
    console.log(error);
    return { message: "Error occurred while registering user", status: false };
  }
};
