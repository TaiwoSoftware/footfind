import collectionOfShoe from "./image/shoe-chat.webp";
export const AboutRemainingContent: React.FC = () => {
  return (
    <div className="mt-10 p-8">
      <h1 className="text-4xl text-center font-extrabold ">Who we are</h1>
      <div className="grid grid-cols-2 gap-10 items-center mt-12">
        <div>
          <p className="text-justify">
            At Foot finds, we believe that the right pair of shoes can make all
            the difference. Established with a vision to redefine how footwear
            complements your lifestyle, we offer a curated selection of shoes
            that blend fashion, comfort, and durability. Whether you're looking
            for everyday essentials, athletic performance, or statement-making
            designs, we have something for everyone. So, whether you’re heading
            to the office, training for your next big event, or simply enjoying
            a casual day out, Foot Finds has got you covered. Step into a world
            of possibilities with footwear that’s as unique and versatile as you
            are.
          </p>
        </div>
        <div className="w-full">
          <img
            src={collectionOfShoe}
            alt="white shoe"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
