"use client";
import { sideNavContent } from "@/constant/side-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashBoardSideNavBar = ({ inMobileView }: { inMobileView: boolean }) =>
{
  const path = usePathname();

  return (
    <nav className={`${inMobileView
      ? " w-fit h-screen border-r-2  bg-background  "
      : "  w-fit h-screen border-r-2 top-20   max-md:hidden fixed "
      }`} >
      <div className={`pl-4 z-[999999]  flex flex-col pt-2 justify-start gap-y-10 min-w-[250px] min-h-screen`}>
        {sideNavContent.map((nav) =>
        {
          const isCurrentPath = new RegExp(`^${nav.link}/*`).test(path);

          return (
            <Link
              key={nav.name}
              className={`flex gap-x-4 p-2 hover:text-purple-400 ${isCurrentPath ? "text-purple-400" : ""
                }`}
              href={nav.link}
            >
              {<nav.logo />}
              <h1>{nav.name}</h1>
            </Link>
          );
        })}
      </div>

    </nav>

  );
};

export default DashBoardSideNavBar;
