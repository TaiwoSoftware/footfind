import { AboutRemainingContent } from "./AboutRemainingContent";
import aboutImage from "./image/black.jpg";

export const AboutContent: React.FC = () => {
  return (
    <div>
      <div className="relative items-center">
        <div className="bg-gray-950">
          <img src={aboutImage} alt="shoes" className="w-full opacity-35" />
        </div>
      </div>

      <div className="absolute top-40 left-0 right-0 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
        {/* <MobileNav /> */}
        <div className="mx-auto max-w-screen-xl">
          <h1 className="responsive__about__h1 text-logo-orange font-extrabold mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
            About Us
          </h1>
          <p className="responsive__about__header__content font-customNunito mb-10 text-[#CCCCCC] mt-10 text-base sm:text-lg md:text-xl lg:text-2xl">
            Welcome to Foot Finds, your ultimate destination for all things
            footwear. We are passionate about providing high-quality, stylish, and comfortable shoes for every occasion, ensuring you step forward in confidence and style.
          </p>
        </div>
      </div>
      <AboutRemainingContent />
    </div>
  );
};
