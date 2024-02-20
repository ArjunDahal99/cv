import React from "react";
import {
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

interface CardContainerPropsType {
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
}: CardContainerPropsType) => {
  return (
    <Card className=" w-[500px]">
      <CardHeader>
        <CardTitle className=" text-center">{title}</CardTitle>
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
