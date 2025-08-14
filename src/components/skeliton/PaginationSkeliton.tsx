"use client";

const PaginationSkeleton = () => {
  const skeletonItems = Array.from({ length: 7 });

  return (
    <div className="flex justify-center my-space-xl">
      <div className="flex gap-1 md:gap-2 items-center">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="h-8 md:h-10 w-8 md:w-10 rounded bg-bg-dark animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PaginationSkeleton;
