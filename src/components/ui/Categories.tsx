"use client";

import { categoryData } from "@/constants/NavConstants";
import { cn } from "@/lib/utils";
import { Category } from "@/types/blogTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategoriesSkeleton from "../skeliton/CategoriesSkeleton";

const Categories = ({ limit }: { limit?: number }) => {
  const [category, setCategory] = useState<Category[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      // const { data, error, status } = await apiClient<CategoryResponse>(
      //   `categories`
      // );

      // if (error) {
      //   setError("Cound Not Fetch Blogs Due To Network Error");
      //   setCategory(undefined);
      //   return;
      // }

      // if (data) {
      //   setCategory(data.categories);
      // }

      setCategory(categoryData.categories);
      setIsLoading(false);
    };

    getCategories();
  }, [setIsLoading, setCategory]);

  const handleCategoryClick = (name: string) => {
    router.push(`/blog/?category=${encodeURIComponent(name)}`);
  };

  const displayedCategories = limit ? category?.slice(0, limit) : category;

  return (
    <div className="space-y-space-sm">
      {isLoading ? (
        <CategoriesSkeleton />
      ) : (
        <div className="flex flex-wrap gap-space-md w-full">
          {displayedCategories?.map((category, i) => (
            <div
              key={i}
              className={`text-size-14 text-text-color cursor-pointer duration-200 ${
                i % 2 === 0 ? "hover:text-primary" : "hover:text-secondary"
              }`}
              onClick={() => handleCategoryClick(category.category_name)}
            >
              <span
                className={cn(i % 2 === 0 ? "text-primary" : "text-secondary")}
              >
                #{" "}
              </span>
              {category.category_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
