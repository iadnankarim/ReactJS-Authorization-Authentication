import { useState, version } from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={"this is our home page"} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
