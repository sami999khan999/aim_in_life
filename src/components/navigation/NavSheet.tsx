"use client";

import React, { useState } from "react";
import NavItems from "./NavItems";
import Image from "next/image";

const NavSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-space-xs cursor-pointer hover:bg-highlight rounded-full w-fit ml-auto duration-200 relative z-50 bg-bg-dark backdrop-blur-2xl"
        aria-label="Open navigation menu"
      >
        <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg-dark/10 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-[calc(4rem+0.6rem)] transition-transform duration-300 ease-in-out z-50 h-[calc(100vh-5.2rem)] w-[300px] rounded-lg shadow-lg bg-bg-light p-space-md overflow-y-auto py-space-lg overflow-x-auto px-space-xl`}
        style={{
          transform: isOpen
            ? "translateX(0)"
            : "translateX(calc(100% + 1.2rem))",
          right: "9.6px",
        }}
      >
        <NavItems />
      </div>
    </div>
  );
};

export default NavSheet;
