// Importing necessary Head component for adding title
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      
      <div className="bg-[#622F88] p-4">
        <div className="max-w-4xl mx-auto container rounded-lg">
          <div className="p-5">
            <h1 className="font-bold lg:mb-4 text-white text-center pb-5 iec-title">Key Elements Of Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-between p-3 rounded">
                <ul className="list-none mt-2 text-[#622F88] text-center">
                  <li className='bg-[#F2F2F2] p-2'>Conduct of the study</li>
                  <li className='bg-[#F2F2F2] p-2 mt-3'>Examination of predictable risks/harms vs potential benefits</li>
                  <li className='bg-[#F2F2F2] p-2 mt-3'>Procedure for selection of subjects in methodology including inclusion/exclusion, withdrawal criteria, and other issues like advertisement details</li>
                  <li className='bg-[#F2F2F2] p-2 mt-3'>Management of research-related injuries, and adverse events</li>
                  <li className='bg-[#F2F2F2] p-2 mt-3'>Compensation provisions</li>
                  <li className='bg-[#F2F2F2] p-2 mt-3'>Information sheet and informed consent form in the local language</li>
                  <li className='bg-[#F2F2F2] p-2 mt-3'>Protection of privacy and confidentiality</li>
                  <li className='bg-[#F2F2F2] p-2 mt-3'>Criteria for withdrawal of human subjects, suspending or terminating the study</li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex items-center justify-center h-full">
                  <Image width={300} height={200}  objectFit="contain" src="/what-we-do/key_elements.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
