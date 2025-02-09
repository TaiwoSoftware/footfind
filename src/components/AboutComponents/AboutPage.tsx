import { FooterContainer } from "../FooterComponent/FooterContainer"
import { AboutContent } from "./AboutContent"
import { AboutHeader } from "./AboutHeader"
import { OurMission } from "./OurMission"
import './Responsive.css';
export const AboutPage:React.FC = () => {
  return (
    <div className="font-customNunito">
        <AboutHeader />
        <AboutContent />
        <OurMission />
        <FooterContainer />
    </div>
  )
}
