"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialMediaContiner = () =>
{

  return (
    <>
      <div className="w-full flex  gap-x-2 ">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="h-8 w-8" />
        </Button>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => signIn("github")}
        >
          <FaGithub className="h-8 w-8" />
        </Button>
      </div>
    </>
  );
};

export default SocialMediaContiner;
