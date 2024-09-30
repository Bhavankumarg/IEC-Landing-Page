// components/Footer.js
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 pt-10 pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">
              Institutional Ethics Committee
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Quick Links Section */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-700">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-700">
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-700">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-700">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">
                Social Media
              </h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-purple-700">
                  <i className="fab fa-facebook-square text-2xl"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-700">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-700">
                  <i className="fab fa-x-twitter text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Expression of Interest Section */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">
                Expression of Interest
              </h3>
              <form action="#">
                <div className="flex justify-center md:justify-end items-center space-x-2">
                  <input
                    type="email"
                    className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none"
                    placeholder="Your Email"
                  />
                  <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#232A35] text-white flex justify-between p-2">
        <p className="float-start px-10">All rights reserved © IEC®</p>
        <p className="float-end pe-10">Terms and conditions Privacy policy</p>
      </div>
    </>
  );
};

export default Footer;
