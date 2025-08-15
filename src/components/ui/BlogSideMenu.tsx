import React from "react";
import SearchBar from "./SearchBar";
import NewsLetter from "./NewsLetter";
import Categories from "./Categories";
import PingAnimation from "./PingAnimation";

const BlogSideMenu = () => {
  return (
    <div className="shrink-0 bg-bg-light px-space-base py-space-base rounded-lg shadow-sm h-fit space-y-space-xl ">
      <SearchBar className="w-full" />
      <div className="space-y-space-md">
        <div className="flex items-center gap-space-base">
          <PingAnimation className="w-2" />
          <h3 className="text-size-16 font-medium text-text-color">
            Categories
          </h3>
        </div>
        <Categories />
      </div>
      <div className="space-y-space-md">
        <div className="flex  items-center gap-space-base">
          <PingAnimation className="w-2" />
          <h3 className="text-size-16 font-medium text-text-color">
            Newsletter
          </h3>
        </div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default BlogSideMenu;
