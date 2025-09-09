import React from "react";
import product_left_img from "../assets/product-offer-left-img.jpg";
import product_right_img from "../assets/product-offer-right-img.jpg";

function Element() {
  const data = [
    {
      image: product_left_img,
      title: "Ends Today",
      heading: "Elements Of Style",
      description: "USB Powered LED Lights – Use it Anywhere!",
      button: "Explore Items",
    },
    {
      image: product_right_img,
      title: "Your Space",
      heading: "Unique Life",
      description: "Big Sale September 8th To October 6t",
      button: "Explore Items",
    },
  ];
  return (
    <>
      <div className="h-fit w-[90vw] mx-auto mt-20 flex gap-10">
        {/* element card */}
        {data.map((items, index) => (
          <div key={index} className="h-[60vh] w-[43.7vw]">
            <div className="h-full relative overflow-hidden group">
              <img
                className="h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={items.image}
                alt=""
              />
              <div className="absolute left-0 top-0 text-white p-30">
                <p className="text-amber-300">{items.title}</p>
                <h3 className="mt-2 text-4xl">{items.heading}</h3>
                <h4 className="mt-10">{items.description}</h4>
                <button className="mt-18 ps-1 cursor-pointer relative group">
                  {items.button}
                  <span className="absolute left-1 -bottom-1 w-5.5 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Element;
