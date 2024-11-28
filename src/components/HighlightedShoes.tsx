import SingleHighlightShoe from "./SingleHighlightShoe";
import FirstSneakers from "./images/sneakersOne.png";
import FirstCoporate from "./images/coporateOne.png";
import { motion } from "framer-motion";
import FirstSandals from "./images/sandalsOne.png";
export const HighlightedShoes: React.FC = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="grid grid-cols-3 w-1/3 gap-4 mt-28 mx-auto"
      >
        <SingleHighlightShoe sneakersOne={FirstSneakers} />
        <SingleHighlightShoe sneakersOne={FirstCoporate} />
        <SingleHighlightShoe sneakersOne={FirstSandals} />
      </motion.div>
    </div>
  );
};
