"use client";

import { NAV_LINKS } from "@/constants/NavConstants";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdPhone } from "react-icons/md";

const NavItems = () => {
  const path = usePathname();

  return (
    <div className="flex lg:items-center flex-col lg:flex-row lg:gap-space-md gap-space-xl lg:text-size-16 text-size-18 text-text-color">
      {NAV_LINKS.map((link) => (
        <div key={link.name} className="relative">
          {link.name === "Services" && link.services ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="group px-space-md py-space-xs hover:bg-bg-dark rounded-sm duration-200 cursor-pointer font-medium flex items-center gap-space-sm">
                {link.name}
                <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>

              <DropdownMenuPortal>
                <DropdownMenuContent
                  sideOffset={0}
                  align="center"
                  className="z-30 bg-bg-light border border-border rounded-md px-space-lg py-space-lg mt-space-sm shadow-md lg:mx-0"
                >
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4 lg:grid-rows-1">
                    {link.services.map((category) => (
                      <div
                        key={category.category}
                        className="flex flex-col space-y-1"
                      >
                        <DropdownMenuLabel className="font-semibold text-text-color">
                          {category.category}
                        </DropdownMenuLabel>

                        {category.serviceItems.map((item) => (
                          <DropdownMenuItem
                            asChild
                            key={item.name}
                            className="p-0"
                          >
                            <Link
                              href={item.href}
                              className="block px-2 py-1 text-sm text-text-color-muted hover:bg-bg-dark rounded outline-0"
                            >
                              {item.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>
          ) : link.name === "Contact" ? (
            <Link
              href={link.href as string}
              className="bg-primary text-bg-light px-space-base py-space-sm rounded-sm flex items-center gap-space-sm hover:bg-text-color duration-300 group"
            >
              <MdPhone className="group-hover:animate-pulse" />
              {link.name}
            </Link>
          ) : (
            <Link
              href={link.href as string}
              className={cn(
                "px-space-md py-space-xs hover:bg-bg-dark rounded-sm duration-200 font-medium",
                path === link.href ? "text-primary" : "text-text-light"
              )}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavItems;
