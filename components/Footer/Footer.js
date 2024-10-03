import Image from "next/image";

// components/Footer.js
const Footer = () => {
  return (
    <>
      <div className="bg-[url('/footer.svg')] bg-cover bg-center h-auto md:mt-0 -mt-32" >
      <footer className="lg:mt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center lg:mt-36 rounded-b-3xl bg-white w-52 items-center m-auto p-5">
           <Image className="lg:mt-0 mt-48" width={400} height={100} src="/logo_dark.svg"/>
          </div>

          <div className="flex flex-col md:flex-row gap-20 items-center space-y-0 container mx-auto justify-center lg:pt-5  pt-20 py-5">
            {/* Quick Links Section */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-purple-800 border-b-2 border-gray-600 mb-4 lg:mt-[26px] -mt-10">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about-us" className="text-gray-700 hover:text-purple-700">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/what-we-do" className="text-gray-700 hover:text-purple-700">
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="/resources" className="text-gray-700 hover:text-purple-700">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="text-gray-700 hover:text-purple-700">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 border-b-2 border-gray-600 lg:-mt-16 -mt-12">
                Social Media
              </h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-purple-700">
                 <Image width={30}height={50} src="/fb.svg"/>
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-700">
                 <Image width={30}height={50} src="/in.svg"/>
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-700">
                  <Image width={30}height={50} src="/x.svg"/>
                </a>
              </div>
            </div>

            {/* Expression of Interest Section */}
            <div className="text-center md:text-right ">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 border-b-2 border-gray-600 -mt-11">
                Expression of Interest
              </h3>
              <button className="text-white bg-[#232A35] lg:float-left mb-3 rounded-lg p-2">
              Reach Out To Us
              </button>
            </div>
          </div>
        </div>
      </footer>
      </div>
      <div className="bg-[#232A35] text-white flex lg:flex-row text-center flex-col justify-between p-2">
        <p className="float-start lg:px-10">All rights reserved © IEC®</p>
        <p className="float-end lg:pe-10">Terms and conditions Privacy policy</p>
      </div>
    </>
  );
};

export default Footer;
