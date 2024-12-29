import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        alert("hey");
        // localStorage.setItem("token", JSON.stringify(res.data.access_token));
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        navigate("/profile");
        console.log("login SuccessFull", res);
      })
      .catch((err) => {
        console.log("Error Login", err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-sky-300 to-blue-400 flex items-center justify-center p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">Login</h1>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
