import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import illustration from '../images/illustrationMobille.jpg';
import { Link } from 'react-router-dom';

const slides = [
  "Welcome to Foot Find",
  "Discover the Best Shoes",
  "Your Trusted Partner in Footwear"
];

const MobileView: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
              <h1 className="text-[2.3rem] responsive__logo font-customNunito font-extrabold text-white">
                {slides[slideIndex]}
              </h1>
              {slideIndex === 2 && (
                <Link to={'/shop'}>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="px-6 py-2 bg-white text-black font-bold rounded-full mt-4"
                >
                  Get Started
                </motion.button>  
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
