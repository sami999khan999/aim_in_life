"use client";

import Image from "next/image";
import { formatDate } from "@/utils/dateFormat";
import { SlCalender } from "react-icons/sl";
import { BlogDataType } from "@/types/blogTypes";
import BlogMenuSkeliton from "../skeliton/BlogMenuSkeliton";

const BlogsMenu = ({
  blogs,
  isLoading,
}: {
  blogs: BlogDataType[] | undefined;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <BlogMenuSkeliton />;
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="px-space-sm py-space-base text-text-color-muted text-center">
        No blogs available.
      </div>
    );
  }

  return (
    <div className="space-y-space-xl px-space-sm">
      {blogs.map((blog, i) => (
        <div className="relative" key={i}>
          <div
            className={`absolute top-0 -left-[5px] w-20 h-full rounded-l-[1rem] ${
              i % 2 === 0 ? "bg-primary" : "bg-secondary"
            }`}
          ></div>
          <div className="relative bg-bg-light p-space-base rounded-xl shadow-sm">
            <div className="flex gap-space-xl flex-col lg:flex-row items-center">
              <div
                className="relative w-[150px] h-[150px] bg-bg-dark rounded-xl overflow-hidden border-border shrink-0 shadow-sm"
                onClick={() => (window.location.href = `/blog/${blog.slug}`)}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${blog.image}`}
                  alt={blog.title}
                  layout="fill"
                  objectFit="contain"
                  className="hover:scale-105 duration-300"
                />
              </div>
              <div
                className="py-space-sm font-anek-bangla flex flex-col"
                onClick={() => (window.location.href = `/blog/${blog.slug}`)}
              >
                <h2 className="relative cursor-pointer text-xl hover:text-primary group duration-300 text-text-color font-medium w-fit">
                  {blog.title}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-xs font-outfit mt-space-xs text-text-color-muted">
                  {blog.category.category_description}
                </p>

                <div className="hidden lg:block mt-space-lg text-text-color-muted ">
                  <div
                    className="shrink-0 line-clamp-3 my-auto text-size-14 tracking-wider cursor-pointer"
                    dangerouslySetInnerHTML={{ __html: blog.short_description }}
                  />
                </div>
              </div>
            </div>

            <hr className="border-dashed border-border border-t-1 my-space-base" />
            <div className="flex justify-between items-center">
              <div
                className={`group relative inline-flex items-center gap-space-xs text-text-color-muted cursor-pointer ${
                  i % 2 === 0 ? "hover:text-primary" : "hover:text-secondary"
                }`}
              >
                <span
                  className={`${
                    i % 2 === 0 ? "text-primary" : "text-secondary"
                  }`}
                >
                  #
                </span>
                <p className="text-size-14 font-medium">
                  {blog.category.category_name}
                </p>

                <hr className="absolute bottom-0 left-0 w-full border-t opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0" />
              </div>

              <div className="text-size-14 text-text-color-muted font-medium flex items-center gap-space-sm cursor-pointer">
                {formatDate(blog.created_at)}
                <SlCalender />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsMenu;
