import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
  return (
    <>
    <div className="lg:pt-20">
    <div className="relative lg:flex bg-[#69328C] py-8 px-4">
      <div className="lg:w-1/2 text-white space-y-6 lg:px-10 container mx-auto">
        <h2 className="text-3xl font-bold iec-title">What We Do</h2>
        <p>
          To ensure the highest ethical standards in research and community
          engagement, the Catalyst Foundation IEC accepts submissions from all
          organisations involved in social development research, carefully
          evaluating them through a comprehensive ethical framework to protect
          the dignity, rights, safety, and wellbeing of all actual and potential
          research participants.
        </p>
        <p>
          The only exclusions to the applications we review are those involving
          a biomedical product, efficacy studies, industry-related components,
          or clinical trials.
        </p>
        <Link href="/what-we-do">
        <button className="bg-white text-purple-800 px-5 py-2 rounded-lg">
          Know More
        </button></Link>
      </div>

      <div className="lg:w-1/2 relative container mx-auto flex justify-center items-center">
        <div className="lg:absolute -top-20 right-0 lg:pt-0 pt-10">
          <Image
            src="/what-we-do.png"
            alt="What We Do"
            width={500}
            height={700}
          />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default WhatWeDo;
