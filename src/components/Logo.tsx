import { Link } from "react-router-dom";
import logorb from './images/logo-rbg.png';
const Logo: React.FC = () => {
  return (
    <div className="flex gap-4 items-center cursor-pointer relative stroke-current drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-logo-orange">
      <div>
        <Link to={'/'}>
          <img src={logorb} className="w-32" alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
