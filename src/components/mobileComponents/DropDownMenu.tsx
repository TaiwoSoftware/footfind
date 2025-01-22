import NavRawLink from "./NavRawLink";
import { Link } from "react-router-dom";
export const DropDownMenu: React.FC = () => {
  return (
    <div className="border px-2 py-4 bg-[#a2510a]  absolute right-4 rounded-lg text-center">
      <NavRawLink to="/" linkText="Home" />
      <NavRawLink to="/about" linkText="About" />
      <NavRawLink to="/shop" linkText="Shop" />
      <NavRawLink to="/admin" linkText="admin" />
      <NavRawLink to="/contact" linkText="Contact" />
      <Link to={'/newUser'}>
        <button className=" rounded-lg px-2 py-[.5rem] mt-4 border-white border-2 text-3xl  bg-[#a2510a] text-white shadow-white">
          Sign up
        </button>
      </Link>
    </div>
  );
};
