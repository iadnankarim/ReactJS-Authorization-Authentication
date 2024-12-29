import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const headers = {
      Authorization: `Bearer ${token}`, // Corrected this line
    };

    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", { headers })
      .then((res) => {
        setUserData(res.data);
        console.log("profile data", res.data);
      })
      .catch((err) => {
        console.log("you are not logi");
        console.log("err", err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-teal-300 to-green-400 flex items-center justify-center p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          {/* <button
            onClick={getProfileData}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
          >
            Get Profile Data
          </button> */}
          {/* <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
            onClick={handleLogout}
          >
            Logout
          </button> */}
        </div>

        {userData ? (
          <div className="space-y-4 text-center">
            <img
              className="rounded-full h-24 w-24 mx-auto border-2 border-teal-500"
              src={userData?.avatar || "https://via.placeholder.com/150"}
              alt="Profile"
            />
            <h2 className="text-xl font-bold text-gray-700">
              {userData?.name || "N/A"}
            </h2>
            <p className="text-gray-600">{userData?.email || "N/A"}</p>
            <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-md">
              {userData?.role || "N/A"}
            </span>
          </div>
        ) : (
          <p className="text-center text-gray-500">No Profile Data Available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
