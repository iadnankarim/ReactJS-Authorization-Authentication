import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    navigate("/");
  };

  return (
    <div className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        <div className="text-lg font-semibold text-white">
          <Link to="/">MyApp</Link>
        </div>
        <div className="flex-grow flex justify-center space-x-24">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-yellow-300 transition duration-200"
          >
            Profile
          </Link>
          {token ? (
            <p
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md cursor-pointer transition duration-200"
            >
              Logout
            </p>
          ) : (
            <Link
              to="/login"
              className="text-white hover:text-yellow-300 transition duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
