// import { motion } from "framer-motion";
import { AboutRemainingContent } from "./AboutRemainingContent";
import aboutImage from "./image/black.jpg";
export const AboutContent: React.FC = () => {
  return (
    <div>
      <div className="relative items-center">
        <div className="bg-gray-950">
          <img src={aboutImage} alt="shoes" className="w-full opacity-35" />
        </div>
      </div>
      <div className="absolute top-40 place-content-center">
        <div className="ml-[16rem]">
          <h1 className="text-center text-logo-orange  font-extrabold mb-4 text-6xl uppercase">
            About us
          </h1>
          <p className=" text-center font-customNunito mb-10 text-[#CCCCCC] mt-10">
            Welcome to Foot finds, your ultimate destination for all things
            footwear. <br /> We are passionate about providing high-quality,
            stylish, and comfortable shoes for every occasion,
            <br /> ensuring you step forward in confidence and style.
          </p>
        </div>
      </div>
      <AboutRemainingContent />
    </div>
  );
};
