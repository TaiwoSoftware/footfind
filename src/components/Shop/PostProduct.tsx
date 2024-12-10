import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
const PostProduct: React.FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [ammountOfProduct, setAmmountOfProduct] = useState<number>(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [products, setProducts] = useState<any[]>([]);

  // Load existing products from localStorage on component mount
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Handle file input and show image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setProductImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  //Handle delete Post
  const handleDeleteProduct = () => {
    localStorage.removeItem("products");
    alert("Deleted");
    window.location.reload();
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!productName || !productImage || ammountOfProduct <= 0) {
      alert("Please fill all fields.");
      return;
    }

    // Convert image to URL (mocking actual upload)
    const newProduct = {
      productImage: imagePreview || "",
      nameOfProduct: productName,
      ammountOfProduct: ammountOfProduct,
    };

    // Update the products array
    const updatedProducts = [...products, newProduct];

    // Save to localStorage
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Update state
    setProducts(updatedProducts);

    // Reset the form
    setProductName("");
    setProductImage(null);
    setImagePreview(null);
    setAmmountOfProduct(0);

    alert("Product added successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Post New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Product Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-32 h-32 object-cover"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            value={ammountOfProduct}
            onChange={(e) => setAmmountOfProduct(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter product price"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Post Product
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8">Existing Products</h2>
      <div className="mt-4 space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-4 border rounded shadow flex items-center justify-between space-x-4"
          >
            <div>
              <img
                src={product.productImage}
                alt={product.nameOfProduct}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  {product.nameOfProduct}
                </h3>
                <p>${product.ammountOfProduct.toFixed(2)}</p>
              </div>
            </div>

            <div>
              <MdDelete onClick={handleDeleteProduct} className="text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostProduct;
