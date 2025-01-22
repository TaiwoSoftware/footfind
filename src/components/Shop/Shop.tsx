import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { ProductJson } from "./ProductJson";
import { useMediaQuery } from 'react-responsive';
import "./shop.css";
export const Shop: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const storedData = localStorage.getItem("formData");
  const storedProduct = JSON.parse(localStorage.getItem("products") || "[]");
  const fullName = storedData ? JSON.parse(storedData).fullName : "Guest";
  const shortName = fullName.slice(0, 7);
  let productArray = ProductJson;
  const [searchItem, setSearchItem] = useState<string>("");
  const [filteredShoes, setFilteredShoes] = useState(productArray);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredShoes = productArray.filter((product) =>
      product.nameOfProduct
        .toLowerCase()
        .includes(searchItem.toLocaleLowerCase())
    ); //
    setFilteredShoes(filteredShoes);
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen font-customNunito">
        {/* Header Section */}
        <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <h1 className="text-xl font-bold">Foot-finds</h1>
        </Link>
        {!isMobile ? (
          <nav className="space-x-6">
            <Link to="/newIn" className="text-gray-600 hover:text-black">New Shoes</Link>
            <Link to="/coporateShoes" className="text-gray-600 hover:text-black">Corporate shoes</Link>
            <Link to="/sneakers" className="text-gray-600 hover:text-black">Sneakers</Link>
            <Link to="/sandals" className="text-gray-600 hover:text-black">Sandals</Link>
            <Link to="/slides" className="text-gray-600 hover:text-black">Slides</Link>
            <Link to="/cart" className="text-gray-600 hover:text-black">Cart</Link>
          </nav>
        ) : (
          <div>
            {/* Mobile menu button or icon can go here */}
          </div>
        )}
        <div className="flex">
          <input
            type="search"
            className="border-gray-400 border-2 rounded-l-lg outline-none px-2"
            value={searchItem}
            id="search-form"
            placeholder="Type to search..."
            onChange={handleSearch}
          />
          <button className="bg-logo-orange rounded-r-lg p-[5px]">
            <BiSearch className="text-2xl text-white" />
          </button>
          <Link to="/profile">
            <p className="ml-2 text-2xl cursor-pointer">{shortName}</p>
          </Link>
        </div>
      </div>
    </header>

        {/* Main Section */}
        <main className={`px-4 py-8 flex ${isMobile ? 'flex-col' : ''}`}>
      {/* Sidebar */}
      <aside className={`bg-white shadow-md rounded-lg p-4 ${isMobile ? 'w-full mb-4' : 'w-1/4'}`}>
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/shop" className="text-gray-600 hover:text-black">All kinds of shoe</Link>
          </li>
          <li>
            <Link to="/sneakers" className="text-gray-600 hover:text-black">Sneakers</Link>
          </li>
          <li>
            <Link to="/coporateShoes" className="text-gray-600 hover:text-black">Coporate shoes</Link>
          </li>
          <li>
            <Link to="/sandals" className="text-gray-600 hover:text-black">Sandals</Link>
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
              <button className="w-6 h-6 bg-black rounded-full"></button>
              <button className="w-6 h-6 bg-white border-black border-2 rounded-full"></button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-gray-700 font-semibold">Size</h3>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <button className="border border-gray-300 rounded-md py-1 px-2">S</button>
              <button className="border border-gray-300 rounded-md py-1 px-2">M</button>
              <button className="border border-gray-300 rounded-md py-1 px-2">L</button>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-4">Brand</h2>
            <div className="block">
              <div className="flex items-center justify-between">
                <label htmlFor="nike">Nike</label>
                <input name="foot" type="radio" id="nike" className="items-center" />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="gucci">Gucci</label>
                <input name="foot" type="radio" id="gucci" className="items-center" />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="addidas">Addidas</label>
                <input name="foot" type="radio" id="addidas" className="items-center" />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="puma">Puma</label>
                <input name="foot" type="radio" id="puma" className="items-center" />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="reebok">Reebok</label>
                <input name="foot" type="radio" id="reebok" className="items-center" />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="newBalance">New Balance</label>
                <input name="foot" type="radio" id="newBalance" className="items-center" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <section className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3 w-3/4 ml-8'}`}>
        {filteredShoes.map((productArray, index) => (
          <Link key={index} to={`/shop/${index}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gray-200">
                <img src={productArray.productImage} alt="" />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-logo-orange font-bold mb-2">
                  {productArray.nameOfProduct}
                </h3>
                <p className="text-gray-500 mb-4">${productArray.ammountOfProduct}</p>
                <button className="w-full bg-logo-orange text-white font-bold py-2 rounded-lg hover:bg-orange-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
        {storedProduct.map((productArray: { productImage: string | undefined; nameOfProduct: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; ammountOfProduct: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
          <Link key={index} to={`/shop/${index}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <span className="bg-red-600 text-white rounded-r-full p-4 w-full">New</span>
              <div className="w-full h-48 bg-gray-200">
                <img src={productArray.productImage} alt="" />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-logo-orange font-bold mb-2">
                  {productArray.nameOfProduct}
                </h3>
                <p className="text-gray-500 mb-4">${productArray.ammountOfProduct}</p>
                <button className="w-full bg-logo-orange text-white font-bold py-2 rounded-lg hover:bg-orange-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
        <section className="w-3/4 ml-8 grid grid-cols-2 lg:grid-cols-3 gap-8"></section>
      </div>
    </div>
  );
};
