import illustration from "./images/illustrationMobille.jpg";
import HeaderContent from "./HeaderContent";
import { NavContainer } from "./NavContainer";
import './Responsive.css'
import { MobileNav } from "./mobileComponents/MobileNav";
export const Navbar: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="relative">
          <div className="bg-gray-950 relative">
            <img
              src={illustration}
              alt="shoes"
              className="w-full relative opacity-35"
            />
          </div>
        </div>

        <div className=" absolute top-0">
          <NavContainer />
          <MobileNav />
          <HeaderContent />
        </div>
      </div>
    </>
  );
};
