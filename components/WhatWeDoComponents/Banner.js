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
    <div data-aos="zoom-in"className="h-screen bg-[url('/what-we-do/banner.png')] bg-cover m-0 p-0">
    <div className="flex flex-col items-center justify-between text-white h-full m-0 p-0">
      <Image
        src="/logo.svg"
        width={500}
        height={200}
        alt="iec logo"
        className="flex justify-center items-center m-auto"
      />
    </div>
  </div>
  )
}

export default Banner