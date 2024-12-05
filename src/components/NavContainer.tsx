import AuthButtons from "./AuthButtons";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export const NavContainer = () => {
  return (
    <div>
      <div className="flex homeNav items-center justify-between p-4 font-customNunito">
        <Logo />
        <NavLinks />
        <AuthButtons />
      </div>
    </div>
  );
};
