import { useMediaQuery } from 'react-responsive';
import { Body } from "./bodyContent/Body";
import { CarouselContainer } from "./bodyContent/CarouselContainer";
import { FooterContainer } from "./FooterComponent/FooterContainer";
import { Navbar } from "./Navbar";
import MobileView from './mobileComponents/MobileView';

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="font-customNunito">
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <Navbar />
          <Body />
          <CarouselContainer />
          <FooterContainer />
        </>
      )}
    </div>
  );
};

export default Home;
