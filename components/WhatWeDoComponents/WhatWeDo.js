import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <>
      <div className="container mx-auto w-[85%]">
        <h2 className="text-center iec-title iec-title-color font-bold -mt-10">
          What We Do
        </h2>
        <div className="iec-para pt-2 text-center p-2">
       
        <p>
          In order to assure ethics in research and community engagement, the
          Catalyst Foundation IEC accepts applications from all organisations
          engaged in social development research and proceeds to review these
          through a holistic lens comprising various aspects of ethics, to
          safeguard the dignity, rights, safety, and wellbeing of all actual and
          potential research participants.
        </p>
        <p className="pt-2 p-2">
          The only exclusion to the applications that we accept are research
          projects with a biomedical product/efficacy/industry or clinical trial
          component.
        </p>
        </div>
        <Image className="m-auto w-[80%] py-10" width={1200} height={1000} src="/what-we-do/review_process.png"/>
      </div>
    </>
  );
};

export default WhatWeDo;
