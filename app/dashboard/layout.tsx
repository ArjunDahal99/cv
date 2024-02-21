import DashBoardSideNavBar from "@/components/dashboard-nav/dashboard-navbar";
import React from "react";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className=" flex w-full min-h-screen">
        <DashBoardSideNavBar />
        <div className=" mt-20 md:ml-[250px] w-full   min-h-screen  ">
          {children}
        </div>
      </section>
    </>
  );
};

export default DashBoardLayout;
