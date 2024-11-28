import illustration from "./images/illustrationMobille.jpg";
import HeaderContent from "./HeaderContent";
import { NavContainer } from "./NavContainer";
export const Navbar: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-gray-950">
          <img src={illustration} alt="shoes" className="w-full opacity-35" />
        </div>
      </div>

      <div className="absolute top-0">
      <NavContainer />
        <HeaderContent />
      </div>
    </>
  );
};
