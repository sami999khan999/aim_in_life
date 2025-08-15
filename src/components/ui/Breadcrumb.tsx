"use client";

import { ClassValue } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  className = "text-text-color",
}: {
  className?: ClassValue;
}) {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const name = decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
      return { name, href };
    }),
  ];

  return (
    <nav>
      <ol
        className={`flex items-center lg:text-size-16 text-size-14 ${className}`}
      >
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && <span className="mx-space-sm font-medium"> / </span>}
            {index < breadcrumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="hover:underline  duration-200 hover:text-primary"
              >
                {crumb.name}
              </Link>
            ) : (
              <span className={`line-clamp-1 text-primary/70`}>
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
