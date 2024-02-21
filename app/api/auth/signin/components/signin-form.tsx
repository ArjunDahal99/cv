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
import { loginFormSchema } from "@/schema/zod-login";
import { z } from "zod";
import { useEffect, useState } from "react";
import SubmissionMessage from "@/components/auth/form-submit-message";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
const LoginForm = () =>
{
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const params = useSearchParams()
  const search = params.get('error')

  useEffect(() =>
  {
    if (search)
    {
      setErrorMessage("Invalid Email or Password")
    }

  }, [search])


  const onSubmit = async (values: z.infer<typeof loginFormSchema>) =>
  {
    alert(values)
    try
    {
      setIsLoading(true)
      await signIn("credentials", values)
    } catch (error: any)
    {
      if (error)
      {
        console.log(error)
        switch (error.type)
        {
          case "CredentialsSignin":
            return { error: "Invalid credentials!" }
          default:
            return { error: "Something went wrong!" }
        }
      }

    }
    setIsLoading(false)
  }


  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
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
            Sign In
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

export default LoginForm;
