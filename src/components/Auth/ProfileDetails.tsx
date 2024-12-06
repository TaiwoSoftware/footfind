import React, { useEffect, useState } from "react";

interface UserDetails {
  id: string;
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

export const ProfileDetails: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    // Fetch user details from localStorage
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Assign a random ID if not already present
      if (!parsedData.id) {
        parsedData.id = generateRandomID();
        localStorage.setItem("formData", JSON.stringify(parsedData)); // Update storage
      }
      setUserDetails(parsedData);
    }
  }, []);

  // Function to generate a random ID
  const generateRandomID = (): string => {
    return `USER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  // Handle logout
  const handleLogout = () => {
    // Clear user details and purchased items from localStorage
    localStorage.removeItem("formData");
    localStorage.removeItem("purchasedItems");
    setUserDetails(null);
    alert("You have been logged out.");
    window.location.reload(); // Reload or navigate to a login page
  };

  return (
    <div>
      <hr className="mt-4 mb-4 border-2" />
      <h1 className="text-center text-black text-4xl font-bold font-customNunito">
        Registered Details
      </h1>
      {userDetails ? (
        <>
          <p className="text-base mt-2 font-bold font-customMonserrat">
            User ID: {userDetails.id}
          </p>
          <p className="text-base mt-2 font-bold font-customMonserrat">
            Username: {userDetails.fullName}
          </p>
          <p className="text-base mt-2 font-bold font-customMonserrat">
            Email: {userDetails.email}
          </p>
          <p className="text-base mt-2 font-bold font-customMonserrat">
            Phone number: {userDetails.phoneNumber}
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-base mt-2 font-bold font-customMonserrat text-gray-600">
          No registered details found.
        </p>
      )}
    </div>
  );
};
