import { Link } from "react-router-dom";
import { ProductProps } from "./ProductInterface";
import blue from "./ProductImages/bluesneaker.png";
import sneakersOne from "./ProductImages/41di2jkf.png";
import sneakerTwo from "./ProductImages/5kkvr25l.png";
import coporateOne from './ProductImages/coporateshoes/17aao1oa.png';
import coporateTwo from './ProductImages/coporateshoes/hx7mbu3n.png'
import coporateThree from './ProductImages/coporateshoes/kvvrtzmd.png'
import sandalsOne from './ProductImages/sandals/2badj3m7.png';
import sandalsTwo from './ProductImages/sandals/3zalyi8v.png';
import sandalsThree from './ProductImages/sandals/gyc93c6a.png';
export const Shop: React.FC = () => {
  let productArray: ProductProps[] = [
    {
      productImage: blue,
      nameOfProduct: "Nike Bluesneaker",
      ammountOfProduct: 200,
    },
    {
      productImage: sneakersOne,
      nameOfProduct: "black shoes",
      ammountOfProduct: 150,
    },
    {
      productImage: sneakerTwo,
      nameOfProduct: "white sneaker",
      ammountOfProduct: 100,
    },
    {
      productImage: coporateOne,
      nameOfProduct: 'Half Cover',
      ammountOfProduct: 1000
    },
    {
      productImage: coporateTwo,
      nameOfProduct: 'full cover',
      ammountOfProduct: 500
    }, 
    {
      productImage: coporateThree,
      nameOfProduct: 'Brown cover shoes',
      ammountOfProduct: 1500
    },
    {
      productImage: sandalsOne,
      nameOfProduct: 'Black sandals',
      ammountOfProduct: 1000
    },
    {
      productImage: sandalsTwo,
      nameOfProduct: 'black sandals',
      ammountOfProduct: 500
    }, {
      productImage: sandalsThree,
      nameOfProduct: 'Black sandals',
      ammountOfProduct: 5000
    }
  ];
  return (
    <div>
      <div className="bg-gray-100 min-h-screen font-customNunito">
        {/* Header Section */}
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <Link to={"/"}>
              <h1 className="text-xl font-bold">Foot-finds</h1>
            </Link>
            <nav className="space-x-6">
              <a href="#" className="text-gray-600 hover:text-black">
                New Shoes
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Coporate shoes
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Sneakers
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Sandals
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Slides
              </a>
            </nav>
          </div>
        </header>

        {/* Main Section */}
        <main className="container mx-auto px-4 py-8 flex">
          {/* Sidebar */}
          <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  All kinds of shoe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Sneakers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Coporate shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  sandals
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h2 className="text-lg font-bold mb-4">Filters</h2>
              <div>
                <h3 className="text-gray-700 font-semibold">Color</h3>
                <div className="flex space-x-2 mt-2">
                  <button className="w-6 h-6 bg-red-500 rounded-full"></button>
                  <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
                  <button className="w-6 h-6 bg-yellow-500 rounded-full"></button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Size</h3>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <button className="border border-gray-300 rounded-md py-1 px-2">
                    S
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2">
                    M
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2">
                    L
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="w-3/4 ml-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {productArray.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-200">
                  <img src={product.productImage} alt="" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.nameOfProduct}</h3>
                  <p className="text-gray-500 mb-4">${product.ammountOfProduct}</p>
                  <button className="w-full bg-logo-orange text-white font-bold py-2 rounded-lg hover:bg-orange-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};
