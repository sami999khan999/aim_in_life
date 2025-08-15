"use client";

import Blogs from "@/components/layout/Blogs";
import BlogSideMenu from "@/components/ui/BlogSideMenu";
import PageHeader from "@/components/ui/PageHeader";
import PingAnimation from "@/components/ui/PingAnimation";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="space-y-space-lg ">
      <PageHeader />

      {/* <div className="flex items-center gap-space-lg mx-space-base mb-space-md">
        <PingAnimation />
        <h2 className="text-size-18 font-medium text-text-color">Blogs</h2>
      </div> */}
      <div className="flex gap-space-lg flex-col lg:flex-row">
        <div className="lg:w-[70%]">
          <Suspense>
            <Blogs />
          </Suspense>
        </div>
        <div className="lg:w-[30%]">
          <BlogSideMenu />
        </div>
      </div>
    </div>
  );
};

export default page;
