import { useState } from "react";
import { NavContainer } from "../NavContainer";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi"; // Mobile menu icon
import { ProfileDetails } from "./ProfileDetails";
import { ProductOrdered } from "./ProductOrdered";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="bg-black relative">
        <NavContainer />

        {/* Mobile Menu Button */}
        <button
          className="absolute top-4 right-4 text-black text-3xl sm:flex lg:hidden z-50"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="text-black text-lg font-bold mb-4"
                onClick={() => setMenuOpen(false)}
              >
                ✖ Close
              </button>
              <nav>
                <p>
                  <Link to={"/"}>Home</Link>
                </p>
                <p>
                  <Link to={"/about"}>About</Link>
                </p>
                <p>
                  <Link to={"/shop"}>Shop</Link>
                </p>
                <p>
                  <Link to={"/profile"}>Profile</Link>
                </p>
                <p>
                  <Link to={"/contact"}>Contact us</Link>
                </p>
                <p>
                  <Link to={"/admin"}>Admin</Link>
                </p>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Profile Section */}
      <motion.div
        className="mt-10 text-center w-full px-4 lg:px-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-center text-black text-3xl lg:text-4xl font-bold font-customNunito"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          PROFILE
        </motion.h1>

        {/* Profile Icon */}
        <motion.div
          className="mx-auto mt-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CgProfile className="text-[6rem] lg:text-[10rem] text-gray-700" />
        </motion.div>

        {/* Profile Details */}
        <motion.div
          className="text-left mt-10 px-4 lg:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProfileDetails />
          <motion.hr
            className="mt-4 mb-4 border-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          <ProductOrdered />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
