import React from "react";

const BlogMenuSkeliton = () => {
  return (
    <div className="space-y-space-xl px-space-sm w-full">
      {[1, 2, 3].map((_, i) => (
        <div
          className="relative bg-bg-light p-space-base rounded-xl shadow-sm animate-pulse w-full"
          key={i}
        >
          <div className="flex gap-space-xl flex-col lg:flex-row">
            {/* Image placeholder */}
            <div className="w-[150px] h-[150px] bg-bg-dark rounded-xl shrink-0 shadow-sm"></div>

            {/* Text placeholder */}
            <div className="flex-1 flex flex-col py-space-sm gap-2">
              <div className="h-6 w-3/4 bg-bg-dark rounded"></div> {/* Title */}
              <div className="hidden lg:block mt-space-lg space-y-2">
                <div className="h-4 w-full bg-bg-dark rounded"></div>{" "}
                {/* Description line 1 */}
                <div className="h-4 w-5/6 bg-bg-dark rounded"></div>{" "}
                {/* Description line 2 */}
                <div className="h-4 w-2/3 bg-bg-dark rounded"></div>{" "}
                {/* Description line 3 */}
              </div>
            </div>
          </div>

          {/* Footer placeholder */}
          <hr className="border-dashed border-border border-t-1 my-space-base" />
          <div className="flex justify-between items-center mt-space-sm">
            <div className="h-5 w-24 bg-bg-dark rounded"></div>{" "}
            {/* Category placeholder */}
            <div className="h-5 w-32 bg-bg-dark rounded flex items-center gap-2"></div>{" "}
            {/* Date placeholder */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogMenuSkeliton;
