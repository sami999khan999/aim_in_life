"use client";

const CategoriesSkeleton = ({ limit = 32 }: { limit?: number }) => {
  return (
    <div className="space-y-space-sm animate-pulse">
      {/* Categories Placeholder */}
      <div className="flex flex-wrap gap-space-md w-full">
        {[...Array(limit)].map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-bg-dark rounded ${
              i % 2 === 0 ? "w-12" : "w-10"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
