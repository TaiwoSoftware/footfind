import { useNavigate } from "react-router";
const Logo: React.FC = () => {
  const handleClick = (): void => {
    const navigate = useNavigate();
    navigate("/");
  };
  return (
    <div className="flex gap-4 items-center cursor-pointer relative stroke-current drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-logo-orange">
      <div>
        <h1
          onClick={handleClick}
          className="text-[2.3rem]  font-customNunito font-extrabold"
        >
          Foot-Finds
        </h1>
      </div>
    </div>
  );
};

export default Logo;
