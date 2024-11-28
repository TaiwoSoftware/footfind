import { HighlightedShoes } from "./HighlightedShoes";
import sleek from "./images/0scwnt1c.png";
import { motion } from "framer-motion";
const HeaderContent: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center mt-[8rem] py-4 px-10">
        <motion.div
          initial={{
            y: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: -40,
          }}
          exit={{
            y: 0,
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <p className="text-left text-4xl text-logo-orange font-extrabold font-customNunito">
            Welcome to
          </p>
          <h1 className="text-8xl font-extrabold font-customNunito text-white stroke-current drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            FOOT FIND
          </h1>
          
          
        </motion.div>
        <motion.div
          initial={{
            y: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: 40,
          }}
          exit={{
            y: 0,
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <img src={sleek} alt="sleek-shoe" className="rounded-lg" />
        </motion.div>
      </div>
      <HighlightedShoes />
    </div>
  );
};

export default HeaderContent;
