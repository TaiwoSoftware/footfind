import missionStatement from "./image/misson.png";
export const OurMission:React.FC = () => {
  return (
    <div className="mt-10 p-4">
      <h1 className="text-4xl text-center font-extrabold ">Our Mission</h1>
      <div className="grid grid-cols-2 gap-10 items-center mt-12">
        <div className="w-full">
          <img
            src={missionStatement}
            alt=" mission image"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <p className="text-justify">
            Our mission is simple: to help you put your best foot forward. We
            are committed to delivering exceptional value through premium
            quality products, excellent customer service, and a seamless
            shopping experience. From the perfect fit to cutting-edge trends, we
            strive to exceed your expectations with every step
          </p>
        </div>
      </div>
    </div>
  );
};
