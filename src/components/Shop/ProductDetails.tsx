import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductJson } from "./ProductJson";
import { useCart } from "../Shop/CartContext"; // 👈 using cart context

export const ProductDetails: React.FC = () => {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();
  const product = ProductJson[parseInt(index || "0", 10)];
  const { addToCart } = useCart();

  // 🆕 local state for selected size
  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
  
    const itemWithSelectedSize = {
      ...product,
      selectedSize, // 👈 pass the selected size
    };
  
    addToCart(itemWithSelectedSize);
    alert(`${product.nameOfProduct} added to cart!`);
    navigate("/cart");
  };
  

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">
        Back to Shop
      </button>
      <div className="flex flex-col items-center">
        <img src={product.productImage} alt={product.nameOfProduct} className="w-1/2" />
        <h1 className="text-2xl font-bold mt-4">{product.nameOfProduct}</h1>
        <p className="text-gray-700 text-lg mt-2">₦{product.ammountOfProduct}</p>

        {/* 🆕 size picker */}
        <label className="text-blue-600 text-base mb-1 mt-3" htmlFor="size-select">Select size:</label>
        <select
          id="size-select"
          className="border border-gray-300 rounded px-3 py-2 mb-2"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">-- Choose a size --</option>
          {product.size.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <button
          onClick={handleAddToCart}
          className="mt-4 px-6 py-2 bg-logo-orange text-white font-bold rounded-lg hover:bg-orange-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
