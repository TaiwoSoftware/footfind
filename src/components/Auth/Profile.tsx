import { NavContainer } from "../NavContainer";
import { SidebarMenu } from "./SidebarMenu";
import { AiOutlineSetting } from "react-icons/ai";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { ProfileDetails } from "./ProfileDetails";
import { ProductOrdered } from "./ProductOrdered";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="bg-black">
        <NavContainer />
      </div>
      <div className="flex px-4 py-8 gap-5">
        {/* Sidebar */}
        <motion.div
          className="w-1/4 bg-white shadow-lg shadow-gray-500 h-screen rounded-lg p-4 text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="font-bold font-customNunito"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Menu
          </motion.h1>
          {[
            { icon: <AiOutlineSetting />, title: "Account settings" },
            { icon: <TfiShoppingCartFull />, title: "Products ordered" },
            { icon: <IoNotificationsOutline />, title: "Notifications" },
            { icon: <CiBookmark />, title: "Product wishlisted" },
          ].map((menu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SidebarMenu icon={menu.icon} menuTitle={menu.title} />
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="mt-10 text-center w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-center text-black text-4xl font-bold font-customNunito"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            PROFILE
          </motion.h1>
          <motion.div
            className="mx-auto mt-5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CgProfile className="text-[10rem] text-gray-700" />
          </motion.div>

          <motion.div
            className="text-left mt-10"
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
    </div>
  );
};

export default Profile;
