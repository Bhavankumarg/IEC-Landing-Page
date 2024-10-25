import Image from "next/image";
import Link from "next/link";
import React from "react";

const Review = () => {
  return (
    <div className="text-center">
      <h2 className="iec-title iec-title-color font-bold text-center py-10">
        Review Process
      </h2>
      <Image
        src="/rev.jpg"
        width={1200}
        height={500}
        className="flex justify-center items-center m-auto w-[900px]"
      />
      <Link href="/what-we-do"> 
      <button className="iec-bg p-2 rounded-xl text-white mb-10 mt-10 w-32 border-0">
        Know More
      </button>
      </Link>
    </div>
  );
};

export default Review;
