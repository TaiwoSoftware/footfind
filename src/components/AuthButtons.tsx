import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const AuthButtons: React.FC = () => {
  return (
    <div>
      <Link to={'/newUser'}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          transition={{
            duration: 0.125,
            ease: "easeInOut",
          }}
          className="bg-[#a2510a] px-[1.5rem] py-[0.6rem] shadow-inner font-extrabold shadow-white text-white rounded-lg "
        >
          Create Account
        </motion.button>
      </Link>
    </div>
  );
};

export default AuthButtons;
