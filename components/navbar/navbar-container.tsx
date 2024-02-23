import React from "react";
import { ThemeModeToggle } from "./theme-toggle";
import { auth } from "@/auth"
import UserProfileBox from "./user-profile-box";
import Link from "next/link";
import Image from "next/image";
import { LogoDark, LogoWhite } from "@/public/images";
const NavbarContainer = async () =>
{
  const session = await auth()
  return (
    <nav className=" fixed w-full h-20 z-[999]  flex  bg-background/90 items-center justify-between px-6 max-md:px-3 py-10 ">
      <Link href={'/'}>
        <Image src={LogoWhite} alt="Light Mode Image" className=" w-[150px]  object-cover dark:hidden" />
        <Image src={LogoDark} alt="Light Mode Image" className=" w-[150px]   object-cover hidden dark:block" />
      </Link>
      <div className=" flex items-center gap-x-4">
        <UserProfileBox data={session?.user} />
        <ThemeModeToggle />
      </div>
    </nav>
  );
};

export default NavbarContainer;
