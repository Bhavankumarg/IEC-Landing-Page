"use client";
import React from "react";
import ContactForm from "../../utils/contactForm";
import Modal from "../../app/contact-us/Modal";
import { useState } from "react";
const ReachOut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  return (
    <>
      <div className="py-4">
        <p className="text-[30px] text-[#622F88] font-bold text-center">
          To Initiate The Review Process With IEC
        </p>
      </div>
      <div className="mb-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-white bg-[#622F88] flex items-center justify-center m-auto rounded-lg p-2 w-40"
        >
          Fill The Form
        </button>{" "}
        {/* modal start */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ContactForm /> {/* Contact form component inside the modal */}
          </Modal>
          {/* modal end */}
      </div>{" "}

    </>
  );
};

export default ReachOut;
