import Blogs from "@/components/layout/Blogs";
import Hero from "@/components/layout/Hero";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="space-y-[5rem]">
      <Hero />
      <Suspense>
        <Blogs />
      </Suspense>
    </div>
  );
};

export default page;
