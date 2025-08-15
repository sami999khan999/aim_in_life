import NavBar from "@/components/navigation/NavBar";
import ToastProvider from "@/components/ui/ToastProvider";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="display-size lg:px-space-sm px-space-xs min-h-screen">
        <ToastProvider>
          <NavBar />
          <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-t from-bg-bg  to-secondary/10 -z-10"></div>
          {children}
        </ToastProvider>
      </div>
    </div>
  );
};

export default Layout;
