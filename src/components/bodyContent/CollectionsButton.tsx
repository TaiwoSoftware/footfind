import { motion } from "framer-motion";
export const CollectionsButton = () => {
  return (
    <div>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, rotate: "2.5deg" }}
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
        className="bg-[#a2510a] px-[1.5rem] py-[0.6rem] mt-10 shadow-inner font-extrabold shadow-black text-white rounded-lg "
      >
        See more collections
      </motion.button>
    </div>
  )
}
