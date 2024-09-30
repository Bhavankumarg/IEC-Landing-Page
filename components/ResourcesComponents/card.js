import React from 'react';

const CardSection = () => {
  return (
    <div className="flex justify-center items-center lg:py-12">
      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white lg:w-[500px] w-auto shadow-md rounded-lg overflow-hidden flex flex-col">
          {/* Image */}
          <img
            src="/resource/res01.png" // Replace with the image path
            alt="Card Image"
            className="w-full h-auto object-cover p-3"
          />
          {/* Content */}
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lorem Ipsum</h3>
              <h4 className="text-md font-medium text-gray-500 mb-4">
                Lorem Ipsum Is Simply
              </h4>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
            {/* Read More Button */}
            <div className="mt-4">
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white lg:w-[500px] w-auto shadow-md rounded-lg overflow-hidden flex flex-col">
          {/* Image */}
          <img
            src="/resource/res02.png" // Replace with the image path
            alt="Card Image"
            className="w-full h-auto object-cover p-3"
          />
          {/* Content */}
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lorem Ipsum</h3>
              <h4 className="text-md font-medium text-gray-500 mb-4">
                Lorem Ipsum Is Simply
              </h4>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer 
              </p>
            </div>
            {/* Read More Button */}
            <div className="mt-4">
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
