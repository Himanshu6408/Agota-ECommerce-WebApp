import React from "react";
import banner_pic1 from "../assets/banner-shop-1.jpg";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AddToCart from "../AddToCart/AddToCart";

function ShopPages() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div
          style={{
            backgroundImage: `url(${banner_pic1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[65vh] w-[100vw]"
        >
          {/* navbar section */}
          <Navbar />
          {/* links */}
          <div className="absolute top-50 left-[47%]">
            <h1 className="text-5xl text-white">Shop</h1>
            <div className="flex items-center">
              <Link to={"/"}>
                <p className="text-[#999999] mt-3 hover:text-gray-800 cursor-pointer">
                  Home
                </p>
              </Link>
              <span className="inline-block w-[1px] h-4 bg-gray-400 transform rotate-29 ml-3 mt-4"></span>
              <p className="mt-3 ml-3 text-white">Shop</p>
            </div>
          </div>
        </div>
        <Product showbtn = {false} />
        <AddToCart/>
        <Footer />
      </div>
    </>
  );
}

export default ShopPages;
