interface LinkProp {
  to: string;
  linkText: string;
}
import { Link } from "react-router-dom";
const NavRawLink: React.FC<LinkProp> = ({ to, linkText }) => {
  return (
    <div className="mt-2">
      <Link
        to={to}
        className=" hover:underline text-white text-4xl hover:text-logo-orange"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default NavRawLink;
