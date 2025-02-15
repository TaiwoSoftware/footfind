import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AdminPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    setUser(fetchUserData("formData"));
    setOrders(fetchOrdersData("purchasedItems"));
  }, []);

  const fetchUserData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const fetchOrdersData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>
      <Link to={'/newIn'}>
        <button className="bg-green-800 text-white py-2 px-4 rounded-lg m-4 shadow-md shadow-gray-700">
          Post A new shoe
        </button>
      </Link>

      {/* Grid layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* User Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md p-4 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4">User Information</h3>
          {user ? (
            <div>
              <p>
                <strong>Name:</strong> {user.fullName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phoneNumber}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
            </div>
          ) : (
            <p>No user data found.</p>
          )}
        </motion.div>

        {/* Orders Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md p-4 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4">Orders</h3>
          {orders.length > 0 ? (
            <ul>
              {orders.map((order, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-2 border-b"
                >
                  {/* Product Image */}
                  <img
                    src={order.productImage}
                    alt={order.productName}
                    className="w-16 h-16 mr-4 rounded-lg"
                  />
                  {/* Product Details */}
                  <div>
                    <p>
                      <strong>Product:</strong> {order.productName}
                    </p>
                    <p>
                      <strong>Price:</strong> ${order.ammountOfProduct}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          ) : (
            <p>No orders found.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPage;
