import { motion } from "framer-motion";
import blackShoe from "../images/xu0ruqmx.png";
// import { Shoes } from "./Shoes";
export const Body: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 items-center p-10 mt-20">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2 }}
          className="font-customMonserrat"
        >
          <h1 className="text-center font-extrabold text-4xl uppercase">
            Your trusted patner in Footwear
          </h1>
          <p className="mt-2 font-customNunito text-justify">
            At Foot-Find, we pride ourselves on being more than just a footwear
            provider — we’re your reliable partner for style, comfort, and
            quality. Over the years, we have continuously delivered exceptional
            shoes that cater to every taste, occasion, and need.{" "}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img src={blackShoe} alt="black shoe" />
        </motion.div>
      </div>
    </div>
  );
};
