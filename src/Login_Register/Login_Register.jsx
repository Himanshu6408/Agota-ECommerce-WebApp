import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import AddToCart from "../AddToCart/AddToCart";
import Navbar from "../Navbar/Navbar";

function Login_Register() {
  return (
    <>
      {/* Navbar section */}
      <Navbar />
      {/* Page header */}
      <div className="mt-[15vw] flex flex-col items-center mb-10">
        <h1 className="text-5xl">My Account</h1>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <Link to="/">
            <p className="hover:text-gray-800 cursor-pointer mt-4 ml-2">Home</p>
          </Link>
          <span className="inline-block w-[1.3px] h-4 bg-gray-400 transform rotate-29 ml-2 mt-5"></span>
          <p className="text-black mt-4 ml-2">My Account</p>
        </div>
      </div>

      {/* Login & Register forms */}
      <div className="flex justify-center gap-12 mb-20  px-4">
        {/* Login Form */}
        <div className="w-96 bg-gray-100 p-6 rounded-md ">
          <h2 className="text-2xl font-semibold mb-4">Login Form</h2>
          <label className="text-sm text-gray-800">
            Username or email address*
          </label>
          <input
            type="text"
            className="w-full mt-2 p-2 border bg-white border-gray-300 rounded-md outline-none"
          />
          <label className="text-sm text-gray-800 mt-4 block">Password*</label>
          <input
            type="password"
            className="w-full mt-2 p-2 border border-gray-300 bg-white rounded-md outline-none"
          />
          <div className="flex items-center mt-4 gap-2">
            <input type="checkbox" className="w-4 h-4 accent-blue-500" />
            <span className="text-sm">Remember me</span>
          </div>
          <button className="w-full mt-6 bg-black text-white p-4 cursor-pointer  hover:bg-gray-800 transition">
            Log In
          </button>
          <p className="text-right text-sm mt-2 cursor-pointer">
            Lost your password?
          </p>
          <span className="w-[8vw] h-[1.3px] mb-4 ml-53 bg-gray-600 inline-block"></span>
        </div>

        {/* Register Form */}
        <div className="w-96 border-1 border-gray-300 p-6 rounded-md ">
          <h2 className="text-2xl font-semibold mb-4">Register Form</h2>
          <label className="text-sm text-gray-800">Email address*</label>
          <input
            type="email"
            className="w-full mt-2 p-2 border bg-white border-gray-300 rounded-md outline-none"
          />
          <p className="text-sm mt-4">
            A password will be sent to your email address.
          </p>
          <p className="text-sm mt-6 text-gray-600 leading-6">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="text-blue-600 hover:text-black cursor-pointer">
              privacy policy
            </span>
            .
          </p>
          <button className="w-full mt-6 bg-black p-4 cursor-pointer  text-white  hover:bg-gray-800 transition">
            Register
          </button>
        </div>
      </div>
      <AddToCart />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Login_Register;
