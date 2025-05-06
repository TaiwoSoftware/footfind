import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "../Auth/supabaseClient";
import { FiMenu } from "react-icons/fi"; // Mobile menu icon

const AdminPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);

  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserDataFromSupabase();
      const ordersData = fetchOrdersData("purchasedItems");
  
      setUser(userData);
      setOrders(ordersData);
    };
  
    fetchData();
  }, []);
  
  const fetchUserDataFromSupabase = async () => {
    const email = localStorage.getItem("userEmail"); // 👈 assume you're storing email after login
  
    if (!email) return null;
  
    const { data, error } = await supabase
      .from("users")
      .select("id, fullName, email, phoneNumber, address, created_at") // exclude password
      .eq("email", email)
      .single();
  
    if (error) {
      console.error("Error fetching user from Supabase:", error.message);
      return null;
    }
  
    return data;
  };

  const fetchOrdersData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        className="absolute top-4 right-4 text-black text-3xl sm:flex lg:hidden z-50"
        onClick={() => setMenuOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu */}
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
              <p>
                  <Link to={"/"}>Home</Link>
                </p>
                <p>
                  <Link to={"/about"}>About</Link>
                </p>
                <p>
                  <Link to={"/shop"}>Shop</Link>
                </p>
                <p>
                  <Link to={"/profile"}>Profile</Link>
                </p>
                <p>
                  <Link to={"/contact"}>Contact us</Link>
                </p>
                <p>
                  <Link to={"/admin"}>Admin</Link>
                </p>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>
        <Link to={"/newIn"}>
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
    </div>
  );
};

export default AdminPage;
