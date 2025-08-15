"use client";

import { blogFaqs } from "@/constants/FaqConstants";
import { useState } from "react";
import Heading from "./Heading";
import { cn } from "@/lib/utils";
import { IoIosArrowDown } from "react-icons/io";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="space-y-[2rem] px-space-sm">
        <Heading title="Frequently Asked Questions" />
        <div className="lg:w-[70%] mx-auto bg-bg-light rounded-xl p-space-base">
          {blogFaqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggleFaq(i)}
              className={cn(
                "relative overflow-hidden transition-all duration-300 ease-in-out rounded-md",

                "hover:cursor-pointer hover:bg-bg-dark lg:px-space-base text-start",
                openIndex === i
                  ? "max-h-[800px] py-space-base"
                  : "lg:max-h-[3.5rem] max-h-[3.3rem] py-space-base"
              )}
            >
              <button
                className="flex justify-between w-full text-size-18 font-medium text-text-color/80"
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <span className="text-text-color-muted text-size-24 text-left">
                  <IoIosArrowDown
                    size={18}
                    className={cn(
                      "transform transition-transform duration-300",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </span>
              </button>

              <div
                className={cn(
                  "text-text-color-muted transition-all duration-300 ease-in-out",
                  openIndex === i
                    ? "opacity-100 mt-3 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
