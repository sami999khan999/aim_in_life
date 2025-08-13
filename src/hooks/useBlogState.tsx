// useBlogState.tsx
"use client";

import { BlogData } from "@/types/blogTypes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useBlogState = () => {
  const [blog, setBlog] = useState<BlogData[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const searchParams = useSearchParams();
  const pageParam = searchParams?.get("page") ?? "";

  useEffect(() => {
    const p = parseInt(pageParam, 10);
    setCurrentPage(!pageParam || Number.isNaN(p) ? 1 : p);
  }, [pageParam]);

  return {
    blog,
    setBlog,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    isLoading,
    setIsLoading,
    error,
    setError,
  };
};

export default useBlogState;
