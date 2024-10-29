'use client'
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const WhatWeDo = () => {
  useEffect(() => {
    Aos.init({
      duration: 400, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once or every time
    });
  }, []);
  return (
    <>
      <div className="container mx-auto w-[85%] -mt-10">
        <div data-aos="zoom-in-up">
          <h2 className="text-center iec-title iec-title-color font-bold">
            What We Do
          </h2>
          <div className="iec-para pt-2 text-center p-2">

            <p>
              In order to assure ethics in research and community engagement, the
              Catalyst Foundation IEC accepts applications from all organisations
              engaged in <br className="hidden lg:block"/> social development research and proceeds to review these
              through a holistic lens comprising various aspects of ethics, to
              safeguard the dignity, rights, safety, and <br className="hidden lg:block"/> well-being of all actual and
              potential research participants.
            </p>
            <p className="pt-2 p-2">
              The only exclusion to the applications that we accept are research
              projects with a biomedical product/efficacy/industry or clinical trial
              component.
            </p>
          </div>
        </div>
      </div>
      <div>
      <h2 className="font-bold iec-title iec-title-color text-center py-10">Review Process*</h2>
        <Image className="m-auto w-full  py-10" width={1200} height={1000} src="/what-we-do/rev2.jpg" />
      </div>
      <div className="container mx-auto py-7 px-4 lg:pr-7">
      <ul className="">
        <li className="bg-[#E8AA32] p-3">
        *It is clarified that the IEC is not an all-purpose mechanism to prevent wrongdoing of any kind by the Applicant, including but not limited to malpractice or fraud.
        </li>
        <li className="bg-[#E8AA32] p-3 mt-4">
        *Please note that the timelines mentioned under this section are indicative in nature and may vary depending on the time taken by the Applicant to submit the Application with all requisite information and documents, as well as variable timelines for responses received from the Applicant to the feedback shared by the IEC.
        </li>
      </ul>
      </div>
    </>
  );
};

export default WhatWeDo;
