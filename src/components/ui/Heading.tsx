import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

const Heading = ({ className }: { className?: ClassValue }) => {
  return (
    <div>
      <div className="w-2 h-2 rounded-full bg-black"></div>

      <h2
        className={cn(
          "text-xl text-text-color font-medium tracking-wide text-center",
          className
        )}
      >
        Discover Popular Blogs
      </h2>
    </div>
  );
};

export default Heading;
