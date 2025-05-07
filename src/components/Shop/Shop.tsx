import { Link } from "react-router-dom";
import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { useState, useEffect } from "react";
import { ProductJson } from "./ProductJson";
import { useMediaQuery } from "react-responsive";
import { FaShoppingCart } from "react-icons/fa";
import { supabase } from "../Auth/supabaseClient";
import { useCart } from "./CartContext";
import "./shop.css";

export const Shop: React.FC = () => {
  const [shortName, setShortName] = useState("Guest");
  const { cartItems } = useCart();
  const [colorFilter, setColorFilter] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const onMobile = useMediaQuery({ maxWidth: 768 });
  const [isRegistered, setIsRegistered] = useState(false);
  const [searchItem, setSearchItem] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [, setFilteredShoes] = useState(ProductJson);

  const filterProducts = (searchTerm: string, brand: string, color: string) => {
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

    if (color) {
      filtered = filtered.filter((product) =>
        product.nameOfProduct.toLowerCase().includes(color.toLowerCase())
      );
    }

    setFilteredShoes(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    filterProducts(searchTerm, brandFilter, colorFilter);
  };

  const handleBrandFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedBrand = e.target.value;
    setBrandFilter(selectedBrand);
    filterProducts(searchItem, selectedBrand, colorFilter);
  };
  const handleColorFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value;
    setColorFilter(selectedColor);
    filterProducts(searchItem, brandFilter, selectedColor);
  };
  useEffect(() => {
    const checkUser = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return;

      const { data, error } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .single();

      if (data && !error) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    };

    checkUser();
    const fetchUser = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return;

      const { data } = await supabase
        .from("users")
        .select("fullName")
        .eq("email", email)
        .single();

      if (data && data.fullName) {
        const name = data.fullName.slice(0, 7);
        setShortName(name);
      }
    };

    fetchUser();
  }, []);
  

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
              <Link to="/cart" className="relative">
                <FaShoppingCart className="text-logo-orange text-3xl" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
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
                <div className="mb-4">
                  <input
                    type="search"
                    className="border-gray-400 border-2 rounded-lg outline-none px-3 py-2 w-full"
                    value={searchItem}
                    placeholder="Search products..."
                    onChange={handleSearch}
                  />
                </div>
                <nav className="flex flex-col space-y-4">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/shop"}>Shop</Link>
                  <Link to={"/profile"}>Profile</Link>
                  <Link to={"/contact"}>Contact us</Link>
                  <Link to="/cart" className="relative">
                    <FaShoppingCart className="text-logo-orange text-3xl" />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cartItems.length}
                      </span>
                    )}
                  </Link>
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
                <h2 className="text-lg font-bold mt-6">Filter by Color</h2>
                <div>
                  {["White", "Black", "Red", "Cream", "Blue"].map((color) => (
                    <label key={color} className="block">
                      <input
                        type="radio"
                        name="colorFilter"
                        value={color}
                        checked={colorFilter === color}
                        onChange={handleColorFilter}
                      />{" "}
                      {color}
                    </label>
                  ))}
                </div>
                <h2 className="text-lg font-bold mt-6">Filter by Color</h2>
                <div>
                  {["White", "Black", "Red", "Cream", "Blue"].map((color) => (
                    <label key={color} className="block">
                      <input
                        type="radio"
                        name="colorFilter"
                        value={color}
                        checked={colorFilter === color}
                        onChange={handleColorFilter}
                      />{" "}
                      {color}
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
              <h2 className="text-lg font-bold mt-6">Filter by Color</h2>
              <div>
                {["White", "Black", "Red", "Cream", "Blue"].map((color) => (
                  <label key={color} className="block">
                    <input
                      type="radio"
                      name="colorFilter"
                      value={color}
                      checked={colorFilter === color}
                      onChange={handleColorFilter}
                    />{" "}
                    {color}
                  </label>
                ))}
              </div>
            </aside>
          )}

          {/* Product Grid */}
          <section className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full p-2 md:p-4">
            {ProductJson.map((product) => (
              <Link
                key={product.id}
                to={`/shop/${product.id}`}
                className="block"
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                  <div className="w-full aspect-[4/5] bg-gray-200 flex justify-center items-center">
                    <img
                      src={product.productImage}
                      alt={product.nameOfProduct}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-logo-orange text-md font-bold leading-tight truncate">
                      {product.nameOfProduct}
                    </h3>
                    <p className="text-black font-semibold text-lg mt-1">
                      ₦{product.ammountOfProduct.toLocaleString()}
                    </p>

                    <div className="mt-4">
                      <button
                        className={`w-full font-semibold py-2 border rounded-lg ${
                          isRegistered
                            ? "text-logo-orange border-logo-orange hover:bg-blue-100"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!isRegistered}
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

