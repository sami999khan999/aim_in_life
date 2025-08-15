import React from "react";
import Logo from "../ui/Logo";
import NavItems from "./NavItems";
import NavSheet from "./NavSheet";

const NavBar = () => {
  return (
    <div className="sticky top-space-sm z-20">
      <div className="display-size rounded-lg">
        <div className="flex justify-between items-center bg-bg-light h-[4rem] px-space-base relative rounded-xl shadow-sm">
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
