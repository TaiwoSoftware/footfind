import { MobileNav } from "../mobileComponents/MobileNav";
import { NavContainer } from "../NavContainer";
export const AboutHeader: React.FC = () => {
  return (
    <div>
      <div>
        <div className="bg-black">
          <NavContainer />
        </div>
        <MobileNav />
      </div>
    </div>
  );
};
