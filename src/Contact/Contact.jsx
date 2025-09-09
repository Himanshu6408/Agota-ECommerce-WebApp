import React from "react";
import contact_pic from "../assets/img-contact.jpg";
import map_img from "../assets/map_img.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <div
          style={{
            backgroundImage: `url(${contact_pic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[75vh] w-full relative"
        >
          <Navbar />
          {/* links */}
          <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-5xl text-white">Contact Us</h1>
            <div className="flex items-center justify-center gap-3 mt-3">
              <Link to={"/"}>
                <p className="text-[#999999] hover:text-gray-800 cursor-pointer">
                  Home
                </p>
              </Link>
              <span className="w-px h-4 bg-gray-400"></span>
              <p className="text-white capitalize">contact us</p>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="h-[90vh] w-full mt-[15vw]">
          <img className="h-full w-full object-cover" src={map_img} alt="map" />
        </div>
        {/* Form Section */}

        <div className="h-[45vw] w-[93vw] absolute top-[35.9vw] left-[3.3vw] flex bg-white">
          {/* left section */}
          <div className="h-[60vh] w-[47vw] py-30 ps-28 ">
            <h2 className="text-gray-500 text-lg">Contact us</h2>
            <p className="text-4xl w-[28vw] mt-1">
              Please contact us quickly if you need help.
            </p>
            {/* new york */}
            <h3 className="text-[#006699] mt-10 text-lg">NewYork</h3>
            <p className="text-[#222222] text-md w-[26vw] leading-7">
              Add: S9 Heaven Stress, Beverly Hill, Melbourne, USA. Open: 9:30 am
              – 9:00 pm
            </p>
            {/* london */}
            <h3 className="text-[#006699] mt-10 text-lg">London</h3>
            <p className="text-[#222222] text-md w-[26vw] leading-7">
              Add: S9 Heaven Stress, Beverly Hill, Melbourne, USA. Open: 9:30 am
              – 9:00 pm
            </p>
            {/* contact */}
            <h3 className="text-[#006699] mt-10 text-lg">Contact</h3>
            <p className="text-[#222222] text-md w-[26vw] leading-7">
              Email: admin@basictheme.com
            </p>
            <h3 className="text-md">Phone: (+100) 123 456 789</h3>
          </div>
          {/* right section */}
          <div className="h-[60vw] w-[47vw] py-30 ps-28 absolute left-[39vw]">
            <h2 className="text-gray-500 text-lg">Write to us</h2>
            <input
              className="border-1 outline-none mt-3 border-gray-300 py-4 px-7 w-[40vw] "
              type="text"
              placeholder="Name*"
            />
            <input
              className="border-1 outline-none mt-8 border-gray-300 py-4 px-7 w-[40vw] "
              type="text"
              placeholder="Email*"
            />
            <textarea
              rows={6}
              cols={74}
              className="py-4 px-7 border-1 outline-none border-gray-300 mt-8 "
              placeholder="Comments"
            ></textarea>
            <button className="w-[40.3vw] mt-7 bg-black p-4 cursor-pointer text-white hover:bg-gray-800 transition">
              Send
            </button>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Contact;
