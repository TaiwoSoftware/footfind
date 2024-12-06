import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotificationPage: React.FC = () => {
  const [newProductAdded, setNewProductAdded] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  useEffect(() => {
    // Simulate checking for new product additions every 5 seconds
    const checkNewProduct = () => {
      const storedData = localStorage.getItem("newProduct");
      if (storedData) {
        setNewProductAdded(true);
        setNotificationMessage("A new product has been added!");
      }
    };

    checkNewProduct();
    const intervalId = setInterval(checkNewProduct, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const dismissNotification = () => {
    setNewProductAdded(false);
    setNotificationMessage("");
    localStorage.removeItem("newProduct"); // Optional: Remove "new product" flag from localStorage
  };

  return (
    <div className="container mx-auto p-4">
      {newProductAdded && (
        <motion.div
          className="bg-blue-500 text-white p-4 rounded-md shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg">{notificationMessage}</p>
          <button
            onClick={dismissNotification}
            className="bg-red-500 text-white py-1 px-3 rounded-md mt-2"
          >
            Dismiss
          </button>
        </motion.div>
      )}
      <div className="text-center mt-8">
        <Link to="/shop">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotificationPage;
