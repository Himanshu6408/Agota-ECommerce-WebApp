import React, { useContext, useEffect, useState } from "react";
import homebrand_white from "../assets/colorkit.svg";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/Context";

function Navbar() {
  const { handleopencart, handleopensearch } = useContext(DataContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* navbar section */}
      <div
        className={`h-25  w-full hover:bg-white group  hover:text-black flex items-center transition-all duration-400 ease-in ${
          scrolled
            ? "bg-white fixed top-0 z-999 border-b-1 border-gray-200 "
            : "text-white"
        }`}
      >
        {/* logo image section */}
        <div className="flex items-center justify-center ml-[18vw]">
          <Link to="/" className="relative h-7 w-auto">
            {/* White logo (default) */}
            <img
              src={homebrand_white}
              alt="White Logo"
              className={`block h-7 w-auto transition-opacity duration-300 group-hover:invert hover:invert ${
                scrolled ? "invert " : null
              }`}
            />
          </Link>

          {/* navbar section */}
          <div>
            <nav className="flex gap-10 list-none ml-[10vw] cursor-pointer">
              <Link to="/">
                <li className="">Home</li>
              </Link>
              <Link to="/shop">
                <li>Shop</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <li>Blog</li>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <li>Pages</li>
            </nav>
          </div>

          {/* menu section */}
          <div className="flex items-center justify-center ml-[10vw] gap-8">
            <Link to={"/login_register"}>
              <h3 className="cursor-pointer">Login / register</h3>
            </Link>
            <IoSearch
              onClick={handleopensearch}
              className="cursor-pointer"
              size={"1.5vw"}
            />
            <CiHeart className="cursor-pointer" t size={"1.5vw"} />
            <FaBagShopping
              onClick={handleopencart}
              className="cursor-pointer"
              size={"1.5vw"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
