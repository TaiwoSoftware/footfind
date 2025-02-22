import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import illustration from "../images/illustrationMobille.jpg";
import { Link } from "react-router-dom";
import logorb from '../images/logo-rbg.png';

const MobileView: React.FC = () => {
  const [slideIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="bg-gray-950 relative w-full h-full min-h-screen">
        <img
          src={illustration}
          alt="shoes"
          className="w-full h-full object-cover absolute inset-0 opacity-35"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <AnimatePresence>
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center text-center"
            >
              <div className="flex gap-4 items-center cursor-pointer relative stroke-current drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-logo-orange">
                <div>
                  <Link to={"/"}>
                    <img src={logorb} className="w-48" alt="logo" />
                  </Link>
                </div>
              </div>
              <Link to={"/shop"}>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="px-6  bg-white text-black font-bold rounded-full mt-4"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
