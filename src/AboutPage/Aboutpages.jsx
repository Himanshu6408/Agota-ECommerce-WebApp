import React from "react";
import about_img from "../assets/img-about-1.jpg";
import about1 from "../assets/image1-about.jpg";
import about2 from "../assets/image2-about.jpg";
import about3 from "../assets/image3-about.jpg";
import about4 from "../assets/image4-about.jpg";
import about5 from "../assets/image5-about.jpg";
import banner_about from "../assets/banner-about-footer.jpg";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { RiShipFill } from "react-icons/ri";
import BrandLogo from "../Logos/BrandLogo";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from "../Footer/Footer";
import AddToCart from "../AddToCart/AddToCart";

function AboutPages() {
  const data = [
    { image: team1, name: "Eren Christopher", bio: "Founder or Agota Store" },
    { image: team2, name: "Mike Jefferson", bio: "PR Manager or Agota Store" },
    { image: team3, name: "Linda Sardeni", bio: "Designer or Agota Store" },
  ];
  return (
    <>
      <div className="overflow-x-hidden relative">
        <div
          style={{
            backgroundImage: `url(${about_img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[75vh] w-[100vw]"
        >
          {/* navbar section */}
          <Navbar />
          {/* links */}
          <div className="absolute top-55 left-[47%]">
            <h1 className="text-5xl text-white -ml-13">About Us</h1>
            <div className="flex items-center">
              <Link to={"/"}>
                <p className="text-[#999999] hover:text-gray-800 cursor-pointer mt-8 -ml-5">
                  Home
                </p>
              </Link>
              <span className="inline-block w-[1px] h-4 bg-gray-400 transform rotate-29 ml-3 mt-9"></span>
              <p className="mt-8 ml-3 text-white">About Us</p>
            </div>
          </div>
        </div>
        {/* about title */}
        <div className="h-fit w-[100vw] py-25 ps-25">
          <div className="h-20 w-[30vw] flex items-center justify-center gap-10">
            <span className="h-[1.5px] w-30 bg-black inline-block"></span>
            <h3 className="text-[#999999] text-lg">Our History</h3>
          </div>
          <p className="ml-[17.4vw] -mt-5 text-4xl">We Are A Lifestyle Brand</p>
          {/* about history description */}
          <div className="ml-26 mt-17 w-full text-md text-[#222222]">
            <p className="w-[69vw] leading-6">
              It is accompanied by a case that can contain up to three different
              diffusers and can be used for dry storage of loose tea. The
              perfect way to enjoy brewing tea on low hanging fruit to identify.
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, velillum dolore eu feugiat nulla
              facilisis.
            </p>
            <p className="w-[69vw] mt-10">
              The perfect way to enjoy brewing tea on low hanging fruit to
              identify. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis. For me, the most important part of
              improving at photography has been sharing it.
            </p>
            <p className="w-[69vw] mt-10">
              Sign up for an Exposure account, or post regularly to Tumblr, or
              both. Tell people you’re trying to get better at photography. Talk
              about it. When you talk about it, other people get excited about
              it. There are few plugins and apps available for this purpose,
              many of them required a monthly subscription or needed to expose
              the full store data to a third party.
            </p>
          </div>
        </div>

        {/* about images */}
        <div className="w-[92vw] mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {/* Left Column */}
            <div className="col-span-2 grid grid-rows-2 gap-4">
              {/* Top Large Image */}
              <div className="overflow-hidden">
                <img
                  className="w-full h-[70vh] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  src={about1}
                  alt="big"
                />
              </div>

              {/* Bottom Two Small Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden h-[40vh]">
                  <img
                    className="w-full h-[40vh] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    src={about2}
                    alt="small1"
                  />
                </div>
                <div className="overflow-hidden h-[40vh]">
                  <img
                    className="w-full h-[40vh] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    src={about3}
                    alt="small2"
                  />
                </div>
              </div>
            </div>
            {/* Right Column (stacked images with no gap) */}
            <div className="gap-0 overflow-hidden">
              <div className="flex-1 overflow-hidden">
                <img
                  className="w-full h-[55vh] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  src={about4}
                  alt="right-top"
                />
              </div>
              <div className=" overflow-hidden mt-4">
                <img
                  className="w-full h-[55vh] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  src={about5}
                  alt="right-bottom"
                />
              </div>
            </div>
          </div>
        </div>

        {/* about order section */}
        <div className="h-[90vh] w-full mt-[-8vw] relative text-white">
          <img
            className="h-full w-full object-cover"
            src={banner_about}
            alt=""
          />
          <div className="absolute top-[30%] left-[45%]">
            <RiShipFill size={"10vw"} />
            <h1 className="text-5xl ml-[-14vw] mt-5">
              All Orders Are Free Shipping
            </h1>
            <p className="ml-[-31vw] mt-5 w-[75vw] text-center">
              Donec vehicula cursus vestibulum lectus, sit eros integer varius
              cum turpis et quam congue accumsan ac bibendum ac in erat. Donec
              posuere consectetuer volutpat rutrum ac sollicitudin quam quisque
              at interdum dignissim fringilla elit risus lorem condimentum eros
              mollis
            </p>
          </div>
        </div>
        {/* about team member */}
        <div className="h-fit w-full  py-25 ps-25">
          <div className="h-20 w-[30vw] flex items-center justify-center gap-10">
            <span className="h-[1.5px] w-30 bg-black inline-block"></span>
            <h3 className="text-[#999999] text-lg">Our Team</h3>
          </div>
          <h2 className="ml-[17.8vw] -mt-5 text-4xl">
            We Are A Lifestyle Brand
          </h2>
          <p className="ml-[18vw] mt-3 text-sm text-[#222222]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="h-[60vh] w-full mt-[7vw] flex items-center justify-center">
            {/* using map function */}
            {data.map((items, index) => (
              <div key={index} className="h-full w-[22vw] overflow-hidden">
                <div className="h-[37vh] w-[18vw] mx-auto rounded-full bg-amber-200">
                  <img src={items.image} alt="" />
                </div>
                <h4 className="text-lg text-center mt-10">{items.name}</h4>
                <p className="text-md text-center mt-2 text-[#999999]">
                  {items.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* team description */}
        <div className="h-[90vh] w-full bg-[#96535a] mt-[-4vw] relative">
          <div className="absolute left-[50%] top-[27%]">
            <FaQuoteLeft color="white" size={"2vw"} />
            <p className="text-center w-[76vw] ml-[-35vw] mt-10 text-white">
              {" "}
              The sun dipped below the horizon, painting the sky in shades of
              orange and violet. A cool breeze rustled the leaves, carrying with
              it the scent of fresh rain. She opened her notebook, determined to
              capture the fleeting moment in words. Across the street, a café
              buzzed with quiet conversations and the clinking of cups. The cat
              stretched lazily on the window sill, basking in the fading warmth.
              Somewhere in the distance, a train’s whistle echoed through the
              valley. He smiled at the thought of tomorrow’s journey, uncertain
              but full of promise.{" "}
            </p>
            <img className="ml-[-1.2vw] mt-15" src={user} alt="" />
            <h3 className="ml-[-2.8vw] mt-4 text-white capitalize text-lg">
              eren christopher
            </h3>
            <p className="ml-[-3.8vw] text-[#e7b6bb] capitalize">
              founder or agota store
            </p>
          </div>
        </div>
        {/* brand logo */}
        <BrandLogo />
        {/* add to cart */}
        <AddToCart />
        {/*footer section */}
        <Footer />
      </div>
    </>
  );
}

export default AboutPages;
