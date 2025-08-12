import Blogs from "@/components/layout/Blogs";
import Hero from "@/components/layout/Hero";
import React from "react";

const page = () => {
  return (
    <div className="space-y-[5rem]">
      <Hero />
      <Blogs />
    </div>
  );
};

export default page;
