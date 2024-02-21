import CardContainer from "@/components/auth/card-container";
import React from "react";
import SignUpForm from "./components/singup-form";

const page = () =>
{
  return (
    <CardContainer
      showSocialMedia={true}
      title={"Register"}
      content={<SignUpForm />}
      description={"Welcome"}
      footerUrl={"/api/auth/signin"}
      footertext={"Already have Account ?"}
    />
  );
};

export default page;
