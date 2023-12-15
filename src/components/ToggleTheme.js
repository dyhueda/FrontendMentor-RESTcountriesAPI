"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const toggle = () => {
    if (
      localStorage.getItem("theme") === "dark" ||
      document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", "dark");
      localStorage.removeItem("theme", "dark");
      setDark(false);
    } else {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };
  return (
    <button className="flex items-center text-xs gap-1" onClick={toggle}>
      {dark ? (
        <Image src="/icons/MoonIconFull.svg" height={24} width={24} alt="moon icon" />
      ) : (
        <Image src="/icons/MoonIcon.svg" height={24} width={24} alt="moon icon" />
      )}
      <h1 className="font-bold sm:text-lg">Dark Mode</h1>
    </button>
  );
}
