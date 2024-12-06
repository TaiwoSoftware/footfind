import React, { useEffect, useState } from "react";

interface UserDetails {
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
      setUserDetails(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <hr className="mt-4 mb-4 border-2" />
      <h1 className="text-center text-black text-4xl font-bold font-customNunito">
        Registered Details
      </h1>
      {userDetails ? (
        <>
          <p className="text-base mt-2 font-bold font-customMonserrat">
            Username: {userDetails.fullName}
          </p>
          <p className="text-base mt-2 font-bold font-customMonserrat">
            Email: {userDetails.email}
          </p>
          <p className="text-base mt-2 font-bold font-customMonserrat">
            Phone number: {userDetails.phoneNumber}
          </p>
        </>
      ) : (
        <p className="text-base mt-2 font-bold font-customMonserrat text-gray-600">
          No registered details found.
        </p>
      )}
    </div>
  );
};
