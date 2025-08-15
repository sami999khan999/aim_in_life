"use client";

import BlogDetails from "@/components/layout/BlogDetails";
import { BlogData } from "@/constants/NavConstants";
import { BlogDataType } from "@/types/blogTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogDataType | undefined>();

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
  }, [title, setBlog]);

  console.log(blog);

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default Page;
