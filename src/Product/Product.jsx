import React, { useContext } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import Button from "../Button/Button";
import { DataContext } from "../Context/Context";
import { productData } from "../Context js/ProductData";

function Product({ showbtn = true }) {
  const { addtocart, handleopencart } = useContext(DataContext);

  return (
    <div className="h-fit w-[90vw] mx-auto text-black">
      {/* Heading */}
      <h3 className="mt-16 text-center text-[2.5vw] font-semibold">
        Bestsellers Products
      </h3>
      <p className="text-sm text-center mt-3 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore.
      </p>

      {/* Product Section */}
      <div className="flex mt-12 flex-wrap items-center justify-between">
        {/* product card section */}
        {productData.map((item, index) => (
          <div
            key={index}
            className="h-[75vh] w-[28vw] mb-15 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <div className="relative overflow-hidden cursor-pointer group h-[60vh]">
              {index === 0 || index === 4 ? (
                <span className="absolute left-0 top-0 h-15 w-15 rounded-full bg-red-500 z-50 mt-5 ml-5 ">
                  <p className="text-center my-auto mt-4 text-white">SALE</p>
                </span>
              ) : null}
              {/* First image */}
              <img
                src={item.frontimage}
                alt="Product"
                className="w-full h-full object-cover"
              />

              {/* Second image (hover) */}
              <img
                src={item.hoverimage}
                alt="Product Hover"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Hover icons */}
              <div className="absolute left-5 bottom-10 inset-0 flex items-end justify-center gap-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="relative inline-block">
                  <FaBagShopping
                    onClick={() => {
                      addtocart(item);
                      handleopencart();
                    }}
                    size={40}
                    className="bg-black text-white p-2 rounded-full shadow hover:bg-blue-400 peer"
                  />
                  <span
                    className="w-25 text-center opacity-0 peer-hover:opacity-100 rounded-md h-6 bg-gray-700 text-white absolute mt-2 ml-[-2vw]
                   whitespace-nowrap"
                  >
                    Add To Cart
                  </span>
                </div>

                <MdOutlineRemoveRedEye
                  size={40}
                  className="bg-black text-white p-2 rounded-full shadow hover:bg-blue-400"
                />

                <CiHeart
                  size={40}
                  className="bg-black text-white p-2 rounded-full shadow hover:bg-blue-400"
                />
              </div>
            </div>
            <div className="ps-8 mt-4">
              <p>{item.name}</p>
              <p className="text-black font-bold mt-2"></p>
              <p>
                {item.price}
                <span className="text-gray-400 line-through ml-3">
                  {" "}
                  {item.oldPrice}
                </span>
              </p>
            </div>
          </div>
        ))}
        {showbtn && <Button />}
      </div>
    </div>
  );
}

export default Product;
