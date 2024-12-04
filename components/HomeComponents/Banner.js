'use client'
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 300, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once or every time
    });
  }, []);
  
  return (
    <div data-aos="zoom-in" className="lg:h-[70vh] h-[650px] lg:bg-[url('/banner.png')] bg-[url('/mobile-banner.png')] bg-cover m-0 p-0 flex flex-col items-center justify-center">
      <div className="text-white  m-0 p-0">
        <Image
          src="/logo.svg"
          width={500}
          height={200}
          alt="iec logo"
          className="flex justify-center items-center m-auto lg:p-0 p-10"
        />
      </div>
    </div>
  )
}

export default Banner

