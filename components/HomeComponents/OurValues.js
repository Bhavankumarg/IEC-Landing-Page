'use client'
import Aos from "aos";
import React, { useEffect } from "react";

const OurValues = () => {
  useEffect(() => {
    Aos.init({
      duration: 400, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once or every time
    });
  }, []);
  return (
    <div data-aos="zoom-in-up" className="container mx-auto text-center lg:w-[85%]" >
      <h2 className="font-bold iec-title iec-title-color text-center">
        {" "}
        Our Values and Mission
      </h2>
      <p className="iec-para pt-2 p-2">
        The Catalyst Foundation, along with the Catalyst Group of institutions,
        is firmly committed to promoting ethical practices in the context of
        social impact initiatives and organisations.
      </p>
      <p className="iec-para pt-2 p-2">
        We believe that great care must be taken when engaging with different
        communities, especially when conducting research studies to ensure the
        protection of their dignity, safety, and rights.
      </p>
      <p className="iec-para pt-2 p-2">
        Accordingly, the mandate of the Institutional Ethics Committee (IEC) is
        to ensure that ethical principles are followed while working with
        vulnerable communities. More specifically, we aim to ensure that the
        research projects involving human subjects, particularly members of
        vulnerable communities or demographics that are carried out are:
      </p>
    </div>
  );
};

export default OurValues;
