import { Body } from "./bodyContent/Body"
import { CarouselContainer } from "./bodyContent/CarouselContainer"
import { FooterContainer } from "./FooterComponent/FooterContainer"

import { Navbar } from "./Navbar"

const Home:React.FC = () => {
  

  return (
    <div className="font-customNunito">
        <Navbar />
        <Body />
      <CarouselContainer />
      <FooterContainer />
    </div>
  )
}

export default Home