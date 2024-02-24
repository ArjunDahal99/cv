import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) =>
{
  return (
    <>
      <div className=" w-full  h-[90vh] pt-[10vh] flex justify-center items-center">
        {children}
      </div>
      ;
    </>
  );
};

export default AuthLayout;
