"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeModeToggle() {
  const { setTheme, theme } = useTheme();

  console.log(theme);
  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="ghost"
      size="icon"
    >
      <Sun className="h-[2rem] w-[2rem]   dark:hidden " />
      <Moon
        onClick={() => setTheme("light")}
        className="absolute h-[2rem] w-[2rem]  hidden dark:block "
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
