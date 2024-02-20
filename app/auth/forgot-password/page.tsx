import CardContainer from "@/components/auth/card-container";
import React from "react";

const page = () => {
  return (
    <CardContainer
      showSocialMedia={false}
      title={"Forgot passoword"}
      content={"dsdsd"}
      footerUrl={"/auth/login"}
      footertext={"Back to Login"}
    />
  );
};

export default page;
