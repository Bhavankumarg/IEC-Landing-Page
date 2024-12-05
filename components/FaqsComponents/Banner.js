'use client'
import Aos from 'aos';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Banner = () => {
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
        duration: 300, // Duration of the animation in milliseconds
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once or every time
      });
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div
      data-aos={!isMobile ? 'zoom-in' : undefined} // Disable AOS animation on mobile
      className="lg:h-[70vh] h-[650px] bg-[url('/faqs/mobile-banner.png')] lg:bg-[url('/faqs/banner.png')] bg-cover m-0 p-0"
    >
      <div className="flex flex-col items-center justify-between text-white h-full m-0 p-0">
        <Image
          src="/logo.svg"
          width={500}
          height={200}
          alt="iec logo"
          className="flex justify-center items-center m-auto lg:0 p-10"
        />
      </div>
    </div>
  );
};

export default Banner;
