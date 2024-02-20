import CardContainer from "@/components/auth/card-container";
import React from "react";

const LoginPage = () => {
  return (
    <CardContainer
      showSocialMedia={true}
      title={"Login"}
      content={"dsdsd"}
      description={"Welcome"}
      footerUrl={"/auth/register"}
      footertext={"Dont have Account ?"}
    />
  );
};

export default LoginPage;
