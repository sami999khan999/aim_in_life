"use client";

import { blogFaqs } from "@/constants/FaqConstants";
import { useState } from "react";
import Heading from "./Heading";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <div className="space-y-[3rem]">
        <Heading title="Frequently Asked Questions" />
        <div className="space-y-space-lg">
          {blogFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-bg-light py-space-base rounded-lg px-space-lg"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="flex justify-between w-full text-size-18 font-medium text-text-color-muted"
              >
                {faq.question}
                <span className="text-text-color-muted text-size-24">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === i && (
                <div className="text-text-color text-size-16">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
