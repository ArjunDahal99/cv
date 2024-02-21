import CardContainer from "@/components/auth/card-container";
import React from "react";
import LoginForm from "./components/signin-form";

const LoginPage = () =>
{
  return (
    <CardContainer
      showSocialMedia={true}
      title={"Sign In"}
      content={<LoginForm />}
      description={"Welcome"}
      footerUrl={"/api/auth/signup"}
      footertext={"Dont have Account ? Sign Up"}
    />
  );
};

export default LoginPage;
