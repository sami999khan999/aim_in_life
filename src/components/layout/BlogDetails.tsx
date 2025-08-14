import { BlogDataType } from "@/types/blogTypes";
import { formatDate } from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";
import Breadcrumb from "../ui/Breadcrumb";
import BlogSideMenu from "../ui/BlogSideMenu";

const BlogDetails = ({ blog }: { blog: BlogDataType | undefined }) => {
  return (
    <div className="lg:mt-[5rem] mt-[3rem]">
      <div className="absolute -z-10 top-0 left-0 bg-pattern w-[500px] aspect-square hidden lg:block " />
      <div className="lg:w-[70%] w-[90%] mx-auto ">
        <div className="space-y-space-sm">
          <div
            className={`group relative inline-flex items-center gap-space-xs text-text-color-muted cursor-pointer hover:text-primary`}
          >
            <span className={`text-primary`}>#</span>
            <p className="text-size-14 font-medium">
              {blog?.category.category_name}
            </p>

            <hr className="absolute bottom-0 left-0 w-full border-t opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0" />
          </div>
          <h2 className="font-anek-bangla lg:text-size-28 text-size-24 font-medium text-text-color ">
            {blog?.title}
          </h2>
        </div>
        <hr className="border-b border-border/50 my-space-md" />
        <div className="text-text-color-muted">
          {formatDate(blog?.created_at as string)}
        </div>
      </div>

      <div className="relative h-[500px] w-full overflow-hidden bg-bg-dark rounded-xl p-space-md my-space-md space-y-space-base bg-gradient-to-l from-primary/10 to-secondary/10 ">
        {blog && (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${blog.image}`}
            alt={blog.title}
            layout="fill"
            objectFit="contain"
            className="p-space-sm"
          />
        )}
      </div>

      <div className="my-space-lg">
        <Breadcrumb />
      </div>

      <div className="flex gap-space-xl">
        <div className="relative w-[70%]">
          <div
            className={`absolute top-0 -left-[5px] -z-10 w-20 h-full rounded-l-[1rem] ${"bg-primary"}`}
          ></div>
          <div className="bg-bg-light rounded-lg shadow-sm p-space-lg">
            <div className="font-anek-bangla text-text-color text-size-18">
              {blog && (
                <div className="">
                  <div
                    className="shrink-0tracking-wide cursor-pointer"
                    dangerouslySetInnerHTML={{
                      __html: blog?.short_description,
                    }}
                  />
                  <div
                    className="shrink-0  tex tracking-wide cursor-pointer"
                    dangerouslySetInnerHTML={{ __html: blog?.long_description }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-30%">
          <BlogSideMenu />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
