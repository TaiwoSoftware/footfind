import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProductProps } from "./ProductInterface";
import { PurchaseForm } from "./PurchaseForm";

interface CartProps {
  cart: ProductProps[];
  purchasedItems: number[];
  handlePurchase: (idx: number) => void;
}

export const Cart: React.FC<CartProps> = ({ cart, purchasedItems, handlePurchase }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handlePurchaseClick = (idx: number) => {
    setActiveItem(idx);
  };

  const closeForm = () => {
    setActiveItem(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Cart Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.productImage}
              alt={item.nameOfProduct}
              className="w-32 h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.nameOfProduct}
            </h2>
            <p className="text-gray-600 text-base mb-2">
              ${item.ammountOfProduct.toFixed(2)}
            </p>

            {purchasedItems.includes(idx) ? (
              <div className="flex items-center space-x-2 mt-4 text-green-500">
                <span className="text-xl font-bold">✔</span>
                <p className="text-lg">Purchased!</p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handlePurchaseClick(idx)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4"
                >
                  Purchase
                </button>
                {activeItem === idx && (
                  <div className="mt-4">
                    <PurchaseForm
                      onSubmit={() => {
                        handlePurchase(idx);
                        closeForm();
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
