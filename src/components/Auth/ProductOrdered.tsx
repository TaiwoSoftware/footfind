import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface Product {
  productName: string;
  productImage: string;
  ammountOfProduct: number | string;
}

export const ProductOrdered: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("purchasedItems");
    if (storedData) {
      try {
        const parsedData: Product[] = JSON.parse(storedData);
        setProducts(parsedData);
      } catch (error) {
        console.error("Error parsing localStorage data", error);
      }
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center text-black text-4xl font-bold font-customNunito mb-6">
        Product Ordered
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold font-customNunito mb-2">
                {product.productName || "N/A"}
              </h2>
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
                {product.productImage ? (
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <p className="text-gray-500 text-sm">No image available</p>
                )}
              </div>
              <h2 className="text-lg font-bold font-customNunito text-gray-700">
                Total: ${product.ammountOfProduct || "N/A"}
              </h2>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl mt-6">
          No purchased items found.
        </p>
      )}
      <div className="text-center mt-8">
        <Link to="/newUser">
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
