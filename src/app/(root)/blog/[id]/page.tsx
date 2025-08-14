"use client";

import BlogDetails from "@/components/layout/BlogDetails";
import { BlogData } from "@/constants/NavConstants";
import useBlogState from "@/hooks/useBlogState";
import { BlogDataType, BlogResponse } from "@/types/blogTypes";
import apiClient from "@/utils/apiClient";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { id } = useParams();
  const { setError, blog, setBlog } = useBlogState<BlogDataType | undefined>();

  const title = decodeURIComponent(id as string);

  useEffect(() => {
    const getBlog = async () => {
      // const { data, error } = await apiClient<BlogResponse>(`blogs/${title}`);
      // if (error) {
      //   setError("Cound Not Fetch Blogs Due To Network Error");
      //   setBlog(undefined);
      //   return;
      // }

      // if (data) {
      //   setBlog(data.blog);
      // }

      setBlog(BlogData.blogs.data[0]);
    };

    getBlog();
  }, [title]);

  console.log(blog);

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default Page;
