import { resourceCard } from '@/utils/data';
import React from 'react';

const CardSection = () => {
  return (
    <div className="flex justify-center items-center lg:py-12">
      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
       

      {
        resourceCard.map((item,index)=>(
          <div className="bg-white lg:w-[500px] w-auto shadow-md rounded-lg overflow-hidden flex flex-col">
          
          <img
            src={item.image} 
            alt="Card Image"
            className="w-full h-auto object-cover p-3"
          />
       
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.head}</h3>
              <h4 className="text-md font-medium text-gray-500 mb-4">
                {item.subhead}
              </h4>
              <p className="text-sm text-gray-600">
               {item.description}
              </p>
            </div>
          
            <div className="mt-4">
              <button className="bg-[#7F3F97] text-white py-2 px-4 rounded   ">
                Read More
              </button>
            </div>
          </div>
        </div>
        ))
      }
      
       
      </div>
    </div>
  );
};

export default CardSection;
