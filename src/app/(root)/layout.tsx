import NavBar from "@/components/navigation/NavBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="display-size mx-auto px-space-sm min-h-screen">
      <NavBar />
      <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-t from-bg-bg via-primary/5 to-secondary/5 -z-10"></div>
      {children}
    </div>
  );
};

export default Layout;
