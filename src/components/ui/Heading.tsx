import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

const Heading = ({
  className,
  title,
}: {
  className?: ClassValue;
  title: string;
}) => {
  return (
    <div className="flex w-full items-center justify-center space-x-space-lg my-space-base">
      <div className=" flex items-center justify-center">
        <div className="absolute z-20 w-3 h-3 rounded-full bg-primary"></div>
        <div className="absolute z-10 w-3 h-3 rounded-full bg-primary animation-ping flex items-center justify-center"></div>

        <div className="absolute z-10 w-3 h-3 rounded-full bg-primary flex items-center justify-center animation-ping animation-delay-500"></div>
      </div>

      <h2
        className={cn(
          "text-2xl text-text-color font-medium tracking-wide text-center",
          className
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default Heading;
