import { Link } from "react-router-dom";
const NavLinks: React.FC = () => {
  return (
    <div className="font-customNunito text-[#CCCCCC]">
      <Link
        to="/"
        className="mr-4 text-[1.2rem] hover:underline hover:text-logo-orange"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="mr-4 text-[1.2rem] hover:underline hover:text-logo-orange"
      >
        About Us
      </Link>
      <Link
        to="/shop"
        className="mr-4 text-[1.2rem] hover:underline hover:text-logo-orange"
      >
        Shop
      </Link>
      <Link
        to="/contact"
        className="mr-4 text-[1.2rem] hover:underline hover:text-logo-orange"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default NavLinks;
