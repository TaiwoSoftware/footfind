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
  const parsedData = storedData ? JSON.parse(storedData) : null;
  const fullName = parsedData?.fullName || "Guest";
  const shortName = fullName.slice(0, 7);
  const storedProduct = JSON.parse(localStorage.getItem("products") || "[]");
  // const isRegistered = storedData !== null;

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
      filtered = filtered.filter(
        (product) =>
          product.nameOfProduct.toLowerCase().includes(brand.toLowerCase()) // FIXED: Using brandName
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
    <>
      <div className="bg-gray-100 min-h-screen font-customNunito">
        {/* Header Section */}
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <Link to="/">
              {/* <Logo /> */}
              <h1 className="text-logo-orange text-3xl font-bold">Foot-Find</h1>
            </Link>

            <nav className="hidden lg:flex space-x-6">
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/shop"}>Shop</Link>
              <Link to={"/profile"}>Profile</Link>
              <Link to={"/contact"}>Contact us</Link>
              <Link to={"/admin"}>Admin</Link>
            </nav>

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

            {isMobile && (
              <button
                className="lg:hidden text-2xl p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <BiMenu />
              </button>
            )}
          </div>

          {menuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
              <div className="bg-white w-64 h-full shadow-lg p-6">
                <button
                  className="text-2xl mb-4"
                  onClick={() => setMenuOpen(false)}
                >
                  <BiX />
                </button>
                <nav className="flex flex-col space-y-4">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/shop"}>Shop</Link>
                  <Link to={"/profile"}>Profile</Link>
                  <Link to={"/contact"}>Contact us</Link>
                  <Link to={"/admin"}>Admin</Link>
                </nav>

                <h2 className="text-lg font-bold mt-6">Filter by Brand</h2>
                <div>
                  {[
                    "Nike",
                    "Puma",
                    "New Balance",
                    "Gucci",
                    "Adidas",
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
              </div>
            </div>
          )}
        </header>

        {/* Main Section */}
        <main className="px-4 py-8 flex flex-col lg:flex-row">
          {!onMobile && (
            <aside className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">Filter by Brand</h2>
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
            </aside>
          )}

          {/* Product Grid */}
          <section className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full p-2 md:p-4">
            {[...filteredShoes, ...storedProduct].map((product, index) => (
              <Link key={index} to={`/shop/${index}`} className="block">
                <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                  {/* Image Container */}
                  <div className="w-full aspect-[4/5] bg-gray-200 flex justify-center items-center">
                    <img
                      src={product.productImage}
                      alt={product.nameOfProduct}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-logo-orange text-md font-bold leading-tight truncate">
                      {product.nameOfProduct}
                    </h3>
                    <p className="text-black font-semibold text-lg mt-1">
                      ₦{product.ammountOfProduct.toLocaleString()}
                    </p>

                    {/* Button */}
                    <div className="mt-4">
                      <button
                        className={`w-full font-semibold py-2 border rounded-lg ${
                          storedData
                            ? "text-logo-orange border-logo-orange hover:bg-blue-100"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!storedData} // Disable button if user is not registered
                      >
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </main>
      </div>
    </>
  );
};
