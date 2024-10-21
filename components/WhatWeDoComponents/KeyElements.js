// Importing necessary Head component for adding title
"use client";
import Aos from "aos";
import { keyElements } from "@/utils/data";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 400, // Duration of the animation in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once or every time
    });
  }, []);
  return (
    <div>
      <div className="bg-[#191D42] lg:p-4 p-2 mb-32">
        <div className="max-w-4xl mx-auto container rounded-lg">
          <div className="p-5">
            <h1 className="font-bold lg:mb-4 text-white text-center pb-5 iec-title">
              Key Elements Of Review
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-between p-3 rounded" data-aos="fade-right">
                <ul className="list-none mt-2 text-[#191D42] text-center">
                  {keyElements.map((item, index) => (
                    <li className="bg-[#F2F2F2] p-2 hover:bg-[#191D42] hover:text-white border-2 border-white transition duration-500 ease-in-out flex items-center justify-center transform hover:scale-105 mb-3">
                      {item.listDescription}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center" data-aos="fade-left">
                <div className="flex items-center justify-center h-full">
                  <Image
                    width={300}
                    height={200}
                    objectFit="contain"
                    src="/what-we-do/key_elements.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
