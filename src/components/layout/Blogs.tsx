"use client";

import { BlogData } from "@/constants/NavConstants";
import useBlogState from "@/hooks/useBlogState";
import { BlogDataType } from "@/types/blogTypes";
import { Suspense, useEffect } from "react";
import PaginationSkeleton from "../skeliton/PaginationSkeliton";
import BlogsMenu from "../ui/BlogsMenu";
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
    isLoading,
  } = useBlogState<BlogDataType[]>();

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

      // if (data) {
      //   setBlog(data.blogs.data);
      //   setCurrentPage(data.blogs.current_page);
      //   setTotalPages(data.blogs.last_page);
      // }
      setBlog(BlogData.blogs.data);
      // setCurrentPage(3);
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

  console.log(blog);

  return (
    <div className="w-full">
      <BlogsMenu blogs={blog} isLoading={isLoading} />

      {!isLoading ? (
        <Suspense>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      ) : (
        <PaginationSkeleton />
      )}
    </div>
  );
};

export default Blogs;
