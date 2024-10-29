'use client'
import React, { useEffect } from "react";
import { IECGuideline } from "@/utils/data";
import Aos from "aos";
import Link from "next/link";

const IECGuidelines = () => {
  useEffect(() => {
    Aos.init({
      duration: 300, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once or every time
    });
  }, []);
  return (
    <>
      {/* Heading Section */}
      <div className="flex justify-center">
        <h2 className="text-center iec-title iec-title-color font-bold -mt-1 text-3xl lg:text-4xl">
          Resources
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 lg:py-16 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section (Text with Border) */}
          <div className="text-center md:text-left relative custom-border">
            <h2 className="font-bold lg:text-[40px] text-[30px] iec-title-color lg:px-16" data-aos="fade-right">
              The IEC Is Guided By The Following Principles
            </h2>
          </div>

          {/* Right Section (IECGuideline Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {IECGuideline.map((item, index) => (
              <div data-aos="fade-left"
                className="bg-[#191D42] text-white rounded-lg p-6 flex flex-col justify-between"
                key={index}
              >
                <p className="text-sm mb-4">{item.description}</p>


                <Link target="_blank" href={item.link}>
                  <button className="bg-white text-[#191D42] py-2 px-4 rounded hover:bg-gray-200 mt-auto w-40">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IECGuidelines;
