import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductJson } from "./ProductJson";
import { ProductProps } from "./ProductInterface";

interface ProductDetailsProps {
  addToCart: (product: ProductProps) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ addToCart }) => {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();
  const product = ProductJson[parseInt(index || "0", 10)];

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.nameOfProduct} added to cart!`);
    navigate("/cart");
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">
        Back to Shop
      </button>
      <div className="flex flex-col items-center">
        <img src={product.productImage} alt={product.productImage} className="w-1/2" />
        <h1 className="text-2xl font-bold mt-4">{product.nameOfProduct}</h1>
        <p className="text-gray-700 text-lg mt-2">${product.ammountOfProduct}</p>
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
