import { Link } from "react-router-dom";
import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";
import { ProductJson } from "./ProductJson";
import { useMediaQuery } from "react-responsive";
import "./shop.css";

export const Shop: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const onMobile = useMediaQuery({ maxWidth: 768 });
  const storedData = localStorage.getItem("formData");
  const fullName = storedData ? JSON.parse(storedData).fullName : "Guest";
  const shortName = fullName.slice(0, 7);
  const isRegistered = storedData !== null;
  const [searchItem, setSearchItem] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [filteredShoes, setFilteredShoes] = useState(ProductJson);

  const filterProducts = (searchTerm: string, brand: string) => {
    let filtered = ProductJson;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.nameOfProduct.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (brand) {
      filtered = filtered.filter((product) =>
        product.nameOfProduct.toLowerCase().includes(brand.toLowerCase())
      );
    }

    setFilteredShoes(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    filterProducts(searchTerm, brandFilter);
  };

  const handleBrandFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedBrand = e.target.value;
    setBrandFilter(selectedBrand);
    filterProducts(searchItem, selectedBrand);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-customNunito">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-xl font-bold">Foot-finds</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link to="/newIn" className="text-gray-600 hover:text-black">
              New Shoes
            </Link>
            <Link
              to="/coporateShoes"
              className="text-gray-600 hover:text-black"
            >
              Corporate shoes
            </Link>
            <Link to="/sneakers" className="text-gray-600 hover:text-black">
              Sneakers
            </Link>
            <Link to="/sandals" className="text-gray-600 hover:text-black">
              Sandals
            </Link>
            <Link to="/slides" className="text-gray-600 hover:text-black">
              Slides
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-black">
              Cart
            </Link>
          </nav>

          {/* Search & Profile */}
          <div className="hidden lg:flex items-center">
            <input
              type="search"
              className="border-gray-400 border-2 rounded-l-lg outline-none px-2"
              value={searchItem}
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

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className="lg:hidden text-2xl p-2"
              onClick={() => setMenuOpen(true)}
            >
              <BiMenu />
            </button>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
            <div className="bg-white w-64 h-full shadow-lg p-6">
              {/* Close Button */}
              <button
                className="text-2xl mb-4"
                onClick={() => setMenuOpen(false)}
              >
                <BiX />
              </button>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col space-y-4">
                <Link to="/newIn" className="text-gray-600 hover:text-black">
                  New Shoes
                </Link>
                <Link
                  to="/coporateShoes"
                  className="text-gray-600 hover:text-black"
                >
                  Corporate shoes
                </Link>
                <Link to="/sneakers" className="text-gray-600 hover:text-black">
                  Sneakers
                </Link>
                <Link to="/sandals" className="text-gray-600 hover:text-black">
                  Sandals
                </Link>
                <Link to="/slides" className="text-gray-600 hover:text-black">
                  Slides
                </Link>
                <Link to="/cart" className="text-gray-600 hover:text-black">
                  Cart
                </Link>

                <h2 className="text-lg font-bold mb-4">Filter by Brand</h2>
                <div className="block">
                  {[
                    "Nike",
                    "Puma",
                    "New Balance",
                    "Gucci",
                    "Addidas",
                    "Reebok",
                    "Timberland",
                  ].map((brand) => (
                    <label key={brand} className="block">
                      <input
                        type="radio"
                        name="brandFilter"
                        value={brand}
                        checked={brandFilter === brand}
                        onChange={handleBrandFilter}
                      />{" "}
                      {brand}
                    </label>
                  ))}
                </div>
              </nav>

              {/* Search & Profile (Only in mobile) */}
              <div className="mt-6">
                <input
                  type="search"
                  className="border-gray-400 border-2 rounded-l-lg outline-none px-2 w-full"
                  value={searchItem}
                  placeholder="Type to search..."
                  onChange={handleSearch}
                />
                <button className="bg-logo-orange w-full py-2 mt-2">
                  <BiSearch className="text-2xl text-white mx-auto" />
                </button>
                <Link to="/profile" className="block mt-4 text-xl text-center">
                  {shortName}
                </Link>
              </div>
            </div>

            {/* Close on Background Click */}
            <div className="flex-1" onClick={() => setMenuOpen(false)}></div>
          </div>
        )}
      </header>

      <main className="px-4 py-8 flex flex-col lg:flex-row">
      {!onMobile && (
  <aside className="bg-white shadow-md rounded-lg p-4 lg:w-1/4 mb-4">
    <h2 className="text-lg font-bold mb-4">Filter by Brand</h2>
    <div className="block">
      {[
        "Nike",
        "Puma",
        "New Balance",
        "Gucci",
        "Addidas",
        "Reebok",
        "Timberland",
      ].map((brand) => (
        <label key={brand} className="block">
          <input
            type="radio"
            name="brandFilter"
            value={brand}
            checked={brandFilter === brand}
            onChange={handleBrandFilter}
          />{" "}
          {brand}
        </label>
      ))}
    </div>
  </aside>
)}

        <section className="grid gap-8 grid-cols-1 lg:grid-cols-3 w-full">
          {filteredShoes.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden p-3"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.productImage}
                  alt={product.nameOfProduct}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-black font-semibold text-md mb-2">
                  {product.nameOfProduct}
                </h3>
                <p className="text-black font-bold text-lg mb-1">
                  ₦{product.ammountOfProduct}
                </p>
                <button
                  className={`w-full font-bold py-2 border rounded-lg ${
                    isRegistered
                      ? "text-logo-orange border-logo-orange hover:bg-blue-100"
                      : "text-gray-500 border-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!isRegistered}
                >
                  {isRegistered ? "Shop now" : "Register to buy"}
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
