'use client';
import { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const [isVisible, setIsVisible] = useState(false); // Manage visibility for animation
  const [isSpinning, setIsSpinning] = useState(true); // Moved this hook above to prevent skipping

  useEffect(() => {
    if (isOpen) {
      // Add class to prevent body scrolling
      document.body.classList.add('overflow-hidden');
      setTimeout(() => setIsVisible(true), 10); // Add slight delay to ensure smooth transition
    } else {
      setTimeout(() => setIsVisible(false), 300); // Allow exit transition to complete
      // Remove class to allow body scrolling
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to ensure class is removed on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClick = () => {
    setIsSpinning(false);
    onClose();
  };

  if (!isOpen && !isVisible) return null; // Only stop rendering after the animation

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 
      ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      onClick={handleOverlayClick}
    >
      <div
        className={`p-6 rounded-lg relative transition-all transform ${
          isOpen ? "scale-100" : "scale-90"
        } duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClick}
          className={`absolute top-20 right-0 text-white p-1 hover:transition-all mx-10 bg-[#622F88] rounded-full ${
            isSpinning ? "hover:p-2" : ""
          }`}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Modal content */}
        {children}
      </div>
    </div>
  );
}
