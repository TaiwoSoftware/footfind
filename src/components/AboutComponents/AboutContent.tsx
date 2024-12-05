// import { MobileNav } from "../mobileComponents/MobileNav";
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
      
      <div className="absolute top-40 responsive__about__container place-content-center">
        {/* <MobileNav /> */}
        <div className="ml-[16rem]">
          <h1 className="text-center responsive__about__h1 text-logo-orange  font-extrabold mb-4 text-6xl uppercase">
            About us
          </h1>
          <p className=" text-center responsive__about__header__content font-customNunito mb-10 text-[#CCCCCC] mt-10">
            Welcome to Foot finds, your ultimate destination for all things
            footwear. <br /> We are passionate about providing high-quality,
            stylish, and comfortable shoes for every occasion,
            <br /> ensuring you step forward in confidence and style.
          </p>
        </div>
      </div>
      <AboutRemainingContent />
    </div>
  );
};
