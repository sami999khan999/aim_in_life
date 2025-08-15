"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ className }: { className?: ClassValue }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const newQueryString = query.trim()
      ? `search=${encodeURIComponent(query.trim())}`
      : "";

    const newUrl = newQueryString
      ? `${window.location.pathname}?${newQueryString}`
      : window.location.pathname;

    console.log(newUrl);

    router.push(`blog/${newUrl}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={cn(
        "flex items-center border border-border rounded-full pl-space-lg w-[90%] bg-bg-light py-space-xs pr-space-xs z-10",
        className
      )}
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow outline-none border-none text-size-14"
      />
      <button
        type="submit"
        className="bg-primary p-[8px] rounded-full text-bg-light hover:bg-text-color flex items-center justify-center duration-300"
      >
        <FiSearch size={14} />
      </button>
    </form>
  );
};

export default SearchBar;
