import React, { useEffect, useState } from "react";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";
import text_bg from "../assets/text-bg-home.png";

function Decoration() {
  return (
    <>
      <div className="h-fit w-[94vw] bg-white mx-auto flex gap-10 py-8 ps-9 transition-all duration-400  ">
        {/* Featured Lifestyle */}
        <div className="h-[70vh] w-[28vw] relative overflow-hidden group">
          {/* Image */}
          <img
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            src={feature1}
            alt="Featured"
          />

          {/* Text on Image */}
          <div className="absolute inset-0 text-white group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-md text-amber-300 py-8 ps-10">Decoration</p>
            <h2 className="text-3xl -mt-[1.1vw] ps-10">Featured Lifestyle</h2>
            <p className="mt-10 ps-10">On Pre – Sep 6th Free shipping</p>
            <button className="mt-10 ps-10 cursor-pointer group relative">
              Explore Items
              <span className="absolute left-10.5 -bottom-1 w-5.5 h-[2px] bg-white transition-all duration-300 group-hover:w-23.5"></span>
            </button>
          </div>
        </div>

        {/* Sale Off Everything */}
        <div className="h-[70vh] w-[28vw] relative overflow-hidden">
          {/* image */}
          <img className="h-full w-full object-cover" src={feature2} alt="" />
          {/* Text on Image */}
          <div className="absolute inset-0 text-black text-center ">
            <p className="mt-15 text-red-600">Furniture</p>
            <h2 className="mt-2 text-4xl">Sale Off Everything</h2>
            <p className="text-md mt-8">Limited Time: Online Only!</p>
            <img className="mx-auto mt-10" src={text_bg} alt="" />
            <button className="h-15 w-55  cursor-pointer capitalize bg-white mx-auto mt-13 border-1 hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
              explore
            </button>
          </div>
        </div>
        {/*  Trending Lighting */}
        <div className="h-[70vh] w-[28vw] relative overflow-hidden group">
          {/* image */}
          <img
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            src={feature3}
            alt=""
          />
          {/* Text on Image */}
          <div className="absolute inset-0 text-white group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-md text-amber-300 py-8 ps-10">Lighting</p>
            <h2 className="text-3xl -mt-[1.1vw] ps-10">Trending Lighting</h2>
            <p className="mt-10 ps-10">
              Free delivery + Assembly on most items
            </p>
            <button className="mt-10 ps-10 cursor-pointer group relative">
              Explore Items
              <span className="absolute left-10.5 -bottom-1 w-5.5 h-[2px] bg-white transition-all duration-300 group-hover:w-23.5"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Decoration;
