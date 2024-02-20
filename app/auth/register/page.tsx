import CardContainer from "@/components/auth/card-container";
import React from "react";
import RegisterForm from "./components/register-form";

const page = () => {
  return (
    <CardContainer
      showSocialMedia={true}
      title={"Register"}
      content={<RegisterForm />}
      description={"Welcome"}
      footerUrl={"/auth/login"}
      footertext={"Already have Account ?"}
    />
  );
};

export default page;
