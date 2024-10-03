'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; // For green tick icon


export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    organisation: '',
    engagement: '',
    hearAbout: '',
    hearFrom: '',
    resume: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileError, setFileError] = useState('');
  const [isAnimationVisible, setIsAnimationVisible] = useState(false); // For animation


  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handling file upload separately
    if (name === 'resume') {
      const file = e.target.files[0];
      const allowedExtensions = ['pdf', 'doc', 'docx', 'rtf', 'txt'];
      const fileExtension = file?.name.split('.').pop().toLowerCase();

      if (file && allowedExtensions.includes(fileExtension)) {
        setFormData({ ...formData, resume: file });
        setFileError('');
      } else {
        setFileError('Invalid file type. Allowed types are PDF, DOC, DOCX, RTF, and TXT.');
        setFormData({ ...formData, resume: null });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    let errors = {};
    let isValid = true;

    // Check if fields are filled out
    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!data.designation.trim()) {
      errors.designation = 'Designation is required';
      isValid = false;
    }

    if (!data.organisation.trim()) {
      errors.organisation = 'Organisation is required';
      isValid = false;
    }

    if (!data.engagement) {
      errors.engagement = 'Engagement is required';
      isValid = false;
    }

    if (!data.hearAbout.trim()) {
      errors.hearAbout = 'Please specify how you heard about us';
      isValid = false;
    }

    if (!data.hearFrom.trim()) {
      errors.hearFrom = 'This field cannot be empty';
      isValid = false;
    }

    // Set form errors and validation state
    setFormErrors(errors);
    setIsFormValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm(formData);

    // Check if the form is valid and no file errors exist
    if (!isFormValid || fileError) return;

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post(
        'https://docs.catalysts.global/wp-json/contact-form-7/v1/contact-forms/17/feedback',
        formDataToSend,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        setFormErrors({ submit: 'Failed to submit form. Please try again.' });
      }
    } catch (err) {
      setFormErrors({ submit: 'An error occurred. Please try again.' });
    }
  };

  return (
    <>
    <div className="flex items-center justify-center py-10">
  <div className="w-auto lg:max-w-3xl p-8 bg-white shadow-lg rounded-lg border-2 border-gray-300">
    {/* Conditionally render the logo and form header */}
    {!isSubmitted && (
      <>
        <div className="flex justify-center">
          <Image width={300} height={100} src="/logo_dark.svg" alt="Logo" />
        </div>
        <p className="text-center text-[#622F88] my-4 font-bold iec-title">Expression of Interest Form</p>
      </>
    )}

    {/* Conditionally render the form or success message */}
    {isSubmitted ? (
      <div className="flex flex-col items-center justify-center">
        <div className={`check-circle ${isAnimationVisible ? 'animate' : ''}`}>
          <FaCheckCircle className="text-green" /> {/* Green tick icon */}
        </div>
        <p className="text-green-500 text-center text-3xl font-bold mt-5">Form submitted successfully!</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]`}
            placeholder="Enter Full Name"
            required
          />
          {formErrors.fullName && <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>}
        </div>

        {/* Designation */}
        <div className="mb-4">
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${formErrors.designation ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]`}
            placeholder="Enter Designation"
            required
          />
          {formErrors.designation && <p className="text-red-500 text-xs mt-1">{formErrors.designation}</p>}
        </div>

        {/* Organisation */}
        <div className="mb-4">
          <input
            type="text"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${formErrors.organisation ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]`}
            placeholder="Enter Organisation"
            required
          />
          {formErrors.organisation && <p className="text-red-500 text-xs mt-1">{formErrors.organisation}</p>}
        </div>

        {/* Engagement */}
        <div className="mb-4">
          <label className="block text-[#232A35] text-sm font-bold mb-2 px-2" htmlFor="engagement">
            How would you like to engage with the Catalyst Foundation IEC? Please select all options that apply.
          </label>
          <select
            name="engagement"
            value={formData.engagement}
            onChange={handleChange}
            className={`w-full px-3 text-gray-700 py-2 border ${formErrors.engagement ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]`}
            required
          >
            <option value="">Select Option</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
          </select>
          {formErrors.engagement && <p className="text-red-500 text-xs mt-1">{formErrors.engagement}</p>}
        </div>

        {/* How do you hear about us? */}
        <div className="mb-4">
          <label className="block text-[#232A35] text-sm font-bold mb-2 px-2" htmlFor="hearAbout">
            How did you hear about us?
          </label>
          <select
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-gray-700 border ${formErrors.hearAbout ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]`}
            required
          >
            <option value="">Select Option</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
          </select>
          {formErrors.hearAbout && <p className="text-red-500 text-xs mt-1">{formErrors.hearAbout}</p>}
        </div>

        {/* Who did you hear from? */}
        <div className="mb-4">
          <input
            type="text"
            name="hearFrom"
            value={formData.hearFrom}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${formErrors.hearFrom ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]`}
            placeholder="Who did you hear from?"
            required
          />
          {formErrors.hearFrom && <p className="text-red-500 text-xs mt-1">{formErrors.hearFrom}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className={`px-10 py-2 bg-[#622F88] text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#622F88]`}
          >
            Submit
          </button>
        </div>
      </form>
    )}
  </div>
</div>

<style jsx>{`
  .check-circle {
    width: 50px;
    height: 50px;
    border: 5px solid #22c55e; /* Green border */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; /* Initially hidden */
    animation: appear 0.5s forwards; /* Animation to appear */
  }
  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .check-circle.animate {
    animation: tick 1s forwards; /* Animation to show tick */
  }
  @keyframes tick {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1) rotate(360deg); /* Rotation effect */
    }
  }
`}</style>

    </>
  );
}
