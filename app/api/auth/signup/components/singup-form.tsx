"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import
  {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerFormSchema } from "@/schema/zod-register";
import { z } from "zod";
import { registerUser } from "@/server-action/register-user";
import { useState } from "react";
import SubmissionMessage from "@/components/auth/form-submit-message";
// useRouter
import { useRouter } from "next/navigation";

const SignUpForm = () =>
{
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) =>
  {
    try
    {
      setIsLoading(true);
      const { message, status } = await registerUser(values);
      if (status)
      {
        setSuccessMessage(message);
        setErrorMessage("");
      } else
      {
        setErrorMessage(message);
        setSuccessMessage("");
      }
    } catch (error)
    {
      console.log(error);
    }
    setIsLoading(false);
  };

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="password"
                    placeholder="******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant={"outline"}
            disabled={isLoading}
            className=" w-full"
            type="submit"
          >
            Register
          </Button>
        </form>
        {successMessage && (
          <SubmissionMessage message={successMessage} status={true} />
        )}
        {errorMessage && (
          <SubmissionMessage message={errorMessage} status={false} />
        )}
      </Form>
    </>
  );
};

export default SignUpForm;
