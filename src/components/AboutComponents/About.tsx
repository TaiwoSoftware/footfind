import { AboutHeader } from "./AboutHeader";

const AboutUs = () => {
  return (
    <>
      <div>
        <AboutHeader />
      </div>
      <div className="bg-gray-100 min-h-screen font-customNunito p-4">
        <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to Foot-finds! We are dedicated to providing you with the best selection of shoes, ranging from the latest trends to timeless classics. Our mission is to make sure you find the perfect pair for every occasion.
          </p>
          <h2 className="text-2xl font-bold mb-2">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Foot-finds was founded with a simple goal in mind: to make shoe shopping easy and enjoyable. We started as a small online store and have grown into a community of shoe lovers who appreciate quality, style, and comfort. Our team is passionate about footwear, and we take pride in offering a curated collection that caters to every taste and need.
          </p>
          <h2 className="text-2xl font-bold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Quality:</strong> We only offer shoes that meet our high standards for craftsmanship and durability.</li>
            <li><strong>Customer Service:</strong> Your satisfaction is our top priority. We are here to help you every step of the way.</li>
            <li><strong>Variety:</strong> Our diverse selection ensures that you can find shoes for every style and occasion.</li>
            <li><strong>Sustainability:</strong> We are committed to sourcing products from environmentally responsible brands.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-gray-700 mb-4">
            Our team is made up of shoe enthusiasts, designers, and customer service experts who are dedicated to making your shopping experience exceptional. We believe in the power of great shoes to enhance your confidence and style.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            We love hearing from our customers! If you have any questions, feedback, or just want to say hello, feel free to reach out to us.
          </p>
          <p className="text-gray-700 mb-4">
            Email: support@foot-finds.com
          </p>
          <p className="text-gray-700 mb-4">
            Phone: +1 (800) 123-4567
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
