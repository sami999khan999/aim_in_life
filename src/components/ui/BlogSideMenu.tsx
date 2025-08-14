import React from "react";
import SearchBar from "./SearchBar";
import NewsLetter from "./NewsLetter";

const BlogSideMenu = () => {
  return (
    <div className="shrink-0 bg-bg-light px-space-base py-space-base rounded-lg shadow-sm">
      <SearchBar className="w-full" />
      <div className="h-[20rem]"></div>
      <NewsLetter />
    </div>
  );
};

export default BlogSideMenu;
