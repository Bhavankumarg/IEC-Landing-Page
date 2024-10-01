import React from "react";

const ProcessSteps = () => {
  return (
    <>
    <div className="lg:flex flex-wrap justify-center items-center">
      <div className="lg:flex relative">
        {/* Step 1 with left-rounded corners */}
        <div className="relative bg-purple-900 text-white p-6 m-1 lg:rounded-l-md lg:w-56 text-center">
          Sound in design
          {/* Triangle */}
          <div className="absolute right-[-10px] top-0 h-full w-0 lg:border-t-[28px] lg:border-t-transparent lg:border-b-[28px] lg:border-b-transparent lg:border-l-[14px] lg:border-l-purple-800"></div>
        </div>

        {/* Step 2 */}
        <div className="relative bg-purple-800 text-white p-6 m-1 lg:w-56 text-center">
          Have statistical validity
          {/* Triangle */}
          <div className="absolute right-[-10px] top-0 h-full w-0 lg:border-t-[28px] lg:border-t-transparent lg:border-b-[28px] lg:border-b-transparent lg:border-l-[14px] lg:border-l-purple-700"></div>
        </div>

        {/* Step 3 */}
        <div className="relative bg-purple-700 text-white p-6 m-1 lg:w-56 text-center">
          Do not compromise the safety of the human subjects
          {/* Triangle */}
          <div className="absolute right-[-10px] top-0 h-full w-0 lg:border-t-[28px] lg:border-t-transparent lg:border-b-[28px] lg:border-b-transparent lg:border-l-[14px] lg:border-l-purple-600"></div>
        </div>

        {/* Step 4 */}
        <div className="relative bg-purple-600 text-white p-6 m-1 lg:w-56 text-center">
          Are conducted under the supervision of trained persons with the
          required expertise
          {/* Triangle */}
          <div className="absolute right-[-10px] top-0 h-full w-0 lg:border-t-[28px] lg:border-t-transparent lg:border-b-[28px] lg:border-b-transparent lg:border-l-[14px] lg:border-l-purple-500"></div>
        </div>

        {/* Step 5 with right-rounded corners */}
        <div className="bg-purple-500 text-white p-6 m-1 lg:rounded-r-md lg:w-56 text-center">
          Include only those participants who have given voluntary and informed
          consent
        </div>
      </div>
    </div>
    <div>
        <p className="iec-para pt-7 p-2 container mx-auto text-center lg:w-[85%]">
          The scope of the Catalyst Foundations IEC, therefore, includes not
          only what an Institutional Review Board (IRB) would be engaged in, but
          also furthers the agenda of ethical development programming.
        </p>
      </div>
    </>
  );
};

export default ProcessSteps;
