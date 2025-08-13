"use client";

import { BlogData } from "@/constants/NavConstants";
import useBlogState from "@/hooks/useBlogState";
import { useEffect } from "react";
import BlogsMenu from "../ui/BlogsMenu";
import Heading from "../ui/Heading";
import Pagination from "../ui/Pagination";

const Blogs = () => {
  const {
    blog,
    setBlog,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    setIsLoading,
  } = useBlogState();

  useEffect(() => {
    const getBlogs = async () => {
      // const { data, error } = await apiClient<BlogsResponse>(
      //   `blogs?page=${currentPage}`
      // );
      // if (error) {
      //   setError("Cound Not Fetch Blogs Due To Network Error");
      //   setBlog([]);
      //   return;
      // }
      // console.log(data);
      // if (data) {
      //   setBlog(data.blogs.data);
      //   setCurrentPage(data.blogs.current_page);
      //   setTotalPages(data.blogs.last_page);
      // }
      setBlog(BlogData.blogs.data);
      setCurrentPage(3);
      setTotalPages(40);
      setIsLoading(false);
    };

    getBlogs();
  }, [
    totalPages,
    currentPage,
    setIsLoading,
    setBlog,
    setCurrentPage,
    setTotalPages,
  ]);

  console.log(currentPage);

  return (
    <div>
      <Heading title="Discover Popular Blogs" />

      <BlogsMenu blogs={blog} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default Blogs;
