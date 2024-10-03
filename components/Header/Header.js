'use client'
import { useState } from "react";
import Link from "next/link";
import ContactForm from "../../utils/contactForm"
import Modal from "../../app/contact-us/Modal"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Hamburger Menu Button (shown on mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="container mx-auto justify-center items-center py-2 hidden md:flex">
          <nav className="flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link href="/about-us" className="text-gray-700 hover:text-black">About</Link>
            <Link href="/what-we-do" className="text-gray-700 hover:text-black">What We Do</Link>
            <Link href="/resources" className="text-gray-700 hover:text-black">Resources</Link>
            <Link href="/faqs" className="text-gray-700 hover:text-black">FAQs</Link>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#622F88] text-white px-6 py-2 rounded-xl ml-8"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu (shown on mobile when hamburger is clicked) */}
        {isOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col items-center space-y-6 py-6">
            <Link
                href="/"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/what-we-do"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                What We Do
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>
              <button
                onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                className="bg-[#622F88] text-white px-6 py-2 rounded-xl"
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}

        {/* Modal for Contact Us */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactForm /> {/* Contact form component inside the modal */}
        </Modal>
      </div>
    </header>
  );
};

export default Header;




// 'use client'
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto flex justify-center items-center py-4">
//         <nav className="flex space-x-8 items-center">
//           <Link href="/about" className="text-gray-700 hover:text-black">
//             About
//           </Link>
//           <Link href="/what-we-do" className="text-gray-700 hover:text-black">
//             What We Do
//           </Link>
//           <Link href="/resources" className="text-gray-700 hover:text-black">
//             Resources
//           </Link>
//           <Link href="/faqs" className="text-gray-700 hover:text-black">
//             FAQs
//           </Link>
//         </nav>

//         <Link
//           href="/contact"
//           className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 ml-8"
//         >
//           Contact Us
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;