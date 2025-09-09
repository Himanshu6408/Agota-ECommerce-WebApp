import React, { useContext } from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Homepic from "../assets/homepic.jpg";
import Decoration from "../Decoration/Decoration";
import Product from "../Product/Product";
import Element from "../Element/Element";
import Sales from "../Sales/Sales";
import Logo from "../Logos/Logo";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BrandLogo from "../Logos/BrandLogo";
import AddToCart from "../AddToCart/AddToCart";
import Search from "../Search/Search";
function Home() {

  return (
    <>
      <div className="overflow-x-hidden relative ">
        <div
          style={{
            backgroundImage: `url(${Homepic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="h-screen w-[100vw]"
        >
          {/* navbar section */}
          <Navbar />
          {/* search section */}
          <Search />
          {/* bottom section */}
          <div className="h-[80vh] w-[50vw] ml-10 mt-10">
            <div>
              <span className="flex items-center justify-center gap-7 text-amber-300 text-lg py-15 pr-40">
                <TfiLayoutLineSolid size={"2vw"} /> <p>Featured Product</p>
              </span>
              <h1 className="text-white text-[11vw] -mt-[4vw] text-center ml-[12vw]">
                Outset
              </h1>
              <p className="text-white w-[35vw] ml-[16vw] capitalize -mt-[1vw]">
                form is designed by agota store and is part of the form series.
                it is an armless modern chair with great back support
              </p>
              <button className="h-15 w-45  cursor-pointer capitalize bg-white ml-[16vw] mt-22 hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
                explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddToCart />
      <Decoration />
      <Product />
      <Element />
      <Sales />
      <BrandLogo />
      <Logo />
      <Footer />
    </>
  );
}

export default Home;
