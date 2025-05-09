import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "../Auth/supabaseClient";
import { FiMenu } from "react-icons/fi";

interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  created_at: string;
}

interface Order {
  id: string;
  user_id: string;
  product_name: string;
  price: number;
  size?: string;
  product_image: string;
  created_at: string;
  userName?: string; // Optional, will be filled after merge
}

const AdminPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserDataFromSupabase();
      const ordersData = await fetchOrdersDataFromSupabase();

      if (userData) setUsers(userData);

      if (ordersData && userData) {
        // Add userName (fullName) to orders
        const enrichedOrders = ordersData.map((order) => {
          const user = userData.find((u) => u.id === order.user_id);
          return {
            ...order,
            userName: user ? user.fullName : "Unknown", // Set fullName from users table
          };
        });

        setOrders(enrichedOrders);
      }
    };

    fetchData();
  }, []);

  const fetchUserDataFromSupabase = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("id, fullName, email, phoneNumber, address, created_at");

    if (error) {
      console.error("Error fetching users from Supabase:", error.message);
      return null;
    }

    return data;
  };

  const fetchOrdersDataFromSupabase = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching orders from Supabase:", error.message);
      return [];
    }

    return data;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-NG", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="relative">
      <button
        className="absolute top-4 right-4 text-black text-3xl sm:flex lg:hidden z-50"
        onClick={() => setMenuOpen(true)}
      >
        <FiMenu />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="text-black text-lg font-bold mb-4"
                onClick={() => setMenuOpen(false)}
              >
                ✖ Close
              </button>
              <nav>
                <p><Link to={"/"}>Home</Link></p>
                <p><Link to={"/about"}>About</Link></p>
                <p><Link to={"/shop"}>Shop</Link></p>
                <p><Link to={"/profile"}>Profile</Link></p>
                <p><Link to={"/contact"}>Contact us</Link></p>
                <p><Link to={"/admin"}>Admin</Link></p>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>
        <Link to={"/newIn"}>
          <button className="bg-green-800 text-white py-2 px-4 rounded-lg m-4 shadow-md shadow-gray-700">
            Post A new shoe
          </button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* User Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md p-4 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">User Information</h3>
            {users.length > 0 ? (
              users.map((user) => (
                <div key={user.id} className="mb-4 border-b pb-2">
                  <p><strong>Name:</strong> {user.fullName}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phoneNumber}</p>
                  <p><strong>Address:</strong> {user.address}</p>

                  <h4 className="mt-4 text-lg font-semibold">Orders for {user.fullName}</h4>
                  {orders.filter((order) => order.user_id === user.id).length > 0 ? (
                    orders
                      .filter((order) => order.user_id === user.id)
                      .map((order) => (
                        <div key={order.id} className="mb-4 border-b pb-2">
                          <p><strong>Product:</strong> {order.product_name}</p>
                          <p><strong>Price:</strong> ₦{order.price}</p>
                          {order.size && (
                            <p><strong>Size:</strong> {order.size}</p>
                          )}
                          <p><strong>Date:</strong> {formatDate(order.created_at)}</p>
                          <img
                            src={order.product_image}
                            alt={order.product_name}
                            className="w-16 h-16 mt-2 rounded-lg"
                          />
                        </div>
                      ))
                  ) : (
                    <p></p>
                  )}
                </div>
              ))
            ) : (
              <p>No user data found.</p>
            )}
          </motion.div>

          {/* All Orders */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md p-4 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">All Orders</h3>
            {orders.length > 0 ? (
              <ul>
                {orders.map((order, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-2 border-b"
                  >
                    <img
                      src={order.product_image}
                      alt={order.product_name}
                      className="w-16 h-16 mr-4 rounded-lg"
                    />
                    <div>
                      <p><strong>Product:</strong> {order.product_name}</p>
                      <p><strong>Price:</strong> ₦{order.price}</p>
                      {order.size && (
                        <p><strong>Size:</strong> {order.size}</p>
                      )}
                      <p><strong>Date:</strong> {formatDate(order.created_at)}</p>
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
    </div>
  );
};

export default AdminPage;
