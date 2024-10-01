'use client'
// import Header from '@/components/Header/Header';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    organisation: '',
    engagement: '',
    hearAbout: '',
    hearFrom: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // handle form submission logic here
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-5">
      <div className="w-auto lg:max-w-3xl p-8 bg-white shadow-lg rounded-lg border-2 border-gray-300">
      <div className='flex justify-center'>
      <Image width={300} height={100} src="/logo_dark.svg"/>
      </div>
        <p className="text-center text-[#622F88] my-4 font-bold iec-title">Expression of Interest Form</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label> */}
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">
              Designation
            </label> */}
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]"
              placeholder="Designation"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organisation">
              Organisation / Professional Affiliation
            </label> */}
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]"
              placeholder="Organisation / Professional Affiliation"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#232A35] text-sm font-bold mb-2 px-2" htmlFor="engagement">
            How would you like to engage with the Catalyst Foundation IEC? Please select all options that apply.
            </label>
            <select
              name="engagement"
              value={formData.engagement}
              onChange={handleChange}
              className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]"
              required
            >
              <option value="">Select Option</option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-[#232A35] text-sm font-bold mb-2 px-2" htmlFor="hearAbout">
              How do you hear about the Catalyst Foundation IEC?
            </label>
            <select
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]"
              required
            >
              <option value="">Select Option</option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
            </select>
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hearFrom">
              Who did you hear from?
            </label> */}
            <input
              type="text"
              name="hearFrom"
              value={formData.hearFrom}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#622F88]"
              placeholder="Who did you hear from?"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-2 bg-[#622F88] text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#622F88]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
