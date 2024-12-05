interface HandleClickProp {
  handleClick: () => void;
}
import { RxHamburgerMenu } from "react-icons/rx";
export const Hamburger:React.FC<HandleClickProp> = ({handleClick}) => {
  return (
    <div>
        <RxHamburgerMenu onClick={handleClick} className="text-6xl cursor-pointer text-logo-orange" />
    </div>
  )
}
