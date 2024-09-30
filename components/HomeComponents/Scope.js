import { scopeOfIec } from '@/utils/data';
import React from 'react';

const Scope = () => {
  return (
    <div>
      <h2 className="iec-title iec-title-color text-center font-bold">
        Scope of IEC
      </h2>
      <div className="scope-container lg:flex justify-center container mx-auto">
        {/* First box */}
        {scopeOfIec.map((item, index) => (
          <div className="scope-box-container flex justify-center m-2" key={index}>
            <div className="scope-box flex flex-col bg-[#191D42] text-white lg:h-[200px] lg:w-[600px] px-10"  >
              <div className="icon mb-4">
                <img src={item.image} alt="Document Icon" />
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
