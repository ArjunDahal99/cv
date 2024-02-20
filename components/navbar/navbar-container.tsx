import React from "react";
import { ThemeModeToggle } from "./theme-toggle";

const NavbarContainer = () => {
  return (
    <nav className=" w-full h-20 border-b-2 flex  items-center justify-between px-32 max-md:px-8 py-10 ">
      <div className="">
        <h1 className=" text-3xl font-extrabold">SenCV</h1>
      </div>
      <div className="">
        <ThemeModeToggle />
      </div>
    </nav>
  );
};

export default NavbarContainer;
