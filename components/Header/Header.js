"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactForm from "../../utils/contactForm";
import Modal from "../../app/contact-us/Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Nav links (hidden on mobile, shown on larger screens) */}
        <div className="container mx-auto justify-center items-center py-2 hidden md:flex">
          <nav className="flex space-x-8 items-center">
            <Link
              href="/"
              className={`text-gray-700 hover:text-black transition duration-200 ${
                isActive("/")
                  ? "font-bold text-lg text-black border-b-[3px] border-black"
                  : "hover:border-b-2 hover:border-black"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-gray-700 hover:text-black ${
                isActive("/about-us")
                  ? "font-bold text-lg text-black border-b-[3px] border-black"
                  : "hover:border-b-2 hover:border-black"
              }`}
            >
              About
            </Link>
            <Link
              href="/what-we-do"
              className={`text-gray-700 hover:text-black ${
                isActive("/what-we-do")
                  ? "font-bold text-lg text-black border-b-[3px] border-black"
                  : "hover:border-b-2 hover:border-black"
              }`}
            >
              What We Do
            </Link>
            <Link
              href="/resources"
              className={`text-gray-700 hover:text-black ${
                isActive("/resources")
                  ? "font-bold text-lg text-black border-b-[3px] border-black"
                  : "hover:border-b-2 hover:border-black"
              }`}
            >
              Resources
            </Link>
            <Link
              href="/faqs"
              className={`text-gray-700 hover:text-black ${
                isActive("/faqs")
                  ? "font-bold text-lg text-black border-b-[3px] border-black"
                  : "hover:border-b-2 hover:border-black"
              }`}
            >
              FAQs
            </Link>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#622F88] text-white px-6 py-2 rounded-xl ml-8"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu Button (shown on mobile only, aligned right) */}
        <div className="md:hidden ml-auto">
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

        {/* Mobile Menu (shown on mobile when hamburger is clicked) */}
        {isOpen && (
          <nav className="md:hidden absolute top-11 left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col items-center space-y-6 py-6">
              <Link
                href="/"
                className={`text-gray-700 hover:text-black transition duration-200 ${
                  isActive("/")
                    ? "font-bold text-lg text-black border-b-[3px] border-black"
                    : "hover:border-b-2 hover:border-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`text-gray-700 hover:text-black transition duration-200 ${
                  isActive("/about-us")
                    ? "font-bold text-lg text-black border-b-[3px] border-black"
                    : "hover:border-b-2 hover:border-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/what-we-do"
                className={`text-gray-700 hover:text-black transition duration-200 ${
                  isActive("/what-we-do")
                    ? "font-bold text-lg text-black border-b-[3px] border-black"
                    : "hover:border-b-2 hover:border-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                What We Do
              </Link>
              <Link
                href="/resources"
                className={`text-gray-700 hover:text-black transition duration-200 ${
                  isActive("/resources")
                    ? "font-bold text-lg text-black border-b-[3px] border-black"
                    : "hover:border-b-2 hover:border-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/faqs"
                className={`text-gray-700 hover:text-black transition duration-200 ${
                  isActive("/faqs")
                    ? "font-bold text-lg text-black border-b-[3px] border-black"
                    : "hover:border-b-2 hover:border-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>

              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
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
