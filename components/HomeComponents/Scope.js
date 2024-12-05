'use client';
import { scopeOfIec } from '@/utils/data';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';

const Scope = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define mobile width breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Initialize AOS only if not on mobile
    if (!isMobile) {
      Aos.init({
        duration: 500, // Duration of the animation in milliseconds
        once: true, // Ensure animation happens only once
      });
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div>
      <h2 className="iec-title iec-title-color text-center font-bold">
        Scope of IEC
      </h2>
      <div className="scope-container lg:flex justify-center container mx-auto">
        {scopeOfIec.map((item, index) => (
          <div
            className="scope-box-container flex justify-center m-2"
            data-aos={!isMobile ? item.dataAos : undefined} // Disable AOS on mobile
            key={index}
          >
            <div className="scope-box flex flex-col bg-[#191D42] text-white lg:h-[200px] lg:w-[600px] px-10">
              <div
                className="icon mb-4"
              >
                <img
                  data-aos={!isMobile ? item.dataAosIcon : undefined} // Disable AOS on mobile for icons
                  src={item.image}
                  alt="Document Icon"
                />
              </div>
              <p className="scope-text pb-4 text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scope;
