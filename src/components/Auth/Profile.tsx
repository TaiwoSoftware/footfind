import { NavContainer } from "../NavContainer";
import { CgProfile } from "react-icons/cg";
import { ProfileDetails } from "./ProfileDetails";
import { ProductOrdered } from "./ProductOrdered";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-black">
        <NavContainer />
      </div>

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
