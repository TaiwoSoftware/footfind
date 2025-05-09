import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { PurchaseForm } from "./PurchaseForm";
import { supabase } from "../Auth/supabaseClient";
import { useCart } from "../Shop/CartContext"; // ✅ Import the context

interface CartProps {
  purchasedItems: number[];
  handlePurchase: (idx: number) => void;
}

export const Cart: React.FC<CartProps> = ({
  purchasedItems,
  handlePurchase,
}) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { cartItems } = useCart(); // ✅ Use context state

  const getUserEmail = (): string | null => {
    try {
      const formData = localStorage.getItem("formData");
      if (!formData) return null;
      const parsedFormData = JSON.parse(formData);
      return parsedFormData.email || null;
    } catch {
      return null;
    }
  };

  const sendOrderEmail = (productName: string, productImage: string) => {
    const userEmail = getUserEmail();
    if (!userEmail) {
      console.error("User email not found!");
      return;
    }

    const templateParams = {
      user_email: userEmail,
      product_name: productName,
      product_image: productImage,
    };

    emailjs
      .send(
        "service_ertwawf", // Replace with your EmailJS service ID
        "template_hrhz9nq", // Replace with your EmailJS template ID
        templateParams,
        "KZ5IuiyfkxTw53AN8" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (err) => {
          console.error("Failed to send email.", err);
        }
      );
  };

  // ✨ New: Save to Supabase
  const saveOrderToSupabase = async (
    productName: string,
    productImage: string,
    ammountOfProduct: number,
    selectedSize: string
  ) => {
    const { error } = await supabase.from("orders").insert([
      {
        product_name: productName,
        product_image: productImage,
        price: ammountOfProduct,
        size: selectedSize,
      },
    ]);

    if (error) {
      console.error("Failed to save order to Supabase:", error.message);
    } else {
      console.log("Order saved to Supabase successfully!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Cart Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((item, idx) => (
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
              ₦{item.ammountOfProduct.toFixed(2)}
            </p>
            {item.selectedSize && (
              <p className="text-blue-600 text-base mb-2">
                Size: {item.selectedSize}
              </p>
            )}

            {purchasedItems.includes(idx) ? (
              <div className="text-green-500">
                <p className="text-lg">Purchased!</p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setActiveItem(idx)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4"
                >
                  Purchase
                </button>
                {activeItem === idx && (
                  <PurchaseForm
                    onSubmit={() => {
                      handlePurchase(idx);
                      sendOrderEmail(item.nameOfProduct, item.productImage);
                      saveOrderToSupabase(
                        item.nameOfProduct,
                        item.productImage,
                        item.ammountOfProduct,
                        item.selectedSize || "Not specified"
                      );
                    }}
                  />
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
