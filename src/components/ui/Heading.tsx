import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";
import PingAnimation from "./PingAnimation";

const Heading = ({
  className,
  title,
}: {
  className?: ClassValue;
  title: string;
}) => {
  return (
    <div className="flex w-full items-center justify-center space-x-space-lg my-space-xl">
      <PingAnimation />

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
