import { NavContainer } from "../NavContainer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import loginImage from "./AuthImage/mainlog.jpeg";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "./supabaseClient";
export const NewAccount: React.FC = () => {
  const [value, setValue] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [phoneNumber, setPhoneNumber] = useState<number | undefined>(0);
  const [password, setPassword] = useState<string | undefined>("");
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>(
    ""
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhoneNumber(parseInt(e.target.value));
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setConfirmPassword(e.target.value);
    if (password === confirmPassword) {
      console.log("matched password");
    } else {
      console.log("not matched");
    }
  };

  const handleLoginWithFacebook = async () => {
    alert('facebook')
  };

  return (
    <div>
      <div className="bg-black">
        <NavContainer />
      </div>
      <div className="bg-gray-100 py-16 font-customNunito">
        <motion.div
          className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Form Section */}
          <motion.div
            className="w-full lg:w-1/2 p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-extrabold mb-8 text-center lg:text-left">
              Create a New Account
            </h1>
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  required
                  value={value}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  required
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  required
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  id="phoneNumber"
                  placeholder="Your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={handlePassword}
                  id="password"
                  placeholder="Create a password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  placeholder="Confirm your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-logo-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-700"
              >
                Create Account
              </button>
            </form>

            {/* Social Sign Up Buttons */}
            <div className="mt-6">
              <p className="text-center text-gray-500">or sign up with</p>
              <div className="flex justify-center mt-4 space-x-4">
                {/* Google Button */}
                <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md hover:bg-gray-100">
                  <FcGoogle className="text-2xl" />
                  <span className="text-gray-700 font-semibold">Google</span>
                </button>

                {/* Facebook Button */}
                <button
                  onClick={handleLoginWithFacebook}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-lg px-4 py-2 shadow-md hover:bg-blue-700"
                >
                  <FaFacebookF className="text-2xl" />
                  <span className="font-semibold">Facebook</span>
                </button>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-6">
              <p className="text-center text-gray-500">
                Already have an account?
              </p>
              <div className="flex justify-center mt-4">
                <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                  Login
                </button>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={loginImage}
              alt="Account creation illustration"
              className="w-full h-full object-cover rounded-b-lg lg:rounded-r-lg lg:rounded-b-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
