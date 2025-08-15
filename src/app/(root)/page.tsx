"use client";

import Blogs from "@/components/layout/Blogs";
import Hero from "@/components/layout/Hero";
import Heading from "@/components/ui/Heading";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="space-y-[5rem]">
      <Hero />
      <Heading title="Discover Popular Blogs" className="my-space-xl" />

      <Suspense>
        <Blogs />
      </Suspense>
    </div>
  );
};

export default Page;
