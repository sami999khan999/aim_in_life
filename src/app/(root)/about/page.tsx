import FaqSection from "@/components/ui/Faq";
import Heading from "@/components/ui/Heading";
import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import React from "react";

export const metadata = () => {
  return {
    title: "Aim In Life - About",
  };
};

const Page = () => {
  return (
    <div className="w-full">
      <PageHeader />
      <div className="my-[4rem] space-y-space-lg">
        <Heading title="About Us" />
        <section className="flex flex-col lg:flex-row lg:gap-[4rem] gap-[2rem]  font-outfit py-space-base rounded-xl w-full items-center">
          <div className="lg:w-[40%] w-full h-[20rem] aspect-square relative rounded-2xl overflow-hidden">
            <Image
              src="/about.png"
              alt="About"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="lg:w-[60%] space-y-space-base">
            <div className="flex gap-space-lg">
              <div className="h-[4.8rem] w-1 bg-primary shrink-0"></div>
              <h2 className="text-size-28 font-semibold text-text-color lg:w-[80%]">
                Transforming Your Vision Into a Stunning Digital Experience!
              </h2>
            </div>
            <div className="flex gap-space-lg">
              <div className="h-[4.8rem] w-1 bg-secondary shrink-0"></div>
              <p className="text-size-16 text-text-color-muted lg:w-[70%]">
                Welcome to our blog, where we share insightful articles, tips,
                and stories to inspire, educate, and engage readers. Discover
                ideas, trends, and knowledge crafted just for you.
              </p>
            </div>
          </div>
        </section>
      </div>

      <FaqSection />
    </div>
  );
};

export default Page;
