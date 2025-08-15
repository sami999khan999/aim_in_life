import Blogs from "@/components/layout/Blogs";
import BlogSideMenu from "@/components/ui/BlogSideMenu";
import PageHeader from "@/components/ui/PageHeader";
import { Suspense } from "react";

export const metadata = () => {
  return {
    title: "Aim In Life - Blog",
  };
};

const Page = () => {
  return (
    <div className="space-y-space-lg ">
      <PageHeader />

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

export default Page;
