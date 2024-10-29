"use client";
import React, { useState } from "react";
import { faqsAccordion } from "@/utils/data";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`border-gray-300 ${isOpen ? "border mb-2" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 mb-3 bg-[#622F88] text-white text-left font-semibold"
      >
        <span>{question}</span>

        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen
            ? "max-h-screen p-2 py-2 border-t-5 border-t-[#622F88] mb-1"
            : "max-h-0"
        }`}
      >
        {isOpen && (
          <div
            className="text-[#35194F]"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        )}
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 lg:p-0 p-2">
      <div>
        <h2 className="text-[#622F88] iec-title font-bold text-center lg:-mt-20 -mt-10 mb-5 relative">FAQs</h2>
      </div>
      {faqsAccordion.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
