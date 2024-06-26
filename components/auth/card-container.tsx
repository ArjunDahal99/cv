import React from "react";
import
{
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import SocialMediaContiner from "./social-media";
import Image from "next/image";
import { Logo, LogoDark, LogoWhite } from "@/public/images";

interface CardContainerPropsType
{
  title: string;
  description?: string;
  content: React.ReactNode;
  footertext: string;
  footerUrl: string;
  showSocialMedia?: boolean;
}

const CardContainer = ({
  title,
  content,
  description,
  showSocialMedia,
  footerUrl,
  footertext,
}: CardContainerPropsType) =>
{
  return (
    <Card className=" w-[500px] max-md:w-full max-md:mx-2">
      <CardHeader>
        <CardTitle className="  flex items-center justify-center space-x-2"> <p>{title} </p><Image src={Logo} className="w-8 h-8" alt="logo" /></CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardContent>{showSocialMedia && <SocialMediaContiner />}</CardContent>
      <CardFooter className=" flex justify-center">
        <Link href={footerUrl}>
          <Button variant={"link"}>{footertext}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardContainer;
