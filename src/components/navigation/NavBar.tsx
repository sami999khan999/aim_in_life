"use client";

import React, { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import NavItems from "./NavItems";
import NavSheet from "./NavSheet";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`sticky top-0 z-20 transition-all duration-300 ease-in-out ${
        showNavbar ? "lg:translate-y-0" : "lg:-translate-y-[6rem]"
      }`}
    >
      <div className="display-size">
        <div className="flex justify-between items-center bg-bg-light h-[4rem] px-space-base relative rounded-b-xl shadow-sm">
          <Logo />
          <div className="lg:flex hidden z-30">
            <NavItems />
          </div>
          <div className="lg:hidden">
            <NavSheet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
