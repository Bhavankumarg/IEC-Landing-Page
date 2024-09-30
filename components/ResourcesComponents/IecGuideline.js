import React from 'react';

const IECGuidelines = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="flex justify-center">
        <h2 className="text-center iec-title iec-title-color font-bold mt-6 text-3xl lg:text-4xl">
          Resources
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Section (Text with Border) */}
          <div className="text-center md:text-left relative custom-border">
            <h2 className="font-bold lg:text-[40px] text-[30px] iec-title-color lg:px-16">
              The IEC Is Guided By The Following Principles
            </h2>
          </div>

          {/* Right Section (Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#191D42] text-white rounded-lg p-6 flex flex-col justify-between">
              <p className="text-sm mb-4">
                The "Ethical Guidelines For Social Science Research In Health" by the
                National Committee for Ethics in Social Science Research in Health
                (NCESSRH).
              </p>
              <button className="bg-white text-[#191D42] py-2 px-4 rounded hover:bg-gray-200 mt-auto w-40">
                Read More
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#191D42] text-white rounded-lg p-6 flex flex-col justify-between">
              <p className="text-sm mb-4">
                The "National Ethical Guidelines For Biomedical And Health Research
                Involving Human Participants" by the Indian Council for Medical
                Research (ICMR).
              </p>
              <button className="bg-white text-[#191D42] py-2 px-4 rounded hover:bg-gray-200 mt-auto w-40">
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default IECGuidelines;
