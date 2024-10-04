'use client'
import { scopeOfIec } from '@/utils/data';
import Aos from 'aos';
import React, { useEffect } from 'react';

const Scope = () => {
  useEffect(() => {
    Aos.init({
      duration: 500, // Duration of the animation in milliseconds
      // easing: 'ease-in-out',
      once: true, 
    });
  }, []);
  return (
    <div>
      <h2 className="iec-title iec-title-color text-center font-bold">
        Scope of IEC
      </h2>
      <div className="scope-container lg:flex justify-center container mx-auto">
        {/* First box */}
        {scopeOfIec.map((item, index) => (
          <div className="scope-box-container flex justify-center m-2" data-aos={item.dataAos} key={index}>
            <div className="scope-box flex flex-col bg-[#191D42] text-white lg:h-[200px] lg:w-[600px] px-10"  >
              <div  className="icon mb-4">
                <img data-aos={item.dataAosIcon} src={item.image} alt="Document Icon" />
              </div>
              <p className="scope-text pb-4">
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
