"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
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
    <nav className="text-sm text-gray-500">
      <ol className="flex items-center text-size-16">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && <span className="mx-space-sm font-medium"> • </span>}
            {index < breadcrumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="hover:underline text-text-color duration-200 hover:text-primary"
              >
                {crumb.name}
              </Link>
            ) : (
              <span className="text-text-color-muted">{crumb.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
