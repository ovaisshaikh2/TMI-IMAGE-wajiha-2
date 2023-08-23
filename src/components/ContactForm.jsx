import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvqwowj");
  if (state.succeeded) {
    return (
      <div className="text-center my-10">
        <p>Your form has been submitted successfully!</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="my-10 mb-20">
          <h1 className="uppercase xs:text-2xl lg:text-5xl font-medium xs:mb-8 lg:mb-12 text-center">
            GET IN TOUCH
          </h1>

          <div className="lg:grid grid-cols-2 gap-4 xll:mx-[20rem] lg:mx-[10rem] xs:mx-[2rem]">
            {/* 1 */}

            <div class="relative  mb-4 col-span-1" data-te-input-wrapper-init>
              <Form.Group controlId="fname">
                <Form.Control
                  type="text"
                  name="firstname"
                  value={state.fname}
                  placeholder=" "
                  className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                />
                <Form.Label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                  First name
                </Form.Label>
              </Form.Group>
            </div>

            {/* 2 */}
            <div
              className="relative mb-4 col-span-1"
              data-te-input-wrapper-init
            >
              <Form.Group controlId="lname">
                <Form.Control
                  type="text"
                  name="lastname"
                  value={state.lname}
                  className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                  placeholder=" "
                />
                <Form.Label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                  Last Name
                </Form.Label>
              </Form.Group>
            </div>
            {/* 3 */}
            <div
              className="relative mb-4 col-span-1"
              data-te-input-wrapper-init
            >
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  name="email"
                  value={state.email}
                  className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                  placeholder=" "
                />
                <Form.Label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                  Email Address<span className="text-red-600">*</span>
                </Form.Label>
              </Form.Group>
            </div>
            {/* 4 */}
            <div
              className="relative mb-4 col-span-1"
              data-te-input-wrapper-init
            >
              <Form.Group controlId="telephone">
                <Form.Control
                  type="telephone"
                  name="telephone"
                  value={state.telephone}
                  className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                  placeholder=" "
                />
                <Form.Label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                  Phone Number<span className="text-red-600">*</span>
                </Form.Label>
              </Form.Group>
            </div>
            {/* 5 */}
            <div
              className="relative mb-4 col-span-2"
              data-te-input-wrapper-init
            >
              <Form.Group controlId="message">
                <Form.Control
                  type="textArea"
                  name="message"
                  value={state.message}
                  // className="peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.5rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                  className="h-[5rem] peer block min-h-[auto] border border-gray-300 w-full px-3 py-[0.32rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder=" "
                />
                <Form.Label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-[1.5rem] z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                  Message
                </Form.Label>
              </Form.Group>
            </div>

            <div className="col-start-2 grid justify-end contact-btn">
              <Button type="submit" buttonId="Contact Form">
                Submit
              </Button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ContactForm;
