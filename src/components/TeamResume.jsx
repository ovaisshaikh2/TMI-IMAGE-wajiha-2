import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const TeamResume = () => {
  const [state, handleSubmit] = useForm("mwkdoqer");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  if (state.succeeded) {
    return (
      <div className="text-center my-10">
        <p>Your form has been submitted successfully!</p>
      </div>
    );
  }

  return (
    <div className="bg-white lg:my-32 lg:mt-20 xs:my-12">
      <h1 className="xs:text-xl md:text-2xl lg:text-3xl text-center font-medium xs:mb-5 md:mb-12">
        ATTACH YOUR RESUME
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="lg:grid grid-cols-2 gap-4 xll:mx-[20rem] lg:mx-[10rem] xs:mx-[2rem]">
          <div className="mb-2">
            <label
              htmlFor="givenName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Given Name(s)<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="givenName"
              name="givenName"
              className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-0 col-span-2">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-white border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5"
              required
            />
          </div>
          <div className="mt-2 col-span-2">
            <label
              htmlFor="resume"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Resume/CV{" "}
              <span className="text-red-500 text-xs">
                (Upload either DOC, DOCX, HTML, PDF, or TXT file types (5MB
                max)*)
              </span>
            </label>
            <div className="pb-4 bg-white border border-gray-300 text-gray-900 text-sm outline-none w-full p-2.5 flex justify-center">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                id="resume"
                name="resume"
                required
              />
              <button
                type="submit"
                className="text-white bg-black py-1 px-4 rounded"
              >
                Upload and Send
              </button>
            </div>
          </div>
        </div>
        <div className="col-start-2 grid justify-end contact-btn mb-10 xll:mx-[20rem] lg:mx-[10rem] xs:mx-[2rem] mt-2">
          <Button type="submit" buttonId="Contact Form" />
        </div>
      </form>
    </div>
  );
};

export default TeamResume;
