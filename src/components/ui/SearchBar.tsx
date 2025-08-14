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

    const searchParams = new URLSearchParams(window.location.search);

    if (!query.trim()) {
      searchParams.delete("search");
    } else {
      searchParams.set("search", query.trim());
    }

    const newQueryString = searchParams.toString();
    const newUrl = newQueryString
      ? `${window.location.pathname}?${newQueryString}`
      : window.location.pathname;

    router.push(newUrl);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={cn(
        "flex items-center border border-border rounded-full pl-space-lg w-[90%] bg-bg-light py-space-xs pr-space-xs",
        className
      )}
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow outline-none border-none"
      />
      <button
        type="submit"
        className="bg-primary p-space-sm rounded-full text-bg-light hover:bg-text-color flex items-center justify-center duration-300"
      >
        <FiSearch size={16} />
      </button>
    </form>
  );
};

export default SearchBar;
