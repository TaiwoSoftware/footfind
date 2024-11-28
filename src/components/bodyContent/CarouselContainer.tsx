import { motion } from "framer-motion";
import carouselOne from "../images/carouselOne.png";
import coporateOne from "../images/coporateOne.png";
import sandalsOne from "../images/sandalsOne.png";
import sneakersOne from "../images/sneakersOne.png";
import coporatetwo from "../images/coporateTwo.png";
import { Carousel } from "./Carousel";
import { CollectionsButton } from "./CollectionsButton";

export const CarouselContainer: React.FC = () => {
  const items = [
    <img src={carouselOne} alt="first image" className="rounded-lg" />,
    <img src={coporateOne} alt="first image" className="rounded-lg" />,
    <img src={sandalsOne} alt="first image" className="rounded-lg" />,
    <img src={sneakersOne} alt="first image" className="rounded-lg" />,
    <img src={coporatetwo} alt="first image" className="rounded-lg" />,
  ];

  return (
    <motion.div
      className="mt-20 bg-[#e9e9e9] text-center"
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      }}
      initial={{ opacity: 0, y: 50 }}
    >
      <div className="p-8">
        <div>
          <h1 className="text-center text-black ">
            Explore Our
            <br />
            <span className="text-4xl uppercase font-extrabold text-logo-orange">
              Collections
            </span>
          </h1>
        </div>
        <p className="text-center text-1xl italic mb-10">
          Discover a wide range of products tailored to meet your needs. From
          <br /> top-rated gadgets to trendy fashion, we've got something for
          everyone. <br />
          Start your shopping journey today!
        </p>

        {/* Only trigger the carousel when in view */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Carousel items={items} />
        </motion.div>
        <CollectionsButton />
      </div>
    </motion.div>
  );
};
