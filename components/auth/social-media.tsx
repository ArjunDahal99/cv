"use client";
import React from "react";
import { Button } from "../ui/button";
import { BananaIcon, GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";

const SocialMediaContiner = () => {
  const googleSignIn = () => {
    signIn("google");
  };
  return (
    <>
      <div className=" space-y-4">
        <Button
          onClick={googleSignIn}
          variant={"secondary"}
          className=" w-full"
        >
          <BananaIcon />
          Continue With Goolge
        </Button>
        <Button
          onClick={() => signIn("github")}
          variant={"secondary"}
          className=" w-full"
        >
          <GithubIcon /> Continue With Github
        </Button>
      </div>
    </>
  );
};

export default SocialMediaContiner;
