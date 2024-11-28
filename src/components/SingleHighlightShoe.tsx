import { motion } from "framer-motion";
interface ImageSource {
  sneakersOne: string;
}
const SingleHighlightShoe: React.FC<ImageSource> = ({ sneakersOne }) => {
  return (
    <motion.div
      initial={{
        scale: 0,
        rotate: "0deg",
      }}
      transition={{
        duration: 0.125,
        ease: "easeInOut",
      }}
      animate={{ scale: 0.95, rotate: "2.5deg" }}
    >
      <img src={sneakersOne} alt="sneaker" className="w-ful rounded-md" />
    </motion.div>
  );
};

export default SingleHighlightShoe;
