import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";
import PingAnimation from "./PingAnimation";

const Heading = ({
  className,
  titleClassName,
  title,
}: {
  className?: ClassValue;
  titleClassName?: ClassValue;
  title: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center space-x-space-lg",
        className
      )}
    >
      <PingAnimation />

      <h2
        className={cn(
          "text-2xl text-text-color font-medium tracking-wide text-center",
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default Heading;
