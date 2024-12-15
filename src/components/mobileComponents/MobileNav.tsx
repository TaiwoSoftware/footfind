import { useState } from "react";
import Logo from "../Logo";
import { DropDownMenu } from "./DropDownMenu";
import { Hamburger } from "./Hamburger";

export const MobileNav: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="relative hidden responsive__nav">
      <div className="flex justify-between bg-[#252525] z-50 fixed w-full items-center p-4">
        <Logo />
        <div>
          <Hamburger handleClick={handleClick} />
          {isClicked && <DropDownMenu />}
        </div>
      </div>
    </div>
  );
};
