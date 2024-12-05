import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="flex gap-4 items-center cursor-pointer relative stroke-current drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-logo-orange">
      <div>
        <Link to={'/'}>
          <h1 className="text-[2.3rem] responsive__logo  font-customNunito font-extrabold">
            Foot-Finds
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
