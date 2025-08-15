// Pagination.tsx
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();

  const buildQueryString = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    const clamped = Math.max(1, Math.min(pageNumber, totalPages));
    params.set("page", clamped.toString());
    return `${pathname}?${params.toString()}`;
  };

  const getPaginationItems = (): (number | string)[] => {
    if (totalPages <= 1) return [1];

    const pages: (number | string)[] = [];
    pages.push(1);

    const start = Math.max(currentPage - 1, 2);
    const end = Math.min(currentPage + 1, totalPages - 1);

    if (start > 2) pages.push("• • •");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("• • •");

    pages.push(totalPages);
    return pages;
  };

  const paginationItems = getPaginationItems();

  // useEffect(() => {
  //   const params = new URLSearchParams(searchParams?.toString() ?? "");
  //   const clamped = Math.max(1, Math.min(currentPage, totalPages));

  //   params.set("page", clamped.toString());

  //   router.push(`${pathname}?${params.toString()}`);
  // }, [currentPage, searchParams, pathname, router, totalPages]);

  return (
    <div className="flex justify-center my-space-xl">
      {totalPages > 1 && (
        <div className="text-text mt-3 flex gap-1 md:gap-2 items-center px-space-base py-space-xs rounded-md border border-border-muted">
          {currentPage > 1 ? (
            <Link
              href={buildQueryString(currentPage - 1)}
              aria-label="Previous page"
              className="px-2 py-1 md:px-3 md:py-1.5 rounded"
            >
              <IoIosArrowBack className="w-4 h-4" />
            </Link>
          ) : (
            <span
              className="px-2 py-1 md:px-3 md:py-1.5 rounded cursor-not-allowed text-text-color-muted"
              aria-disabled="true"
            >
              <IoIosArrowBack className="w-4 h-4 " />
            </span>
          )}

          {paginationItems.map((item, index) =>
            typeof item === "number" ? (
              <Link
                key={index}
                href={buildQueryString(item)}
                aria-current={item === currentPage ? "page" : undefined}
                className={`px-2 py-1 md:px-4 md:py-2 rounded text-center text-sm md:text-size-14 duration-200 ${
                  item === currentPage
                    ? "bg-primary text-bg"
                    : "text-primary-foreground hover:bg-bg-dark"
                }`}
              >
                {item}
              </Link>
            ) : (
              <span
                key={index}
                className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base text-primary-foreground select-none"
                aria-hidden="true"
              >
                {item}
              </span>
            )
          )}

          {currentPage < totalPages ? (
            <Link
              href={buildQueryString(currentPage + 1)}
              aria-label="Next page"
              className="px-2 py-1 md:px-3 md:py-1.5 rounded hover:bg-bg"
            >
              <IoIosArrowForward className="w-4 h-4" />
            </Link>
          ) : (
            <span
              className="px-2 py-1 md:px-3 md:py-1.5 rounded cursor-not-allowed text-text-color-muted hover:bg-bg"
              aria-disabled="true"
            >
              <IoIosArrowForward className="w-4 h-4" />
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
