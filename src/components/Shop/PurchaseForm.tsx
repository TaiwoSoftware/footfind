import React, { useState } from "react";

interface PurchaseFormProps {
  onSubmit: () => void;
}

export const PurchaseForm: React.FC<PurchaseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "creditCard", // Default to credit card
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [showModal, setShowModal] = useState(false); // To show the modal
  const [showPurchasedMark, setShowPurchasedMark] = useState(false); // To show the purchase mark after a delay

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowModal(true);

    // Simulate server-side processing with a 20-second delay
    setTimeout(() => {
      setIsLoading(false);
      setShowPurchasedMark(true); // Show the purchased mark after 20 seconds

      // Show purchased mark after an additional 5 seconds delay
      setTimeout(() => {
        setIsPurchased(true);
      }, 5000); // 5-second delay before showing "Purchase Complete!"

      onSubmit(); // Notify parent of purchase completion
    }, 20000); // 20-second delay for loading
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            {isLoading ? (
              <div>
                <p>Processing your order...</p>
                <div className="mt-4 animate-spin text-2xl">🔄</div>
              </div>
            ) : showPurchasedMark ? (
              <p className="text-green-500 text-2xl font-bold">
                ✔ Purchase Complete!
              </p>
            ) : (
              <p>Finalizing your purchase...</p>
            )}
          </div>
        </div>
      )}

      {!isPurchased && !showModal && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 shadow-md rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Fill Out Your Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Payment Method - Only Credit Card allowed */}
          <div className="mb-4">
            <label className="block text-gray-700">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              disabled
              required
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="creditCard">Credit Card (Only option)</option>
            </select>
          </div>

          {/* Card Details - Only if Credit Card is selected */}
          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              placeholder="1234 5678 9876 5432"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                placeholder="MM/YY"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                placeholder="123"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? "Processing..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};
