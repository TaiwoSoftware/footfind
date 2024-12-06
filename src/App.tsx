import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { AboutPage } from "./components/AboutComponents/AboutPage";
import { Contact } from "./components/ContactComponent/Contact";
import { Shop } from "./components/Shop/Shop";
import { NewAccount } from "./components/Auth/NewAccount";
import { Login } from "./components/Auth/Login";
import Sneakers from "./components/Shop/sneakers/Sneakers";
import { ProductDetails } from "./components/Shop/ProductDetails";
import { useState } from "react";
import { ProductProps } from "./components/Shop/ProductInterface";
import { Cart } from "./components/Shop/Cart";
import Profile from "./components/Auth/Profile";

function App() {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [purchasedItems, setPurchasedItems] = useState<number[]>([]);

  const addToCart = (product: ProductProps) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handlePurchase = (idx: number) => {
    setTimeout(() => {
      setPurchasedItems((prev) => [...prev, idx]);
    }, 20000); // 20 seconds delay
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/newUser" element={<NewAccount />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              purchasedItems={purchasedItems}
              handlePurchase={handlePurchase}
            />
          }
        />
        <Route
          path="/shop/:index"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
