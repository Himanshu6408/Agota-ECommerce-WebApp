import React from "react";
import footer1 from "../assets/footer1.png";
import { Link } from "react-router-dom";

function Footer() {
  const information = [
    { name: "About us", path: "/about" },
    { name: "Customer Service" },
    { name: "Blog" },
    { name: "Page 404" },
    { name: "Sizing Guide" },
    { name: "FAQs" },
    { name: "Contact us", path: "/contact" },
  ];
  const Service = [
    "Shipping Policy",
    "Help & Contact Us",
    "Returns & Refunds",
    "Online Stores",
    "Payment Method",
    "Terms & Conditions",
    "Privacy Policy",
  ];
  const payment = [
    "Terms Of Use",
    "Payment Methods",
    "Shipping Guide",
    "Locations We Ship To",
    "Estimated Delivery Time",
    "Express",
  ];
  const footerimage = [footer1];
  return (
    <>
      <div className="h-[90vh] w-full bg-black flex gap-30 ps-20 py-30 overflow-x-hidden overflow-y-hidden relative">
        {/* footer upper section */}
        {/* information */}
        <div className="h-full w-[10vw]">
          <h2 className="text-white uppercase mb-12 text-md">information</h2>
          {information.map((item, index) => (
            <Link to={item.path}>
              <p
                key={index}
                className="text-[#999999] cursor-pointer hover:text-white transition-all duration-300 ease-in-out mt-5 text-sm"
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        {/* service */}
        <div className="h-full w-[10vw]">
          <h2 className="text-white uppercase mb-12 text-md">Our Service</h2>
          {Service.map((item) => (
            <p className="text-[#999999] cursor-pointer hover:text-white transition-all duration-300 ease-in-out mt-5 text-sm">
              {item}
            </p>
          ))}
        </div>
        {/* payment */}
        <div className="h-full w-[10vw] ">
          <h2 className="text-white uppercase mb-12 text-md whitespace-nowrap">
            Payment & Shipping
          </h2>
          {payment.map((item) => (
            <p className="text-[#999999] whitespace-nowrap cursor-pointer text-sm hover:text-white transition-all duration-300 ease-in-out mt-5">
              {item}
            </p>
          ))}
        </div>
        {/* Get Deals Of The Store */}
        <div className="h-full w-[37vw]">
          <h2 className="text-white uppercase mb-12 text-md whitespace-nowrap">
            Get Deals Of The Store
          </h2>
          <p className="text-[#999999] cursor-pointer leading-7 text-sm hover:text-white transition-all duration-300 ease-in-out mt-5">
            Subscribe to the Agota Store mailing list to receive updates on new
            arrivals, special offers
            <br /> and other discount information.
          </p>
          <input
            className="h-14 w-[27.5vw] outline-none border-1 border-[#999999] text-gray-400 px-6 text-sm mt-8"
            type="text"
            placeholder="Subscribe to our newsletter..."
          />
          <button className="border-1 border-white h-14 w-30 ml-2 text-white capitalize text-lg cursor-pointer hover:text-black  hover:bg-white transition-all duration-300 ease-in-out">
            send
          </button>
          <p className="text-[#999999] cursor-pointer hover:text-white transition-all duration-300 ease-in-out mt-7 text-sm">
            Email: admin@basictheme.com.
          </p>
          <p className="text-[#999999] cursor-pointer hover:text-white transition-all duration-300 ease-in-out mt-3 text-sm">
            Add: S9 Heaven Stress, Beverly Hill, Melbourne, USA.
          </p>
        </div>

        {/* footer bottom section */}
        <div className="h-30 w-full mx-auto right-0 left-[11.5vh] absolute top-[80vh] text-sm flex">
          <div className="h-10 right-23  absolute bottom-[24vh] border-b-1 border-b-gray-700 w-full"></div>
          <span className="text-[#999999]">Copyright © </span>
          <p className="text-white ml-2 cursor-pointer hover:text-blue-900">
            Agota – ThemePure
          </p>
          <span className="text-[#999999] ml-2">All Rights Reserved.</span>
          <span className="text-[#999999] border-r-1 h-6 ml-12"></span>
          <div className="flex">
            <ul className="text-[#999999] flex gap-7 text-sm ml-8 cursor-pointer">
              <li className="hover:text-white transition-all duration-300 ease-in-out">
                Site Map
              </li>
              <li className="hover:text-white transition-all duration-300 ease-in-out">
                Search Terms
              </li>
              <li className="hover:text-white transition-all duration-300 ease-in-out">
                Advanced Search
              </li>
              <li className="hover:text-white transition-all duration-300 ease-in-out">
                Contact us
              </li>
            </ul>
            {footerimage.map((item, index) => (
              <div className="ml-[16.5vw] cursor-pointer">
                <img key={index} src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
