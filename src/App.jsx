import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import ShopPages from "./ShopPages/ShopPages";
import AboutPages from "./AboutPage/Aboutpages";
import Login_Register from "./Login_Register/Login_Register";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/login_register" element={<Login_Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
