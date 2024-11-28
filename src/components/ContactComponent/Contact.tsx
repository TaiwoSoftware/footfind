import React from "react";
import { NavContainer } from "../NavContainer";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";
import { FooterContainer } from "../FooterComponent/FooterContainer";

export const Contact: React.FC = () => {
  return (
    <div>
      <div className="bg-black">
        <NavContainer />
      </div>

      <div className="bg-gray-100 py-16 font-customNunito">
        <div className="max-w-6xl mx-auto px-8">
          {/* Contact Us Header */}
          <h1 className="text-center text-4xl font-extrabold mb-8">
            Contact Us
          </h1>
          <p className="text-center text-lg mb-12">
            Got questions, feedback, or need assistance? We’re here to help.
            Reach out to us using the details below, or drop us a message, and
            we’ll get back to you as soon as possible.
          </p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <BiPhone className="text-6xl text-logo-orange mb-4" />
              <h2 className="text-xl font-bold">Call Us</h2>
              <p className="text-gray-600 mt-2">
                +1 (555) 123-4567
                <br />
                Available Mon-Fri, 9 AM - 6 PM
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdEmail className="text-6xl text-logo-orange mb-4" />
              <h2 className="text-xl font-bold">Email Us</h2>
              <p className="text-gray-600 mt-2">
                support@footfinds.com
                <br />
                We'll respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BiLocationPlus className="text-6xl text-logo-orange mb-4" />
              <h2 className="text-xl font-bold">Visit Us</h2>
              <p className="text-gray-600 mt-2">
                123 Shoe Lane
                <br />
                Springfield, USA
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <h2 className="text-center text-2xl font-bold mb-4">
              Send Us a Message
            </h2>
            <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Your Message"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-logo-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};
