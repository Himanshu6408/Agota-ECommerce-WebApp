import React from "react";
import logo1 from "../assets/brand-logo1.png";
import logo2 from "../assets/brand-logo2.png";
import logo3 from "../assets/brand-logo3.png";
import logo4 from "../assets/brand-logo4.png";
import logo5 from "../assets/brand-logo5.png";

function BrandLogo() {
      const brandLogos = [logo1, logo2, logo3, logo4, logo5];
  return (
    <>
      {/* Brand Logos */}
      <div className="h-fit w-[90vw] mx-auto flex justify-between mt-[6vw] mb-[5vw]">
        {brandLogos.map((logo, index) => (
          <div key={index} className="h-15">
            <img src={logo} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default BrandLogo;
