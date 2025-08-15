import React from "react";
import Logo from "../ui/Logo";
import PingAnimation from "../ui/PingAnimation";
import Link from "next/link";
import Categories from "../ui/Categories";
import NewsLetter from "../ui/NewsLetter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-light pt-space-xl pb-space-md flex items-center justify-center mt-[4rem] flex-col">
      <div className="display-size ">
        <div className="flex flex-col lg:flex-row gap-space-lg justify-between px-space-base">
          <div className="lg:w-[30%]">
            <Logo />
            <p className="text-text-color-muted leading-6 mt-space-base w-[80%]">
              Welcome to our blog, where we share insightful articles, tips, and
              stories to inspire, educate, and engage readers. Discover ideas,
              trends, and knowledge crafted just for you.
            </p>
          </div>
          <div>
            <div className="flex gap-space-base flex-col">
              <div className="flex  items-center gap-space-base">
                <PingAnimation className="w-2" />
                <h3 className="text-size-18 font-medium text-text-color">
                  Links
                </h3>
              </div>
              <div className="flex flex-col items-start gap-space-sm text-text-color-muted">
                <Link href={"/"} className="hover:text-primary">
                  Home
                </Link>
                <Link href={"/blog"} className="hover:text-primary">
                  Blog
                </Link>
                <Link href={"/about"} className="hover:text-primary">
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[20%] space-y-space-base">
            <div className="flex  items-center gap-space-base">
              <PingAnimation className="w-2" />
              <h3 className="text-size-18 font-medium text-text-color">
                Categories
              </h3>
            </div>
            <Categories limit={6} />
          </div>
          <div className="space-y-space-md">
            <div className="flex  items-center gap-space-base">
              <PingAnimation className="w-2" />
              <h3 className="text-size-16 font-medium text-text-color">
                Newsletter
              </h3>
            </div>
            <NewsLetter />
          </div>
        </div>
        <hr className="my-space-lg border-primary" />
        <div className="w-full text-center text-text-muted text-size-14">
          &copy; {currentYear}{" "}
          <span className="font-semibold">Aim In Life</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
