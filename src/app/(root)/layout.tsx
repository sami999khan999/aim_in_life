import NavBar from "@/components/navigation/NavBar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="display-size mx-auto px-space-sm">
      <NavBar />

      <div>{children}</div>
    </div>
  );
};

export default layout;
